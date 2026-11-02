const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');

const DIR='Images/'; /* must match your photo folder name EXACTLY (GitHub Pages is case-sensitive) */
/* ====== YOUR PHOTOS (file names inside the images folder) ====== */
const PHOTOS={hero:'cake1.jpg',slide2:'Wedding Cake.jpg.jpeg',slide3:'Pinata Birthday Cake.jpeg',about1:'baking.jpg',about2:'store.jpeg'};

/* ====== MENU DATA ====== */
const menu=[
{n:"Pinata Birthday Cake", img:"Pinata Birthday Cake.jpeg", cat:"Birthdays",p:520,a:"#fff3d6",b:"#fff",c:"#e63946",d:'sprinkle',x:["Eggless"],t:"Sprinkle sponge filled with sweets."},
{n:"Rainbow Cake",img:"RAINBOW_CAKE.jpg",cat:"Birthdays",p:480,a:"#ef476f",b:"#ffd166",c:"#06d6a0",d:'sprinkle',x:[],t:"Colourful layers with vanilla cream."},
{n:"Southern Red Velvet",img:"Southern-Red-Velvet.jpg",cat:"Birthdays",p:420,a:"#a4161a",b:"#fff",c:"#c9184a",d:'berry',x:["Eggless"],t:"Red velvet layers with cream cheese frosting."},
{n:"Custom Birthday Cake",img:"Custom Birthday Cake.jpg",cat:"Birthdays",p:450,a:"#f4c2c2",b:"#fff5f5",c:"#c9184a",d:'berry',x:["Eggless","Gluten-free"],t:"Fully tailored design, 8–10 servings."},
{n:"Mini Heart Cake",img:"Mini Heart Cake.jpeg", cat:"Birthdays",p:180,a:"#f7a8b8",b:"#fff",c:"#c9184a",d:'heart',x:[],t:"Vintage-piped heart, serves 2–4."},
{n:"Floral Buttercream Cake",img:"Floral Buttercream Cake.jpg",cat:"Weddings",p:650,a:"#fff6e5",b:"#fff",c:"#c9184a",d:'flower',x:["Eggless"],t:"Vanilla layers with piped flowers."},
{n:"Two-Tier Wedding Cake",img:"Two-Tier Wedding Cake.jpg",cat:"Weddings",p:1800,a:"#fffaf0",b:"#fff",c:"#f4c2c2",d:'flower',tier:1,x:[],t:"Elegant tiers for 40+ guests."},
{n:"Blush Berry Wedding Cake",img:"Blush Berry Wedding Cake.jpg.jpeg",cat:"Weddings",p:950,a:"#fde2e4",b:"#fff",c:"#d62839",d:'berry',tier:1,x:["Eggless"],t:"Blush sponge with fresh berries."},
{n:"Chocolate Drip Cake",img:"Chocolate Drip Cake.jpg", cat:"Weddings",p:700,a:"#6f4e37",b:"#4a2c1a",c:"#3b1f10",d:'drip',x:["Gluten-free"],t:"Rich chocolate with a ganache drip."},
{n:"Baby Shower Cake",img:"Baby Shower Cake.jpg.jpeg",cat:"Baby Showers",p:520,a:"#cfe8ff",b:"#fff",c:"#f4c2c2",d:'flower',x:["Eggless"],t:"Soft pastel design with a themed topper."},
{n:"Pastel Baby Cake",img:"Pastel Baby Cake.jpg",cat:"Baby Showers",p:480,a:"#e7d6ff",b:"#fff",c:"#ffd6e8",d:'sprinkle',tier:1,x:[],t:"Two-tier pastel cake for baby showers."},
{n:"Vanilla Cupcakes (6)",img:"Vanilla Cupcakes (6).jpg",cat:"Cupcakes",p:120,a:"#e63946",b:"#fff3f3",c:"#f4c2c2",x:["Eggless"],t:"Fluffy cupcakes with buttercream swirls."},
{n:"Chocolate Cupcakes (6)",img:"Chocolate Cupcakes (6).jpg",cat:"Cupcakes",p:130,a:"#8d5524",b:"#5c3a21",c:"#ffd166",x:[],t:"Cocoa cupcakes with chocolate frosting."},
{n:"Strawberry Cupcakes (6)",img:"Strawberry Cupcakes (6).jpg",cat:"Cupcakes",p:130,a:"#f7a8b8",b:"#ff8fab",c:"#c9184a",x:["Eggless"],t:"Strawberry cream on vanilla sponge."},
{n:"Cupcake Tower (24)",img:"Cupcake Tower.jpg",k:'cup',cat:"Dessert Spreads",p:480,a:"#ffb3c6",b:"#fff",c:"#ffd6e8",x:["Eggless"],t:"Two dozen themed cupcakes on a stand."},
{n:"Dessert Spread Platter",img:"Dessert Spread Platter.jpg",cat:"Dessert Spreads",p:900,a:"#e8c39e",b:"#fff3e0",c:"#d62839",d:'berry',x:[],t:"Minis, cupcakes and cookies for 20 guests."},
{n:"Chocolate Brownies (6)",img:"Chocolate Brownies (6).jpg",cat:"Daily Treats",p:110,a:"#4a2c1a",b:"#6f4e37",c:"#3b1f10",d:'drip',x:["Gluten-free"],t:"Fudgy brownies with a crackly top."},
{n:"Iced Sugar Cookies (6)",img:"Iced Sugar Cookies(6).jpg", cat:"Daily Treats",p:95,a:"#f4c2c2",b:"#fff",c:"#ffd166",d:'sprinkle',x:[],t:"Hand-decorated cookies in pastel colours."}
].map(m=>({k:'cake',...m}));
/* ====== GALLERY LIST (every menu item that has a real photo + extras) ====== */
const Images=[
{n:"Wedding Cake",cat:"Weddings",img:"Wedding Cake.jpg.jpeg",a:"#fffaf0",b:"#fff",c:"#f4c2c2",d:'flower',tier:1,k:'cake'},
{n:"Pink Heart Cake",cat:"Birthdays",img:"Mini Heart Cake.jpeg",a:"#a4161a",b:"#fff",c:"#c9184a",d:'berry',k:'cake'},
{n:"Fairyland Creation",cat:"Behind the Scenes",img:"store.jpeg",a:"#f4c2c2",b:"#fff",c:"#c9184a",d:'berry',k:'cake'},
{n:"Wedding Cupcakes",cat:"Weddings",img:"Wedding Cupcakes.jpg",a:"#ffb3c6",b:"#fff",c:"#ffd6e8",k:'cup'},
{n:"Traditional Wedding Cake",cat:"Weddings",img:"tradiwedding cake.jpeg",a:"#fffaf0",b:"#fff",c:"#f4c2c2",d:'flower',tier:1,k:'cake'},
{n:"Dessert Table",cat:"Dessert Spreads",img:"everything in one place.jpeg",a:"#e8c39e",b:"#fff3e0",c:"#d62839",d:'berry',k:'cake'},
{n:"Fresh From Our Kitchen",cat:"Behind the Scenes",img:"baking.jpg",a:"#ffb3c6",b:"#fff",c:"#ffd6e8",k:'cup'},
...menu.filter(m=>m.img).map(m=>({...m,p:undefined}))
].filter((o,i,arr)=>arr.findIndex(x=>x.img===o.img)===i);
const photos=Images;
const cats=['Birthdays','Weddings','Baby Showers','Cupcakes','Dessert Spreads','Daily Treats'];

/* ====== DRAWN PICTURES (SVG, shaded) ====== */
let gid=0;
function defs(id){
 return `<defs><radialGradient id="${id}r" cx=".5" cy=".35" r=".85"><stop offset="0" stop-color="#f6f1ea"/><stop offset="1" stop-color="#d9cfc3"/></radialGradient><linearGradient id="${id}s" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".4"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient></defs><rect width="200" height="200" fill="url(#${id}r)"/>`;
}
function cake(o){
 const id='g'+(gid++),t=o.tier?58:88,sp=['#e63946','#ffd166','#06d6a0','#118ab2','#ef476f'];
 let s=`<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(o.n)}">${defs(id)}`;
 s+=`<ellipse cx="100" cy="158" rx="88" ry="20" fill="#0003"/><ellipse cx="100" cy="150" rx="86" ry="19" fill="#fff"/><ellipse cx="100" cy="148" rx="74" ry="15" fill="#f1ece6"/>`;
 s+=`<rect x="50" y="88" width="100" height="52" fill="${o.a}"/><ellipse cx="100" cy="140" rx="50" ry="12" fill="${o.a}"/><rect x="50" y="108" width="100" height="7" fill="${o.b}" opacity=".9"/><rect x="50" y="88" width="100" height="52" fill="url(#${id}s)"/>`;
 if(o.tier)s+=`<rect x="72" y="58" width="56" height="32" fill="${o.a}"/><ellipse cx="100" cy="90" rx="28" ry="7" fill="${o.a}"/><rect x="72" y="58" width="56" height="32" fill="url(#${id}s)"/><ellipse cx="100" cy="58" rx="28" ry="8" fill="${o.b}"/>`;
 s+=`<ellipse cx="100" cy="88" rx="50" ry="14" fill="${o.b}"/>`;
 for(let i=0;i<9;i++)s+=`<circle cx="${56+i*11}" cy="${t+9}" r="5.5" fill="${o.b}"/>`;
 const d=o.d;
 if(d==='berry')[[80,t-1],[100,t-5],[120,t-1],[90,t+5],[110,t+5]].forEach(p=>s+=`<circle cx="${p[0]}" cy="${p[1]}" r="6.5" fill="${o.c}"/><circle cx="${p[0]-2}" cy="${p[1]-2}" r="1.8" fill="#fff9"/>`);
 if(d==='sprinkle')for(let i=0;i<24;i++)s+=`<rect x="${62+(i*37)%76}" y="${t-6+(i*19)%16}" width="7" height="2.6" rx="1.2" fill="${sp[i%5]}" transform="rotate(${i*47} ${65+(i*37)%76} ${t})"/>`;
 if(d==='heart')s+=`<path d="M100 ${t+8}c-16-10-18-20-9-23 5-1 9 2 9 5 0-3 4-6 9-5 9 3 7 13-9 23z" fill="${o.c}"/><path d="M95 ${t-9}q2-3 5-1" stroke="#fff8" stroke-width="1.6" fill="none"/>`;
 if(d==='flower')for(let i=0;i<9;i++){const x=100+36*Math.cos(i*.7),y=t+10*Math.sin(i*.7);s+=`<circle cx="${x}" cy="${y}" r="6.5" fill="${i%2?o.c:'#fff'}"/><circle cx="${x}" cy="${y}" r="2.2" fill="#ffd166"/>`}
 if(d==='drip')s+=`<path d="M50 88q0 6 10 6t10-6q0 14 8 14t8-14q0 8 8 8t8-8q0 18 8 18t8-18q0 10 10 10t10-10q0 8 10 8t10-8V86H50z" fill="${o.c}"/><ellipse cx="100" cy="86" rx="50" ry="13" fill="${o.c}"/>`;
 if(o.cat==='Birthdays'&&!o.tier)[88,100,112].forEach(x=>s+=`<rect x="${x-1.5}" y="${t-24}" width="3" height="20" rx="1" fill="${['#ffd166','#06d6a0','#ef476f'][(x-88)/12]}"/><ellipse cx="${x}" cy="${t-27}" rx="2.6" ry="4.2" fill="#ffb703"/>`);
 return s+'</svg>';
}
function cup(o){
 const id='g'+(gid++);
 let s=`<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(o.n)}">${defs(id)}<ellipse cx="100" cy="162" rx="64" ry="12" fill="#0003"/><path d="M60 108h80l-11 54H71z" fill="${o.a}"/>`;
 for(let i=0;i<6;i++)s+=`<path d="M${68+i*13} 110l${-2+i*.5} 50" stroke="#0002" stroke-width="2"/>`;
 s+=`<path d="M60 108h80l-11 54H71z" fill="url(#${id}s)"/><circle cx="100" cy="96" r="32" fill="${o.b}"/><circle cx="80" cy="102" r="23" fill="${o.b}"/><circle cx="120" cy="102" r="23" fill="${o.b}"/><circle cx="100" cy="74" r="22" fill="${o.b}"/><circle cx="100" cy="56" r="13" fill="${o.b}"/>`;
 s+=`<circle cx="100" cy="42" r="8" fill="${o.c}"/><circle cx="97" cy="39" r="2.2" fill="#fff9"/>`;
 for(let i=0;i<10;i++)s+=`<rect x="${74+(i*13)%52}" y="${70+(i*17)%34}" width="6" height="2.4" rx="1" fill="${['#ffd166','#fff','#06d6a0','#ef476f'][i%4]}" transform="rotate(${i*41} 100 90)"/>`;
 return s+'</svg>';
}
/* drawing first, your real photo on top (if the file exists in images/) */
function pic(o,badge){
 const svg=o.k==='cup'?cup(o):cake(o);
 const file=o.img||slug(o.n)+'.jpg';
 return `<div class="pic">${svg}<img src="${encodeURI(DIR+file)}" alt="${esc(o.n)} - ${esc(o.cat)} by Fairyland Cake Co." loading="lazy" onerror="this.remove()">${badge?`<span class="badge">${badge}</span>`:''}<span class="zoom">🔍 Tap to view</span></div>`;
}
const card=(o,i)=>`<article class="item reveal" data-i="${i}" tabindex="0" role="button" aria-label="View ${esc(o.n)}">${pic(o,o.p?'R'+o.p:'')}<h3>${esc(o.n)}</h3>${o.p?`<p>${esc(o.t)}</p>${o.x.map(x=>`<span class="tag">${x}</span>`).join('')}`:`<p>${esc(o.cat)}</p>`}</article>`;

/* ====== BACKGROUND PHOTOS WITH FALLBACK COLOUR ====== */
const bg=f=>`linear-gradient(rgba(44,44,44,.35),rgba(44,44,44,.35)),url('${encodeURI(DIR+f)}'),linear-gradient(135deg,#F4C2C2,#2C2C2C)`;
$$('[data-img]').forEach(el=>el.style.backgroundImage=bg(PHOTOS[el.dataset.img]||el.dataset.img));
$$('[data-pic]').forEach(el=>{el.innerHTML=pic({n:'Fairyland Cake Co. photo',cat:'Gallery',img:PHOTOS[el.dataset.pic],k:'cake',a:'#f4c2c2',b:'#fff',c:'#c9184a',d:'berry'})});

/* ====== NAV + SCROLL EFFECTS ====== */
$('#menuBtn')?.addEventListener('click',()=>$('#navMenu').classList.toggle('show'));
const toTop=document.createElement('button');
toTop.id='toTop';toTop.textContent='↑';toTop.setAttribute('aria-label','Back to top');
toTop.onclick=()=>scrollTo({top:0,behavior:'smooth'});
document.body.append(toTop);
addEventListener('scroll',()=>{$('.top')?.classList.toggle('shadow',scrollY>10);toTop.classList.toggle('show',scrollY>400)});
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1}):null;
function reveal(){$$('.reveal:not(.in)').forEach(el=>io?io.observe(el):el.classList.add('in'))}

/* ====== LIGHTBOX ====== */
let lbList=[],lbIdx=0;
const lb=$('#lightbox');
function showLb(){
 const o=lbList[lbIdx];
 $('#lbBig').innerHTML=pic(o);
 $('#lbTitle').textContent=o.n;
 $('#lbDesc').textContent=o.p?o.t+' — from R'+o.p:o.cat;
 lb.classList.add('open');$('#lbClose').focus();
}
function bindCards(list,root){
 lbList=list;
 $$((root||'')+' .item').forEach(el=>{
  const open=()=>{lbList=list;lbIdx=+el.dataset.i;showLb()};
  el.onclick=open;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}};
 });
}
if(lb){
 const step=d=>{lbIdx=(lbIdx+d+lbList.length)%lbList.length;showLb()};
 lb.addEventListener('click',e=>{if(e.target===lb||e.target.id==='lbClose')lb.classList.remove('open')});
 $('#lbPrev').onclick=()=>step(-1);$('#lbNext').onclick=()=>step(1);
 document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('open'))return;
  if(e.key==='Escape')lb.classList.remove('open');
  if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1);
 });
}

/* ====== CATEGORY STRIP ====== */
const catRow=$('#catRow');
let activeCat=new URLSearchParams(location.search).get('cat')||'All';
if(catRow){
 catRow.innerHTML=cats.map(c=>`<button class="cat" data-c="${c}"><div class="c">${pic(menu.find(m=>m.cat===c))}</div>${c}</button>`).join('');
 $$('.strip .arrow').forEach(b=>b.onclick=()=>catRow.scrollBy(+b.dataset.dir*240,0));
 catRow.addEventListener('click',e=>{
  const b=e.target.closest('.cat');if(!b)return;
  if($('#menuGrid')){activeCat=activeCat===b.dataset.c?'All':b.dataset.c;renderMenu(true)}
  else location.href='menu.html?cat='+encodeURIComponent(b.dataset.c);
 });
}

/* ====== HOME ====== */
const slider=$('#slider');
if(slider){
 const slides=[
  {img:PHOTOS.hero,t:'Little Moments, Big Magic',p:'Custom cakes, cupcakes and dessert spreads made with love.'},
  {img:PHOTOS.slide2,t:'Cakes for Every Celebration',p:'Birthdays, weddings and baby showers, designed around you.'},
  {img:PHOTOS.slide3,t:'Baked Fresh, Made to Order',p:'Order online in minutes and get an instant estimate.'}];
 slider.innerHTML=slides.map((s,i)=>`<div class="slide ${i?'':'on'}" style="background-image:${bg(s.img)}"><div><h1>${s.t}</h1><p>${s.p}</p><a class="btn" href="enquiry.html">Start Your Order</a></div></div>`).join('')
  +'<button class="sbtn" id="sPrev" aria-label="Previous slide">‹</button><button class="sbtn" id="sNext" aria-label="Next slide">›</button><div class="dots">'+slides.map((s,i)=>`<button data-i="${i}" class="${i?'':'on'}" aria-label="Slide ${i+1}"></button>`).join('')+'</div>';
 let cur=0,timer;
 const show=n=>{cur=(n+slides.length)%slides.length;$$('.slide').forEach((s,i)=>s.classList.toggle('on',i===cur));$$('.dots button').forEach((d,i)=>d.classList.toggle('on',i===cur))};
 const auto=()=>{clearInterval(timer);timer=setInterval(()=>show(cur+1),5500)};
 $('#sPrev').onclick=()=>{show(cur-1);auto()};$('#sNext').onclick=()=>{show(cur+1);auto()};
 $$('.dots button').forEach(d=>d.onclick=()=>{show(+d.dataset.i);auto()});
 slider.onmouseenter=()=>clearInterval(timer);slider.onmouseleave=auto;auto();
}
const feat=$('#featured');
if(feat){
 const f=[1,2,6,11,5,4,7,14].map(i=>menu[i]);
 feat.innerHTML=f.map(card).join('');bindCards(f,'#featured');
 const occ=$('#occasions');
 if(occ){
  const t=[["Birthdays",1],["Weddings",6],["Baby Showers",9]];
  occ.innerHTML=t.map(x=>`<a class="item reveal" href="menu.html?cat=${encodeURIComponent(x[0])}" style="text-decoration:none">${pic(menu[x[1]])}<h3>${x[0]}</h3><p>See our ${x[0].toLowerCase()} creations →</p></a>`).join('');
 }
 const col=$('#collage');
 if(col){const c=photos.slice(0,6);col.innerHTML=c.map(card).join('');bindCards(c,'#collage')}
 const st=$('#steps');
 if(st)st.innerHTML=["1. Choose","Browse the menu and pick a cake, cupcakes or a dessert spread."],["2. Enquire","Fill in the order form and get an instant estimate and availability."],["3. Confirm","We contact you to confirm design, deposit and date."],[,"4. Celebrate","Collect at our pickup point or weekend market and enjoy!"]
  .map(s=>`<div class="step reveal"><b>${s[0]}</b><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('');
}

/* ====== MENU: filter, search, sort, load more ====== */
const mg=$('#menuGrid');
let shown=8;
function renderMenu(reset){
 if(reset)shown=8;
 const q=$('#search').value.toLowerCase().trim(),d=$('#diet').value,s=$('#sort').value;
 $$('.cat').forEach(b=>b.classList.toggle('on',b.dataset.c===activeCat));
 let l=menu.filter(m=>(activeCat==='All'||m.cat===activeCat)&&(m.n+m.t).toLowerCase().includes(q)&&(!d||m.x.includes(d)));
 if(s==='low')l.sort((a,b)=>a.p-b.p);if(s==='high')l.sort((a,b)=>b.p-a.p);if(s==='az')l.sort((a,b)=>a.n.localeCompare(b.n));
 const part=l.slice(0,shown);
 mg.innerHTML=part.length?part.map(card).join(''):'<p>No items found. Try another search.</p>';
 $('#count').textContent=(activeCat==='All'?'All items':activeCat)+' · showing '+part.length+' of '+l.length;
 $('#more').style.display=l.length>shown?'inline-block':'none';
 bindCards(l,'#menuGrid');reveal();
}
if(mg){
 $('#search').oninput=()=>renderMenu(true);
 ['#diet','#sort'].forEach(s=>$(s).onchange=()=>renderMenu(true));
 $('#more').onclick=()=>{shown+=8;renderMenu()};
 $('#clear').onclick=()=>{activeCat='All';$('#search').value='';$('#diet').value='';$('#sort').value='';renderMenu(true)};
 renderMenu(true);
}

/* ====== GALLERY PAGE ====== */
const gg=$('#galleryGrid');
if(gg){
 let gcat='All';
 const gc=$('#gcats'),names=['All',...new Set(Images.map(i=>i.cat))];
 const drawGallery=()=>{
  const l=Images.filter(i=>gcat==='All'||i.cat===gcat);
  gg.innerHTML=l.map(card).join('');bindCards(l,'#galleryGrid');reveal();
  $$('#gcats button').forEach(b=>b.classList.toggle('on',b.dataset.c===gcat));
 };
 gc.innerHTML=names.map(n=>`<button data-c="${n}">${n}</button>`).join('');
 gc.onclick=e=>{const b=e.target.closest('button');if(b){gcat=b.dataset.c;drawGallery()}};
 drawGallery();
}

/* ====== ACCORDION + TABS + COUNTERS ====== */
$$('.acc-btn').forEach(b=>b.addEventListener('click',()=>{
 const p=b.nextElementSibling,o=p.classList.toggle('open');b.classList.toggle('open',o);
 p.style.maxHeight=o?p.scrollHeight+40+'px':0;
}));
$$('.tab-btns button').forEach(b=>b.addEventListener('click',()=>{
 $$('.tab-btns button,.tabp').forEach(x=>x.classList.remove('on'));
 b.classList.add('on');document.getElementById(b.dataset.tab).classList.add('on');
}));
$$('[data-count]').forEach(el=>{
 const end=+el.dataset.count;let done=false;
 const run=()=>{if(done)return;done=true;let n=0;const st=Math.max(1,Math.ceil(end/40));const t=setInterval(()=>{n=Math.min(end,n+st);el.textContent=n+(el.dataset.plus?'+':'');if(n>=end)clearInterval(t)},40)};
 if(io){const o=new IntersectionObserver(e=>{if(e[0].isIntersecting){run();o.disconnect()}});o.observe(el)}else run();
});

/* ====== REVIEWS (DOM manipulation + localStorage) ====== */
const rl=$('#reviewList');
let reviews=[];
try{reviews=JSON.parse(localStorage.getItem('fccReviews'))||[]}catch(e){}
if(!reviews.length)reviews=[{n:"Thandi M.",s:5,t:"The cake was the star of my birthday. So pretty and delicious!"},{n:"Sipho & Lerato",s:5,t:"Our baby shower spread was perfect and ordering was so easy."},{n:"Naledi K.",s:5,t:"Beautiful wedding cupcakes. Everyone asked where we got them!"}];
function drawReviews(){
 if(rl){
  rl.innerHTML='';
  reviews.forEach(r=>{
   const d=document.createElement('div');d.className='review';
   const h=document.createElement('strong');h.textContent=r.n;
   const p=document.createElement('p');p.textContent=r.t;
   d.append(h,p);rl.append(d);
  });
 }
 const q=$('#quotes');
 if(q){q.innerHTML='';reviews.slice(0,3).forEach(r=>{
  const d=document.createElement('div');d.className='quote reveal';
  const p=document.createElement('p');p.textContent=r.t;
  const s=document.createElement('strong');s.textContent='— '+r.n;
  d.append(p,s);q.append(d);
 });reveal()}
}
drawReviews();
$('#reviewForm')?.addEventListener('submit',e=>{
 e.preventDefault();const f=e.target;if(!validate(f))return;
 reviews.unshift({n:f.rname.value.trim(),s:+f.rating.value,t:f.rtext.value.trim()});
 try{localStorage.setItem('fccReviews',JSON.stringify(reviews))}catch(err){}
 drawReviews();f.reset();
});

/* ====== LEAFLET MAPS (replace coordinates with your real ones) ====== */
function makeMap(id,pos,label){
 if(!$(id)||!window.L)return;
 const m=L.map(id.slice(1)).setView(pos,14);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors'}).addTo(m);
 L.marker(pos).addTo(m).bindPopup(label);
}
makeMap('#mapPickup',[-26.2041,28.0473],'<b>Fairyland Cake Co.</b><br>Pickup point');
makeMap('#mapMarket',[-26.1076,28.0567],'<b>Weekend Market</b><br>Saturdays 8:00–14:00');

/* ====== FORM VALIDATION ====== */
function setErr(el,msg){
 el.classList.toggle('bad',!!msg);
 const e=el.parentElement.querySelector('.err');if(e)e.textContent=msg||'';
 return !msg;
}
const rules={
 name:v=>v.trim().length>=2?'':'Please enter your full name (min 2 characters).',
 email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)?'':'Enter a valid email address.',
 phone:v=>/^(\+27|0)[0-9]{9}$/.test(v.replace(/\s/g,''))?'':'Enter a valid SA number, e.g. 0821234567.',
 date:v=>{if(!v)return'Choose an event date.';const t=new Date();t.setHours(0,0,0,0);t.setDate(t.getDate()+3);return new Date(v)>=t?'':'We need at least 3 days notice.'},
 select:v=>v?'':'Please choose an option.',
 message:v=>v.trim().length>=10?'':'Please write at least 10 characters.'
};
function validate(form){
 let ok=true;
 form.querySelectorAll('[data-rule]').forEach(el=>{if(!setErr(el,rules[el.dataset.rule](el.value)))ok=false});
 return ok;
}
$$('form[data-validate]').forEach(f => {
    f.addEventListener('input', e => {
        if (e.target.dataset.rule) {
            setErr(e.target, rules[e.target.dataset.rule](e.target.value));
        }
    });
});
