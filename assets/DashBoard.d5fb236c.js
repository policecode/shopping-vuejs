import{r as b,J as g,_ as u,u as k,a as $,e as h,o as m,c as f,b as s,n as i,p as r,g as l,d as w,m as c,K as I}from"./index.7802f190.js";const d=b({routeIcon:""});function C(e){d.routeIcon==e?d.routeIcon="":d.routeIcon=e}async function B(){const e=g,o=localStorage.getItem("token-login")?JSON.parse(localStorage.getItem("token-login")):"";return(await fetch(e,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:o},redirect:"follow",referrerPolicy:"no-referrer"})).json()}function y(e,o){B().then(t=>{e.dispatch("deleteTokenLogin"),o.push({name:"login"})}).catch(t=>console.log(t))}const T={setup(){const e=k(),o=$();return{store:e,router:o,...{event:d,handleClickBtn:C},...{handleLogout:y}}}},S={class:"sidebar"},L=s("div",{class:"sidebar__title"},[s("h3",null,"ADMIN")],-1),E=s("div",{class:"sidebar__user"},[s("img",{src:"https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",alt:""}),s("span",null,"My admin")],-1),N=s("div",{class:"sidebar__icon"},[s("i",{class:"fas fa-chevron-down"})],-1),j=[E,N],M=s("i",{class:"fas fa-user-md"},null,-1),A=c(" Dashboard "),D=s("i",{class:"fas fa-sign-out-alt"},null,-1),G=c(" Logout "),O=[D,G],V=s("div",{class:"sidebar__user"},[s("img",{src:"https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",alt:""}),s("span",null,"C\xE0i \u0111\u1EB7t")],-1),z=s("div",{class:"sidebar__icon"},[s("i",{class:"fas fa-chevron-down"})],-1),H=[V,z],J=s("i",{class:"fas fa-user-md"},null,-1),P=c(" Th\xF4ng tin li\xEAn h\u1EC7 "),R=s("i",{class:"fas fa-user-md"},null,-1),U=c(" Menu ");function K(e,o,t,a,p,v){const n=h("router-link");return m(),f("div",S,[L,s("div",{class:i(["sidebar__title",{active:e.event.routeIcon=="myprofile"}])},[s("div",{class:"sidebar__myadmin",onClick:o[0]||(o[0]=_=>e.handleClickBtn("myprofile"))},j),s("div",{class:i(["sidebar__dropdown",{dropdown:e.event.routeIcon=="myprofile"}])},[r(n,{to:{name:"dashboad"},class:"sidebar__link"},{default:l(()=>[M,A]),_:1}),s("a",{onClick:o[1]||(o[1]=w(_=>e.handleLogout(a.store,a.router),["prevent"])),class:"sidebar__link"},O)],2)],2),s("div",{class:i(["sidebar__title",{active:e.event.routeIcon=="settings"}])},[s("div",{class:"sidebar__myadmin",onClick:o[2]||(o[2]=_=>e.handleClickBtn("settings"))},H),s("div",{class:i(["sidebar__dropdown",{dropdown:e.event.routeIcon=="settings"}])},[r(n,{to:{name:"settings"},class:"sidebar__link"},{default:l(()=>[J,P]),_:1}),r(n,{to:{name:"menus"},class:"sidebar__link"},{default:l(()=>[R,U]),_:1})],2)],2)])}const q=u(T,[["render",K]]),F={components:{SideBar:q}},Q={class:"container-fluid"},W={class:"row"},X={class:"col-md-3"},Y={class:"col-md-9"};function Z(e,o,t,a,p,v){const n=h("SideBar");return m(),f("div",Q,[s("div",W,[s("div",X,[r(n)]),s("div",Y,[I(e.$slots,"default")])])])}const ss=u(F,[["render",Z]]);export{ss as default};
