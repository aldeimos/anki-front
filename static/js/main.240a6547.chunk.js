(this.webpackJsonpanki=this.webpackJsonpanki||[]).push([[0],{215:function(e,t,a){e.exports=a(428)},302:function(e,t){},304:function(e,t){},313:function(e,t){},315:function(e,t){},343:function(e,t){},344:function(e,t){},417:function(e,t,a){},418:function(e,t,a){},419:function(e,t,a){},420:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){},426:function(e,t,a){},428:function(e,t,a){"use strict";a.r(t);a(216),a(242),a(244),a(245),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(284);var n=a(0),c=a.n(n),r=a(57),l=a.n(r),i=a(47),o=a(58),s=a(89),u=a(25),d={decks:[],newDeck:{}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@decks/load":var a=t.decks;return Object(u.a)(Object(u.a)({},e),{},{decks:a});case"@decks/add":var n=t.newDeck;return e.decks=[].concat(Object(s.a)(e.decks),[n]),Object(u.a)({},e);default:return e}},f=Object(o.b)({decks:m}),E=a(29),p=a.n(E),v=a(40),_=a(41),h=a(122),b=a.n(h),k=a(211),g=-1===window.location.href.indexOf("vk_app_id"),j=a(14),O=(a(417),function(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){r((function(e){return!e}))}),3500);return function(){clearInterval(e)}}),[]),c.a.createElement("div",{className:"flip-container ".concat(a?"active":null)},c.a.createElement("div",{className:"flipper"},c.a.createElement("div",{className:"front"},"Decks"),c.a.createElement("div",{className:"back"},"\u041a\u043e\u043b\u043e\u0434\u044b")))}),N=(a(418),function(e){var t=e.id,a=e.router,r=v.store.useModel("user"),l=Object(_.a)(r,2),i=l[0],o=l[1],s=i.profile;return Object(n.useEffect)((function(){new Promise(function(){var e=Object(k.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g){e.next=2;break}return e.abrupt("return",t({id:2314852,first_name:"\u0418\u0440\u0438\u043d\u0430",last_name:"\u0414\u0435\u043d\u0435\u0436\u043a\u0438\u043d\u0430",sex:1,city:{id:2,title:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"},country:{id:1,title:"\u0420\u043e\u0441\u0441\u0438\u044f"},bdate:"10.4.1990",photo_100:"https://pp.userapi.com/c836333/v836333553/5b138/2eWBOuj5A4g.jpg",photo_200:"https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg",timezone:3}));case 2:return e.next=4,p.a.send("VKWebAppGetUserInfo",{});case 4:return a=e.sent,e.abrupt("return",t(a));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){return o.load(e)}))}),[]),c.a.createElement(j.Panel,{id:t,centered:!0},c.a.createElement("div",{className:"welcome"},c.a.createElement("div",{className:"welcome__cards"},c.a.createElement("div",{className:"welcome__card welcome__card--1"},"Hello"),c.a.createElement("div",{className:"welcome__card welcome__card--2"},"Hallo"),c.a.createElement("div",{className:"welcome__card welcome__card--3"},"Salut"),c.a.createElement("div",{className:"welcome__card welcome__card--4"},"\u4f60\u597d")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"welcome__logo"},c.a.createElement(O,null)),c.a.createElement("div",{className:"welcome__text"},"\u041f\u0440\u0438\u0432\u0435\u0442, ",s&&s.first_name,c.a.createElement("br",null),"Decks \u2014 \u044d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044c \u0441\u043b\u043e\u0432\u0430\u0440\u043d\u044b\u0439 \u0437\u0430\u043f\u0430\u0441 \u0438\u0437\u0443\u0447\u0430\u0435\u043c\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430."),c.a.createElement(j.Button,{size:"xl",mode:"overlay-primary",onClick:function(){return a.openPanel("home")}},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"))))}),w=(a(419),a(87)),y=a.n(w),C=a(212),x=a.n(C),P=a(213),F=a.n(P),S=function(e){var t=e.title,a=e.isFavorite,n=e.cards,r=e.progress;return c.a.createElement(j.Card,{mode:"outline"},c.a.createElement("div",{className:"deck"},c.a.createElement("div",{className:"deck__header"},c.a.createElement("div",{className:"deck__title"},t),c.a.createElement("div",{className:"deck__controls"},c.a.createElement(y.a,{width:20,height:20,fill:"royalblue"}),a?c.a.createElement(F.a,{width:20,height:20,fill:"royalblue"}):c.a.createElement(x.a,{width:20,height:20,fill:"royalblue"}))),c.a.createElement("div",{className:"deck__words"},n.length," \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a"),c.a.createElement("div",{className:"deck__progress"},c.a.createElement(j.Progress,{value:50}),c.a.createElement("div",{className:"deck__progress-count"},r,"%")),c.a.createElement(j.Button,{size:"l"},"\u0423\u0447\u0438\u0442\u044c")))},B=(a(420),function(){var e=Object(i.c)((function(e){return e.decks.decks}));return c.a.createElement("div",{className:"favorites"},c.a.createElement(j.CardScroll,null,0!==e.length?e.filter((function(e){return e.isFavorite})).map((function(e){return c.a.createElement(S,Object.assign({key:e.id},e))})):null))}),I=(a(421),function(e){var t=e.text,a=e.icon,n=e.handler;return c.a.createElement("div",{className:"custom-button",onClick:n},a,t)});I.defaultProps={handler:function(){return console.log("click")}};var D=I,G=(a(422),a(88)),L=a.n(G),z=function(e){var t=e.id,a=e.router,n=Object(i.c)((function(e){return e.decks.decks}));return console.log(n),c.a.createElement(j.Panel,{id:t},c.a.createElement(j.PanelHeader,null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043b\u043e\u0434"),c.a.createElement(j.Group,null,0!==n.filter((function(e){return e.isFavorite})).length&&c.a.createElement("div",{className:"home__title"},"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),c.a.createElement(B,null)),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"home__decks"},c.a.createElement(D,{text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043b\u043e\u0434\u0443",icon:c.a.createElement(L.a,{fill:"royalblue"}),handler:function(){return a.openPanel("add-deck")}}),c.a.createElement("div",{className:"home__my-decks"},c.a.createElement("div",{className:"home__title home__title--sub"},"\u041c\u043e\u0438 \u043a\u043e\u043b\u043e\u0434\u044b"),c.a.createElement(j.Group,null,0!==n.length?n.filter((function(e){return!1===e.isFavorite})).map((function(e){return c.a.createElement(S,Object.assign({key:e.id},e))})):"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043b\u043e\u0434 \u043f\u0443\u0441\u0442")))))},H=a(59),A=a(74),J=(a(423),function(e){var t=e.setShowPopup,a=e.addCard,r=Object(n.useState)(!1),l=Object(_.a)(r,2),i=l[0],o=l[1],d=Object(n.useState)({id:Object(A.a)(),phrase_1:"",phrase_2:""}),m=Object(_.a)(d,2),f=m[0],E=m[1],p=function(e,t){E((function(a){return Object(u.a)(Object(u.a)({},a),{},Object(H.a)({},t,e))}))};return c.a.createElement("div",{className:"add-card"},c.a.createElement("div",{className:"add-card__mask",onClick:function(){return t(!1)}}),c.a.createElement("div",{className:"add-card__content"},c.a.createElement("div",{className:"add-card__title"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"),c.a.createElement(j.FormLayout,null,c.a.createElement(j.FormLayoutGroup,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u044f\u0437\u044b\u043a\u0435"},c.a.createElement(j.Input,{type:"text",value:f.phrase_1,onChange:function(e){return p(e.target.value,"phrase_1")}})),c.a.createElement(j.FormLayoutGroup,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u043d\u0430 \u0438\u0437\u0443\u0447\u0430\u0435\u043c\u043e\u043c \u044f\u0437\u044b\u043a\u0435"},c.a.createElement(j.Input,{type:"text",value:f.phrase_2,onChange:function(e){return p(e.target.value,"phrase_2")}}),c.a.createElement(j.Checkbox,{value:i,onChange:function(e){return o(e.target.checked)}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443")),c.a.createElement("div",{className:"add-card__controls"},c.a.createElement(j.Button,{stretched:!0,size:"xl",onClick:function(){a((function(e){return Object(u.a)(Object(u.a)({},e),{},{cards:[].concat(Object(s.a)(e.cards),[f])})})),console.log(f),t(i),E({id:Object(A.a)(),phrase_1:"",phrase_2:""})},disabled:0===f.phrase_1.trim().length||0===f.phrase_2.trim().length},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),c.a.createElement("div",{className:"add-card__cancel",onClick:function(){return t(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c")))))}),W=(a(424),a(214)),K=a.n(W),M=function(e){var t=e.id,a=e.phrase_1,n=e.phrase_2,r=e.deleteCard;return c.a.createElement("div",{className:"phrase-card"},c.a.createElement("div",{className:"phrase-card__wrapper"},a," / ",n),c.a.createElement(K.a,{onClick:function(){r((function(e){return Object(u.a)(Object(u.a)({},e),{},{cards:e.cards.filter((function(e){return e.id!==t}))})}))},fill:"royalblue"}))},U=(a(425),function(e){var t=e.id,a=e.router,r=Object(i.b)(),l=Object(n.useState)({id:Object(A.a)(),title:"",isFavorite:!1,cards:[],progress:0}),o=Object(_.a)(l,2),s=o[0],d=o[1],m=Object(n.useState)(!1),f=Object(_.a)(m,2),E=f[0],p=f[1],v=function(e,t){d((function(a){return Object(u.a)(Object(u.a)({},a),{},Object(H.a)({},t,e))}))};return c.a.createElement(j.Panel,{id:t},c.a.createElement(j.PanelHeader,{left:c.a.createElement(j.PanelHeaderBack,{onClick:function(){return a.goBack()}})},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u0434\u044b"),c.a.createElement(j.FormLayout,null,c.a.createElement(j.FormLayoutGroup,{top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u0434\u044b"},c.a.createElement(j.Input,{type:"text",default:"\u0420\u0430\u0431\u043e\u0442\u0430",value:s.title,onChange:function(e){return v(e.target.value,"title")}}),c.a.createElement(j.Checkbox,{value:s.isFavorite,onChange:function(e){return v(e.target.checked,"isFavorite")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043b\u043e\u0434\u0443 \u0432 \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"),c.a.createElement(D,{text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",icon:c.a.createElement(L.a,{fill:"royalblue"}),handler:function(){return p(!0)}}))),c.a.createElement(j.Div,null,c.a.createElement("div",{className:"add-deck__title"},"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0432 \u043a\u043e\u043b\u043e\u0434\u0435"),0!==s.cards.length?s.cards.map((function(e){return c.a.createElement(M,Object.assign({key:e.id,deleteCard:d},e))})):"\u0412\u0430\u0448\u0430 \u043a\u043e\u043b\u043e\u0434\u0430 \u043f\u0443\u0441\u0442\u0430"),c.a.createElement(j.FixedLayout,{vertical:"bottom"},c.a.createElement("div",{className:"add-deck__btn"},c.a.createElement(j.Button,{stretched:!0,size:"xl",onClick:function(){r(function(e){return{type:"@decks/add",newDeck:e}}(s)),a.openPanel("home")},disabled:0===s.title.trim().length||0===s.cards.length},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043b\u043e\u0434\u0443"))),E&&c.a.createElement(J,{setShowPopup:p,addCard:d}))}),V=(a(426),function(){return c.a.createElement(v.router.Router,{initialPage:"main"},c.a.createElement(v.router.Page,{id:"main",initialPanel:"home"},c.a.createElement(N,{id:"welcome"}),c.a.createElement(z,{id:"home"}),c.a.createElement(U,{id:"add-deck"})))}),Q=(a(427),{profile:null});v.store.registerModel("user",null,Q,{load:function(e){return{profile:e}}},(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"load":var a=t.profile;return Object(u.a)(Object(u.a)({},e),{},{profile:a});default:return e}})),window.vk_settings=v.utils.parseParams(window.location.search),p.a.subscribe(v.utils.schemeChanger);var R=Object(o.c)(f);p.a.send("VKWebAppInit"),l.a.render(c.a.createElement(i.a,{store:R},c.a.createElement(V,null)),document.getElementById("root"))}},[[215,1,2]]]);
//# sourceMappingURL=main.240a6547.chunk.js.map