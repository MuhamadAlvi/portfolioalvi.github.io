const IM={kucoba:"images/kucoba.jpg",tomodachi:"images/tomodachi.jpg",algorithm:"images/algorithm.jpg",hompimpah:"images/hompimpah.jpg",garut:"images/garut.jpg",ekraf:"images/ekraf.jpg",cangkuang:"images/cangkuang.jpg",stunting:"images/stunting.jpg",fpik:"images/fpik.jpg",catatan:"images/catatan.jpg",adiwiyata:"images/adiwiyata.jpg",sdn:"images/sdn.jpg"};
const yt=id=>"https://www.youtube.com/watch?v="+id;
const V=[
["Profil Garut Kota Kreatif","Videographer & Editor","Video profil Garut untuk ajang Kota Kreatif yang diselenggarakan Kemenparekraf.","p","garut",yt("v7ZtA10VzCU"),"Video terbaik, Kemenparekraf"],
["Profil Ekonomi Kreatif Garut","Videographer & Editor","Mempromosikan sektor ekonomi kreatif Garut yang sedang berkembang.","p","ekraf",yt("LccfblWtdBI")],
["Profil Candi & Situ Cangkuang","Videographer & Editor","Video profil wisata dan ekonomi kreatif di sekitar Candi dan Situ Cangkuang, Garut.","p","cangkuang",yt("azcJrDlgni0")],
["Company Profile FPIK Universitas Garut","Editor","Video profil Fakultas Pendidikan Ilmu Keguruan Universitas Garut.","p","fpik","https://www.instagram.com/p/Dfj_GJOsutx/"],
["Profil Stunting, Dinas Kesehatan Garut","Videographer","Video keberhasilan Kabupaten Garut menurunkan kasus stunting.","p","stunting",yt("CIPshfmzuR4&t=64s")],
["Catatan Akhir Sekolah SMAN 25 Garut","DOP & Editor","Kenangan terakhir untuk angkatan Astada Prakasha.","p","catatan","https://youtu.be/lzxJUYSjPG8"],
["MV Errival, “Kucoba Lagi Cerita Kemarin”","Director of Photography","Music video resmi untuk Errival.","d","kucoba",yt("9ESE70LaqYE")],
["Team Tomodachi (TikTok Remix)","Crew","Produksi video musik remix oleh para TikToker.","d","tomodachi",yt("uSJHsxkq5tg")],
["The Algorithm’s Journey","2nd Assistant Camera & Behind The Scene","Post wedding film Leyla & Aldo.","d","algorithm",yt("xaUlo24-NKI")],
["Hompimpah Series","Assistant Camera & Gaffer","Produksi series Hompimpah oleh Leyla, Aldo, Aganta & Aulion.","d","hompimpah","https://www.instagram.com/the_hompimpah/"],
["Penghargaan Sertifikat Adiwiyata 2026","Videographer & Editor","Dokumentasi pemberian penghargaan Adiwiyata oleh Bakti Barito.","d","adiwiyata",yt("yI418zOdPuw")],
["Peresmian Wajah Baru SDN 3 Sukanegla","Editor","Dokumentasi peresmian SDN 3 Sukanegla oleh Bakti Barito.","d","sdn",yt("_cbXnNCo8yM")]];
const CI={a:["images/a1.jpg","images/a2.jpg","images/a3.jpg","images/a4.jpg"],l:["images/l1.jpg","images/l2.jpg","images/l3.jpg","images/l4.jpg"],s:["images/s1.jpg","images/s2.jpg","images/s3.jpg","images/s4.jpg"],t:["images/t1.jpg","images/t2.jpg","images/t3.jpg","images/t4.jpg"],p:["images/p1.jpg","images/p2.jpg","images/p3.jpg","images/p4.jpg"]};
const C=[["@aldogiustino","Content creator","a",[173100,967000,126000,2200000],["Instagram|https://www.instagram.com/aldogiustino/","TikTok|https://www.tiktok.com/@aldogiustino21","YouTube|https://www.youtube.com/@aldogiustino"]],
["@leyladerina","Content creator","l",[1100000,483000,364000,1500000],["Instagram|https://www.instagram.com/leyladerina/","TikTok|https://www.tiktok.com/@leyladerina","YouTube|https://www.youtube.com/@leyladerina"]],
["@sofarsabi","Content creator","s",[335000,713000,742000,2400000],["Instagram|https://www.instagram.com/sofarsabi","TikTok|https://www.tiktok.com/@sofarsabi","YouTube|https://www.youtube.com/@SOFARSABI"]],
["Atvaja.id","Brand, rental ATV","t",[20500,13200,38200,null],["Instagram|https://www.instagram.com/atvaja.id/"]],
["Popocamera","Brand, kamera & aksesori","p",[2994,4334,1915,2971],["Instagram|https://www.instagram.com/popocamera_/"]]];
function fmt(n,d){if(n>=1e6)return(+(n/1e6).toFixed(d)).toString().replace(".",",")+" jt";if(n>=1e4)return(+(n/1e3).toFixed(d)).toString().replace(".",",")+" rb";return Math.round(n).toLocaleString("id-ID")}
const G=["linear-gradient(135deg,#2A2A9C,#6C5CFF)","linear-gradient(135deg,#0F1544,#2A2A9C)","linear-gradient(135deg,#6C5CFF,#C8F53A)","linear-gradient(135deg,#2A2A9C,#FFD23F)"];
const vg=document.getElementById("vg");
V.forEach((v,i)=>{const d=document.createElement("div");d.className="card";d.dataset.c=v[3];d.setAttribute("data-r","");d.style.setProperty("--d",(i%3)*90);
d.innerHTML=`<a class="tilt" href="${v[5]}" target="_blank" rel="noopener" aria-label="Tonton ${v[0]}"><div class="th" style="--g:${G[i%4]}"><img src="${IM[v[4]]}" alt="" loading="lazy"><i class="pl"></i><span class="role">${v[1]}</span>${v[6]?`<span class="aw">${v[6]}</span>`:""}</div><div class="tx"><h3>${v[0]}</h3><p>${v[2]}</p><span class="more">Tonton <span>↗</span></span></div></a>`;vg.appendChild(d)});
const ct=document.getElementById("ct"),dots=document.getElementById("dots"),pv=document.getElementById("pv"),nx=document.getElementById("nx");
C.forEach((c,i)=>{const tot=c[3].reduce((x,y)=>x+(y||0),0),n=c[3].filter(Boolean).length;const d=document.createElement("article");d.className="sl";d.dataset.tot=tot;
d.innerHTML=`<div class="sh"><div><h3>${c[0]}</h3><small>${c[1]}</small></div><div class="tot"><b>0</b><span>total view dari ${n} konten</span></div></div><div class="tg">${c[3].map((v,k)=>`<div><img src="${CI[c[2]][k]}" alt="Konten ${c[0]} ${k+1}" loading="lazy" draggable="false">${v?`<span class="vw">${fmt(v,1)}</span>`:""}</div>`).join("")}</div><div class="soc">${c[4].map(s=>{const[a,b]=s.split("|");return`<a href="${b}" target="_blank" rel="noopener">${a}</a>`}).join("")}</div>`;ct.appendChild(d);
const b=document.createElement("button");b.setAttribute("aria-label","Kartu "+(i+1));b.onclick=()=>go(i);dots.appendChild(b)});
const sl=[...ct.children],db=[...dots.children];let cur=-1,did=new Set();
function cup(i){const el=sl[i].querySelector(".tot b"),T=+sl[i].dataset.tot;if(did.has(i))return;did.add(i);if(R){el.textContent=fmt(T,2);return}const t0=performance.now();(function f(x){const p=Math.min((x-t0)/1500,1);el.textContent=fmt(T*(1-Math.pow(1-p,3)),2);if(p<1)requestAnimationFrame(f)})(t0)}
function setA(i){if(i===cur)return;cur=i;sl.forEach((s,k)=>s.classList.toggle("act",k===i));db.forEach((b,k)=>b.classList.toggle("on",k===i));pv.disabled=i===0;nx.disabled=i===sl.length-1;cup(i)}
function go(i){i=Math.max(0,Math.min(sl.length-1,i));ct.scrollTo({left:sl[i].offsetLeft,behavior:R?"auto":"smooth"})}
function near(){let b=0,m=1e9;sl.forEach((s,k)=>{const d=Math.abs(s.offsetLeft-ct.scrollLeft);if(d<m){m=d;b=k}});if(ct.scrollLeft+ct.clientWidth>=ct.scrollWidth-4)b=sl.length-1;return b}
let q2=false;ct.addEventListener("scroll",()=>{if(!q2){q2=true;requestAnimationFrame(()=>{q2=false;setA(near())})}},{passive:true});
pv.onclick=()=>go(near()-1);nx.onclick=()=>go(near()+1);
ct.addEventListener("keydown",e=>{if(e.key==="ArrowRight"){e.preventDefault();go(near()+1)}if(e.key==="ArrowLeft"){e.preventDefault();go(near()-1)}});
let dx=0,sx=0,ss=0,mv=false;ct.addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse"||e.target.closest("a"))return;dx=1;sx=e.clientX;ss=ct.scrollLeft;mv=false});
addEventListener("pointermove",e=>{if(!dx)return;const d=e.clientX-sx;if(Math.abs(d)>4){mv=true;ct.classList.add("drag")}if(mv)ct.scrollLeft=ss-d});
addEventListener("pointerup",()=>{if(!dx)return;dx=0;if(mv){ct.classList.remove("drag");go(near())}});
new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){setA(near());o.disconnect()}},{threshold:.3}).observe(ct);

const R=matchMedia("(prefers-reduced-motion:reduce)").matches,fine=matchMedia("(pointer:fine)").matches;
const cnt=document.getElementById("cnt");
function start(){document.body.classList.add("go");setTimeout(()=>document.body.classList.remove("lock"),900)}
if(R){cnt.textContent="";start()}else{let t0=performance.now();(function f(n){const p=Math.min((n-t0)/1300,1);cnt.textContent=Math.round(p*100);p<1?requestAnimationFrame(f):setTimeout(start,200)})(t0)}

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("v");io.unobserve(e.target);if(e.target.querySelector("[data-n]"))count(e.target)}}),{threshold:.15,rootMargin:"0px 0px -6% 0px"});
document.querySelectorAll("[data-r]").forEach(el=>io.observe(el));
function count(root){root.querySelectorAll("[data-n]").forEach(el=>{const n=+el.dataset.n,t0=performance.now();(function f(x){const p=Math.min((x-t0)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)})}

document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tabs button").forEach(x=>x.classList.toggle("on",x===b));const f=b.dataset.f;const cs=[...vg.children];cs.forEach(c=>{if(f==="all"||c.dataset.c===f){c.classList.remove("gone");requestAnimationFrame(()=>requestAnimationFrame(()=>c.classList.remove("out")))}else{c.classList.add("out");setTimeout(()=>{if(c.classList.contains("out"))c.classList.add("gone")},450)}})});

const nav=document.getElementById("nav"),bar=document.getElementById("bar"),tl=document.getElementById("tl"),st=document.getElementById("steps"),steps=[...st.children],links=[...document.querySelectorAll("nav ul a")],secs=links.map(a=>document.querySelector(a.hash)),pimg=document.getElementById("pimg");
let ly=0,tk=false;
function prog(el,k){const r=el.getBoundingClientRect(),h=innerHeight;return Math.max(0,Math.min(1,(h*k-r.top)/(r.height+h*.1)))}
function upd(){tk=false;const y=scrollY,m=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${m>0?y/m:0})`;nav.classList.toggle("s",y>40);nav.classList.toggle("h",y>ly&&y>400);ly=y;
tl.style.setProperty("--p",prog(tl,.8));const p=prog(st,.75);st.style.setProperty("--p",p);steps.forEach((s,i)=>s.classList.toggle("on",p>=i/steps.length+.04));
let cur=-1;secs.forEach((s,i)=>{const r=s.getBoundingClientRect();if(r.top<innerHeight*.4&&r.bottom>innerHeight*.4)cur=i});links.forEach((a,i)=>a.classList.toggle("on",i===cur))}
addEventListener("scroll",()=>{if(!tk){tk=true;requestAnimationFrame(upd)}},{passive:true});upd();

const tc=document.getElementById("tc"),t1=performance.now();setInterval(()=>{const s=Math.floor((performance.now()-t1)/1000),p=n=>String(n).padStart(2,"0");tc.textContent=`REC ${p(Math.floor(s/3600))}:${p(Math.floor(s/60)%60)}:${p(s%60)}`},1000);

if(fine&&!R){const g=document.getElementById("glow");let gx=innerWidth/2,gy=innerHeight/2,tx=gx,ty=gy;addEventListener("pointermove",e=>{tx=e.clientX;ty=e.clientY;const h=document.querySelector(".hero").getBoundingClientRect();if(h.bottom>0)pimg.style.transform=`translate(${(e.clientX/innerWidth-.5)*-14}px,${(e.clientY/innerHeight-.5)*-10}px) scale(1.06)`});
(function l(){gx+=(tx-gx)*.08;gy+=(ty-gy)*.08;g.style.transform=`translate(${gx}px,${gy}px)`;requestAnimationFrame(l)})();
document.addEventListener("pointermove",e=>{const t=e.target.closest&&e.target.closest(".tilt");if(t){const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.setProperty("--ry",x*8+"deg");t.style.setProperty("--rx",y*-8+"deg")}});
document.addEventListener("pointerout",e=>{const t=e.target.closest&&e.target.closest(".tilt");if(t){t.style.setProperty("--rx","0deg");t.style.setProperty("--ry","0deg")}});
document.querySelectorAll(".mag").forEach(b=>{b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener("pointerleave",()=>b.style.transform="")})}

const toast=document.getElementById("toast");document.getElementById("mail").onclick=async()=>{const e="malvi4160@gmail.com";try{await navigator.clipboard.writeText(e);toast.textContent="Email disalin"}catch(_){toast.textContent=e;location.href="mailto:"+e}toast.classList.add("on");setTimeout(()=>toast.classList.remove("on"),2200)};
