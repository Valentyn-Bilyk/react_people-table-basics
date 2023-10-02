(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(24),a=n(7),r=(n(33),n(34),n(2)),s=(n(35),n(11)),i=n.n(s),j=n(3),o=function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},l=function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(a.c,{className:o,to:"/",children:"Home"}),Object(j.jsx)(a.c,{className:o,to:"/people",children:"People"})]})})})},b=n(4),d=n(0);function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}n(37);var u=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},O=n(22),x=["Name","Sex","Born","Died","Mother","Father"],p=function(e){return e.Male="m",e.Female="f",e}({}),m=function(e){var t=e.person,n=t.slug,c=t.sex,r=t.name;return Object(j.jsx)(a.b,{to:"../".concat(n),className:i()({"has-text-danger":c===p.Female}),children:r})},f=function(e){var t=e.person,n=Object(r.q)().personSlug,c=t.sex,a=t.born,s=t.died,o=t.fatherName,l=t.motherName,b=t.father,d=t.mother,h=t.slug;return Object(j.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":n===h}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(m,{person:t})}),Object(j.jsx)("td",{children:c}),Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:s}),Object(j.jsx)("td",{children:d?Object(j.jsx)(m,{person:d}):l||"-"}),Object(j.jsx)("td",{children:b?Object(j.jsx)(m,{person:b}):o||"-"})]})},v=function(e){var t=e.people;return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:x.map((function(e){return Object(j.jsx)("th",{children:e})}))})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(f,{person:e},e.slug)}))})]})},g=function(){var e=Object(d.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(d.useState)(!1),r=Object(b.a)(a,2),s=r[0],i=r[1],o=Object(d.useState)(!1),l=Object(b.a)(o,2),x=l[0],p=l[1];Object(d.useEffect)((function(){i(!0),h().then((function(e){c(function(e){return e.map((function(t){return Object(O.a)(Object(O.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}))}(e))})).catch((function(){p(!0)})).finally((function(){i(!1)}))}),[]);var m=x&&!s,f=!n.length&&!s&&!x;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[s&&Object(j.jsx)(u,{}),m&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),f&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!!n.length&&Object(j.jsx)(v,{people:n})]})})]})},N=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},y=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},w=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(l,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(N,{})}),Object(j.jsx)(r.b,{path:"home",element:Object(j.jsx)(r.a,{to:"..",replace:!0})}),Object(j.jsx)(r.b,{path:"/people",children:Object(j.jsx)(r.b,{path:":personSlug?",element:Object(j.jsx)(g,{})})}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)(y,{})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(w,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.c7672863.chunk.js.map