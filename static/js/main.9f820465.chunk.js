(this["webpackJsonpreact-sms-pincode"]=this["webpackJsonpreact-sms-pincode"]||[]).push([[0],{14:function(e,t,r){},16:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(3),s=r.n(n),a=r(9),c=r.n(a),i=(r(14),r(1)),o=r.n(i),u=r(2),p=r(4),l=r(5),d=r(7),h=r(6),j=function(){var e=Object(u.a)(o.a.mark((function e(t){var r,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.apikey,n=t.app,s=t.country,e.abrupt("return",new Promise((function(e,t){fetch("http://api.smspincode.com/user/api/get_number.php?customer=".concat(r,"&app=").concat(n,"&country=").concat(s)).then(function(){var r=Object(u.a)(o.a.mark((function r(n){var s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log(n),!n.ok){r.next=8;break}return console.log("this"),r.next=5,n.json();case 5:s=r.sent,console.log(s),s&&e(n);case 8:console.log("this"),t(n);case 10:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.apikey,e.abrupt("return",new Promise((function(e,t){fetch("http://api.smspincode.com/user/api/get_history.php?customer=".concat(r)).then((function(e){return e.json()})).then((function(t){console.log(t),e(t)}),(function(e){console.log(e),t(e)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(o.a.mark((function e(t,r){var n,s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.apikey,s=t.app,a=t.country,e.abrupt("return",new Promise((function(e,t){fetch("http://api.smspincode.com/user/api/get_sms.php?customer=".concat(n,"&number=").concat(r,"&app=").concat(s,"&country=").concat(a)).then(function(){var r=Object(u.a)(o.a.mark((function r(n){var s;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log(n),!n.ok){r.next=7;break}return r.next=4,n.json();case 4:s=r.sent,console.log(s),e(s);case 7:t(n);case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())})));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),x=(r(16),r(0)),f=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(p.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).refreshTime=3e3,e.state={isRefresh:!1,time:3},e.getMessage=function(){var t=Object(u.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getMessage(r);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onClickGetMessage=function(){var t=Object(u.a)(o.a.mark((function t(r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.state.isRefresh,e.setState({isRefresh:!n}),n?clearInterval(e.getMessageInterval):(e.getMessage(r),e.getMessageInterval=setInterval(Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0===(n=e.state.time)?e.setState({time:3}):(e.setState({time:n-1}),1===n&&e.getMessage(r));case 2:case"end":return t.stop()}}),t)}))),1e3));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=this.state,r=t.isRefresh,n=t.time,s=this.props.item;return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("div",{className:"getButton",children:Object(x.jsx)("button",{className:"getButton",onClick:function(){e.onClickGetMessage(s.number)},children:r?"Get:"+n:"Get"})})}),Object(x.jsx)("td",{children:Object(x.jsx)("div",{children:s.number})}),Object(x.jsx)("td",{className:"itemCode",children:Object(x.jsx)("div",{children:s.message})}),Object(x.jsx)("td",{children:Object(x.jsx)("div",{children:s.timestamp})}),Object(x.jsx)("td",{children:Object(x.jsx)("div",{children:s.country_name})}),Object(x.jsx)("td",{children:Object(x.jsx)("div",{children:s.app_name})})]})}}]),r}(s.a.Component),v=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(p.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).sound=new Audio("https://smspincode.com/user/plucky.mp3"),e.state={params:{apikey:"",app:"",country:""},allNumber:[],isLoading:!0,timeGetNumber:5,isGetNumber:!1,lastErrorMessage:""},e.setErrorMessage=function(t){var r=t.status+" : "+t.statusText;e.setState({lastErrorMessage:r})},e.playSound=function(){e.sound.pause(),e.sound.currentTime=0,e.sound.play()},e.refresh=Object(u.a)(o.a.mark((function t(){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.state.params,e.setState({isLoading:!0}),t.next=5,b(r);case 5:n=t.sent,e.setState({allNumber:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.setErrorMessage(t.t0);case 12:e.setState({isLoading:!1});case 13:case"end":return t.stop()}}),t,null,[[0,9]])}))),e.getNewNumber=Object(u.a)(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.state.params,t.next=4,j(r);case 4:e.playSound(),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("this"),e.setErrorMessage(t.t0);case 11:e.refresh();case 12:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.onClickGetNewNumber=Object(u.a)(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=e.state.isGetNumber)?clearInterval(e.getNumberInterval):(e.getNewNumber(),e.getNumberInterval=setInterval(Object(u.a)(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0===(r=e.state.timeGetNumber)?e.setState({timeGetNumber:5}):(e.setState({timeGetNumber:r-1}),1===r&&e.getNewNumber());case 2:case"end":return t.stop()}}),t)}))),1e3)),e.setState({isGetNumber:!r});case 3:case"end":return t.stop()}}),t)}))),e.getMessage=function(){var t=Object(u.a)(o.a.mark((function t(r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.state.params,t.next=4,m(n,r);case 4:e.playSound(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.setErrorMessage(t.t0);case 10:e.refresh();case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,r,n,s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams(window.location.search),r=t.get("key"),n=t.get("app")||"foodpanda",s=t.get("country")||"thailand",a={apikey:r,app:n,country:s},e.next=7,this.setState({params:a});case 7:return e.next=9,this.refresh();case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.allNumber,n=t.isLoading,s=t.isGetNumber,a=t.timeGetNumber,c=t.params,i=t.lastErrorMessage,o=c.apikey,u=c.app,p=c.country;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{className:"title",children:"BooKy SMS Pincode"}),Object(x.jsxs)("div",{className:"subTitle",children:[Object(x.jsxs)("div",{children:["Key :"," ",o||Object(x.jsxs)("span",{children:["\u0e44\u0e1b\u0e43\u0e2a\u0e48 APIKey \u0e14\u0e49\u0e27\u0e22 -> ",Object(x.jsx)("a",{href:"https://smspincode.com/user/settings.php",children:"https://smspincode.com/user/settings.php"})]})]}),Object(x.jsxs)("div",{children:[u," : ",p]})]}),Object(x.jsxs)("button",{onClick:this.onClickGetNewNumber,children:["Get Number",s&&":"+a]}),Object(x.jsx)("button",{className:"refreshButton",onClick:this.refresh,children:"Refresh"}),Object(x.jsx)("button",{className:"refreshButton",onClick:function(){window.location.reload()},children:"Stop all"}),Object(x.jsx)("span",{className:"loading",children:n&&"Loading..."}),i&&Object(x.jsxs)("div",{className:"errorMessage",children:["Last Error : ",i]}),Object(x.jsx)("div",{className:"table",children:Object(x.jsx)("table",{children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"headTableButton"}),Object(x.jsx)("td",{className:"headTable",children:"Number"}),Object(x.jsx)("td",{className:"headTableCode",children:"Code"}),Object(x.jsx)("td",{className:"headTable",children:"Time"}),Object(x.jsx)("td",{className:"headTable",children:"Country"}),Object(x.jsx)("td",{className:"headTable",children:"App"})]}),r.length>0&&r.map((function(t,r){return Object(x.jsx)(f,{item:t,getMessage:e.getMessage},r)}))]})})}),Object(x.jsxs)("div",{className:"howto",children:[Object(x.jsx)("div",{className:"howtoTitle",children:"\u0e27\u0e34\u0e18\u0e35\u0e43\u0e0a\u0e49 \u0e43\u0e2a\u0e48\u0e25\u0e34\u0e07\u0e04\u0e4c\u0e15\u0e32\u0e21\u0e19\u0e35\u0e49"}),Object(x.jsxs)("div",{children:["https://book1317.github.io/react-sms-pincode-auto-refresh?key=",Object(x.jsx)("span",{className:"redText",children:"{APIkey}"}),"&","app=",Object(x.jsx)("span",{className:"redText",children:"{app}"}),"&","country=",Object(x.jsx)("span",{className:"redText",children:"{country}"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("span",{className:"redText",children:"APIkey"})," = 1101600d8fa7e22bxxxxxxxxxxxxxxxxxxxxxxxxx \u0e08\u0e32\u0e01"," ",Object(x.jsx)("a",{href:"https://smspincode.com/user/settings.php",children:"https://smspincode.com/user/settings.php"})," "]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("span",{className:"redText",children:"app"})," = foodpanda"]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("span",{className:"redText",children:"country"})," = thailand"]})]})]})}}]),r}(s.a.Component);c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9f820465.chunk.js.map