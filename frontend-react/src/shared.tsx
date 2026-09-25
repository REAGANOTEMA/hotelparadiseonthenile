import React from 'react';

export const API = '/hotelparadiseonthenile/backend-php/api.php';
export const LOGO = './logo-256.png';

export const fmt = (n: number): string => 'UGX ' + Math.round(n).toLocaleString();

export type Room = {
  id: number;
  type: string;
  rate: string;
  usd: string;
  price: number;
 guests: string;
 beds: string;
 pillow: string;
 text: string;
 featured?: boolean;
};

export const rooms: Room[] = [
  {id: 1, type: 'Suite', rate: 'UGX 248,000', usd: '100 to 120', price: 248000, guests: 'Up to 2 guests', beds: 'One king sized bed', pillow: 'The grand retreat', text: 'Our most spacious room, generous in space and comfort, with premium furnishings, a king sized bed and a calm, elegant atmosphere.', featured: true},
  {id: 2, type: 'Family Room', rate: 'UGX 314,000', usd: '122 to 125', price: 314000, guests: 'Up to 4 guests', beds: 'One double bed and two single beds', pillow: 'Made for families', text: 'Roomier than most, with a double bed and two single beds, made for families travelling together with comfort in mind.', featured: true},
  {id: 3, type: 'Triple Room', rate: 'UGX 213,000', usd: '100', price: 213000, guests: 'Up to 3 guests', beds: 'Three single beds', pillow: 'For three guests', text: 'A comfortable setting with three single beds, ideal for friends or a small group staying together.'},
  {id: 4, type: 'Executive Deluxe', rate: 'UGX 202,000', usd: '80', price: 202000, guests: 'Up to 2 guests', beds: 'One king sized bed', pillow: 'Business ready', text: 'An elevated stay with refined touches and a king sized bed, well suited to business and leisure travellers alike.'},
  {id: 5, type: 'Deluxe Double', rate: 'UGX 178,000', usd: '70', price: 178000, guests: 'Up to 2 guests', beds: 'One double bed', pillow: 'The popular choice', text: 'Elegant double accommodation with a restful, warm and private atmosphere and a comfortable double bed.'},
  {id: 6, type: 'Standard Twin', rate: 'UGX 142,000', usd: '60', price: 142000, guests: 'Up to 2 guests', beds: 'Two single beds', pillow: 'Two beds', text: 'A neatly kept room with two comfortable single beds for a peaceful night of rest.'},
  {id: 7, type: 'Standard Double', rate: 'UGX 178,000', usd: '60', price: 178000, guests: 'Up to 2 guests', beds: 'One double bed', pillow: 'Quiet and cosy', text: 'A well kept double room with a comfortable bed, everything you need for a good night in Jinja.'},
  {id: 8, type: 'Standard Single', rate: 'On request', usd: '55', price: 0, guests: '1 guest', beds: 'One single bed', pillow: 'Great value', text: 'A simple, well equipped single room with a comfortable single bed. Contact the hotel for today rate.'}
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