import{h as p,e as _,o as e,c as i,b as t,F as u,r as m,n as h,t as a,k as v,d as f,u as d,l as g}from"./index-6b3f46e6.js";import{u as x}from"./index-937c48dc.js";const S={class:"row footer slideInRight"},b={class:"col-lg-4"},$={class:"footer-nav"},L=["onClick"],y=["src"],M={class:"col-lg-4"},w={key:0},q={class:"col-lg-4"},T={key:0,class:"plan-feature-stats"},I=["src"],R={style:{"white-space":"nowrap"}},D={__name:"TimerFooter",setup(n){p(()=>{s.value=l.value[0]});const s=_(null),l=_([{title:{icon:"server.svg",text:"Pre Sale Access NFT Mint"},description:"Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",stats:[{icon:"avax.svg",text:"2.5 AVAX"},{icon:"arrow_top.svg",text:"MAX: 5"}]},{title:{icon:"flag.svg",text:"Pre Sale Starts"},description:"Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",stats:[{icon:"dollar.svg",text:"0.2 USD"},{icon:"arrow_top.svg",text:"Max: NFT Rarity"}]},{title:{icon:"globe.svg",text:"Public Sale Starts"},description:"Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",stats:[{icon:"dollar.svg",text:"0.30 USD"},{icon:"arrow_top.svg",text:"Max: Unlimited"}]}]);return(r,c)=>(e(),i("div",S,[t("div",b,[t("ul",$,[(e(!0),i(u,null,m(l.value,o=>(e(),i("li",{class:h({active:o==s.value}),onClick:at=>s.value=o},[t("img",{src:`./../src/assets/img/${o.title.icon}`,alt:""},null,8,y),t("span",null,a(o.title.text),1)],10,L))),256))])]),t("div",M,[s.value?(e(),i("p",w,a(s.value.description),1)):v("",!0)]),t("div",q,[s.value?(e(),i("div",T,[(e(!0),i(u,null,m(s.value.stats,o=>(e(),i("div",null,[t("img",{src:`./../src/assets/img/${o.icon}`,alt:""},null,8,I),t("span",R,a(o.text),1)]))),256))])):v("",!0)])]))}},N={class:"timer-wrapper"},U={class:"bp-timer mb-5"},k=t("div",{class:"underlay"},null,-1),A={class:"bp-timer-title px-lg-4"},F=["innerHTML"],P=["src"],C={class:"bp-timer-date"},V={class:"bp-timer-timer"},j={class:"number"},B=t("div",{class:"label"}," days ",-1),H={class:"number"},Y=t("div",{class:"label"}," hours ",-1),X={class:"number"},E=t("div",{class:"label"}," min. ",-1),z={class:"number"},O=t("div",{class:"label"}," sec. ",-1),W={class:"bp-timer-stats"},G={class:"col-lg-6"},J=["src"],K={class:"col-lg-6"},Q={__name:"Timer",props:{targetDate:{type:String,default:"2023-01-30"},title:{type:String,default:""},statLeft:String,statRight:String,icon:String,statLeftIcon:String},setup(n){const s=x(),l=dayjs("2023-02-30"),r=f(()=>l.isBefore(s.value)?dayjs.duration(0):dayjs.duration(l.diff(s.value)));return(c,o)=>(e(),i("div",N,[t("div",U,[k,t("div",A,[t("span",{innerHTML:n.title},null,8,F),t("img",{src:"/"+n.icon},null,8,P)]),t("div",C,a(d(l).format("DD MMMM YYYY, HH:mm"))+" EST ",1),t("div",V,[t("div",null,[t("div",j,a(String(Math.floor(d(r).asDays())).padStart(2,"0")),1),B]),t("div",null,[t("div",H,a(String(d(r).$d.hours).padStart(2,"0")),1),Y]),t("div",null,[t("div",X,a(String(d(r).$d.minutes).padStart(2,"0")),1),E]),t("div",null,[t("div",z,a(String(d(r).$d.seconds).padStart(2,"0")),1),O])]),t("div",W,[t("div",G,[t("img",{src:`/${n.statLeftIcon}`},null,8,J),t("span",null,a(n.statLeft),1)]),t("div",K,a(n.statRight),1)])])]))}},Z={class:"container main-content",style:{"padding-top":"50px"}},tt={class:"col-lg-10 p-0 mx-auto slideOutTop"},st={class:"row slideInTop"},et={class:"col-lg-4 d-flex flex-column align-items-center justify-content-center"},it=t("div",{class:"cta-container"},[t("a",{href:"#",class:"btn-cta cristal"},"Connect Wallet")],-1),lt={__name:"Timers",setup(n){const s=[{title:"Pre Sale Access NFT Mint",statLeft:"2.5 AVAX",statRight:"Max: 5",icon:"server.svg",statLeftIcon:"avax.svg"},{title:"Pre Sale <br> Starts",statLeft:"0.20 USD",statRight:"Max: NFT Rarity",icon:"flag.svg",statLeftIcon:"dollar.svg"},{title:"Public Sale <br> Starts",statLeft:"0.30",statRight:"Max: Unlimited",icon:"globe.svg",statLeftIcon:"dollar.svg"}];return(l,r)=>(e(),i("div",Z,[t("div",tt,[t("div",st,[(e(),i(u,null,m(s,c=>t("div",et,[g(Q,{"target-date":"2024-01-01",title:c.title,icon:c.icon,statLeft:c.statLeft,statRight:c.statRight,statLeftIcon:c.statLeftIcon},null,8,["title","icon","statLeft","statRight","statLeftIcon"]),it])),64))]),g(D)])]))}};export{lt as default};
