(this["webpackJsonppokeapp-test"]=this["webpackJsonppokeapp-test"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(29),i=n.n(s),r=(n(39),n(9)),o=n(4),l=n(2),d=(n(40),n(13)),u=a.a.createContext(),j=(n(41),n(0)),h=function(e){var t=Object(c.useState)(null),n=Object(o.a)(t,2),a=n[0],s=n[1],i=Object(c.useContext)(u);if(Object(c.useEffect)((function(){s(e.favourites)}),[e.favourites]),!i)return Object(j.jsx)("div",{children:"loading..."});var r=i.user.darkMode;return Object(j.jsx)("div",{className:"navMain ".concat(r?"dark-mode":"light-mode"," "),children:Object(j.jsxs)("ul",{className:"navList",children:[Object(j.jsx)("li",{className:"navList-item",children:Object(j.jsx)(d.b,{exact:!0,to:"/",className:"navList-item ".concat(r?"dark-mode":"light-mode"," "),children:Object(j.jsx)("h3",{children:"Pokedex"})})}),Object(j.jsx)("li",{className:"navList-item ".concat(r?"dark-mode":"light-mode"," "),children:Object(j.jsx)(d.b,{exact:!0,to:"/settings",className:"navList-item ".concat(r?"dark-mode":"light-mode"," "),children:Object(j.jsx)("h3",{children:"Settings"})})}),Object(j.jsx)("li",{className:"navList-item ".concat(r?"dark-mode":"light-mode"," "),children:Object(j.jsxs)("h3",{children:["Favourites : ",a||0]})})]})})},b=n(12),m=n.n(b),f=n(15),O=n(10),p=n.n(O),x=(n(67),function(e){var t=Object(c.useContext)(u),n=Object(c.useState)(null),a=Object(o.a)(n,2),s=a[0],i=a[1];if(Object(c.useEffect)((function(){function t(){return(t=Object(f.a)(m.a.mark((function t(){var n,c,a,s,r,o,l,d,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=function(){var e=Object(f.a)(m.a.mark((function e(t){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map(function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(t.ability.url);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(n);case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.next=4,p.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e.pokemon));case 4:return c=t.sent,a=c.data,s=a.name,r=a.weight,o=a.height,l=a.abilities,d=a.sprites,t.next=8,n(l);case 8:u=t.sent,i({name:s,weight:r,height:o,abilityList:u,sprites:d}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.pokemon]),!s)return Object(j.jsx)("div",{className:"hold-box",children:Object(j.jsx)("img",{className:"hold-image",src:"https://res.cloudinary.com/dahzswwzk/image/upload/v1619195906/pokecard_ujgqy4.jpg",alt:"pokecard"})});var r=t.user.darkMode;return Object(j.jsxs)("div",{className:"details-box ".concat(r?"dark-mode":"light-mode"," "),children:[Object(j.jsx)("div",{className:"poke-name",children:Object(j.jsx)("h1",{children:s.name.charAt(0).toUpperCase()+s.name.slice(1)})}),Object(j.jsx)("div",{className:"poke-image-box ".concat(r?"light-mode":"dark-mode"," "),children:Object(j.jsx)("img",{className:"poke-image",src:s.sprites.front_default,alt:s.name})}),Object(j.jsxs)("div",{className:"databox",children:[Object(j.jsx)("p",{children:Object(j.jsxs)("b",{children:["height: ",s.height," dm"]})}),Object(j.jsx)("p",{children:Object(j.jsxs)("b",{children:["weight: ",s.weight," hg"]})})]}),Object(j.jsx)("div",{className:"abilities-box",children:Object(j.jsx)("table",{className:"abilities-table",children:s.abilityList.map((function(e){return Object(j.jsxs)("tr",{className:"abilities-table-row",children:[Object(j.jsx)("td",{className:"abilities-table-title",children:Object(j.jsx)("h4",{children:e.name.charAt(0).toUpperCase()+e.name.slice(1)})}),Object(j.jsx)("td",{className:"abilities-table-effect",children:Object(j.jsx)("p",{children:"en"===e.effect_entries[0].language.name?e.effect_entries[0].short_effect:e.effect_entries[1].short_effect})})]})}))})})]})}),v=function(e){return function(t){return Object(j.jsx)(u.Consumer,{children:function(n){return Object(j.jsx)(e,Object(r.a)(Object(r.a)({},t),{},{context:n}))}})}},g=(n(68),v((function(e){var t=Object(c.useContext)(u),n=Object(c.useState)([]),a=Object(o.a)(n,2),s=a[0],i=a[1],r=Object(c.useState)(0),l=Object(o.a)(r,2),d=l[0],h=l[1],b=Object(c.useState)(null),m=Object(o.a)(b,2),f=m[0],O=m[1];if(Object(c.useEffect)((function(){p.a.get("https://pokeapi.co/api/v2/pokemon/?limit=".concat(e.limit,"&offset=").concat(d)).then((function(e){O(e.data.count),i(e.data.results)})).catch((function(e){return console.log(e)}))}),[d,e.limit]),!s)return Object(j.jsx)("div",{children:"loading..."});var x=t.user.darkMode;return console.log(x),Object(j.jsxs)("div",{className:"pokelist-main",children:[Object(j.jsx)("div",{className:"poketotal-box ".concat(x?"dark-mode":"light-mode"," "),children:Object(j.jsxs)("h3",{children:["Total Pokemon: ",f]})}),Object(j.jsxs)("table",{className:"pokeTable",children:[Object(j.jsx)("thead",{className:"pokeTable-head",children:Object(j.jsxs)("tr",{className:"poke-table-row",children:[Object(j.jsx)("th",{className:"poke-table-title",children:Object(j.jsx)("h3",{children:"Pokemon name"})}),Object(j.jsx)("th",{className:"poke-table-title",children:Object(j.jsx)("h3",{children:"Add to favourites?"})})]})}),Object(j.jsx)("tbody",{className:"pokeTable-body",children:s.map((function(t){return Object(j.jsxs)("tr",{className:"pokeList-item \n              ".concat(e.favourites.includes(t.name)&&x?"dark-mode":""," \n              ").concat(e.favourites.includes(t.name)&&!x?"light-mode":""," "),children:[Object(j.jsx)("td",{className:"pokeList-name",onClick:function(){e.changePokemon(t.name)},children:Object(j.jsx)("h3",{children:t.name.charAt(0).toUpperCase()+t.name.slice(1)})}),e.favourites.includes(t.name)?Object(j.jsx)("td",{className:"pokeList-favourite",children:Object(j.jsx)("button",{className:"pokelist-button ".concat(x?"light-mode":"dark-mode"," "),onClick:function(){return e.removeFromFave(t.name)},children:"Remove"})}):Object(j.jsx)("td",{className:"pokeList-favourite",children:Object(j.jsx)("button",{className:"pokelist-button ".concat(x?"dark-mode":"light-mode"," "),onClick:function(){return e.addToFave(t.name)},children:"Add"})})]},t.name)}))})]}),Object(j.jsxs)("div",{className:"pageLinks",children:[Object(j.jsx)("p",{className:"pokelink-button ".concat(x?"dark-mode":"light-mode"," "),onClick:function(){0!==d&&h(d-e.limit)},children:"Previous"}),Object(j.jsxs)("p",{style:{color:"whitesmoke"},children:[d+1," - ",Number(e.limit)+Number(d)]}),Object(j.jsx)("p",{className:"pokelink-button ".concat(x?"dark-mode":"light-mode"," "),onClick:function(){h(d+e.limit)},children:"Next"})]})]})}))),k=(n(69),function(e){var t=Object(c.useState)(null),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(j.jsxs)("div",{className:"directory_main",children:[Object(j.jsx)("div",{className:"left-frame",children:Object(j.jsx)(g,{changePokemon:function(e){s(e)},addToFave:e.addToFavourites,removeFromFave:e.removeFromFavourites,favourites:e.favourites,limit:e.listLimit})}),Object(j.jsx)("div",{className:"right-frame",children:Object(j.jsx)(x,{pokemon:a})})]})}),N=(n(70),function(e){var t=Object(c.useContext)(u),n=Object(c.useState)(null),a=Object(o.a)(n,2),s=a[0],i=a[1],r=Object(c.useState)(null),l=Object(o.a)(r,2),d=l[0],h=l[1];if(Object(c.useEffect)((function(){i(e.listLimit),h(t.user.darkMode)}),[e.listLimit,t]),console.log(d),null===s)return Object(j.jsx)("div",{children:"loading"});if(void 0===t)return Object(j.jsx)("div",{children:"loading..."});var b=t.user.darkMode;return Object(j.jsx)("div",{className:"settingsMain",children:Object(j.jsxs)("div",{className:"settingsBox",children:[Object(j.jsx)("h3",{children:"Change Your Settings"}),Object(j.jsxs)("form",{className:"settingsForm",onSubmit:function(t){t.preventDefault();var n={listLength:s,darkMode:d};e.changeLimit(n),window.location.reload(!1),e.history.push("/settings")},children:[Object(j.jsxs)("label",{className:"settingsLabel",htmlFor:"listLimit",children:[Object(j.jsx)("h3",{children:"List Length: "}),Object(j.jsx)("input",{className:"settingsInput",type:"number",id:"listLimit",name:"listLimit",onChange:function(e){var t=e.target.value;i(t)},defaultValue:s})]}),Object(j.jsx)("label",{className:"settingsLabel",htmlFor:"darkMode",children:Object(j.jsx)("h3",{children:"Dark Mode?"})}),Object(j.jsxs)("label",{className:"switch",htmlFor:"darkMode",children:[Object(j.jsx)("input",{className:"settingsInput",type:"checkbox",id:"darkMode",name:"darkMode",onChange:function(e){var t=e.target.checked;h(t)},defaultChecked:b}),Object(j.jsx)("span",{className:"slider"})]}),Object(j.jsx)("button",{className:"settingsButton ".concat(b?"dark-mode":"light-mode"," "),children:Object(j.jsx)("h3",{children:"Save"})})]})]})})}),L=p.a.create({baseURL:"https://pokeapp-test.herokuapp.com",withCredentials:!0});function w(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var y=function(){return L.get("/api/users").then((function(e){return e.data})).catch(w)},C=function(e,t){return L.patch("/api/users/update/".concat(e),t).then((function(e){return e.data})).catch(w)},F=function(e,t){return L.patch("/api/users/add/".concat(e),t).then((function(e){return e.data})).catch(w)},S=function(e,t){return L.patch("/api/users/remove/".concat(e),t).then((function(e){return e.data})).catch(w)};var M=function(){var e=Object(c.useContext)(u),t=Object(c.useState)(null),n=Object(o.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(null),d=Object(o.a)(i,2),b=d[0],m=d[1];function f(t){var n=e.user._id;C(n,t).then((function(e){return m(e.listLength)}))}function O(t){var n=e.user._id;C(n,t).then((function(e){return m(e.listLength)}))}function p(t){var n=e.user._id;F(n,{name:t}).then((function(e){return s(e.favourites)}))}function x(t){var n={name:t},c=e.user._id;S(c,n).then((function(e){return s(e.favourites)}))}if(Object(c.useEffect)((function(){y().then((function(e){s(e.favourites),m(e.listLength)}))}),[]),null===a)return Object(j.jsx)("div",{children:"loading..."});if(void 0===e)return Object(j.jsx)("div",{children:"loading..."});var v=e.user.darkMode;return Object(j.jsxs)("div",{className:"App",style:{backgroundImage:"".concat(v?'url("https://res.cloudinary.com/dahzswwzk/image/upload/v1619439020/dark_background_whh8ck.jpg")':'url("https://res.cloudinary.com/dahzswwzk/image/upload/v1619439018/light_background_okqvst.jpg")'),backgroundSize:"cover"},children:[Object(j.jsx)(h,{favourites:a.length}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",render:function(e){return Object(j.jsx)(k,Object(r.a)(Object(r.a)({},e),{},{favourites:a,listLimit:b,addToFavourites:p,removeFromFavourites:x}))}}),Object(j.jsx)(l.a,{exact:!0,path:"/settings",render:function(e){return Object(j.jsx)(N,Object(r.a)(Object(r.a)({},e),{},{listLimit:b,changeLimit:f,changeTheme:O}))}})]})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},T=n(31),P=n(32),z=n(34),A=n(33),E=function(e){Object(z.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(T.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={user:null,isLoading:!0},e}return Object(P.a)(n,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){e.setState({user:t,isLoading:!1})})).catch((function(t){e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,isLoading:this.state.isLoading};return Object(j.jsx)(u.Provider,{value:e,children:this.props.children})}}]),n}(a.a.Component);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d.a,{children:Object(j.jsx)(E,{children:Object(j.jsx)(M,{})})})}),document.getElementById("root")),_()}},[[71,1,2]]]);
//# sourceMappingURL=main.bad5aade.chunk.js.map