(this.webpackJsonpsamurai_pr=this.webpackJsonpsamurai_pr||[]).push([[0],{149:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),s=n.n(r),c=n(30),i=n.n(c),o=n(46),u=n.n(o),l=n(7),j=n(3),b=n.n(j),p=n(8),d=n(74),f=n(75),O=n.n(f),h=function e(){var t=this;Object(d.a)(this,e),this.instance=O.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"2371da0f-0680-4699-834b-d04359f5bee0"}}),this.getUsers=function(){var e=Object(p.a)(b.a.mark((function e(n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===n){e.next=6;break}return e.next=3,t.instance.get("users?page=".concat(n),{withCredentials:!0});case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,t.instance.get("users",{withCredentials:!0});case 8:e.t0=e.sent;case 9:return a=e.t0,r=a.data,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getUserProfile=function(){var e=Object(p.a)(b.a.mark((function e(n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.get("profile/".concat(n));case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getInitial=Object(p.a)(b.a.mark((function e(){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.get("auth/me");case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),this.postLogin=function(){var e=Object(p.a)(b.a.mark((function e(n,a,r){var s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.post("auth/login",{email:n,password:a,rememberMe:r});case 2:return s=e.sent,c=s.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),this.deleteLogin=Object(p.a)(b.a.mark((function e(){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.delete("auth/login");case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),this.getStatus=function(){var e=Object(p.a)(b.a.mark((function e(n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.get("profile/status/".concat(n));case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.putStatus=function(){var e=Object(p.a)(b.a.mark((function e(n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.put("profile/status",{status:n});case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.putProfilePhoto=function(){var e=Object(p.a)(b.a.mark((function e(n){var a,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("image",n),e.next=4,t.instance.put("profile/photo",a,{headers:{"Content-Type":"multipart/form-data"}});case 4:return r=e.sent,s=r.data,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.postUserFollow=function(){var e=Object(p.a)(b.a.mark((function e(n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.post("follow/".concat(n));case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.deleteUserFollow=function(){var e=Object(p.a)(b.a.mark((function e(n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.delete("follow/".concat(n));case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=new h,x=new h,g=n(13),v=new h,_=n(31),w=n.n(_);var S=function(){var e=Object(l.d)((function(e){return e.initial.id}));return Object(a.jsxs)("section",{className:w.a.NavBar,children:[Object(a.jsx)(g.b,{to:"/Social-network/Profile/".concat(e),activeClassName:w.a.active,children:Object(a.jsx)("li",{children:" Profile"})}),Object(a.jsx)(g.b,{to:"/Social-network/Messages",activeClassName:w.a.active,children:Object(a.jsx)("li",{children:"Messages"})}),Object(a.jsx)(g.b,{to:"/Social-network/News",activeClassName:w.a.active,children:Object(a.jsx)("li",{children:"News"})}),Object(a.jsx)(g.b,{to:"/Social-network/FindUser",activeClassName:w.a.active,children:Object(a.jsx)("li",{children:"FindUser"})}),Object(a.jsx)(g.b,{to:"/Social-network/Settings",activeClassName:w.a.active,children:Object(a.jsx)("li",{children:"Settings"})})]})},N=n(167),y=function(){var e=Object(l.d)((function(e){return e.ownersInfo})),t=Object(l.d)((function(e){return e.initial.id})),n=Object(l.d)((function(e){return e.isAuth})),s=Object(l.c)();Object(r.useEffect)((function(){var e;s(function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getInitial();case 2:0===(n=e.sent).resultCode&&t({type:"IS_INITIAL",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t&&s((e=t,function(){var t=Object(p.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.getUserProfile(e);case 2:a=t.sent,n({type:"IS_OWNERS_INFO",payload:{name:a.fullName,photo:a.photos.small}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[n]);var c=n?Object(a.jsx)("div",{className:u.a.loginBtn,children:Object(a.jsx)(N.a,{onClick:function(){return s(function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.deleteLogin();case 2:0===e.sent.resultCode&&t({type:"IS_LOGOUT"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"logout"})}):Object(a.jsx)("div",{className:u.a.loginBtn,children:Object(a.jsx)(g.b,{to:"/Login",children:Object(a.jsx)(N.a,{children:"Login"})})});return Object(a.jsxs)("header",{className:u.a.Header,children:[c,n&&Object(a.jsx)(g.b,{to:"/Profile/".concat(t),children:Object(a.jsxs)("div",{className:u.a.userBlk,children:[Object(a.jsx)("img",{src:e.photo}),Object(a.jsx)("p",{children:e.name})]})}),Object(a.jsx)(S,{})]})},I=n(76),k=n.n(I),U=n(77),L=n.n(U),P=n(78),C=n.n(P);var A=function(e){var t=e.publications,n=e.deletePublications;return t.map((function(e){return e.text?Object(a.jsxs)("div",{className:C.a.public,children:[Object(a.jsx)("p",{children:e.text}),Object(a.jsx)("div",{children:Object(a.jsx)(N.a,{onClick:function(){return n(e.id)},children:"x"})})]},e.id):void 0}))},E=n(45),F=n(171);var M=function(e){var t=Object(r.useState)(""),n=Object(E.a)(t,2),s=n[0],c=n[1],i=function(t){t.preventDefault(),e.setPublication(s),c((function(e){return""}))};return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:i,children:[Object(a.jsx)(F.a,{placeholder:"What's new?",value:s,onChange:function(e){""!==e.target.value&&c((function(t){return e.target.value}))},style:{width:"33rem"}}),Object(a.jsx)(N.a,{onClick:i,children:"click"})]})})},T=s.a.memo((function(){var e=Object(l.d)((function(e){return e.publications})),t=Object(l.c)(),n=Object(r.useCallback)((function(e){return t(function(e){var t={text:e,id:Date.now()};return function(e){e({type:"IS_PUBLICATIONS",payload:t})}}(e))}),[t]),s=Object(r.useCallback)((function(e){return t((n=e,function(e){e({type:"IS_DELETE_PUBLICATIONS",payload:n})}));var n}),[t]);return Object(a.jsxs)("div",{className:L.a.PublicationInput,children:[Object(a.jsx)(M,{setPublication:n}),Object(a.jsx)(A,{publications:e,deletePublications:s})]})})),B=n(9),R=n(79),D=n.n(R);var G=function(){return Object(a.jsx)(D.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100})},H=n(35),W=n.n(H);var J=function(e){var t=e.text?e.text:"status free",n=Object(r.useState)(!1),s=Object(E.a)(n,2),c=s[0],i=s[1],o=Object(r.useState)(t),u=Object(E.a)(o,2),l=u[0],j=u[1],b=e.hereOwner,p=b?"".concat(W.a.status," ").concat(W.a.ownStatus):"".concat(W.a.status),d=function(e){b&&i((function(e){return!e}))},f=c?Object(a.jsx)("form",{onSubmit:function(t){e.putStatusAction(l),d()},className:W.a.changeStatus,children:Object(a.jsx)(F.a,{onBlur:d,autoFocus:!0,value:l,onChange:function(e){j((function(t){return e.target.value}))}})}):Object(a.jsxs)("div",{onClick:d,className:p,children:[t,b&&Object(a.jsx)("span",{className:W.a.helper,children:"click to change"})]});return Object(a.jsx)(a.Fragment,{children:f})},Y=n(169),z=n(170),V=n(80),q=n.n(V),X=Object(Y.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"}}}));var K=function(e){var t=X(),n=function(t){t.target.files.length&&e.putProfilePhotoAction(t.target.files[0])};return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)("input",{accept:"image/*",className:t.input,id:"contained-button-file",multiple:!0,type:"file",onChange:n}),Object(a.jsx)("label",{htmlFor:"contained-button-file",children:Object(a.jsx)(N.a,{variant:"contained",color:"primary",component:"span",children:"Upload"})}),Object(a.jsx)("input",{accept:"image/*",className:t.input,id:"icon-button-file",type:"file",onChange:n}),Object(a.jsx)("label",{htmlFor:"icon-button-file",children:Object(a.jsx)(z.a,{color:"primary","aria-label":"upload picture",component:"span",children:Object(a.jsx)(q.a,{})})})]})},Z=n(23),Q=n.n(Z),$=n(81),ee=n.n($),te=n(82),ne=n.n(te),ae=n(83),re=n.n(ae),se=s.a.memo((function(e){var t=e.fullName,n=e.lookingForAJobDescription,r=e.contacts,s=e.photos,c=e.aboutMe,i=e.hereOwner,o=e.userStatusInfo,u=e.putStatusAction,l=e.putProfilePhotoAction,j=s&&s.large?Object(a.jsx)("img",{src:s.large,alt:"userAvatar"}):Object(a.jsx)("img",{className:Q.a.notUserAvata,src:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",alt:"userAvatar"}),b=c||"I'm funny",p=n||Object(a.jsx)("span",{children:"looking for a job"}),d=s&&s.large?"".concat(Q.a.ownUserStyle):"".concat(Q.a.notUserStyle),f=r&&r.github?Object(a.jsxs)("div",{children:[Object(a.jsxs)("a",{href:r.github,target:"_blank",className:Q.a.socLink,children:[Object(a.jsx)(ee.a,{}),"Github"]}),Object(a.jsxs)("a",{href:r.website,target:"_blank",className:Q.a.socLink,children:[Object(a.jsx)(ne.a,{}),"Portfolio"]}),Object(a.jsxs)("a",{href:r.mainLink,target:"_blank",className:Q.a.socLink,children:[Object(a.jsx)(re.a,{}),"Linkedin"]})]}):Object(a.jsx)("div",{className:Q.a.socText,children:"User doesn't have social networks"});return t?Object(a.jsxs)("div",{className:Q.a.userPage,children:[Object(a.jsxs)("div",{className:Q.a.container,children:[Object(a.jsxs)("div",{className:d,children:[j,i&&Object(a.jsx)(K,{putProfilePhotoAction:l})]}),Object(a.jsxs)("div",{className:Q.a.userInfo,children:[Object(a.jsx)("p",{className:Q.a.userName,children:t}),Object(a.jsx)(J,{text:o,putStatusAction:u,hereOwner:i}),f]})]}),Object(a.jsxs)("div",{className:Q.a.aboutMeInfo,children:[Object(a.jsxs)("p",{children:["About me: ",b]}),Object(a.jsxs)("p",{children:["Work status: ",p]})]})]}):Object(a.jsx)(G,{})})),ce=new h,ie=function(){var e=Object(B.g)().id,t=Object(l.d)((function(e){return e.userInfo})),n=Object(l.d)((function(e){return e.status})),s=Object(l.d)((function(e){return e.initial.id})),c=Object(l.c)(),i=t.fullName,o=t.lookingForAJobDescription,u=t.contacts,j=t.photos,d=t.aboutMe,f=Object(r.useCallback)((function(e){return c(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.putStatus(e);case 2:0===t.sent.resultCode&&n({type:"IS_STATUS_INFO",payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[c]),O=Object(r.useCallback)((function(e){return c(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.putProfilePhoto(e);case 2:0===(a=t.sent).resultCode&&n({type:"IS_NEW_USER_PHOTO",payload:a.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[c]);Object(r.useEffect)((function(){c(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.getUserProfile(e);case 2:a=t.sent,n({type:"IS_USER_INFO",payload:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),c(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce.getStatus(e);case 2:a=t.sent,n({type:"IS_STATUS_INFO",payload:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[e]);var h=s==e;return Object(a.jsxs)("section",{className:k.a.UserProfile,children:[Object(a.jsx)(se,{fullName:i,lookingForAJobDescription:o,contacts:u,photos:j,aboutMe:d,hereOwner:h,userStatusInfo:n,putStatusAction:f,putProfilePhotoAction:O}),h&&Object(a.jsx)(T,{})]})},oe=n(84),ue=n.n(oe),le=n(85),je=n.n(le),be=n(63),pe=n.n(be);var de=function(e){var t=e.dialogNameList.map((function(e){return Object(a.jsx)("div",{className:pe.a.dialogItem,children:Object(a.jsx)(g.b,{to:"/Messages/"+e.name,children:e.name})},e.id)}));return Object(a.jsx)("div",{className:pe.a.dialogs,children:t})},fe=n(86),Oe=n.n(fe);var he=function(e){var t=e.dialogMessagesList,n=e.actionNewMessage,r=t.map((function(e){return Object(a.jsx)("div",{children:e.messageText},e.id)}));return Object(a.jsxs)("div",{className:Oe.a.MessageItem,children:[r,Object(a.jsx)(M,{setPublication:n})]})},me=function(){var e=Object(l.d)((function(e){return e.dialogMessagesList})),t=Object(l.d)((function(e){return e.dialogNameList})),n=Object(l.c)(),s=Object(r.useCallback)((function(e){return n(function(e){var t={messageText:e,id:Date.now()};return function(e){e({type:"IS_MESSAEGS",payload:t})}}(e))}),[n]);return Object(a.jsxs)("section",{className:je.a.Messages,children:[Object(a.jsx)("div",{children:Object(a.jsx)(de,{dialogNameList:t})}),Object(a.jsx)(he,{dialogMessagesList:e,actionNewMessage:s})]})},xe=n(87),ge=n.n(xe),ve=n(57),_e=n.n(ve);var we=function(e){var t=e.name,n=e.id,r=e.follow,s=e.photos,c=e.postUserFollow,i=e.deleteUserFollow,o=r?"unfollow":"follow",u=s.large?s.large:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png";return Object(a.jsxs)("div",{className:_e.a.user,children:[Object(a.jsx)("div",{className:_e.a.userAvatar,children:Object(a.jsx)(g.b,{to:"/Profile/".concat(n),children:Object(a.jsx)("img",{src:u,alt:"logo"})})}),Object(a.jsxs)("div",{className:_e.a.followBlk,children:[Object(a.jsx)("p",{children:t}),Object(a.jsx)(N.a,{onClick:r?function(){return i(n)}:function(){return c(n)},children:o})]})]},n)},Se=new h,Ne=function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Se.getUsers(e);case 2:a=t.sent,r=a.items,n({type:"IS_USERS",payload:{responseUsersArr:r,paginator:{pageNumber:e||1}}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ye=n(64),Ie=n.n(ye),ke=Object(l.b)((function(e){return{currentPage:e.paginator}}),(function(e,t){return{getPage:function(n){return e(t.onPaginatorPage(n))}}}))((function(e){var t=e.currentPage,n=e.getPage,r=t>1?t-1:t,s=t+1;return Object(a.jsxs)("div",{className:Ie.a.paginator,children:[Object(a.jsx)(N.a,{onClick:function(){return n(r)},children:"Prev List"}),Object(a.jsx)("span",{className:Ie.a.pageNumber,children:t}),Object(a.jsx)(N.a,{onClick:function(){return n(s)},children:"Next List"})]})})),Ue=new h,Le=function(){var e=Object(l.d)((function(e){return e.users})),t=Object(l.c)(),n=Object(r.useCallback)((function(e){return t(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ue.postUserFollow(e);case 2:0===t.sent.resultCode&&n({type:"IS_USERS_FOLLOW",payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t]),s=Object(r.useCallback)((function(e){return t(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ue.deleteUserFollow(e);case 2:0===t.sent.resultCode&&n({type:"IS_USERS_FOLLOW",payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t]);if(Object(r.useEffect)((function(){t(Ne())}),[]),!e.length)return Object(a.jsx)(G,{});var c=e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(we,{name:e.name,id:e.id,follow:e.followed,photos:e.photos,postUserFollow:n,deleteUserFollow:s})},e.id)}));return Object(a.jsxs)("div",{className:ge.a.findUser,children:[Object(a.jsx)("ul",{children:c}),Object(a.jsx)(ke,{onPaginatorPage:Ne})]})},Pe=n(5),Ce=n(94),Ae=function(e){var t=e.component,n=Object(Ce.a)(e,["component"]),r=Object(l.d)((function(e){return e.isAuth}));return Object(a.jsx)(B.b,Object(Pe.a)(Object(Pe.a)({},n),{},{render:function(e){return r?r?Object(a.jsx)(t,Object(Pe.a)({},e)):void 0:Object(a.jsx)(B.a,{to:"/login"})}}))},Ee=n(32),Fe=n(22),Me=n.n(Fe),Te=function(){var e=Object(l.c)();return Object(a.jsx)(Ee.d,{initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var n=t.email,a=t.password,r=t.rememberMe;e(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var a=Object(p.a)(b.a.mark((function a(r){var s;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.postLogin(e,t,n);case 2:0===(s=a.sent).resultCode&&r({type:"IS_LOGIN"}),1===s.resultCode&&r({type:"IS_LOGIN_ERROR"});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(n,a,r))},validate:function(e){var t={};return e.email||(t.email="Email is empty"),e.password||(t.password="Password is empty"),t},children:function(){return Object(a.jsx)(Ee.c,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:Me.a.loginForm,children:Object(a.jsx)(Ee.b,{placeholder:"Email",type:"login",name:"email"})}),Object(a.jsx)(Ee.a,{className:Me.a.loginError,name:"email",component:"div"}),Object(a.jsx)("div",{className:Me.a.loginForm,children:Object(a.jsx)(Ee.b,{placeholder:"Password",type:"password",name:"password"})}),Object(a.jsx)(Ee.a,{className:Me.a.loginError,name:"password",component:"div"}),Object(a.jsx)("div",{className:Me.a.submitLogin,children:Object(a.jsx)(N.a,{type:"submit",children:"Come in"})})]})})}})},Be=function(e){var t=Object(l.d)((function(e){return e.isAuth})),n=Object(l.d)((function(e){return e.isAuthError}))?Object(a.jsx)("div",{className:Me.a.loginError,children:"Login or password is incorrect"}):null;return t?Object(a.jsx)(B.a,{to:"/News"}):Object(a.jsxs)("div",{className:Me.a.loginFormContainer,children:[Object(a.jsxs)("div",{className:Me.a.loginContainer,children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsx)(Te,{}),n]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:Me.a.helper,children:"You can use this login and password to enter the network"}),Object(a.jsx)("div",{className:Me.a.helperLogin,children:"EMAIL: rabr663@gmail.com"}),Object(a.jsx)("div",{className:Me.a.helperLogin,children:"PASSWORD: w1934s"})]})]})},Re=n(90),De=n.n(Re),Ge=function(){return Object(a.jsxs)("div",{className:De.a.news,children:[Object(a.jsx)("h2",{children:"Hello my friend."}),Object(a.jsx)("p",{children:"This is my pet-project, social network. Here I am practising and learning coding skills."}),Object(a.jsx)("p",{children:"You can look at its functionality and if you have any comments, write to me at Linkedin"}),Object(a.jsx)("p",{children:"Happy using!"})]})},He=n(91),We=n.n(He),Je=n(92),Ye=n.n(Je),ze=function(){return Object(a.jsx)("div",{className:We.a.settings,children:Object(a.jsxs)("h2",{children:[Object(a.jsx)(Ye.a,{})," The page is under revision"]})})},Ve=n(47),qe=n(41),Xe=n(93),Ke={dialogNameList:[{name:"Vlad",id:1},{name:"Vera",id:2},{name:"Julia",id:3},{name:"Tania",id:4}],dialogMessagesList:[],publications:[],users:[],paginator:null,userInfo:[],ownersInfo:[],initial:[],isAuth:!1,isAuthError:!1,status:null};var Ze=Object(qe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_PUBLICATIONS":return Object(Pe.a)(Object(Pe.a)({},e),{},{publications:[t.payload].concat(Object(Ve.a)(e.publications))});case"IS_DELETE_PUBLICATIONS":return Object(Pe.a)(Object(Pe.a)({},e),{},{publications:e.publications.map((function(n){return n.id===t.payload?[].concat(Object(Ve.a)(e.publications.slice(0,n)),Object(Ve.a)(e.publications.slice(n+1))):n}))});case"IS_MESSAEGS":return Object(Pe.a)(Object(Pe.a)({},e),{},{dialogMessagesList:[].concat(Object(Ve.a)(e.dialogMessagesList),[t.payload])});case"IS_USERS":return Object(Pe.a)(Object(Pe.a)({},e),{},{users:t.payload.responseUsersArr,paginator:t.payload.paginator.pageNumber});case"IS_USERS_FOLLOW":return Object(Pe.a)(Object(Pe.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload?Object(Pe.a)(Object(Pe.a)({},e),{},{followed:!e.followed}):e}))});case"IS_USER_INFO":return Object(Pe.a)(Object(Pe.a)({},e),{},{userInfo:t.payload});case"IS_OWNERS_INFO":return Object(Pe.a)(Object(Pe.a)({},e),{},{ownersInfo:t.payload});case"IS_INITIAL":return Object(Pe.a)(Object(Pe.a)({},e),{},{initial:t.payload,isAuth:!0});case"IS_LOGIN":return Object(Pe.a)(Object(Pe.a)({},e),{},{isAuth:!0,isAuthError:!1});case"IS_LOGIN_ERROR":return Object(Pe.a)(Object(Pe.a)({},e),{},{isAuthError:!0});case"IS_LOGOUT":return Object(Pe.a)(Object(Pe.a)({},e),{},{isAuth:!1});case"IS_STATUS_INFO":return Object(Pe.a)(Object(Pe.a)({},e),{},{status:t.payload});case"IS_NEW_USER_PHOTO":return Object(Pe.a)(Object(Pe.a)({},e),{},{userInfo:Object(Pe.a)(Object(Pe.a)({},e.userInfo),{},{photos:t.payload}),ownersInfo:Object(Pe.a)(Object(Pe.a)({},e.ownersInfo),{},{photo:t.payload.small})});default:return e}}),Object(qe.a)(Xe.a));var Qe=function(){return Object(a.jsx)(l.a,{store:Ze,children:Object(a.jsx)(g.a,{children:Object(a.jsxs)("div",{className:ue.a.container,children:[Object(a.jsx)(y,{}),Object(a.jsxs)(B.d,{children:[Object(a.jsx)(Ae,{path:"/Social-network/profile/:id?",component:ie}),Object(a.jsx)(Ae,{path:"/Social-network/messages",component:me}),Object(a.jsx)(Ae,{path:"/Social-network/findUser",component:Le}),Object(a.jsx)(B.b,{path:"/Social-network/News",component:Ge}),Object(a.jsx)(B.b,{path:"/Social-network/Settings",component:ze}),Object(a.jsx)(B.b,{path:"/Social-network",component:Be})]})]})})})};i.a.render(Object(a.jsx)(Qe,{}),document.getElementById("root"))},22:function(e,t,n){e.exports={loginContainer:"Login_loginContainer__28Gi1",loginForm:"Login_loginForm__1zkXL",loginError:"Login_loginError__2CN8D",submitLogin:"Login_submitLogin__1bYwc",loginFormContainer:"Login_loginFormContainer__2BvBy",helper:"Login_helper__1LSd3",helperLogin:"Login_helperLogin___dc56"}},23:function(e,t,n){e.exports={userPage:"UserPage_userPage__3DuJO",container:"UserPage_container__3lH5p",userInfo:"UserPage_userInfo__2HVYz",userName:"UserPage_userName__1Co8U",socLink:"UserPage_socLink__34uYd",socText:"UserPage_socText__1BhgJ",aboutMeInfo:"UserPage_aboutMeInfo__u0Pk3",notUserAvata:"UserPage_notUserAvata__P_NGO",notUserStyle:"UserPage_notUserStyle__1bHLi"}},31:function(e,t,n){e.exports={NavBar:"NavBar_NavBar__32qqS",active:"NavBar_active__YUFay"}},35:function(e,t,n){e.exports={status:"UserStatus_status__3weY2",ownStatus:"UserStatus_ownStatus__3kgT4",helper:"UserStatus_helper__3CXP9",changeStatus:"UserStatus_changeStatus__2zilC"}},46:function(e,t,n){e.exports={Header:"header_Header__13OZ3",userBlk:"header_userBlk__2rDxb",loginBtn:"header_loginBtn__pt6dv"}},57:function(e,t,n){e.exports={user:"User_user__3PL67",followBlk:"User_followBlk__DAUit"}},63:function(e,t,n){e.exports={dialogItem:"Dialogs_dialogItem__W1J6G"}},64:function(e,t,n){e.exports={paginator:"Paginator_paginator__pjS_3",pageNumber:"Paginator_pageNumber__5H14X"}},76:function(e,t,n){e.exports={UserProfile:"UserProfile_UserProfile__vnisr",userInfo:"UserProfile_userInfo__3nh2B"}},77:function(e,t,n){},78:function(e,t,n){e.exports={public:"PublicationsList_public__3q3m3"}},84:function(e,t,n){e.exports={container:"App_container__3WFAm"}},85:function(e,t,n){e.exports={Messages:"Messages_Messages__3mfzF"}},86:function(e,t,n){e.exports={MessageItem:"MessageItem_MessageItem__2Ayvr"}},87:function(e,t,n){e.exports={findUser:"FindUser_findUser__-gUk-"}},90:function(e,t,n){e.exports={news:"News_news__2dbbE"}},91:function(e,t,n){e.exports={settings:"Settings_settings__1308B"}}},[[149,1,2]]]);
//# sourceMappingURL=main.6575b874.chunk.js.map