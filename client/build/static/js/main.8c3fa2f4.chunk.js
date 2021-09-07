(this["webpackJsonpideas-keeper-frontend"]=this["webpackJsonpideas-keeper-frontend"]||[]).push([[0],{24:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(16),s=n.n(r),i=n(6),o=n(3),l=(n(24),n(2)),j=n(0),b=Object(a.createContext)({});function u(e){var t=e.children,n=Object(a.useState)(JSON.parse(localStorage.getItem("token"))),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){localStorage.setItem("token",JSON.stringify(r))}),[r]),Object(j.jsx)(b.Provider,{value:[r,s],children:t})}var d=Object(a.createContext)({});function m(e){var t=e.children,n=Object(a.useState)(JSON.parse(localStorage.getItem("user"))),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(j.jsx)(d.Provider,{value:[r,s],children:t})}var O=function(){var e=Object(a.useContext)(d),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useContext)(b),s=Object(l.a)(r,2),u=(s[0],s[1]);Object(o.f)();return Object(j.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-primary",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Ideas Keeper"}),Object(j.jsx)("div",{className:"collapse navbar-collapse justify-content-end",children:Object(j.jsxs)("ul",{className:"navbar-nav",children:[!n&&Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.c,{className:"nav-link",exact:!0,to:"/login",children:"Login"})}),!n&&Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.c,{className:"nav-link",exact:!0,to:"/register",children:"Register"})}),n&&Object(j.jsxs)("div",{className:"navbar-text mx-2",children:["Welcome ",n.name]}),n&&Object(j.jsx)("button",{className:"btn btn-sm btn-light",onClick:function(){localStorage.removeItem("user"),localStorage.removeItem("token"),c(null),u(null)},children:"Logout"})]})})]})})},h=Object(a.createContext)({});function p(e){var t=e.children,n=Object(a.useState)([]),c=Object(l.a)(n,2),r=c[0],s=c[1];return Object(j.jsx)(h.Provider,{value:[r,s],children:t})}var x=n(7),f=n.n(x),v=n(19),g=n(8);var N=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useContext)(b),s=Object(l.a)(r,2),i=s[0],o=(s[1],Object(a.useContext)(h)),u=Object(l.a)(o,2),d=u[0],m=u[1],O=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(n),fetch("https://ideas-keeper.herokuapp.com/api/ideas",{method:"POST",headers:{"x-auth-token":i,"Content-Type":"application/json"},body:JSON.stringify({idea:n})}).then((function(e){return e.json()})).then((function(e){m([e].concat(Object(v.a)(d)))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("form",{onSubmit:O,children:Object(j.jsxs)("div",{className:"input-group mb-3",children:[Object(j.jsx)("input",{type:"text",className:"form-control",id:"idea-form",onChange:function(e){return c(e.target.value)},value:n,autoComplete:"off"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add"})]})})},y=function(){var e=Object(a.useContext)(d),t=Object(l.a)(e,2),n=t[0],c=(t[1],Object(a.useContext)(b)),r=Object(l.a)(c,2),s=r[0],o=(r[1],Object(a.useContext)(h)),u=Object(l.a)(o,2),m=u[0],p=u[1];Object(a.useEffect)((function(){n&&fetch("https://ideas-keeper.herokuapp.com/api/ideas",{headers:{"x-auth-token":s}}).then((function(e){return e.json()})).then((function(e){return p(e)}))}),[n,s]);return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{}),!n&&Object(j.jsx)("div",{className:"bg-light p-5 text-center",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"text-center",children:"A fullstack app to store your ideas"}),Object(j.jsx)(i.b,{to:"/login",className:"btn btn-primary m-2",children:"Login"}),Object(j.jsx)(i.b,{to:"/register",className:"btn btn-secondary m-2",children:"Register"})]})}),n&&Object(j.jsxs)("div",{className:"container mt-3",children:[Object(j.jsx)("h1",{children:n.name}),Object(j.jsx)(N,{}),Object(j.jsx)("ul",{className:"list-group",children:m.length?m.map((function(e){return Object(j.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[e.idea,Object(j.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){return t=e._id,fetch("https://ideas-keeper.herokuapp.com/api/ideas/"+t,{method:"DELETE",headers:{"x-auth-token":s}}),void p(m.filter((function(e){return e._id!==t})));var t},children:"Delete"})]},e._id)})):"No ideas yet"})]})]})},k=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),i=s[0],u=s[1],m=Object(a.useState)(""),h=Object(l.a)(m,2),p=h[0],x=h[1],v=Object(a.useState)(""),N=Object(l.a)(v,2),y=N[0],k=N[1],S=Object(a.useContext)(d),C=Object(l.a)(S,2),w=(C[0],C[1]),E=Object(a.useContext)(b),J=Object(l.a)(E,2),I=(J[0],J[1]),P=Object(o.f)(),T=function(){var e=Object(g.a)(f.a.mark((function e(t){var a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://ideas-keeper.herokuapp.com/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:i,password:p})});case 3:return a=e.sent,e.next=6,a.json();case 6:if(!(c=e.sent).error){e.next=9;break}return e.abrupt("return",k(c.error));case 9:w(c.user),I(c.token),P.push("/");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"container mt-3",children:[Object(j.jsx)("h1",{children:"Register"}),Object(j.jsxs)("form",{className:"mt-4",onSubmit:T,children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"register-name",className:"form-label",children:"Name"}),Object(j.jsx)("input",{type:"text",className:"form-control",id:"register-name",onChange:function(e){return c(e.target.value)},value:n})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"register-email",className:"form-label",children:"Email address"}),Object(j.jsx)("input",{type:"email",className:"form-control",id:"register-email",onChange:function(e){return u(e.target.value)},value:i})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"register-password",className:"form-label",children:"Password"}),Object(j.jsx)("input",{type:"password",className:"form-control",id:"register-password",onChange:function(e){return x(e.target.value)},value:p})]}),Object(j.jsx)("p",{className:"text-danger",children:y}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})]})},S=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),i=s[0],u=s[1],m=Object(a.useState)(""),h=Object(l.a)(m,2),p=h[0],x=h[1],v=Object(a.useContext)(d),N=Object(l.a)(v,2),y=(N[0],N[1]),k=Object(a.useContext)(b),S=Object(l.a)(k,2),C=(S[0],S[1]),w=Object(o.f)(),E=function(){var e=Object(g.a)(f.a.mark((function e(t){var a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://ideas-keeper.herokuapp.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:i})});case 3:return a=e.sent,e.next=6,a.json();case 6:if(!(c=e.sent).error){e.next=9;break}return e.abrupt("return",x(c.error));case 9:y(c.user),C(c.token),w.push("/");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"container mt-3",children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsxs)("form",{className:"mt-4",onSubmit:E,children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"login-email",className:"form-label",children:"Email address"}),Object(j.jsx)("input",{type:"email",className:"form-control",id:"login-email",onChange:function(e){return c(e.target.value)},value:n})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"login-password",className:"form-label",children:"Password"}),Object(j.jsx)("input",{type:"password",className:"form-control",id:"login-password",onChange:function(e){return u(e.target.value)},value:i})]}),Object(j.jsx)("p",{className:"text-danger",children:p}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})]})};function C(){return Object(j.jsx)(m,{children:Object(j.jsx)(u,{children:Object(j.jsx)(p,{children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:y}),Object(j.jsx)(o.a,{exact:!0,path:"/login",component:S}),Object(j.jsx)(o.a,{exact:!0,path:"/register",component:k})]})})})})})}s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.8c3fa2f4.chunk.js.map