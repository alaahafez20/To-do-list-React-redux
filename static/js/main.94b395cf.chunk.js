(this["webpackJsonpto-do-list-redux"]=this["webpackJsonpto-do-list-redux"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),r=n(5),a=n.n(r),i=(n(19),n(20),n(12)),j=n(2),o=n(1),b=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),b=a[0],d=a[1],l=Object(j.b)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"text-muted mb-4",children:"Add a TODO"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l(function(t,e){return{type:"ADD_ITEM",payload:{title:t,content:e}}}(n,b)),s(""),d("")},children:["Title ",Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"title",value:n,onChange:function(t){return s(t.target.value)}}),Object(o.jsx)("br",{}),"Content ",Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{name:"content",value:b,onChange:function(t){return d(t.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{className:"my-4 btn btn-primary btn-sm px-4",type:"submit",children:"Add Todo"})]})]})},d=function(){var t=Object(j.c)((function(t){return t.todos})),e=Object(j.b)(),n=t&&t.length>0?t.map((function(t,n){return Object(o.jsx)("ul",{style:{width:"600px"},children:Object(o.jsxs)("li",{className:"border d-flex justify-content-between",children:[Object(o.jsx)("div",{className:"text",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["Title : ",t.title]}),Object(o.jsxs)("p",{children:["Content : ",t.content]})]})}),Object(o.jsx)("div",{children:Object(o.jsx)("span",{className:"btn btn-danger btn-sm",onClick:function(){return e({type:"REMOVE_ITEM",payload:n})},children:"x"})})]})},n)})):Object(o.jsx)("p",{className:"h5 mx-5 text-muted",children:"no items on the list .."});return Object(o.jsxs)("div",{className:"text-left",children:[Object(o.jsx)("h5",{className:"mx-5 text-muted",children:"Todos List"}),n]})};var l=function(){return Object(o.jsxs)("div",{className:"text-center py-2",children:[Object(o.jsx)(b,{}),Object(o.jsx)(d,{})]})},u=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),r(t),a(t)}))},O=(n(28),n(7)),x=n(13),h=n(4),m={todos:[]},f=Object(O.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_ITEM":return Object(h.a)(Object(h.a)({},t),{},{todos:[].concat(Object(x.a)(t.todos),[e.payload])});case"REMOVE_ITEM":return Object(h.a)(Object(h.a)({},t),{},{todos:Object(x.a)(t.todos.filter((function(t,n){return n!==e.payload})))});default:return t}}));a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j.a,{store:f,children:Object(o.jsx)(l,{})})}),document.getElementById("root")),u()}},[[29,1,2]]]);
//# sourceMappingURL=main.94b395cf.chunk.js.map