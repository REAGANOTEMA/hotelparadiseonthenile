import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';
import {rooms, TopBar, PageNav, Footer, BedGlyph, palettes, API, LOGO} from './shared';

const rates = [
 ['Suite', '248,000'],
 ['Family Room', '314,000'],
 ['Triple Room', '213,000'],
 ['Executive Deluxe', '202,000'],
 ['Deluxe Double', '178,000'],
 ['Standard Twin', '142,000']
];

const dining = [
 {name: 'Breakfast', price: 'UGX 25,000', note: 'For non residents, or children above six years sharing a room with their parents'},
 {name: 'Buffet meal', price: 'UGX 40,000', note: 'Served daily around lunch and dinner'},
 {name: 'A la carte menu', price: 'UGX 10,000 to 45,000', note: 'A wide selection, from light bites to full plates'},
 {name: 'Baby cots', price: 'Free', note: 'Available on request for your little one'}
];

const facts = [
 {t: 'Rooms', d: '69 rooms spread across 3 floors'},
 {t: 'Comfort', d: 'Every room furnished to standard, some air conditioned and others with fans'},
 {t: 'Bathrooms', d: 'Private bathrooms with jacuzzis, bathtubs or shower cabinets'},
 {t: 'In room', d: 'Direct dial telephones and 24 hour satellite television'},
 {t: 'Functions', d: 'Conference facilities and gardens for parties'},
 {t: 'Wellness', d: 'Health club with a swimming pool'}
];

const MAP_EMBED = 'https://www.google.com/maps?q=' + encodeURIComponent('Hotel Paradise on the Nile, 19 Kiira Rd, Jinja, Uganda') + '&output=embed';
const MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Hotel Paradise on the Nile, 19 Kiira Rd, Jinja, Uganda');

const HERO_IMAGES = Array.from({length: 7}, (_, n) => './images/hero' + (n + 1) + '.webp');

function Hero() {
 const [i, setI] = React.useState(0);
 const [paused, setPaused] = React.useState(false);
 React.useEffect(() => {
  if (paused) return;
  const t = window.setInterval(() => setI(v => (v + 1) % HERO_IMAGES.length), 6000);
  return () => window.clearInterval(t);
 }, [paused]);
 return (
  <section className="hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
   <div className="heroShots">
    {HERO_IMAGES.map((src, n) => (
     <img key={src} className={'heroSlide' + (n === i ? ' active' : '')} src={src} alt="" draggable={false}/>
    ))}
   </div>
   <div className="heroShade"/>
   <div className="heroOverlay">
    <div className="heroLogo"><img src={LOGO} alt="Hotel Paradise on the Nile logo"/></div>
    <p className="eyebrow">HOTEL PARADISE ON THE NILE</p>
    <h1>Where luxury meets the Nile.</h1>
    <p>A calm, refined stay in the heart of Jinja, right beside the river.</p>
    <div className="heroBtns">
     <a className="btn" href="./rooms.html">Book your stay</a>
     <a className="btn ghost" href="./menu.html">Order food</a>
     <a className="btn ghost" href="#facilities">Explore the hotel</a>
    </div>
   </div>
   <div className="heroDots">
    {HERO_IMAGES.map((_, n) => (
     <button key={n} className={'dot' + (n === i ? ' on' : '')} onClick={() => setI(n)} aria-label={'Show slide ' + (n + 1)}/>
    ))}
   </div>
  </section>
 );
}

function AvailabilityStrip() {
 const [st, setSt] = React.useState({cin: '', cout: '', adults: '2', type: ''});
 const f = (k: keyof typeof st) => ((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setSt({...st, [k]: e.target.value}));
 const go = () => {
  const q = new URLSearchParams();
  if (st.cin) q.set('check_in', st.cin);
  if (st.cout) q.set('check_out', st.cout);
  if (st.adults) q.set('adults', st.adults);
  if (st.type) q.set('type', st.type);
  window.location.href = './rooms.html' + (q.toString() ? '?' + q.toString() : '');
 };
 return (
  <section className="booking" id="book">
   <div><label>Check in</label><input type="date" value={st.cin} onChange={f('cin')}/></div>
   <div><label>Check out</label><input type="date" value={st.cout} onChange={f('cout')}/></div>
   <div><label>Guests</label><select value={st.adults} onChange={f('adults')}><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div>
   <div><label>Room type</label><select value={st.type} onChange={f('type')}><option value="">Any available</option>{rooms.map(r => <option key={r.id}>{r.type}</option>)}</select></div>
   <button className="btn" onClick={go}>Choose your room</button>
  </section>
 );
}

function Home() {
 return <div>
  <TopBar/>
  <PageNav/>
  <Hero/>

  <AvailabilityStrip/>

  <p className="stripNote">Your room has its own page. When you choose below, you will see the bed clearly and you are free to change your mind before booking.</p>

  <section className="section" id="rooms">
   <div className="center">
    <p className="eyebrow">STAY IN PARADISE</p>
    <h2>Rooms and beds</h2>
    <p className="intro">Seven welcoming room types with honest rates in Uganda Shillings. Open any room to see the bed clearly, choose it, or pick another one before you book. Every rate includes breakfast and the local hotel tax.</p>
   </div>
   <div className="grid">
    {rooms.filter(r => r.featured || r.id === 6).map((r, i) => (
     <article className="card" key={r.id}>
      <div className="photo bedPhoto" style={{background: palettes(r.id)}}><BedGlyph size={96}/></div>
      <div className="cardBody">
       <p className="pill">{r.pillow}</p>
       <h3>{r.type}</h3>
       <p>{r.text}</p>
       <strong>{r.rate} <span>per night</span></strong>
       <a className="btn" href={'./rooms.html?room=' + encodeURIComponent(r.type)}>View this bed</a>
      </div>
     </article>
    ))}
   </div>
   <div className="center" style={{marginTop: 46}}>
    <a className="btn ghost2" href="./rooms.html">See all rooms and beds</a>
   </div>
  </section>

  <section className="section rates" id="rates">
   <div className="center">
    <p className="eyebrow">ROOM RATES AND POLICIES</p>
    <h2>Rates and policies</h2>
    <p className="intro">Current tariffs for a night at Paradise on the Nile, in Uganda Shillings. All rates include breakfast and the local hotel tax, and the tariff is subject to change without notice.</p>
   </div>
   <div className="ratesWrap">
    <div className="rateCard">
     {rates.map(r => (
      <div className="rateRow" key={r[0]}><div><h4>{r[0]}</h4><small>Classic comfort, breakfast and taxes included</small></div><b>UGX {r[1]}<span>per night</span></b></div>
     ))}
     <div className="rateRow"><div><h4>Standard Single</h4><small>A well equipped single room at the best available rate</small></div><b>On request<span>contact the hotel</span></b></div>
    </div>
    <div className="policy">
     <h4>GOOD TO KNOW</h4>
     <p><b>Check in</b> is from 12 noon and <b>check out</b> is 10 am.</p>
     <p>Rooms held past 6 pm are charged at 75% of the applicable rate, and the full rate applies after 6 pm.</p>
     <p>All rates quoted include the local hotel tax of UGX 2,000 per room per day, and every rate includes breakfast.</p>
     <p>Baby cots are free, and children above six years sharing a room with their parents pay for breakfast only at UGX 25,000.</p>
     <p>Lunch is served from 12 noon to 3 pm, and dinner from 7 pm to 11 pm.</p>
     <a className="btn" href="./rooms.html" style={{marginTop: 12}}>Choose your room</a>
    </div>
   </div>
  </section>

  <section className="section" id="dining">
   <div className="center">
    <p className="eyebrow">DINING AND BAR</p>
    <h2>Good food, great moments</h2>
    <p className="intro">Meals are served with the warmth Jinja is known for. Walk ins are always welcome, or open the full menu to browse every dish and send your order to the kitchen. Breakfast is included in every room rate.</p>
   </div>
   <div className="menuWrap">
    {dining.map(m => (
     <div className="menuRow" key={m.name}><div><h4>{m.name}</h4><small>{m.note}</small></div><b>{m.price}</b></div>
    ))}
   </div>
   <div className="center" style={{marginTop: 40}}>
    <a className="btn" href="./menu.html">See the full menu and order</a>
   </div>
  </section>

  <section className="section" id="facilities">
   <div className="center">
    <p className="eyebrow">THE HOTEL</p>
    <h2>Everything you need, in one place</h2>
    <p className="intro">Paradise on the Nile sits right on the banks of the River Nile, about a three hour drive from Entebbe Airport and only five minutes from the centre of Jinja town.</p>
   </div>
   <div className="factsGrid">
    {facts.map(f => <div className="fact" key={f.t}><h4>{f.t.toUpperCase()}</h4><p>{f.d}</p></div>)}
   </div>
  </section>

  <section className="section contact" id="contact">
   <div className="center">
    <p className="eyebrow">BOOKINGS AND ENQUIRIES</p>
    <h2>How to reach us</h2>
    <p className="intro">We are at 19 Kiira Road, a few minutes from the river. Call, write or email the front desk to confirm availability, check in times and current rates.</p>
   </div>
   <div className="contactWrap">
    <div className="contactCard">
     <div className="contactRow"><b>HOTEL</b><span>Hotel Paradise on the Nile Ltd</span></div>
     <div className="contactRow"><b>ADDRESS</b><span>19 Kiira Rd, Jinja, Uganda</span></div>
     <div className="contactRow"><b>POST</b><span>P.O. Box 1139, Jinja, Uganda</span></div>
     <div className="contactRow"><b>TELEPHONE</b><span>+256 759 504 928</span></div>
     <div className="contactRow"><b>EMAIL</b><span>hotel@hotelparadiseonthenile.info</span></div>
     <div className="contactRow"><b>FRONT DESK</b><span>Open every day, 24 hours</span></div>
    </div>
    <div className="mapBox">
     <iframe title="Hotel Paradise on the Nile on Google Maps" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
     <p>Hotel Paradise on the Nile, 19 Kiira Rd, Jinja. <a href={MAP_LINK} target="_blank" rel="noreferrer">Open in Google Maps</a></p>
    </div>
   </div>
  </section>

  <Footer/>
 </div>;
}

createRoot(document.getElementById('root')!).render(<Home/>);