import React from 'react';

export const API = '/hotelparadiseonthenile/backend-php/api.php';
export const LOGO = './logo-256.png';

export const fmt = (n: number): string => 'UGX ' + Math.round(n).toLocaleString();

export type Room = {
 id: number;
 type: string;
 rate: string;
 price: number;
 guests: string;
 beds: string;
 pillow: string;
 text: string;
 featured?: boolean;
};

export const rooms: Room[] = [
 {id: 1, type: 'Suite', rate: 'UGX 248,000', price: 248000, guests: 'Up to 2 guests', beds: 'One king sized bed', pillow: 'The grand retreat', text: 'Our most spacious room, generous in space and comfort, with premium furnishings, a king sized bed and a calm, elegant atmosphere.', featured: true},
 {id: 2, type: 'Family Room', rate: 'UGX 314,000', price: 314000, guests: 'Up to 4 guests', beds: 'One double bed and two single beds', pillow: 'Made for families', text: 'Roomier than most, with a double bed and two single beds, made for families travelling together with comfort in mind.', featured: true},
 {id: 3, type: 'Triple Room', rate: 'UGX 213,000', price: 213000, guests: 'Up to 3 guests', beds: 'Three single beds', pillow: 'For three guests', text: 'A comfortable setting with three single beds, ideal for friends or a small group staying together.'},
 {id: 4, type: 'Executive Deluxe', rate: 'UGX 202,000', price: 202000, guests: 'Up to 2 guests', beds: 'One king sized bed', pillow: 'Business ready', text: 'An elevated stay with refined touches and a king sized bed, well suited to business and leisure travellers alike.'},
 {id: 5, type: 'Deluxe Double', rate: 'UGX 178,000', price: 178000, guests: 'Up to 2 guests', beds: 'One double bed', pillow: 'The popular choice', text: 'Elegant double accommodation with a restful, warm and private atmosphere and a comfortable double bed.'},
 {id: 6, type: 'Standard Twin', rate: 'UGX 142,000', price: 142000, guests: 'Up to 2 guests', beds: 'Two single beds', pillow: 'Two beds', text: 'A neatly kept room with two comfortable single beds for a peaceful night of rest.'},
 {id: 7, type: 'Standard Single', rate: 'On request', price: 0, guests: '1 guest', beds: 'One single bed', pillow: 'Great value', text: 'A simple, well equipped single room with a comfortable single bed. Contact the hotel for today rate.'}
];

export type Dish = {
 id: number;
 cat: string;
 outlet: string;
 name: string;
 desc: string;
 rate: string;
 price: number;
};

const D = (id: number, cat: string, outlet: string, name: string, desc: string, price: number): Dish => ({id, cat, outlet, name, desc, rate: fmt(price), price});

export const menuFallback: Dish[] = [
 D(1, 'Breakfast', 'Restaurant', 'Continental Breakfast', 'Fresh juice, seasonal fruit, breads and preserves with tea or coffee.', 25000),
 D(2, 'Breakfast', 'Restaurant', 'Full English Breakfast', 'Eggs of your choice, sausage, bacon, beans, grilled tomato and toast.', 35000),
 D(3, 'Breakfast', 'Restaurant', 'Fresh Fruit Platter', 'A generous seasonal fruit platter from the garden.', 15000),
 D(4, 'Breakfast', 'Restaurant', 'Omelette du Jour', 'A fluffy three egg omelette with the filling of the day.', 12000),
 D(5, 'Breakfast', 'Restaurant', 'Pancakes with Honey', 'Soft pancakes drizzled with local honey.', 14000),
 D(6, 'Breakfast', 'Restaurant', 'Nile Grill Breakfast', 'A hearty grilled breakfast with Nile specials.', 40000),
 D(7, 'Lunch', 'Restaurant', 'Beef Stew with Rice', 'Slow cooked beef in a rich sauce with steamed rice.', 20000),
 D(8, 'Lunch', 'Restaurant', 'Grilled Chicken', 'Tender grilled chicken with chips and a fresh salad.', 28000),
 D(9, 'Lunch', 'Restaurant', 'Fish and Chips', 'Golden fried fish in a light batter with chips and tartare.', 30000),
 D(10, 'Lunch', 'Restaurant', 'Roast Lamb Chops', 'Herb roasted lamb chops with seasonal vegetables.', 45000),
 D(11, 'Lunch', 'Restaurant', 'Vegetable Curry', 'A mild, fragrant vegetable curry with rice.', 18000),
 D(12, 'Dinner', 'Restaurant', 'Nile Perch Fillet', 'Pan seared Nile perch fillet with lemon butter and sides.', 35000),
 D(13, 'Dinner', 'Restaurant', 'Beef Fillet with Mashed Potatoes', 'Prime beef fillet served with creamy mash and jus.', 40000),
 D(14, 'Dinner', 'Restaurant', 'Chicken Biryani', 'Aromatic spiced rice with tender chicken and raita.', 25000),
 D(15, 'Dinner', 'Restaurant', 'Grilled Nile Tilapia', 'Whole grilled tilapia with greens and a tangy sauce.', 32000),
 D(16, 'Dinner', 'Restaurant', 'Vegetarian Pasta', 'Garden vegetables tossed with pasta and a light tomato sauce.', 22000),
 D(17, 'Snacks, sodas and juices', 'Bar', 'Chapati', 'Soft, hand rolled chapati served warm.', 4000),
 D(18, 'Snacks, sodas and juices', 'Bar', 'Samosas', 'Three crispy samosas with a chutney dip.', 5000),
 D(19, 'Snacks, sodas and juices', 'Bar', 'Fresh Juice', 'A tall glass of freshly squeezed fruit juice.', 8000),
 D(20, 'Snacks, sodas and juices', 'Bar', 'Mineral Water', 'Still or sparkling, chilled.', 3000),
 D(21, 'Snacks, sodas and juices', 'Bar', 'Soft Drinks', 'Chilled sodas from the fridge.', 5000),
 D(22, 'Snacks, sodas and juices', 'Bar', 'Coffee and Tea', 'Freshly brewed by the cup.', 6000),
 D(23, 'Desserts', 'Restaurant', 'Fruit Salad', 'A cool bowl of seasonal fruit.', 12000),
 D(24, 'Desserts', 'Restaurant', 'Cheesecake', 'A smooth slice of cheesecake with berry topping.', 15000)
];

export const palettes = (i: number): string =>
 ['linear-gradient(150deg,#16293f,#0B5D78)', 'linear-gradient(150deg,#c9a22766,#0d2338)', 'linear-gradient(150deg,#071A33,#3d7d96)', 'linear-gradient(150deg,#16324a,#0f4c66)', 'linear-gradient(150deg,#c9a22755,#1E3A5F)', 'linear-gradient(150deg,#0d2338,#0B5D78)', 'linear-gradient(150deg,#0f4c66,#16293f)'][i % 7];

export function BedGlyph({size = 120}: {size?: number}) {
 return (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
   <rect x="10" y="48" width="80" height="22" rx="4" stroke="currentColor" strokeWidth="3.2"/>
   <rect x="17" y="38" width="66" height="13" rx="3.5" stroke="currentColor" strokeWidth="3.2"/>
   <rect x="15" y="27" width="58" height="10" rx="3.5" stroke="currentColor" strokeWidth="3.2"/>
   <line x1="23" y1="70" x2="23" y2="84" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round"/>
   <line x1="77" y1="70" x2="77" y2="84" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round"/>
   <rect x="11" y="8" width="8" height="40" rx="3" stroke="currentColor" strokeWidth="3"/>
   <rect x="81" y="8" width="8" height="40" rx="3" stroke="currentColor" strokeWidth="3"/>
   <path d="M15 20 q20 -6 70 0" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
   <rect x="52" y="50" width="11" height="7" rx="2" stroke="currentColor" strokeWidth="2.4"/>
  </svg>
 );
}

export function Brand({light = false}: {light?: boolean}) {
 return (
  <a className={light ? 'brandL light' : 'brandL'} href="./index.html">
   <img className="brandLogo" src={LOGO} alt="Hotel Paradise on the Nile logo"/>
   <span className="brandWord"><span>PARADISE</span><small>ON THE NILE</small></span>
  </a>
 );
}

export function TopBar() {
 return (
  <div className="topbar">
   <span>HOTEL PARADISE ON THE NILE, 19 KIIRA RD, JINJA, UGANDA</span>
   <span className="right">+256 759 504 928</span>
  </div>
 );
}

export const NAV = [['./index.html', 'Home'], ['./rooms.html', 'Rooms and beds'], ['./menu.html', 'Menu and dining'], ['./index.html#facilities', 'Facilities'], ['./index.html#contact', 'Contact']] as const;

export function Footer() {
 return (
  <footer>
   <div className="flag"><i></i><i></i><i></i></div>
   <div className="footerMain">
    <div>
     <Brand/>
     <p>Premium hospitality in Jinja, on the banks of the Nile.</p>
    </div>
    <div><h4>HOTEL</h4><p>19 Kiira Road, Jinja</p><p>Rooms, dining, bar and events</p><p>P.O. Box 1139, Jinja, Uganda</p></div>
    <div><h4>STAY</h4><p>Check in from 12 noon</p><p>Check out by 10 am</p><p>Breakfast included</p></div>
    <div><h4>CONTACT</h4><p>+256 759 504 928</p><p>hotel@hotelparadiseonthenile.info</p><p>Front desk open 24 hours</p></div>
   </div>
   <div className="footerCredit"><span>Hotel Paradise on the Nile Ltd, Jinja, Uganda</span><span>Designed by Reagansoft Innovation Limited</span></div>
  </footer>
 );
}

export function PageNav({onDark = false}: {onDark?: boolean}) {
 const [open, setOpen] = React.useState(false);
 const here = (location.pathname.split('/').pop() || 'index.html');
 const active = (href: string) => href.split('#')[0] === './' + here;
 const close = () => setOpen(false);

 React.useEffect(() => {
  if (!open) return;
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
  document.addEventListener('keydown', onKey);
  const prev = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
 }, [open]);

 return (
  <>
   <header className={onDark ? 'nav dark' : 'nav'}>
    <Brand light={onDark}/>
    <nav>{NAV.map(([href, label]) => <a key={href} className={active(href) ? 'active' : ''} href={href}>{label}</a>)}</nav>
    <div className="navRight">
     <a className="btn navCta" href="./rooms.html">Book now</a>
     <button className={'burger' + (open ? ' open' : '')} onClick={() => setOpen(o => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
      <span/><span/><span/>
     </button>
    </div>
   </header>

   <div className={'drawer' + (open ? ' open' : '')} id="mobile-menu" aria-hidden={!open}>
    <div className="drawerScrim" onClick={close}/>
    <aside className="drawerPanel" role="dialog" aria-modal="true" aria-label="Site menu">
     <div className="drawerNav">
      {NAV.map(([href, label]) => <a key={href} className={active(href) ? 'active' : ''} href={href} onClick={close}>{label}</a>)}
     </div>
     <div className="drawerFoot">
      <a className="btn" href="./rooms.html" onClick={close}>Book now</a>
      <a className="drawerCall" href="tel:+256759504928">Call +256 759 504 928</a>
      <p className="drawerNote">19 Kiira Rd, Jinja, Uganda</p>
     </div>
    </aside>
   </div>

   <div className="mobileCta">
    <a className="btn" href="./rooms.html">Book your stay</a>
    <a className="btn ghost" href="tel:+256759504928">Call us</a>
   </div>
  </>
 );
}