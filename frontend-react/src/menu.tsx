import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';
import {menuFallback, TopBar, PageNav, Footer, fmt, API} from './shared';

type Dish = {id: number; name: string; desc: string; rate: string; price: number; cat: string; outlet: string};
type Line = {dish: Dish; qty: number};

const CAT_ORDER = ['Breakfast', 'Lunch', 'Dinner', 'Snacks, sodas and juices', 'Desserts'];

function MenuPage() {
 const [groups, setGroups] = React.useState<Dish[][]>([]);
 const [live, setLive] = React.useState(false);
 const [tray, setTray] = React.useState<Line[]>([]);
 const [name, setName] = React.useState('');
 const [phone, setPhone] = React.useState('');
 const [msg, setMsg] = React.useState<{ok: boolean; text: string} | null>(null);
 const [busy, setBusy] = React.useState(false);

 React.useEffect(() => {
  fetch(API + '?act=menu').then(r => r.json()).then(d => {
   if (d.ok && Array.isArray(d.categories)) {
    const g: Dish[][] = [];
    d.categories.forEach((c: {outlet: string; name: string; items: Array<{id: number; name: string; desc: string; price: number}>}) => {
     g.push(c.items.map(it => ({id: it.id, name: it.name, desc: it.desc || '', rate: fmt(it.price), price: it.price, cat: c.name, outlet: c.outlet})));
    });
    if (g.length) { setGroups(g); setLive(true); }
   }
  }).catch(() => {});
 }, []);

 const dishes = (groups.length ? groups : [menuFallback.filter(x => x.cat === CAT_ORDER[0]), menuFallback.filter(x => x.cat === CAT_ORDER[1]), menuFallback.filter(x => x.cat === CAT_ORDER[2]), menuFallback.filter(x => x.cat === CAT_ORDER[3]), menuFallback.filter(x => x.cat === CAT_ORDER[4])]);

 const add = (dish: Dish) => setTray(t => {
  const ex = t.find(x => x.dish.id === dish.id);
  return ex ? t.map(x => x.dish.id === dish.id ? {...x, qty: x.qty + 1} : x) : [...t, {dish, qty: 1}];
 });
 const bump = (id: number, d: number) => setTray(t => t.map(x => x.dish.id === id ? {...x, qty: Math.max(0, x.qty + d)} : x).filter(x => x.qty > 0));
 const drop = (id: number) => setTray(t => t.filter(x => x.dish.id !== id));
 const subtotal = tray.reduce((s, x) => s + x.qty * x.dish.price, 0);

 const send = async () => {
  if (!tray.length) { setMsg({ok: false, text: 'Add at least one dish to your order first.'}); return; }
  if (!name.trim() || !phone.trim()) { setMsg({ok: false, text: 'Please add your name and phone number so we can confirm your order.'}); return; }
  setBusy(true); setMsg(null);
  try {
   const res = await fetch(API + '?act=order', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
    name: name.trim(), phone: phone.trim(), items: tray.map(x => ({id: x.dish.id, qty: x.qty}))
   })});
   const d = await res.json();
   if (d.ok) {
    setMsg({ok: true, text: 'Your order ' + d.order_number + ' is with the kitchen. ' + d.message});
    setTray([]); setName(''); setPhone('');
   } else {
    setMsg({ok: false, text: d.error || 'Something went wrong. Please call +256 759 504 928.'});
   }
  } catch {
   setMsg({ok: false, text: 'Could not reach the kitchen. Please call +256 759 504 928.'});
  }
  setBusy(false);
 };

 return <div>
  <TopBar/>
  <PageNav/>

  <section className="pageHero">
   <p className="eyebrow">DINING AND BAR</p>
   <h1>Our menu, your order.</h1>
   <p>Browse every dish in its own category, add what you fancy to your order and freely drop or change anything before you send it to the kitchen. Prices include taxes.</p>
  </section>

  <section className="menuPage section">
   <div className="menuList">
    {!live && <div className="menuMeta">Today menu, freshly prepared on the premises.</div>}
    {dishes.map((list, gi) => (
     <div className="catGroup" key={list[0]?.cat || 'g' + gi}>
      <h2>{list[0]?.cat || 'Specialties'}</h2>
      <p className="catOut">{list[0]?.outlet || ''}</p>
      {list.map(dish => (
       <div className="dishRow" key={dish.id}>
        <div className="dishInfo"><h3>{dish.name}</h3>{dish.desc && <p>{dish.desc}</p>}<b>{dish.rate}</b></div>
        <button className="addBtn" onClick={() => add(dish)}>Add</button>
       </div>
      ))}
     </div>
    ))}
    <p className="orderNote">Meals are served from the same kitchen for our guests and walk in visitors. Lunch is served until 3 pm and dinner until 11 pm. For orders into your room, mention your room number when we call to confirm.</p>
   </div>

   <div className="tray" id="tray">
    <h2>Your order</h2>
    {tray.length === 0 ? (
     <div className="trayEmpty"><p>Your order is empty. Add a dish from the menu and it will appear here. You can drop or change anything freely before you send.</p></div>
    ) : (
     <div className="trayList">
      {tray.map(x => (
       <div className="trayItem" key={x.dish.id}>
        <div className="trayInfo"><b>{x.dish.name}</b><span>{x.dish.rate}</span></div>
        <div className="trayQty"><button onClick={() => bump(x.dish.id, -1)}>−</button><em>{x.qty}</em><button onClick={() => bump(x.dish.id, 1)}>+</button></div>
        <span className="lineTotal">{fmt(x.qty * x.dish.price)}</span>
        <button className="dropBtn" onClick={() => drop(x.dish.id)} title="Drop this dish">Drop</button>
       </div>
      ))}
      <div className="trayTotal"><span>Total</span><b>{fmt(subtotal)}</b></div>
     </div>
    )}

    <div className="trayForm">
     <div className="planField"><label>Your name</label><input value={name} onChange={e => setName(e.target.value)} placeholder="Full name"/></div>
     <div className="planField"><label>Phone</label><input value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="e.g. 0759504928"/></div>
     <button className="btn planBook" onClick={send} disabled={busy || tray.length === 0}>{busy ? 'Sending...' : 'Send my order'}</button>
     {tray.length > 0 && <button className="linkBtn" onClick={() => setTray([])}>Drop everything and start again</button>}
    </div>

    {msg && <div className={msg.ok ? 'bookMsg ok' : 'bookMsg'}>{msg.text}</div>}
    <p className="plannerNote">You are in full control. Change quantities or drop any dish before you send your order. No payment is taken here.</p>
   </div>
  </section>

  <Footer/>
 </div>;
}

createRoot(document.getElementById('root')!).render(<MenuPage/>);