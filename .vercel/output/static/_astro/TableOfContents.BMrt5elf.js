import{j as e}from"./jsx-runtime.Wn0ttnLL.js";import{r as u}from"./index.l-SKCh62.js";const{replace:j}="",C=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,b={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},T=n=>b[n],O=n=>j.call(n,C,T),E=({toc:n=[],isMobile:l})=>{const[x,i]=u.useState({slug:n[0]?.slug,text:n[0]?.text}),[d,g]=u.useState(!l),h="on-this-page-heading",f=({children:t})=>l?e.jsx("details",{open:d,onToggle:r=>g(r.currentTarget.open),className:"toc-mobile-container",children:t}):e.jsx(e.Fragment,{children:t});u.useEffect(()=>{const t=a=>{for(const s of a)if(s.isIntersecting){const{id:c}=s.target;if(c===h)continue;i({slug:s.target.id,text:s.target.textContent||""});break}},r={rootMargin:"-100px 0% -66%",threshold:1},o=new IntersectionObserver(t,r);return document.querySelectorAll("article :is(h1,h2,h3)").forEach(a=>o.observe(a)),()=>o.disconnect()},[]);const m=t=>{l&&(g(!1),i({slug:t.currentTarget.getAttribute("href").replace("#",""),text:t.currentTarget.textContent||""}))},p=({heading:t})=>{const{depth:r,slug:o,text:a,children:s}=t;return e.jsxs("li",{children:[e.jsx("a",{className:`header-link depth-${r} text-sm ${x.slug===o?"text-foreground":"text-foreground/60"}`.trim(),href:`#${o}`,onClick:m,children:O(a)}),s.length>0?e.jsx("ul",{children:s.map(c=>e.jsx(p,{heading:c},c.slug))}):null]})};return e.jsx(f,{children:e.jsx("ul",{className:"toc space-y-2",children:n.map(t=>e.jsx(p,{heading:t},t.slug))})})};export{E as default};
