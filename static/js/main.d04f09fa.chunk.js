(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,n){e.exports=n(75)},75:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(15),s=n.n(r),i=n(5),c=n(6),l=n(9),u=n(7),p=n(8),d=n(80),m=n(82),h=n(78),b=n(77),v=n(10),g=n(22),f=n.n(g);f.a.initializeApp({apiKey:"AIzaSyAhQunsX8aLAc1j459PORR1blnMZqzyoJY",authDomain:"thespotcoloradosprings.firebaseapp.com",databaseURL:"https://thespotcoloradosprings.firebaseio.com",projectId:"thespotcoloradosprings",storageBucket:"thespotcoloradosprings.appspot.com",messagingSenderId:"706866210540"});var O=f.a.database(),y=f.a.auth(),j=new f.a.auth.GoogleAuthProvider,E=new f.a.auth.TwitterAuthProvider,N="GET_COMMENTS",S="GET_USER",C="GET_SPOTS",k="GET_NOTES",w="USER_STATUS",L="COMMENTS_STATUS",T="NOTES_STATUS",x="SPOTS_STATUS";function D(){return function(e){e({type:w,payload:!0}),y.onAuthStateChanged(function(t){e({type:S,payload:t}),e({type:w,payload:!1},function(){e({type:w,payload:-1})})})}}function A(){return function(e){return y.signOut()}}var I=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"navbar navbar-default"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"navbar-header container-fluid"},o.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},o.a.createElement("div",{className:"icon-bar"}),o.a.createElement("div",{className:"icon-bar"}),o.a.createElement("div",{className:"icon-bar"})),o.a.createElement(b.a,{className:"navbar-brand",to:"/"},"the Spot Social"),o.a.createElement(b.a,{className:"nav-item",to:"/commentSection",style:{padding:"10px"}},"Comments"),o.a.createElement(b.a,{className:"nav-item",to:"/spotSection",style:{padding:"10px"}},"Spots"),o.a.createElement(b.a,{className:"nav-item",to:"/notesSection",style:{padding:"10px"}},"Notes"),o.a.createElement("ul",{className:"navbar-nav nav navbar-right"},o.a.createElement("li",null,this.props.user?o.a.createElement("div",null,"Hi ",this.props.user.displayName,o.a.createElement(b.a,{to:"/logout",onClick:function(){return e.props.logout()}},"Logout")):o.a.createElement("div",null,o.a.createElement(b.a,{className:"",to:"/login"},"Login")))))))}}]),t}(a.Component),U={getUser:D,logout:A},M=Object(v.b)(function(e){return{user:e.user}},U)(I),B=function(){return o.a.createElement("div",null,"LandingPage")},P=n(79),R=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"isLoggedIn",value:function(){return this.props.user?o.a.createElement(P.a,{to:"/"}):o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row text-center"},o.a.createElement("h1",null,"Login with a Social Network")),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("button",{className:"btn btn-danger but-lg",onClick:this.props.googleLogin},"Login with Google")),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("button",{className:"btn btn-danger but-lg",onClick:this.props.twitterLogin},"Login with Twitter")))}},{key:"render",value:function(){return o.a.createElement("div",null,this.isLoggedIn())}}]),t}(a.Component),_={googleLogin:function(){return function(e){return y.signInWithPopup(j)}},twitterLogin:function(){return function(e){return y.signInWithPopup(E)}}},W=Object(v.b)(function(e){return{user:e.user}},_)(R),G=n(20),z=n(4),H=n(17),J=n.n(H);function q(){return function(e){e({type:L,payload:!0}),O.ref("Comments").on("value",function(t){e({type:N,payload:t.val()}),e({type:L,payload:!1})})}}var K=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={title:"",body:""},n.handleChange=n.handleChange.bind(Object(z.a)(Object(z.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(z.a)(Object(z.a)(n))),n.renderComments=n.renderComments.bind(Object(z.a)(Object(z.a)(n))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getComments(),console.log(this.props.comments)}},{key:"handleChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={title:this.state.title,body:this.state.body,uid:this.props.user.uid};this.props.addComments(t),this.setState({title:"",body:""})}},{key:"renderComments",value:function(){var e=this;return J.a.map(this.props.comments,function(t,n){return o.a.createElement("div",{key:n},e.props.user.uid===t.uid?o.a.createElement("div",null,o.a.createElement("h2",null,t.title),o.a.createElement("p",null,t.body),o.a.createElement("button",{onClick:function(){return e.props.deleteComment(n)}},"Delete Comment")):null)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"commentsBox"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{name:"title",onChange:this.handleChange,value:this.state.title,type:"text",placeholder:"Title of Comment"}),o.a.createElement("textarea",{name:"body",onChange:this.handleChange,value:this.state.body,type:"textarea",placeholder:"Boddy of Comment"}),o.a.createElement("button",{type:"submit"},"Add Comment")),this.renderComments())}}]),t}(a.Component),Q={getComments:q,addComments:function(e){return function(t){return O.ref("Comments").push(e)}},deleteComment:function(e){return function(t){return O.ref("Comments").child(e).remove()}}},V=Object(v.b)(function(e){return console.log(e),{comments:e.comments,user:e.user}},Q)(K),X=n(27);function Y(){return function(e){e({type:x,payload:!0}),O.ref("spots").on("value",function(t){e({type:C,payload:t.val()}),e({type:x,payload:!1})})}}var Z=n(28),$=n(21),F=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={collapse:!1},n.toggle=n.toggle.bind(Object(z.a)(Object(z.a)(n))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){var e=this.props.spot;return o.a.createElement("div",null,o.a.createElement($.a,{className:"accordionButton",block:!0,onClick:this.toggle},e.CompanyName),o.a.createElement($.b,{isOpen:this.state.collapse},o.a.createElement("div",{className:"spotHeaderSection"},e.PhoneNumberCombined," ",e.Address)))}}]),t}(a.Component);Object(v.b)(function(e){return{}},{})(F);function ee(){var e=Object(X.a)(["\n  .individualSpotComponent {\n    padding-top: 1vh;\n  }\n\n  .spotHeaderSection {\n    color: green;\n    font-size: 5vh;\n  }\n"]);return ee=function(){return e},e}var te=Z.a.div(ee()),ne=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).renderSpots=n.renderSpots.bind(Object(z.a)(Object(z.a)(n))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getSpots()}},{key:"renderSpots",value:function(){return J.a.map(this.props.spots,function(e,t){return o.a.createElement("div",{key:t,className:"individualSpotComponent"},o.a.createElement(F,{spot:e}))})}},{key:"render",value:function(){return o.a.createElement(te,{className:"spotsBox"},this.renderSpots())}}]),t}(a.Component),ae={getSpots:Y},oe=Object(v.b)(function(e){return{spots:e.spots,user:e.user}},ae)(ne);function re(){return function(e){e({type:T,payload:!0}),O.ref("barNotes").on("value",function(t){e({type:k,payload:t.val()}),e({type:T,payload:!1})})}}var se=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={date:"",note:""},n.handleChange=n.handleChange.bind(Object(z.a)(Object(z.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(z.a)(Object(z.a)(n))),n.renderNotes=n.renderNotes.bind(Object(z.a)(Object(z.a)(n))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getNotes()}},{key:"handleChange",value:function(e){this.setState(Object(G.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={date:this.state.date,note:this.state.note,uid:this.props.user.uid,spotID:this.props.spotID};this.props.addNotes(t),this.setState({date:"",note:""})}},{key:"renderNotes",value:function(){var e=this;return J.a.map(this.props.notes,function(t,n){return o.a.createElement("div",{key:n},e.props.spotID===t.spotID?o.a.createElement("div",null,o.a.createElement("h2",null,t.date),o.a.createElement("p",null,t.note),o.a.createElement("button",{onClick:function(){return e.props.deleteNote(n)}},"Delete Note")):null)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"notesBox"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{name:"date",onChange:this.handleChange,value:this.state.date,type:"date",placeholder:"DAte of Note"}),o.a.createElement("textarea",{name:"note",onChange:this.handleChange,value:this.state.note,type:"textarea",placeholder:"Body of Note"}),o.a.createElement("button",{type:"submit"},"Add Note")),this.renderNotes())}}]),t}(a.Component),ie=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={collapse:!1},n.toggle=n.toggle.bind(Object(z.a)(Object(z.a)(n))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){var e=this.props.spot;return o.a.createElement("div",null,o.a.createElement($.a,{className:"accordionButton",block:!0,onClick:this.toggle},e.CompanyName),o.a.createElement($.b,{isOpen:this.state.collapse},o.a.createElement("div",{className:"spotHeaderSection"},o.a.createElement(se,{spotID:this.props.spotID,getNotes:this.props.getNotes,addNotes:this.props.addNotes,deleteNote:this.props.deleteNote,notes:this.props.notes,user:this.props.user}))))}}]),t}(a.Component);function ce(){var e=Object(X.a)(["\n  .individualSpotComponent {\n    padding-top: 1vh;\n  }\n\n  .spotHeaderSection {\n    color: green;\n    font-size: 5vh;\n  }\n"]);return ce=function(){return e},e}var le=Z.a.div(ce()),ue=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).renderSpots=n.renderSpots.bind(Object(z.a)(Object(z.a)(n))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getSpots(),this.props.getNotes()}},{key:"renderSpots",value:function(){var e=this;return J.a.map(this.props.spots,function(t,n){return o.a.createElement("div",{key:n,className:"individualSpotComponent"},o.a.createElement(ie,{getNotes:e.props.getNotes,addNotes:e.props.addNotes,deleteNote:e.props.deleteNote,spot:t,spotID:n,notes:e.props.notes,user:e.props.user}))})}},{key:"render",value:function(){return o.a.createElement(le,{className:"spotsBox"},this.renderSpots())}}]),t}(a.Component),pe={getSpots:Y,getNotes:re,addNotes:function(e){return function(t){return O.ref("barNotes").push(e)}},deleteNote:function(e){return function(t){return O.ref("barNotes").child(e).remove()}}},de=Object(v.b)(function(e){return{spots:e.spots,user:e.user,notes:e.notes}},pe)(ue),me=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:""},this.props.user?o.a.createElement("div",null,o.a.createElement("div",null,this.props.children)):o.a.createElement("div",null,o.a.createElement(P.a,{className:"",to:"/login"})))}}]),t}(a.Component),he={getUser:D,logout:A},be=(Object(v.b)(function(e){return{user:e.user}},he)(me),n(81)),ve=n(23),ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(ve.a)({},e,{comments:t.payload});case w:return Object(ve.a)({},e,{user:t.payload});case x:case T:return Object(ve.a)({},e,{spots:t.payload});default:return e}},fe=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.userLoading,n=e.commentsLoading,a=e.spotsLoading,o=e.notesLoading;void 0===t&&this.props.getUser(),void 0===n&&this.props.getComments(),void 0===a&&this.props.getSpots(),void 0===o&&this.props.getNotes()}},{key:"componentWillReceiveProps",value:function(e){-1===e.commentsLoading&&null!==e.user&&e.spotsLoading&&e.notes.Loading&&(this.props.getComments(),this.props.getNotes())}},{key:"render",value:function(){var e=this.props,t=e.userLoading,n=e.commentsLoading,a=e.children,r=e.spotsLoading,s=e.notesLoading;return(t||n||r||s)&&null!==this.props.user?o.a.createElement("div",null,o.a.createElement("h2",null,"Loading...")):o.a.createElement("div",null,a)}}]),t}(a.Component),Oe={getUser:D,getComments:q,getSpots:Y,loadingReducer:ge,getNotes:re},ye=Object(be.a)(Object(v.b)(function(e){return{user:e.user,userLoading:e.loading.user,commentsLoading:e.loading.comments,spotsLoading:e.loading.spots,notesLoading:e.loading.notes}},Oe)(fe)),je=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){n.props.getUser()},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement("div",{className:"mainViewer"},o.a.createElement(M,null),o.a.createElement(ye,null,o.a.createElement(m.a,null,o.a.createElement(h.a,{path:"/",component:B,exact:!0}),o.a.createElement(h.a,{path:"/login",component:W,exact:!0}),o.a.createElement(me,{user:this.props.user},o.a.createElement(h.a,{path:"/commentSection",component:V,exact:!0}),o.a.createElement(h.a,{path:"/spotSection",component:oe,exact:!0}),o.a.createElement(h.a,{path:"/notesSection",component:de,exact:!0})))))))}}]),t}(a.Component),Ee={getUser:D},Ne=Object(v.b)(function(e){return{user:e.user}},Ee)(je),Se=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(Ne,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(73);var Ce=n(16),ke=n(46),we=n(47),Le=Object(Ce.combineReducers)({comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.payload;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.payload;default:return e}},loading:ge,spots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.payload;default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.payload;default:return e}}}),Te=Object(Ce.createStore)(Le,Object(we.composeWithDevTools)(Object(Ce.applyMiddleware)(ke.a)));s.a.render(o.a.createElement(v.a,{store:Te},o.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,2,1]]]);
//# sourceMappingURL=main.d04f09fa.chunk.js.map