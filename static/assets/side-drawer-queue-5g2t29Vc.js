import{b$ as x,bh as h,cx as w,cy as b,cz as g,r as o,aU as v,j as t,aJ as m,cA as D,cB as f,bI as s,cC as c,br as r}from"./index-qz_z9GmZ.js";function M(e){return x({attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M4 12l10 0"}},{tag:"path",attr:{d:"M4 12l4 4"}},{tag:"path",attr:{d:"M4 12l4 -4"}},{tag:"path",attr:{d:"M20 4l0 16"}}]})(e)}const S=s(c.div)`
    position: absolute;
    top: 50%;
    right: 25px;
    z-index: 100;
    display: flex;
    align-items: center;
    width: 20px;
    height: 30px;
    user-select: none;
`,j=s(c.div)`
    background: var(--main-bg);
    border: 3px solid var(--generic-border-color);
    border-radius: 10px;
`,A={closed:e=>({height:e===r.WINDOWS||r.MACOS?"calc(100vh - 205px)":"calc(100vh - 175px)",position:"absolute",right:0,top:"75px",transition:{duration:.4,ease:"anticipate"},width:"450px",x:"50vw"}),open:e=>({boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.8)",height:e===r.WINDOWS||r.MACOS?"calc(100vh - 205px)":"calc(100vh - 175px)",position:"absolute",right:"20px",top:"75px",transition:{damping:10,delay:0,duration:.4,ease:"anticipate",mass:.5},width:"450px",x:0,zIndex:120})},k={hidden:{opacity:0,transition:{duration:.2},x:100},visible:{opacity:.5,transition:{duration:.1,ease:"anticipate"},x:0}},y=()=>{const e=h(),[i,n]=w(!1),{rightExpanded:d}=b(),a=g(()=>n.open(),500),u=o.useCallback(()=>{a.start()},[a]),l=o.useCallback(()=>{a.clear()},[a]),p=!d&&!i&&e.pathname!==v.NOW_PLAYING;return t.jsx(t.Fragment,{children:t.jsxs(m,{initial:!1,mode:"wait",children:[p&&t.jsx(S,{animate:"visible",exit:"hidden",initial:"hidden",onMouseEnter:u,onMouseLeave:l,variants:k,whileHover:{opacity:1,scale:2,transition:{duration:.5}},children:t.jsx(M,{size:12})},"queue-drawer-button"),i&&t.jsx(j,{animate:"open",exit:"closed",initial:"closed",onMouseLeave:()=>{setTimeout(()=>{f.getState().isReorderingQueue||n.close()},50)},variants:A,children:t.jsx(D,{})},"queue-drawer")]})})};export{y as SideDrawerQueue};
//# sourceMappingURL=side-drawer-queue-5g2t29Vc.js.map
