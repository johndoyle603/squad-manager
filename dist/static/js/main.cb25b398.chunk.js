(this["webpackJsonpsquad-manager"]=this["webpackJsonpsquad-manager"]||[]).push([[0],{349:function(e,t,a){e.exports=a(641)},354:function(e,t,a){},599:function(e,t,a){},641:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=(a(354),a(33)),s=a(34),i=a(37),u=a(35),m=a(38),d=a(24),h=a(79),p=a(21),b=Object(p.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/registerteam"},"Register a Team")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/",className:"btn btn-floating orange darken-3"},e.profile.initials)))})),f=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signup"},"Register")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signin"},"Sign In")))}}]),t}(n.Component),E=Object(p.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(b,{profile:a}):r.a.createElement(f,null);return r.a.createElement("nav",{id:"nav",className:"nav-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement(d.b,{to:"/",className:"brand-logo"},"Squad Master"),t.isLoaded&&n))})),g=function(e){var t=e.team;return r.a.createElement("div",{className:"card z-depth-0 project-summary",id:"card"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.name),r.a.createElement("p",{className:"grey-test"},"Team Manager : ",t.managerFirstName,"  ",t.managerLastName),r.a.createElement("p",{className:"grey-test"},"Sport : ",t.sport)))},O=function(e){var t=e.teams;return r.a.createElement("div",{className:"team-list section"},t&&t.map((function(e){return r.a.createElement(d.b,{to:"/team/"+e.id},r.a.createElement(g,{team:e,key:e.id}))})))},y=function(){return r.a.createElement("div",{className:"container"})},v=a(49),j=a(39),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.teams;return e.auth.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("h5",{id:"dashboardHeader"},"My Teams"),r.a.createElement("p",{id:"dashboardSubHeader"},"(Click Team Card to see Team Details)"),r.a.createElement(O,{teams:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement("h5",{id:"dashboardHeader"},"Upcoming Games"),r.a.createElement(y,null)))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),S=Object(j.d)(Object(p.b)((function(e){return console.log(e),{teams:e.firestore.ordered.teams,auth:e.firebase.auth}})),Object(v.firestoreConnect)((function(e){return[{collection:"users",doc:e.auth.uid,subcollections:[{collection:"teams"}],storeAs:"teams"}]})))(N),I=a(648),C=a(36),P=(a(121),a(56)),R=a(647),w=a(645),A=a(646);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var F=function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("/users/"+l+"/teams/").add(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){Object(C.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{managerFirstName:c.firstName,managerLastName:c.lastName,managerId:l,createdAt:new Date})).then((function(){t({type:"CREATE_TEAM",team:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}},T=a(173),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1,playerFirstName:"",playerLastName:"",playerDues:""},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(e){console.log(e),a.setState({visible:!1})},a.handleCancel=function(e){console.log(e),a.setState({visible:!1})},a.handleChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.insertPlayer(a.state,a.props.match.params.id),a.setState({visible:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P.a,{type:"primary",onClick:this.showModal},"Add a Player"),r.a.createElement(R.a,{title:"Add a Player",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},r.a.createElement(w.a,{id:"form",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Player Details"),r.a.createElement(w.a.Item,{label:"Player First Name",htmlFor:"Player First Name"},r.a.createElement(A.a,{id:"playerFirstName",placeholder:"John",onChange:this.handleChange})),r.a.createElement(w.a.Item,{label:"Player Last Name",htmlFor:"Player Last Name"},r.a.createElement(A.a,{id:"playerLastName",placeholder:"Smith",onChange:this.handleChange})),r.a.createElement(w.a.Item,{label:"Player Dues ($)",htmlFor:"Player Dues"},r.a.createElement(A.a,{id:"playerDues",placeholder:"100",onChange:this.handleChange})),r.a.createElement(w.a.Item,null,r.a.createElement(P.a,{type:"primary",htmlType:"submit"},"Add Player")))))}}]),t}(n.Component),x=Object(T.a)(h.h,Object(p.b)((function(e){return console.log(e),{auth:e.firebase.auth}}),(function(e){return{insertPlayer:function(t,a){return e(function(e,t){var a=e.playerFirstName,n=e.playerLastName,r=e.playerDues;return function(e,c,l){l.getFirebase;var o=(0,l.getFirestore)(),s=c().firebase.auth.uid;o.collection("/users/"+s+"/teams/"+t+"/roster/").add({playerFirstName:a,playerLastName:n,playerDues:r,addedBy:s,addedAt:new Date}).then((function(){e({type:"INSERT_PLAYER",player:{playerFirstName:a,playerLastName:n,playerDues:r}})})).catch((function(t){e({type:"INSERT_PLAYER_ERROR",err:t})}))}}(t,a))}}})))(k),L=a(644),_=a(345),G=a(14),M=a.n(G);function U(e){console.log("onOk: ",e)}var J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1,date:"",time:"",opponent:""},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(e){console.log(e),a.setState({visible:!1})},a.handleCancel=function(e){console.log(e),a.setState({visible:!1})},a.handleTextInputChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.insertGame(a.state,a.props.match.params.id),a.setState({visible:!1})},a.handleDateInputChange=function(e){var t=e.format("YYYY/MM/DD");a.setState({date:t})},a.handleTimeInputChange=function(e){var t=e.format("HH:mm");a.setState({time:t})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P.a,{type:"primary",onClick:this.showModal},"Add a Game"),r.a.createElement(R.a,{title:"Add a Game",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},r.a.createElement(w.a,{id:"form",onSubmit:this.handleSubmit},r.a.createElement(L.a,{id:"date",format:"YYYY/MM/DD",selected:this.state.date,placeholder:"Select Day",onChange:this.handleDateInputChange,onOk:U}),r.a.createElement(_.a,{id:"time",defaultOpenValue:M()("00:00","HH:mm"),selected:this.state.time,onChange:this.handleTimeInputChange}),",",r.a.createElement(w.a.Item,{label:"Opponent",htmlFor:"Opponent"},r.a.createElement(A.a,{id:"opponent",onChange:this.handleTextInputChange,placeholder:"Opponent Team Name"})),r.a.createElement(P.a,{type:"primary",htmlType:"submit"},"Add Game"))))}}]),t}(n.Component),Y=Object(T.a)(h.h,Object(p.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{insertGame:function(t,a){return e(function(e,t){var a=e.time,n=e.date,r=e.opponent;return function(e,c,l){l.getFirebase;var o=(0,l.getFirestore)(),s=c().firebase.auth.uid;o.collection("/users/"+s+"/teams/"+t+"/schedule/").add({date:n,opponent:r,time:a,addedBy:s,addedAt:new Date}).then((function(){e({type:"INSERT_GAME",game:{date:n,opponent:r}})})).catch((function(t){e({type:"INSERT_GAME_ERROR",err:t})}))}}(t,a))}}})))(J),q=a(643),B=[{title:"Name",dataIndex:"name"},{title:"Dues",dataIndex:"dues"},{title:"Action",dataIndex:"action"}],H=Object(j.d)(h.h,Object(p.b)((function(e,t){return{loading:e.firestore.status.requesting.team,team:e.firestore.data.team,schedule:e.firestore.ordered.schedule,roster:e.firestore.ordered.roster,auth:e.firebase.auth,teamId:t.match.params.id}})),Object(v.firestoreConnect)((function(e){return[{collection:"users",doc:e.auth.uid,subcollections:[{collection:"teams",doc:e.teamId}],storeAs:"team"},{collection:"users",doc:e.auth.uid,subcollections:[{collection:"teams",doc:e.teamId,subcollections:[{collection:"roster"}]}],storeAs:"roster"},{collection:"users",doc:e.auth.uid,subcollections:[{collection:"teams",doc:e.teamId,subcollections:[{collection:"schedule"}]}],storeAs:"schedule"}]})))((function(e){var t=e.team,a=e.loading,n=e.roster,c=e.schedule;if(a||!t||!n||!c)return r.a.createElement(I.a,null);var l=[];return n.map((function(e){l.push({name:e.playerFirstName+" "+e.playerLastName,dues:e.playerDues+"$",action:r.a.createElement("a",null,"Delete")})})),r.a.createElement(q.a,{columns:B,dataSource:l})})),W=[{title:"Date",dataIndex:"date"},{title:"Time",dataIndex:"time"},{title:"Opponent",dataIndex:"opponent"},{title:"Action",dataIndex:"action"}],z=Object(j.d)(h.h,Object(p.b)((function(e,t){return{loading:e.firestore.status.requesting.team,team:e.firestore.data.team,schedule:e.firestore.ordered.schedule,roster:e.firestore.ordered.roster,auth:e.firebase.auth,teamId:t.match.params.id}})),Object(v.firestoreConnect)((function(e){return[{collection:"users",doc:e.auth.uid,subcollections:[{collection:"teams",doc:e.teamId}],storeAs:"team"},{collection:"users",doc:e.auth.uid,subcollections:[{collection:"teams",doc:e.teamId,subcollections:[{collection:"roster"}]}],storeAs:"roster"},{collection:"users",doc:e.auth.uid,subcollections:[{collection:"teams",doc:e.teamId,subcollections:[{collection:"schedule"}]}],storeAs:"schedule"}]})))((function(e){var t=e.team,a=e.loading,n=e.roster,c=e.schedule;if(a||!t||!n||!c)return r.a.createElement(I.a,null);var l=[];return c.map((function(e){l.push({date:e.date,time:e.time,opponent:e.opponent,action:r.a.createElement("a",null,"Delete")})})),r.a.createElement(q.a,{columns:W,dataSource:l})})),$=Object(j.d)(h.h,Object(p.b)((function(e,t){return{loading:e.firestore.status.requesting.team,team:e.firestore.data.team,schedule:e.firestore.ordered.schedule,roster:e.firestore.ordered.roster,auth:e.firebase.auth,teamId:t.match.params.id}})),Object(v.firestoreConnect)((function(e){return[{collection:"users",doc:e.auth.uid,subcollections:[{collection:"teams",doc:e.teamId}],storeAs:"team"},{collection:"users",doc:e.auth.uid,subcollections:[{collection:"teams",doc:e.teamId,subcollections:[{collection:"roster"}]}],storeAs:"roster"},{collection:"users",doc:e.auth.uid,subcollections:[{collection:"teams",doc:e.teamId,subcollections:[{collection:"schedule"}]}],storeAs:"schedule"}]})))((function(e){var t=e.team,a=e.loading,n=e.roster,c=e.schedule;return!a&&t&&n&&c?r.a.createElement("div",{className:"container section game-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title center"},t.name),r.a.createElement("p",{className:"center"},"Manager : ",t.managerFirstName,"  ",t.managerLastName)),r.a.createElement("div",{className:"card-action grey-lighten-4 grey-text"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m5"},r.a.createElement("h5",{className:"center"},"Roster"),r.a.createElement(H,null),r.a.createElement(x,null)),r.a.createElement("div",{className:"col s12 m7"},r.a.createElement("h5",{className:"center"},"Schedule"),r.a.createElement(z,null),r.a.createElement(Y,null)))):r.a.createElement(I.a,null)})),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e,t){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{id:"form",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement(w.a.Item,{label:"E-mail",htmlFor:"E-mail"},r.a.createElement(A.a,{id:"email",onChange:this.handleChange})),r.a.createElement(w.a.Item,{label:"Password",htmlFor:"Password"},r.a.createElement(A.a.Password,{id:"password",onChange:this.handleChange})),r.a.createElement(w.a.Item,null,r.a.createElement(P.a,{type:"primary",htmlType:"submit"},"Sign In")),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null)))}}]),t}(n.Component),V=Object(p.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(K),X=a(130),Z=X.a.Option,Q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:"",managerPlayer:""},a.handleTextInputChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.handleSelectInputChange=function(e){a.setState({managerPlayer:e})},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{id:"form",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement(w.a.Item,{label:"First Name",htmlFor:"firstName"},r.a.createElement(A.a,{id:"firstName",onChange:this.handleTextInputChange})),r.a.createElement(w.a.Item,{label:"Last Name",htmlFor:"lastName"},r.a.createElement(A.a,{id:"lastName",onChange:this.handleTextInputChange})),r.a.createElement(w.a.Item,{label:"E-mail",htmlFor:"email"},r.a.createElement(A.a,{id:"email",onChange:this.handleTextInputChange})),r.a.createElement(w.a.Item,{label:"Password",htmlFor:"password"},r.a.createElement(A.a.Password,{id:"password",onChange:this.handleTextInputChange})),r.a.createElement(w.a.Item,{label:"Manager or Player",htmlFor:"managerPlayer"},r.a.createElement(X.a,{id:"managerPlayer",onChange:this.handleSelectInputChange},r.a.createElement(Z,{value:"manager"},"Manager"),r.a.createElement(Z,{value:"player"},"Player")),","),r.a.createElement(w.a.Item,null,r.a.createElement(P.a,{type:"primary",htmlType:"submit"},"Register")),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null)))}}]),t}(n.Component),ee=Object(p.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,l=r(),o=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return o.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0],managerPlayer:e.managerPlayer})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(Q),te=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",sport:""},a.handleChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createTeam(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement(w.a,{id:"form",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Team Registration"),r.a.createElement(w.a.Item,{label:"Team Name",htmlFor:"Team Name"},r.a.createElement(A.a,{id:"name",onChange:this.handleChange})),r.a.createElement(w.a.Item,{label:"Sport",htmlFor:"Sport"},r.a.createElement(A.a,{id:"sport",onChange:this.handleChange})),r.a.createElement(w.a.Item,null,r.a.createElement(P.a,{type:"primary",htmlType:"submit"},"Create")))):r.a.createElement(h.a,{to:"/signin"})}}]),t}(n.Component),ae=Object(p.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createTeam:function(t){return e(F(t))}}}))(te),ne=a(346);function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ce=Object(p.b)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(Object(a),!0).forEach((function(t){Object(C.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({auth:e.firebase.auth},t)}))((function(e){var t=e.auth,a=e.component,n=Object(ne.a)(e,["auth","component"]),c=Object(h.g)(),l=t.isLoaded,o=t.uid;return l&&!o&&c.push("/signin"),r.a.createElement(h.b,Object.assign({render:function(){return l&&o?r.a.createElement(a,null):r.a.createElement(I.a,null)}},n))})),le=(a(599),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(h.d,null,r.a.createElement(ce,{exact:!0,path:"/",component:S}),r.a.createElement(ce,{path:"/team/:id",component:$}),r.a.createElement(h.b,{path:"/signin",component:V}),r.a.createElement(h.b,{path:"/signup",component:ee}),r.a.createElement(h.b,{path:"/registerteam",component:ae}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(a),!0).forEach((function(t){Object(C.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ie={authError:null},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),se({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),se({},e,{authError:null});case"SIGNUP_SUCCESS":return console.log("signup success"),se({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),se({},e,{authError:t.err.message});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;default:return e}},me={teams:[{id:1,team:"DJ Bloom and Evens DJ",date:"12/15",time:"7:00"},{id:2,team:"DJ Bloom and Evens DJ",date:"12/22",time:"7:00"},{id:3,team:"DJ Bloom and Evens DJ",date:"12/29",time:"7:00"}]},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TEAM":return console.log("created team",t.team),e;case"CREATE_PROJECT_ERROR":return console.log("Error creating project",t.err),e;case"INSERT_PLAYER":return console.log("Player Added",t.player),e;case"INSERT_PLAYER_ERROR":return console.log("Error adding player",t.err),e;case"INSERT_GAME":return console.log("Game Added",t.game),e;case"INSERT_GAME_ERROR":return console.log("Error adding game",t.err),e}return e},he=a(112),pe=Object(j.c)({auth:ue,team:de,firestore:he.firestoreReducer,firebase:v.firebaseReducer}),be=a(343),fe=a(242),Ee=a.n(fe),ge=a(176),Oe=a.n(ge);a(639),a(640);Oe.a.initializeApp({apiKey:"AIzaSyAWZLTaqRJbG1x3ucCfReWupfLf6A7-yWg",authDomain:"squad-master.firebaseapp.com",databaseURL:"https://squad-master.firebaseio.com",projectId:"squad-master",storageBucket:"squad-master.appspot.com",messagingSenderId:"57789234759",appId:"1:57789234759:web:b38125d77215e1ec76bb62",measurementId:"G-N84C4DBL2X"}),Oe.a.firestore();var ye=Oe.a,ve=Object(j.e)(pe,Object(j.d)(Object(j.a)(be.a.withExtraArgument({getFirestore:he.getFirestore,getFirebase:v.getFirebase})),Object(he.reduxFirestore)(Ee.a,ye))),je={firebase:Ee.a,config:{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0},dispatch:ve.dispatch,createFirestoreInstance:he.createFirestoreInstance};l.a.render(r.a.createElement(p.a,{store:ve},r.a.createElement(v.ReactReduxFirebaseProvider,je,r.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[349,1,2]]]);
//# sourceMappingURL=main.cb25b398.chunk.js.map