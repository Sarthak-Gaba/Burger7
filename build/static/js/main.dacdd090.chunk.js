(this.webpackJsonpburger7=this.webpackJsonpburger7||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"m",(function(){return a})),n.d(t,"o",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"f",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return f})),n.d(t,"n",(function(){return b}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="LOAD_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="FETCH_ORDERS_START",d="FETCH_ORDERS_SUCCESS",p="FETCH_ORDERS_FAIL",h="AUTH_START",m="AUTH_SUCCESS",g="AUTH_FAIL",f="AUTH_LOGOUT",b="SET_AUTH_REDIRECT_PATH"},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"i",(function(){return b})),n.d(t,"c",(function(){return v}));var r=n(1),a=n(17),o=function(e){return{type:r.a,ingredientType:e}},i=function(e){return{type:r.m,ingredientType:e}},c=function(){return function(e){a.a.get("/ingredient.json").then((function(t){var n;e((n=t.data,{type:r.o,ingredients:n}))})).catch((function(t){e({type:r.i})}))}},u=n(13),l=function(e,t,n){return function(o){o({type:r.k}),a.a.post("/orders.json?auth="+n,e).then((function(n){o(function(e,t){return{type:r.l,orderId:e,orderData:t}}(n.data.name,e)),t.push("/")})).catch((function(e){!function(e){r.j}(e)}))}},s=function(e,t){return function(n){n({type:r.g}),console.log(t);var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then((function(e){var t=[];for(var a in e.data)t.push(Object(u.a)(Object(u.a)({},e.data[a]),{},{id:a}));n(function(e){return{type:r.h,orders:e}}(t))})).catch((function(e){n(function(e){return{type:r.f,error:e}}(e))}))}},d=n(29),p=n.n(d),h=function(e,t){return{type:r.e,tokenId:e,userId:t}},m=function(){return localStorage.removeItem("token"),localStorage.removeItem("localId"),localStorage.removeItem("expirationDate"),{type:r.c}},g=function(e){return function(t){setTimeout((function(){t(m())}),1e3*e)}},f=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhB6O7Yaj2yr8QQMQWBEpH1oEUtsU55BE";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhB6O7Yaj2yr8QQMQWBEpH1oEUtsU55BE"),p.a.post(i,o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("localId",e.data.localId),a(h(e.data.idToken,e.data.localId)),a(g(e.data.expiresIn))})).catch((function(e){var t;console.log(e.response),a((t=e.response.data.error.message,{type:r.b,error:t}))}))}},b=function(e){return{type:r.n,path:e}},v=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n>new Date){var r=localStorage.getItem("localId");e(h(t,r)),e(g((n.getTime()-(new Date).getTime())/1e3))}else e(m())}else e(m())}}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1lPz_",BreadTop:"BurgerIngredient_BreadTop__84bNN",Seeds1:"BurgerIngredient_Seeds1__2f9YH",Seeds2:"BurgerIngredient_Seeds2__2EVNo",Meat:"BurgerIngredient_Meat__j1sTq",Cheese:"BurgerIngredient_Cheese__2fwWk",Salad:"BurgerIngredient_Salad__rCeeP",Bacon:"BurgerIngredient_Bacon__5Vf2x"}},function(e,t,n){"use strict";var r=n(29),a=n.n(r).a.create({baseURL:"https://burger7-sarthak.firebaseio.com"});t.a=a},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1PKge",Open:"SideDrawer_Open__1VY7J",Close:"SideDrawer_Close__3JvE6",Logo:"SideDrawer_Logo__icxqH"}},,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__25sYX",Logo:"Toolbar_Logo__1krR4",DesktopOnly:"Toolbar_DesktopOnly__NC1V6",MobileOnly:"Toolbar_MobileOnly__14Vbr"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__10b4h",Label:"BuildControl_Label__3y18K",Less:"BuildControl_Less__lFDST",More:"BuildControl_More__2Rfat"}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(59),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clickedBD}):null}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(0),u=n.n(c),l=n(61),s=n.n(l),d=n(9),p=n(30),h=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.show!==e.show||e.children!==this.props.children}},{key:"render",value:function(){return u.a.createElement(d.a,null,u.a.createElement(p.a,{show:this.props.show,clickedBD:this.props.clickedBD}),u.a.createElement("div",{className:s.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(c.Component);t.a=h},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(40),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,function(e,t,n){"use strict";var r=n(63),a=n(0),o=n.n(a),i=n(60),c=n.n(i),u=n(16),l=n.n(u),s=function(e){var t=null;switch(e.type){case"bread-bottom":t=o.a.createElement("div",{className:l.a.BreadBottom});break;case"bread-top":t=o.a.createElement("div",{className:l.a.BreadTop},o.a.createElement("div",{className:l.a.Seeds1}),o.a.createElement("div",{className:l.a.Seeds2}));break;case"meat":t=o.a.createElement("div",{className:l.a.Meat});break;case"cheese":t=o.a.createElement("div",{className:l.a.Cheese});break;case"salad":t=o.a.createElement("div",{className:l.a.Salad});break;case"bacon":t=o.a.createElement("div",{className:l.a.Bacon});break;default:t=null}return t};t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(s,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Start adding ingredients!")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(s,{type:"bread-top"}),t,o.a.createElement(s,{type:"bread-bottom"}))}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__7osV9",active:"NavigationItem_active__3QHQ6"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__gEkt8",OrderButton:"BuildControls_OrderButton__L9RdI",enable:"BuildControls_enable__3Ggdj"}},function(e,t,n){e.exports={Button:"Button_Button__PSPOK",Success:"Button_Success__1QVcH",Danger:"Button_Danger__1Wf6v"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(62),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(0),u=n.n(c),l=n(9),s=n(31);t.a=function(e,t){return function(n){Object(o.a)(d,n);var c=Object(i.a)(d);function d(){var e;Object(r.a)(this,d);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=c.call.apply(c,[this].concat(n))).state={error:null},e.errorClickHandler=function(){e.setState({error:!1})},e}return Object(a.a)(d,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return u.a.createElement(l.a,null,u.a.createElement(s.a,{show:this.state.error,clickedBD:this.errorClickHandler},this.state.error?this.state.error.message:null),u.a.createElement(e,this.props))}}]),d}(c.Component)}},,,,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__2q529"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__3SRQb"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems___AGVF"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1D0tk"}},function(e,t,n){e.exports={Burger:"Burger_Burger__1uUrK"}},function(e,t,n){e.exports={Modal:"Modal_Modal__2SdkH"}},function(e,t,n){e.exports={Loader:"Spinner_Loader___t5mP",load6:"Spinner_load6__1WbYP",round:"Spinner_round__3Se3z"}},,function(e,t,n){e.exports=n(92)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(27),i=n.n(o),c=n(18),u=n(14),l=n(54),s=(n(73),n(4)),d=n(5),p=n(7),h=n(6),m=function(e){return function(t){Object(p.a)(r,t);var n=Object(h.a)(r);function r(){var e;Object(s.a)(this,r);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={component:null},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),r}(r.Component)},g=n(15),f=n(9),b=n(55),v=n.n(b),E=n(25),_=n.n(E),I=n(56),y=n.n(I),k=n(57),S=n.n(k),w=function(){return a.a.createElement("div",{className:S.a.Logo},a.a.createElement("img",{src:y.a,alt:"Burger7"}))},B=n(58),j=n.n(B),C=n(20),O=n(36),T=n.n(O),D=function(e){return a.a.createElement("li",{className:T.a.NavigationItem},a.a.createElement(C.b,{to:e.link,exact:e.exact,activeClassName:T.a.active},e.children))},N=function(e){return a.a.createElement("ul",{className:j.a.NavigationItems},a.a.createElement(D,{link:"/",exact:!0},"Burger Builder"),e.isAuth?a.a.createElement(D,{link:"/orders"},"Orders"):null,e.isAuth?a.a.createElement(D,{link:"/logout"},"Logout"):a.a.createElement(D,{link:"/auth"},"Authentication"))},A=function(e){return a.a.createElement("header",{className:_.a.Toolbar},a.a.createElement("img",{onClick:e.clicked,className:_.a.MobileOnly,style:{margin:0},alt:"svgImg",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDUiIGhlaWdodD0iNDUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTIxLjUsNzguODMzMzNoMTI5djE0LjMzMzMzaC0xMjl6TTIxLjUsMzUuODMzMzNoMTI5djE0LjMzMzMzaC0xMjl6TTIxLjUsMTIxLjgzMzMzaDEyOXYxNC4zMzMzM2gtMTI5eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"}),a.a.createElement("div",{className:_.a.Logo},a.a.createElement(w,null)),a.a.createElement("nav",{className:_.a.DesktopOnly},a.a.createElement(N,{isAuth:e.isAuth})))},M=n(22),L=n.n(M),P=n(30),R=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.show&&(t=[L.a.SideDrawer,L.a.Open]),a.a.createElement(f.a,null,a.a.createElement(P.a,{show:e.show,clickedBD:e.clicked}),a.a.createElement("div",{className:t.join(" "),onClick:e.clicked},a.a.createElement("div",{className:L.a.Logo},a.a.createElement(w,null)),a.a.createElement("nav",null,a.a.createElement(N,{isAuth:e.isAuth}))))},x=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.showSideDrawerHandler=function(){e.setState({showSideDrawer:!1})},e.toggleSideDrawer=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(f.a,null,a.a.createElement(A,{isAuth:this.props.isAuth,clicked:this.toggleSideDrawer}),a.a.createElement(R,{isAuth:this.props.isAuth,show:this.state.showSideDrawer,clicked:this.showSideDrawerHandler}),a.a.createElement("main",{className:v.a.Content},this.props.children))}}]),n}(r.Component),U=Object(u.b)((function(e){return{isAuth:null!==e.auth.tokenId}}))(x),z=n(13),H=n(34),Z=n(39),G=n.n(Z),W=n(26),Y=n.n(W),J=function(e){return a.a.createElement("div",{className:Y.a.BuildControl},a.a.createElement("div",{className:Y.a.Label},e.label),a.a.createElement("button",{className:Y.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:Y.a.More,onClick:e.added},"More"))},Q=[{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"},{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"}],X=function(e){return a.a.createElement("div",{className:G.a.BuildControls},a.a.createElement("p",null,"Current price: ",a.a.createElement("strong",null,e.price)),Q.map((function(t){return a.a.createElement(J,{key:t.label,label:t.label,added:function(){return e.added(t.type)},removed:function(){return e.removed(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:G.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"Order":"SignUp to order"))},F=n(31),V=n(32),q=function(e){var t=Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return a.a.createElement(f.a,null,a.a.createElement("h3",null,"Order Details"),a.a.createElement("p",null,"Here is the summary of your delicious burger"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total price: ",e.price)),a.a.createElement("p",null,"Continue to checkout!"),a.a.createElement(V.a,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),a.a.createElement(V.a,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},K=n(17),$=n(41),ee=n(42),te=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.isPurchasable=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},e.updatePurchasing=function(){e.props.isAuth?e.setState({purchasing:!0}):(e.props.AuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.cancelPurchasing=function(){e.setState({purchasing:!1})},e.continuePurchasing=function(){e.props.history.push("/checkout")},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.SetIngredient()}},{key:"render",value:function(){var e=this,t=Object(z.a)({},this.props.ingredients);for(var n in t)t[n]=t[n]<=0;var r=this.props.error?a.a.createElement("p",null,"Something went wrong"):a.a.createElement($.a,null),o=null;return this.props.ingredients&&(r=a.a.createElement(f.a,null,a.a.createElement(H.a,{ingredients:this.props.ingredients}),a.a.createElement(X,{added:function(t){return e.props.AddIngredient(t)},removed:function(t){return e.props.RemoveIngredient(t)},purchasable:this.isPurchasable(this.props.ingredients),disabled:t,price:this.props.totalPrice,ordered:this.updatePurchasing,isAuth:this.props.isAuth})),o=a.a.createElement(q,{price:this.props.totalPrice,purchaseCancelled:this.cancelPurchasing,purchaseContinued:this.continuePurchasing,ingredients:this.props.ingredients})),a.a.createElement(f.a,null,a.a.createElement(F.a,{clickedBD:this.cancelPurchasing,show:this.state.purchasing},o),r)}}]),n}(r.Component),ne=Object(u.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,error:e.order.loading,isAuth:null!==e.auth.tokenId}}),(function(e){return{AddIngredient:function(t){return e(g.a(t))},RemoveIngredient:function(t){return e(g.h(t))},SetIngredient:function(){return e(g.f())},AuthRedirectPath:function(t){return e(g.i(t))}}}))(Object(ee.a)(te,K.a)),re=n(2),ae=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).props.onLogout(),r}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(re.a,{to:"/"})}}]),n}(r.Component),oe=Object(u.b)(null,(function(e){return{onLogout:function(){return e(g.d())}}}))(ae),ie=m((function(){return n.e(3).then(n.bind(null,100))})),ce=m((function(){return n.e(5).then(n.bind(null,101))})),ue=m((function(){return n.e(4).then(n.bind(null,99))})),le=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onCheckAuth()}},{key:"render",value:function(){var e=a.a.createElement(re.d,null,a.a.createElement(re.b,{path:"/auth",component:ue}),a.a.createElement(re.b,{path:"/",component:ne}),a.a.createElement(re.a,{to:"/"}));return this.props.isAuth&&(e=a.a.createElement(re.d,null,a.a.createElement(re.b,{path:"/checkout",component:ie}),a.a.createElement(re.b,{path:"/orders",component:ce}),a.a.createElement(re.b,{path:"/auth",component:ue}),a.a.createElement(re.b,{path:"/logout",component:oe}),a.a.createElement(re.b,{path:"/",component:ne}),a.a.createElement(re.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(U,null,e))}}]),n}(r.Component),se=Object(u.b)((function(e){return{isAuth:null!==e.auth.tokenId}}),(function(e){return{onCheckAuth:function(){return e(g.c())}}}))(le),de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var he=n(24),me=n(1),ge=function(e,t){return Object(z.a)(Object(z.a)({},e),t)},fe={ingredients:null,totalPrice:40,error:!1,building:!1},be={cheese:40,meat:50,salad:30,bacon:60},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me.a:var n=Object(he.a)({},t.ingredientType,e.ingredients[t.ingredientType]+1),r=ge(e.ingredients,n),a=e.totalPrice+be[t.ingredientType],o={totalPrice:a,ingredients:r,building:!0};return ge(e,o);case me.m:var i=Object(he.a)({},t.ingredientType,e.ingredients[t.ingredientType]-1),c=ge(e.ingredients,i),u=e.totalPrice-be[t.ingredientType],l={totalPrice:u,ingredients:c,building:!0};return ge(e,l);case me.o:return ge(e,{ingredients:t.ingredients,totalPrice:40,error:!1,building:!1});case me.i:return ge(e,{error:!0});default:return e}},Ee={orders:[],loading:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me.k:return ge(e,{loading:!0});case me.l:var n=Object(z.a)(Object(z.a)({},t.orderData),{},{id:t.orderId}),r=e.orders.concat(n);return ge(e,{orders:r,loading:!1});case me.j:return ge(e,{loading:!1});case me.g:return ge(e,{loading:!0});case me.h:return ge(e,{orders:t.orders,loading:!1});case me.f:return ge(e,{loading:!1});default:return e}},Ie={tokenId:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me.d:return ge(e,{loading:!0,error:null});case me.e:return ge(e,{tokenId:t.tokenId,userId:t.userId,error:null,loading:!1});case me.b:return ge(e,{error:t.error,loading:!1});case me.c:return ge(e,{tokenId:null,userId:null});case me.n:return ge(e,{authRedirectPath:t.path});default:return e}},ke=c.d,Se=Object(c.c)({burgerBuilder:ve,order:_e,auth:ye}),we=Object(c.e)(Se,ke(Object(c.a)(l.a))),Be=a.a.createElement(u.a,{store:we},a.a.createElement(C.a,null,a.a.createElement(se,null)));i.a.render(Be,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");de?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):pe(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):pe(e)}))}}()}],[[64,1,2]]]);
//# sourceMappingURL=main.dacdd090.chunk.js.map