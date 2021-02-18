(this["webpackJsonplogin-form"]=this["webpackJsonplogin-form"]||[]).push([[0],{28:function(e,t,s){},32:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),r=s(21),c=s.n(r),i=(s(28),s(11)),o=s(12),u=s(7),l=s(14),h=s(13),d=s(22),j=s(2),b=s(10),p=s.n(b),m=s(17),g=s(1),O=function(e){return Object(g.jsx)("div",{className:"input username-input",children:Object(g.jsxs)("label",{children:[Object(g.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(g.jsx)("input",{type:"text",onChange:e.handleChange})]})})},x=function(e){return Object(g.jsx)("div",{className:"input password-input",children:Object(g.jsxs)("label",{children:[Object(g.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(g.jsx)("input",{type:"password",onChange:e.handleChange})]})})},f=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={username:"",password:""},n.handleUsernameInput=n.handleUsernameInput.bind(Object(u.a)(n)),n.handlePasswordInput=n.handlePasswordInput.bind(Object(u.a)(n)),n.submitExistingUser=n.submitExistingUser.bind(Object(u.a)(n)),n.submitNewUser=n.submitNewUser.bind(Object(u.a)(n)),n}return Object(o.a)(s,[{key:"handleUsernameInput",value:function(e){this.setState({username:e.target.value})}},{key:"handlePasswordInput",value:function(e){this.setState({password:e.target.value})}},{key:"submitExistingUser",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,s,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://localhost:4000/api?username=".concat(this.state.username,"&password=").concat(this.state.password),e.next=3,fetch(t);case 3:return s=e.sent,e.next=6,s.json();case 6:n=e.sent,s.ok?(this.props.setUser(n.user),localStorage.setItem("token",n.token),localStorage.setItem("username",n.user.username)):alert(n.message);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"submitNewUser",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,s,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:4000/api/",t=JSON.stringify({user:{username:this.state.username,password:this.state.password}}),e.next=4,fetch("http://localhost:4000/api/",{method:"POST",headers:{"Content-Type":"application/json"},body:t});case 4:return s=e.sent,e.next=7,s.json();case 7:n=e.sent,s.ok?(this.props.setUser(n.user),localStorage.setItem("token",n.token),localStorage.setItem("username",n.user.username)):alert(n.message);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.isNewUser?this.submitNewUser:this.submitExistingUser;return Object(g.jsxs)("div",{className:"form",children:[Object(g.jsx)(O,{handleChange:this.handleUsernameInput}),Object(g.jsx)(x,{handleChange:this.handlePasswordInput}),Object(g.jsx)("button",{type:"submit",onClick:e,className:"btn waves-effect waves-light",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u044c \u0434\u0430\u043d\u043d\u044b\u0435"})]})}}]),s}(n.Component),v=function(e){return Object(g.jsxs)("div",{children:["\u0418\u043c\u044f: ",e.username," ",Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:e.logout,className:"btn waves-effect waves-light",children:"\u0412\u044b\u0439\u0442\u0438"})]})},w=(s(31),s(32),function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={user:{username:localStorage.getItem("username")},isLoggedIn:!!localStorage.getItem("token")},n.setCurrentUserAndLogIn=n.setCurrentUserAndLogIn.bind(Object(u.a)(n)),n.logout=n.logout.bind(Object(u.a)(n)),n}return Object(o.a)(s,[{key:"setCurrentUserAndLogIn",value:function(e){this.setState({user:e,isLoggedIn:!0})}},{key:"logout",value:function(){localStorage.removeItem("token"),localStorage.removeItem("username"),this.setState({isLoggedIn:!1})}},{key:"render",value:function(){var e=Object(g.jsxs)(d.a,{children:[Object(g.jsx)("h1",{className:"card-title",children:"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(g.jsxs)(j.c,{children:[Object(g.jsxs)(j.a,{path:"/",exact:!0,children:[Object(g.jsx)("div",{className:"card-action",children:Object(g.jsx)(f,{isNewUser:!1,setUser:this.setCurrentUserAndLogIn})}),Object(g.jsxs)("p",{children:["\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? ",Object(g.jsx)("a",{href:"/signup",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0441\u044f"})]})]}),Object(g.jsxs)(j.a,{path:"/signup",exact:!0,children:[Object(g.jsx)("div",{className:"card-action",children:Object(g.jsx)(f,{isNewUser:!0,setUser:this.setCurrentUserAndLogIn})}),Object(g.jsxs)("p",{children:["\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? ",Object(g.jsx)("a",{href:"/",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})]});return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)("div",{className:"card blue-grey darken-1",children:Object(g.jsx)("div",{className:"card-content white-text",children:this.state.isLoggedIn?Object(g.jsx)(v,{username:this.state.user.username,logout:this.logout}):e})})})}}]),s}(n.Component)),I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),r(e),c(e)}))};c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),I()}},[[38,1,2]]]);
//# sourceMappingURL=main.b333cf9c.chunk.js.map