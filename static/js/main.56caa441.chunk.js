(this["webpackJsonpreact-aws-lambda"]=this["webpackJsonpreact-aws-lambda"]||[]).push([[0],{40:function(e,n){},483:function(e,n,t){},484:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(32),o=t.n(c),i=t(17),u=t(77),s=t(70),d=t(15),l=t(16),p=("undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,l.d);var f=t(19),O=Object(f.a)({basename:"/react-aws-lambda"}),b=t(28),x=[],m=function(){var e,n,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1?arguments[1]:void 0,c=a.type;switch(c){case"IS_LOADING":if(e=a.id,n=a.status,t=r.findIndex((function(n){return n===e})),n)return[].concat(Object(d.a)(r),[e]);if(-1!==t)return[].concat(Object(d.a)(r.slice(0,t)),Object(d.a)(r.slice(t+1)));break;default:return r}},v=[],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0,t=n.type;switch(t){case"GET_TODOS_OK":return n.value;case"SAVE_TODO_OK":return[n.value].concat(Object(d.a)(e));case"UPDATE_TODO_OK":var r=n.value,a=e.findIndex((function(e){return e.id===r.id}));if(-1!==a)return[].concat(Object(d.a)(e.slice(0,a)),[n.value],Object(d.a)(e.slice(a+1)));break;case"DEL_TODO_OK":var c=n.value,o=e.findIndex((function(e){return e.id===c.id}));if(-1!==o)return[].concat(Object(d.a)(e.slice(0,o)),Object(d.a)(e.slice(o+1)))}return e};var h=function(e){return Object(l.c)({router:Object(b.b)(e),loading:m,todos:g})},j=t(9),y=t.n(j),E=t(6),w=function(e,n){return{type:"IS_LOADING",id:e,status:n}},_=function(e){return{type:"UPDATE_TODO_OK",value:e}},T=t(29),D=t.n(T);D.a.config.region="us-east-1",D.a.config.credentials=new D.a.CognitoIdentityCredentials({IdentityPoolId:"us-east-1:f81f99c1-ed34-43b9-aba0-4e7555152c05"});var k=new D.a.Lambda,S=y.a.mark(I),N=y.a.mark(R);function P(e){return new Promise((function(n,t){k.invoke({FunctionName:"delete_todo",InvocationType:"RequestResponse",LogType:"None",Payload:e},(function(e,r){if(e)console.log({err:e}),t(e);else try{var a=JSON.parse(r.Payload);n(a)}catch(c){t(c)}}))}))}function I(e){var n,t;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.id,r.next=3,Object(E.c)(w("DEL_TODO",!0));case 3:return r.prev=3,r.next=6,Object(E.b)(P,JSON.stringify({id:n}));case 6:return t=r.sent,r.next=9,Object(E.c)({type:"DEL_TODO_OK",value:t});case 9:r.next=16;break;case 11:return r.prev=11,r.t0=r.catch(3),console.log(r.t0),r.next=16,Object(E.c)({type:"DEL_TODO_ERR",error:r.t0.text});case 16:return r.next=18,Object(E.c)(w("DEL_TODO",!1));case 18:case"end":return r.stop()}}),S,null,[[3,11]])}function R(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)("DEL_TODO",I);case 2:case"end":return e.stop()}}),N)}var A=y.a.mark(J),L=y.a.mark(C);function G(){return new Promise((function(e,n){k.invoke({FunctionName:"get_todos",InvocationType:"RequestResponse",LogType:"None"},(function(t,r){if(t)console.log({err:t}),n(t);else try{var a=JSON.parse(r.Payload);e(a.Items)}catch(c){n(c)}}))}))}function J(e){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.c)(w("GET_TODOS",!0));case 2:return e.prev=2,e.next=5,Object(E.b)(G);case 5:return n=e.sent,e.next=8,Object(E.c)({type:"GET_TODOS_OK",value:n});case 8:e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(2),console.log(e.t0),e.next=15,Object(E.c)({type:"GET_TODOS_ERR",error:e.t0.text});case 15:return e.next=17,Object(E.c)(w("GET_TODOS",!1));case 17:case"end":return e.stop()}}),A,null,[[2,10]])}function C(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)("GET_TODOS",J);case 2:case"end":return e.stop()}}),L)}var K=y.a.mark(q),U=y.a.mark(z);function V(e){return new Promise((function(n,t){k.invoke({FunctionName:"create_todo",InvocationType:"RequestResponse",LogType:"None",Payload:e},(function(e,r){if(e)console.log({err:e}),t(e);else try{var a=JSON.parse(r.Payload);n(a)}catch(c){t(c)}}))}))}function q(e){var n,t;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.data,r.next=3,Object(E.c)(w("SAVE_TODO",!0));case 3:return r.prev=3,r.next=6,Object(E.b)(V,JSON.stringify(n));case 6:return t=r.sent,r.next=9,Object(E.c)({type:"SAVE_TODO_OK",value:t});case 9:r.next=16;break;case 11:return r.prev=11,r.t0=r.catch(3),console.log(r.t0),r.next=16,Object(E.c)({type:"SAVE_TODO_ERR",error:r.t0.text});case 16:return r.next=18,Object(E.c)(w("SAVE_TODO",!1));case 18:case"end":return r.stop()}}),K,null,[[3,11]])}function z(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)("SAVE_TODO",q);case 2:case"end":return e.stop()}}),U)}var F=y.a.mark(M),X=y.a.mark(W);function B(e){return new Promise((function(n,t){k.invoke({FunctionName:"create_todo",InvocationType:"RequestResponse",LogType:"None",Payload:e},(function(e,r){if(e)console.log({err:e}),t(e);else try{var a=JSON.parse(r.Payload);n(a)}catch(c){t(c)}}))}))}function M(e){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.value,t.next=3,Object(E.c)(w("UPDATE_TODO",!0));case 3:return t.prev=3,t.next=6,Object(E.b)(B,JSON.stringify(n));case 6:return t.next=8,Object(E.c)(_(n));case 8:t.next=15;break;case 10:return t.prev=10,t.t0=t.catch(3),console.log(t.t0),t.next=15,Object(E.c)({type:"UPDATE_TODO_ERR",error:t.t0.text});case 15:return t.next=17,Object(E.c)(w("UPDATE_TODO",!1));case 17:case"end":return t.stop()}}),F,null,[[3,10]])}function W(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)("UPDATE_TODO",M);case 2:case"end":return e.stop()}}),X)}var H=y.a.mark(Q);function Q(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([R(),C(),z(),W()]);case 2:case"end":return e.stop()}}),H)}var Y=t(12),Z=t(34),$=t(13),ee=t(76);t(69);function ne(){var e=Object(Y.a)(["\n  align-items: center;\n  background: #e2e2e2;\n  border: none;\n  border-radius: 50%;\n  box-shadow:  6px 6px 12px #d7d7d7,\n               -6px -6px 12px #ededed;\n  color: #17ab26;\n  display: flex;\n  font-size: 1.25rem;\n  justify-content: center;\n  height: 3rem;\n  margin-left: 1rem;\n  width: 3rem;\n  transition: background-color 0.2s, color 0.2s;\n\n  @media all and (min-width: 780px) {\n    height: 4rem;\n    width: 4rem;\n  }\n  &:active,\n  &:target {\n    background: #17ab26;\n    color: #e3e3e3;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(Y.a)(["\n  background: #e2e2e2;\n  border: none;\n  border-radius: 4px;\n  box-shadow: inset 8px 8px 16px #d7d7d7, inset -8px -8px 16px #ededed;\n  flex: 1;\n  font-size: 1.25rem;\n  padding: 1rem;\n  @media all and (min-width: 768px) {\n    font-size: 1.5rem;\n    padding: 2rem;\n  }\n"]);return te=function(){return e},e}function re(){var e=Object(Y.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 2.5rem;\n"]);return re=function(){return e},e}var ae=$.a.form(re()),ce=$.a.input(te()),oe=$.a.button(ne()),ie=function(){var e=Object(r.useState)(""),n=Object(ee.a)(e,2),t=n[0],c=n[1],o=Object(i.d)(),u=function(){t&&(o({type:"SAVE_TODO",data:{name:t,completed:!1}}),c(""))};return a.a.createElement(ae,{onSubmit:function(e){return e.preventDefault(),u(),!1}},a.a.createElement(ce,{type:"text",onChange:function(e){var n=e.target;c(n.value)},value:t,placeholder:"What's next?"}),a.a.createElement(oe,{onClick:u},a.a.createElement("i",{className:"fa fa-plus"})))},ue=t(78),se=function(e){return e.todos};function de(){var e=Object(Y.a)(["\n  align-items: center;\n  background: #e2e2e2;\n  border: none;\n  border-radius: 50%;\n  box-shadow: 6px 6px 12px #d7d7d7, -6px -6px 12px #ededed;\n  color: #982929;\n  display: flex;\n  font-size: 1.25rem;\n  justify-content: center;\n  height: 3rem;\n  width: 3rem;\n  transition: background-color 0.2s, color 0.2s;\n\n  &:active,\n  &:target {\n    background: #982929;\n    color: #e3e3e3;\n  }\n"]);return de=function(){return e},e}function le(){var e=Object(Y.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n"]);return le=function(){return e},e}function pe(){var e=Object(Y.a)(["\n  flex: 5;\n"]);return pe=function(){return e},e}function fe(){var e=Object(Y.a)(["\n  align-items: center;\n  background: #e2e2e2;\n  border-radius: 4px;\n  box-shadow: inset 6px 6px 12px #d7d7d7, inset -6px -6px 12px #ededed;\n  display: flex;\n  height: 2rem;\n  justify-content: center;\n  margin-right: 1rem;\n  width: 2rem;\n\n  ",'\n\n  input[type="checkbox"] {\n    display: none;\n  }\n']);return fe=function(){return e},e}function Oe(){var e=Object(Y.a)(["\n  align-items: center;\n  display: flex;\n  padding: 1rem 0;\n  @media all and (min-width: 780px) {\n    padding: 1rem 0.5rem 1rem 0;\n  }\n  & + & {\n    border-top: solid 1px #eaeaea;\n  }\n"]);return Oe=function(){return e},e}function be(){var e=Object(Y.a)(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"]);return be=function(){return e},e}var xe=$.a.ul(be()),me=$.a.li(Oe()),ve=$.a.label(fe(),(function(e){return e.completed?"\n      background-color: #17ab26;\n      box-shadow: inset 6px 6px 12px #16a224,\n            inset -6px -6px 12px #18b428;\n      color: #fff;\n    ":""})),ge=$.a.div(pe()),he=$.a.div(le()),je=$.a.button(de()),ye=function(){var e=Object(i.d)(),n=Object(i.e)(se);Object(r.useEffect)((function(){e({type:"GET_TODOS"})}),[]);var t=function(n){return function(){e({type:"UPDATE_TODO",value:Object(ue.a)({},n,{completed:!n.completed})})}},c=function(n){return function(){e({type:"DEL_TODO",id:n.id})}};return a.a.createElement(xe,null,n.map((function(e){return a.a.createElement(me,{key:e.id},a.a.createElement(ve,{completed:e.completed,onClick:t(e)},!e.completed||a.a.createElement("i",{className:"fa fa-check"})),a.a.createElement(ge,{onClick:t(e)},e.name),a.a.createElement(he,null,a.a.createElement(je,{onClick:c(e)},a.a.createElement("i",{className:"fa fa-times"}))))})))};function Ee(){var e=Object(Y.a)(["\n  padding: 2rem 1rem;\n  width: 100vw;\n  @media all and (min-width: 780px) {\n    background: #e2e2e2;\n    border-radius: 16px;\n    box-shadow: 20px 20px 60px #c0c0c0, -20px -20px 60px #ffffff;\n    max-width: 60rem;\n    padding: 2rem;\n    width: 80vw;\n  }\n"]);return Ee=function(){return e},e}function we(){var e=Object(Y.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  min-height: 100vh;\n  @media all and (min-width: 780px) {\n    padding: 2rem;\n  }\n"]);return we=function(){return e},e}var _e,Te,De=function(e){return a.a.createElement(ke,null,a.a.createElement(Se,null,e.children))},ke=$.a.div(we()),Se=$.a.div(Ee()),Ne=(t(483),Object(u.a)()),Pe=h(O),Ie=(_e=Pe,Te=[Ne,Object(s.a)(O)],Object(l.e)(_e,{},p(l.a.apply(void 0,Object(d.a)(Te)))));Ne.run(Q);var Re;Re=function(){return a.a.createElement(b.a,{history:O},a.a.createElement(Z.c,null,a.a.createElement(Z.a,{path:"/",exact:!0},a.a.createElement(De,null,a.a.createElement(ie,null),a.a.createElement(ye,null)))))},o.a.render(a.a.createElement(i.a,{store:Ie},a.a.createElement(Re,null)),document.getElementById("root"))},69:function(e,n,t){},80:function(e,n,t){e.exports=t(484)}},[[80,1,2]]]);
//# sourceMappingURL=main.56caa441.chunk.js.map