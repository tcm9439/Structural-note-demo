import{C as o,r as u,D as f,E as d,F as v,G as l,e as i,H as h,I as m}from"./entry.36e81a40.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:d(a)});const r=t.push(n.value,e);return v(n,c=>{r.patch(c)}),l()&&(i(()=>{r.dispose()}),h(()=>{s.value=!0}),m(()=>{s.value=!1})),r}export{U as u};