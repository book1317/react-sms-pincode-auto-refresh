(this["webpackJsonpreact-sms-pincode"]=this["webpackJsonpreact-sms-pincode"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var r=s(3),n=s.n(r),a=s(9),c=s.n(a),i=(s(14),s(1)),o=s.n(i),u=s(2),d=s(4),l=s(5),p=s(7),h=s(6),j=function(){var e=Object(u.a)(o.a.mark((function e(t){var s,r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.apikey,r=t.app,n=t.country,e.abrupt("return",new Promise((function(e,t){fetch("http://api.smspincode.com/user/api/get_number.php?customer=".concat(s,"&app=").concat(r,"&country=").concat(n)).then(function(){var s=Object(u.a)(o.a.mark((function s(r){var n;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(console.log(r),!r.ok){s.next=8;break}return console.log("this"),s.next=5,r.json();case 5:n=s.sent,console.log(n),n&&e(r);case 8:console.log("this"),t(r);case 10:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}())})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(o.a.mark((function e(t){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.apikey,e.abrupt("return",new Promise((function(e,t){fetch("http://api.smspincode.com/user/api/get_history.php?customer=".concat(s)).then((function(e){return e.json()})).then((function(t){console.log(t),e(t)}),(function(e){console.log(e),t(e)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(o.a.mark((function e(t,s){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.apikey,n=t.app,a=t.country,e.abrupt("return",new Promise((function(e,t){fetch("http://api.smspincode.com/user/api/get_sms.php?customer=".concat(r,"&number=").concat(s,"&app=").concat(n,"&country=").concat(a)).then(function(){var s=Object(u.a)(o.a.mark((function s(r){var n;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(console.log(r),!r.ok){s.next=7;break}return s.next=4,r.json();case 4:n=s.sent,console.log(n),e(n);case 7:t(r);case 8:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}())})));case 2:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(o.a.mark((function e(t,s){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.apikey,t.app,t.country,e.abrupt("return",new Promise((function(e,t){fetch("https://api.smspincode.com/user/api/get_balance.php?customer=".concat(r)).then(function(){var s=Object(u.a)(o.a.mark((function s(r){var n;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(console.log(r),!r.ok){s.next=7;break}return s.next=4,r.json();case 4:(n=s.sent)&&e(n.balance),e();case 7:t(r);case 8:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}())})));case 2:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),f=(s(16),s(0)),O=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(e){var r;return Object(d.a)(this,s),(r=t.call(this,e)).state={isCopy:!1},r}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.children,s=this.state.isCopy;return Object(f.jsx)("div",{children:Object(f.jsx)("div",{style:{color:s?"green":""},className:"copyButton",onClick:function(){e.setState({isCopy:!0}),navigator.clipboard.writeText(t)},children:t})})}}]),s}(r.Component),v=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).refreshTime=3e3,e.state={isRefresh:!1,time:3},e.getMessage=function(){var t=Object(u.a)(o.a.mark((function t(s){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getMessage(s);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onClickGetMessage=function(){var t=Object(u.a)(o.a.mark((function t(s){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.state.isRefresh,e.setState({isRefresh:!r}),r?clearInterval(e.getMessageInterval):(e.getMessage(s),e.getMessageInterval=setInterval(Object(u.a)(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0===(r=e.state.time)?e.setState({time:3}):(e.setState({time:r-1}),1===r&&e.getMessage(s));case 2:case"end":return t.stop()}}),t)}))),1e3));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.isRefresh,r=t.time,n=this.props.item;return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)("div",{className:"getButton",children:Object(f.jsx)("button",{className:"getButton",onClick:function(){e.onClickGetMessage(n.number)},children:s?"Get:"+r:"Get"})})}),Object(f.jsx)("td",{children:Object(f.jsx)(O,{children:n.number})}),Object(f.jsx)("td",{className:"itemCode",children:Object(f.jsx)("div",{children:n.message})}),Object(f.jsx)("td",{children:Object(f.jsx)("div",{children:n.timestamp})}),Object(f.jsx)("td",{children:Object(f.jsx)("div",{children:n.country_name})}),Object(f.jsx)("td",{children:Object(f.jsx)("div",{children:n.app_name})})]})}}]),s}(n.a.Component),g=function(e){Object(p.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).sound=new Audio("https://smspincode.com/user/plucky.mp3"),e.state={params:{apikey:"",app:"",country:"",address1:"",address2:"",address3:""},allNumber:[],isLoading:!0,timeGetNumber:5,isGetNumber:!1,lastErrorMessage:"",money:""},e.setErrorMessage=function(t){var s=t.status+" : "+t.statusText;e.setState({lastErrorMessage:s})},e.playSound=function(){e.sound.pause(),e.sound.currentTime=0,e.sound.play()},e.refresh=Object(u.a)(o.a.mark((function t(){var s,r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s=e.state.params,e.setState({isLoading:!0}),t.next=5,x(s);case 5:return r=t.sent,t.next=8,b(s);case 8:n=t.sent,e.setState({allNumber:n,money:r}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),e.setErrorMessage(t.t0);case 15:e.setState({isLoading:!1});case 16:case"end":return t.stop()}}),t,null,[[0,12]])}))),e.getNewNumber=Object(u.a)(o.a.mark((function t(){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s=e.state.params,t.next=4,j(s);case 4:e.refresh(),e.playSound(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("this"),e.setErrorMessage(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.getMessage=function(){var t=Object(u.a)(o.a.mark((function t(s){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.state.params,t.next=4,m(r,s);case 4:e.refresh(),e.playSound(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setErrorMessage(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),e.onClickGetNewNumber=Object(u.a)(o.a.mark((function t(){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(s=e.state.isGetNumber)?clearInterval(e.getNumberInterval):(e.getNewNumber(),e.getNumberInterval=setInterval(Object(u.a)(o.a.mark((function t(){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0===(s=e.state.timeGetNumber)?e.setState({timeGetNumber:5}):(e.setState({timeGetNumber:s-1}),1===s&&e.getNewNumber());case 2:case"end":return t.stop()}}),t)}))),1e3)),e.setState({isGetNumber:!s});case 3:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,s,r,n,a,c,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams(window.location.search),s=t.get("key"),r=t.get("app")||"foodpanda",n=t.get("country")||"thailand",a=t.get("address1"),c=t.get("address2"),i=t.get("address3"),u={apikey:s,app:r,country:n,address1:a,address2:c,address3:i},e.next=10,this.setState({params:u});case 10:return e.next=12,this.refresh();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,s=t.allNumber,r=t.isLoading,n=t.isGetNumber,a=t.timeGetNumber,c=t.params,i=t.lastErrorMessage,o=t.money,u=c.apikey,d=c.app,l=c.country,p=c.address1,h=c.address2,j=c.address3;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"title",children:"BooKy SMS Pincode"}),Object(f.jsxs)("div",{className:"subTitle",children:[Object(f.jsxs)("div",{children:["Key :"," ",u||Object(f.jsxs)("span",{children:["\u0e44\u0e1b\u0e43\u0e2a\u0e48 APIKey \u0e14\u0e49\u0e27\u0e22 -> ",Object(f.jsx)("a",{href:"https://smspincode.com/user/settings.php",children:"https://smspincode.com/user/settings.php"})]})]}),Object(f.jsxs)("div",{children:[d," : ",l]}),Object(f.jsxs)("div",{className:"greenText",children:["Money : ",o,"$"]})]}),Object(f.jsxs)("button",{onClick:this.onClickGetNewNumber,children:["Get Number",n&&":"+a]}),Object(f.jsx)("button",{className:"refreshButton",onClick:this.refresh,children:"Refresh"}),Object(f.jsx)("button",{className:"refreshButton",onClick:function(){window.location.reload()},children:"Stop all"}),Object(f.jsx)("span",{className:"loading",children:r&&"Loading..."}),i&&Object(f.jsxs)("div",{className:"errorMessage",children:["Last Error : ",i]}),Object(f.jsx)("div",{className:"table",children:Object(f.jsx)("table",{children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"headTableButton"}),Object(f.jsx)("td",{className:"headTable",children:"Number"}),Object(f.jsx)("td",{className:"headTableCode",children:"Code"}),Object(f.jsx)("td",{className:"headTable",children:"Time"}),Object(f.jsx)("td",{className:"headTable",children:"Country"}),Object(f.jsx)("td",{className:"headTable",children:"App"})]}),s.length>0&&s.map((function(t){return Object(f.jsx)(v,{item:t,getMessage:e.getMessage},t.timestamp)}))]})})}),Object(f.jsxs)("div",{className:"howto",children:[Object(f.jsxs)("div",{className:"howtoTitle",children:["\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 ","(\u0e01\u0e14\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01)"]}),Object(f.jsx)(O,{children:p||"19 Lat Phrao 1 Alley, Lane 8 Khwaeng Chom Phon Krung Thep Maha Nakhon 10900"}),Object(f.jsx)(O,{children:h||"\u0e2a\u0e21\u0e04\u0e34\u0e14\u0e41\u0e21\u0e19\u0e0a\u0e31\u0e48\u0e19 \u0e15\u0e36\u0e01\u0e2a\u0e35\u0e40\u0e17\u0e32"}),Object(f.jsx)(O,{children:j||"\u0e25\u0e32\u0e14\u0e1e\u0e23\u0e49\u0e27 \u0e0b.1 \u0e41\u0e22\u0e01 8 \u0e40\u0e01\u0e37\u0e2d\u0e1a\u0e2a\u0e38\u0e14\u0e0b\u0e2d\u0e22 \u0e2b\u0e19\u0e49\u0e32\u0e15\u0e36\u0e01\u0e40\u0e02\u0e35\u0e22\u0e19\u0e27\u0e48\u0e32\u0e2a\u0e21\u0e04\u0e34\u0e14\u0e41\u0e21\u0e19\u0e0a\u0e31\u0e48\u0e19 \u0e16\u0e36\u0e07\u0e41\u0e25\u0e49\u0e27\u0e42\u0e17\u0e23\u0e21\u0e32\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e19\u0e35\u0e49 0884015974 \u0e04\u0e23\u0e31\u0e1a"}),Object(f.jsx)(O,{children:"HOORAY100"}),Object(f.jsx)(O,{children:"FPDSS100"}),Object(f.jsx)(O,{children:"godoffood001@gmail.com"})]}),Object(f.jsxs)("div",{className:"howto",children:[Object(f.jsx)("div",{className:"howtoTitle",children:"\u0e27\u0e34\u0e18\u0e35\u0e43\u0e0a\u0e49 \u0e43\u0e2a\u0e48\u0e25\u0e34\u0e07\u0e04\u0e4c\u0e15\u0e32\u0e21\u0e19\u0e35\u0e49"}),Object(f.jsxs)("div",{className:"example",children:["https://book1317.github.io/react-sms-pincode-auto-refresh?key=",Object(f.jsx)("span",{className:"redText",children:"{APIkey}"}),"&","app=",Object(f.jsx)("span",{className:"redText",children:"{app}"}),"&","country=",Object(f.jsx)("span",{className:"redText",children:"{country}"}),"&","address1=",Object(f.jsx)("span",{className:"redText",children:"{address1}"}),"&","address2=",Object(f.jsx)("span",{className:"redText",children:"{address2}"}),"&","address3=",Object(f.jsx)("span",{className:"redText",children:"{address3}"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"redText",children:"APIkey"})," = 1101600d8fa7e22bxxxxxxxxxxxxxxxxxxxxxxxxx"," (required)"," from"," ",Object(f.jsx)("a",{href:"https://smspincode.com/user/settings.php",children:"https://smspincode.com/user/settings.php"})," "]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"redText",children:"app"})," = foodpanda ","(defualt)"]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"redText",children:"country"})," = thailand ","(defualt)"]}),Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"redText",children:"address1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"redText",children:"address2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("span",{className:"redText",children:"address3"})}),Object(f.jsx)("a",{style:{marginTop:"10px",display:"block"},onClick:function(){window.open("https://www.foodpanda.co.th/contents/deals")},href:"#",children:"https://www.foodpanda.co.th/contents/deals"})]})]})}}]),s}(n.a.Component);c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0563eb15.chunk.js.map