(this.webpackJsonpbreakingbad=this.webpackJsonpbreakingbad||[]).push([[0],{48:function(e,t,a){e.exports=a.p+"static/media/logo.103261d7.png"},50:function(e,t,a){e.exports=a(94)},68:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(10),o=a(13),l=a(43),u=a.n(l),h=(a(63),a(64),a(65),a(68),a(14)),p=a(4),m=a(5),g=a(8),b=a(6),d=a(7),E=a(16),f=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"toCssClasses",value:function(e){var t=e?e.split(" "):[],a="";return t[0]&&(a+="col-".concat(t[0])),t[1]&&(a+=" col-sm-".concat(t[1])),t[2]&&(a+=" col-md-".concat(t[2])),t[3]&&(a+=" col-lg-".concat(t[3])),a}},{key:"render",value:function(){var e=this.props.utilitiesClasses?" ".concat(this.props.utilitiesClasses):"",t=this.toCssClasses(this.props.cols||12);return r.a.createElement("div",{className:t+e},this.props.children)}}]),t}(n.Component),v=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"mapOccupation",value:function(){return(this.props.occupation||[]).join()}},{key:"render",value:function(){return r.a.createElement("div",{className:"card__character"},r.a.createElement("div",{className:"card__character__overlay"}),r.a.createElement("div",{className:"card__character__status"},this.props.status),r.a.createElement("img",{className:"card__character__image",src:this.props.img,alt:this.props.nickname}),r.a.createElement("div",{className:"card__character__box"},r.a.createElement("h2",{className:"card__character__box__title"},this.props.name),r.a.createElement("p",{className:"card__character__box__birthday"},this.props.birthday),r.a.createElement("p",{className:"card__character__box__occupation"},this.mapOccupation())))}}]),t}(n.Component),C=a(32),O=a.n(C),_=function(){return{type:"GET_CHARACTER",payload:O.a.get("".concat("https://www.breakingbadapi.com/api/","characters"))}},y=function(e){var t=e?"?name=".concat(e):"";return{type:"SEARCH_CHARACTER",payload:O.a.get("".concat("https://www.breakingbadapi.com/api/","characters").concat(t))}},j=function(e){return{type:"CHANGE_SEARCH_CHARACTER",payload:e.target.value}},k=a(49),N=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={pager:{}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.items&&this.props.items.length&&this.setPage(this.props.initialPage)}},{key:"componentDidUpdate",value:function(e,t){this.props.items!==e.items&&this.setPage(this.props.initialPage)}},{key:"setPage",value:function(e){var t=this.props,a=t.items,n=t.pageSize,r=this.state.pager;if(!(e<1||e>r.totalPages)){r=this.getPager(a.length,e,n);var c=a.slice(r.startIndex,r.endIndex+1);this.setState({pager:r}),this.props.onChangePage(c)}}},{key:"getPager",value:function(e,t,a){t=t||1,a=a||8;var n,r,c=Math.ceil(e/a);c<=8?(n=1,r=c):t<=6?(n=1,r=8):t+4>=c?(n=c-9,r=c):(n=t-5,r=t+4);var s=(t-1)*a,i=Math.min(s+a-1,e-1),o=Object(k.a)(Array(r+1-n).keys()).map((function(e){return n+e}));return{totalItems:e,currentPage:t,pageSize:a,totalPages:c,startPage:n,endPage:r,startIndex:s,endIndex:i,pages:o}}},{key:"render",value:function(){var e=this,t=this.state.pager;return!t.pages||t.pages.length<=1?null:r.a.createElement("ul",{className:"pagination"},t.pages.map((function(a,n){return r.a.createElement("li",{key:n,className:t.currentPage===a?"active":""},r.a.createElement("a",{onClick:function(){return e.setPage(a)}},a))})))}}]),t}(r.a.Component);N.defaultProps={initialPage:1,pageSize:8};var S=N,P=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={pageOfItems:[]},a.onChangePage=a.onChangePage.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onChangePage",value:function(e){this.setState({pageOfItems:e})}},{key:"componentWillMount",value:function(){this.props.getCharacter()}},{key:"renderRows",value:function(){return(this.state.pageOfItems||[]).map((function(e){return r.a.createElement(f,{key:e.char_id,cols:"12 6 6 3",utilitiesClasses:"px-2"},r.a.createElement(v,{occupation:e.occupation,birthday:e.birthday,status:e.status,img:e.img,name:e.name}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement(f,{cols:"12"},r.a.createElement("h1",{className:"title"},"Personagens")),this.renderRows(),r.a.createElement(f,{cols:"12",utilitiesClasses:"d-flex justify-content-center"},r.a.createElement(S,{items:this.props.list,onChangePage:this.onChangePage})))}}]),t}(n.Component),w=Object(o.b)((function(e){return{list:e.character.list}}),(function(e){return Object(i.b)({getCharacter:_},e)}))(P),R=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null)}}]),t}(n.Component),A=function(e){return!!e.test&&e.children},x=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).state={pageOfItems:[]},a.onChangePage=a.onChangePage.bind(Object(E.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onChangePage",value:function(e){this.setState({pageOfItems:e})}},{key:"renderRows",value:function(){return(this.state.pageOfItems||[]).map((function(e){return r.a.createElement(f,{key:e.char_id,cols:"12 6 6 3",utilitiesClasses:"px-2"},r.a.createElement(v,{occupation:e.occupation,birthday:e.birthday,status:e.status,img:e.img,name:e.name}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement(f,{cols:"12",utilitiesClasses:"pb-5"},r.a.createElement(A,{test:this.props.list.length>0},r.a.createElement("h1",null,'Voce buscou por "',this.props.searchStringCharacter,'"'))),r.a.createElement(f,{cols:"12",utilitiesClasses:"text-center"},r.a.createElement(A,{test:0===this.props.list.length},r.a.createElement("p",{className:"d-block"},"Ops!:(, N\xe3o encontramos resultados para a sua busca!"),r.a.createElement("a",{className:"btn btn-outline-light",href:"/character"},"Voltar"))),this.renderRows(),r.a.createElement(S,{items:this.props.list,onChangePage:this.onChangePage}))}}]),t}(n.Component),I=Object(o.b)((function(e){return{searchStringCharacter:e.character.searchStringCharacter,list:e.character.list}}))(x),H=function(e){return r.a.createElement(h.c,{history:h.d},r.a.createElement(h.b,{path:"/character",component:R}),r.a.createElement(h.b,{path:"/resultSearchCharacter",component:I}),r.a.createElement(h.a,{from:"*",to:"/character"}))},T=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"searchAndRedirect",value:function(){this.props.searchCharacter(this.props.searchStringCharacter),h.d.push("/resultSearchCharacter")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"form-inline search__form my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Pesquise os personagens",onChange:this.props.changeSearchCharacter,value:this.props.searchStringCharacter}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",disabled:!this.props.searchStringCharacter,onClick:function(){return e.searchAndRedirect()}},"Search"))}}]),t}(n.Component),D=Object(o.b)((function(e){return{searchStringCharacter:e.character.searchStringCharacter}}),(function(e){return Object(i.b)({changeSearchCharacter:j,searchCharacter:y},e)}))(T),G=a(48),M=a.n(G),V=function(e){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark p-0 mb-5"},r.a.createElement("a",{className:"navbar-brand",href:"/character"},r.a.createElement("img",{className:"logo",src:M.a,alt:""})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"/character"},"Personagens"))),r.a.createElement(D,null))))},W=a(24),X={searchStringCharacter:"",list:[]},z=Object(i.c)({character:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHARACTER":case"SEARCH_CHARACTER":return Object(W.a)({},e,{list:t.payload.data});case"CHANGE_SEARCH_CHARACTER":return Object(W.a)({},e,{searchStringCharacter:t.payload});default:return e}}}),U=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),B=Object(i.a)(u.a)(i.d)(z,U);s.a.render(r.a.createElement(o.a,{store:B},r.a.createElement((function(e){return r.a.createElement("div",{className:"main__content"},r.a.createElement("div",{className:"container"},r.a.createElement(V,null),r.a.createElement(H,null)))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.49cbe518.chunk.js.map