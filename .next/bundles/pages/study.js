module.exports=__NEXT_REGISTER_PAGE("/study",function(){return{page:webpackJsonp([3],{277:function(e,t,n){e.exports=n(278)},278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r),o=n(60),s=n(2),i=n.n(s),u=n(36),c=n.n(u);function l(e,t){var n,r=new Date,a=new Date(t),o=(n=a,(r.getTime()-n.getTime())/1e3/60/60);switch(e){case 1:return 0;case 2:return o>3?0:3-o;case 3:return o>12?0:12-o;case 4:return o>72?0:72-o;case 5:return o>168?0:168-o;case 6:return o>504?0:504-o;case 7:return o>1008?0:1008-o;case 8:return o>2016?0:2016-o}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return 0==e.dueIn?a.a.createElement("p",null,"Due for Review"):a.a.createElement("p",null,"Due in ",e.dueInRounded," ",e.units)}var y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={study:!1,dueIn:null,dueInRounded:null,units:"hours"},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=l(this.props.SRS,this.props.lastStudied),t=Math.round(e);e>730?(t=Math.round(t/24/7/4),this.setState({units:"months"})):e>168?(t=Math.round(t/24/7),this.setState({units:"weeks"})):e>48?(t=Math.round(t/24),this.setState({units:"days"})):e<1&&(t=Math.round(60*t),this.setState({units:"minutes"})),0===e?this.setState({study:!0}):(this.setState({dueIn:e}),this.setState({dueInRounded:t}))}},{key:"render",value:function(){var e=this.state.study?"#ff3d4e":"#888888";return a.a.createElement("div",{className:i.a.dynamic([["509436356",[e]]])+" flash-card"},a.a.createElement("p",{className:i.a.dynamic([["509436356",[e]]])},this.props.english),a.a.createElement("p",{className:i.a.dynamic([["509436356",[e]]])},this.props.reading),a.a.createElement("p",{className:i.a.dynamic([["509436356",[e]]])},this.props.kanji),this.state.study?a.a.createElement(h,{dueIn:0}):a.a.createElement(h,{dueInRounded:this.state.dueInRounded,dueIn:this.state.dueIn,units:this.state.units}),a.a.createElement(i.a,{styleId:"509436356",css:[".flash-card.__jsx-style-dynamic-selector{display:inline-block;text-align:center;font-size:16pt;margin:10px 5px 10px 5px;min-width:200px;min-height:150px;padding:10px;background-color:#eee;border:1px solid black;box-shadow:5px 10px 18px ".concat(e,";}"),".flash-card.__jsx-style-dynamic-selector:hover{margin-top:5px;}"],dynamic:[e]}))}}])&&f(n.prototype,r),o&&f(n,o),t}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var g=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){return a.a.createElement("div",{className:"jsx-1053112654 big-card col-8"},a.a.createElement("h3",{className:"jsx-1053112654"},this.props.reading),a.a.createElement("h3",{className:"jsx-1053112654"},this.props.kanji),a.a.createElement(i.a,{styleId:"1053112654",css:[".big-card.jsx-1053112654{padding:10px;text-align:center;margin-top:10vh;background-color:#eee;min-height:30vh;}","h3.jsx-1053112654{font-size:600%;}"]}))}}])&&b(n.prototype,r),o&&b(n,o),t}();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var x=function(e){return a.a.createElement("div",null,a.a.createElement("h3",null,"Congrats! You're finished studying this deck for now."),a.a.createElement("button",null,"Return to Dashboard"))},j=function(e){return a.a.createElement("form",{onSubmit:e.onSubmit,className:"jsx-907657668"},a.a.createElement("label",{className:"jsx-907657668"},"Enter the English word for this reading: "),a.a.createElement("input",{type:"text",onChange:e.onChange,className:"jsx-907657668"}),a.a.createElement("input",{type:"Submit",value:"Enter",className:"jsx-907657668"}),a.a.createElement(i.a,{styleId:"907657668",css:["form.jsx-907657668{margin-top:20px;padding:10px;}"]}))},k=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==S(a)&&"function"!=typeof a?E(r):a).state={studyArray:[],numCards:0,currentIndex:0,answer:"",finished:!1},n.loadStudyDeck=n.loadStudyDeck.bind(E(n)),n.checkAnswer=n.checkAnswer.bind(E(n)),n.handleChange=n.handleChange.bind(E(n)),n.updateCardStatus=n.updateCardStatus.bind(E(n)),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.loadStudyDeck()}},{key:"handleChange",value:function(e){this.setState({answer:e.target.value})}},{key:"checkAnswer",value:function(e){e.preventDefault(),e.target.reset();var t=this.state.studyArray[this.state.currentIndex],n=this.state.answer.toLowerCase(),r=this.state.studyArray[this.state.currentIndex].english.toLowerCase(),a=t.SRSLevel;a=n===r?a<8?a+1:a:a>1?a-1:a,this.updateCardStatus(t,a),this.state.numCards-1>this.state.currentIndex?this.setState({currentIndex:this.state.currentIndex+1}):this.setState({finished:!0})}},{key:"updateCardStatus",value:function(e,t){c()("//localhost:3000/decks",{method:"PUT",body:JSON.stringify({ID:e._id,SRS:t}),headers:{"Content-Type":"application/json"}}).then(function(e){console.log(e)})}},{key:"loadStudyDeck",value:function(){var e=this.props.cards.filter(function(e){if(0==l(e.SRSLevel,e.lastStudied))return!0});console.log(e),this.setState({studyArray:function(e){for(var t,n,r=e.length;0!==r;)t=Math.floor(Math.random()*r),n=e[--r],e[r]=e[t],e[t]=n;return e}(e)}),this.setState({numCards:e.length})}},{key:"render",value:function(){var e=this.state.studyArray[this.state.currentIndex];return a.a.createElement("div",{className:"container-fluid"},a.a.createElement("div",{className:"row justify-content-center align-items-center"},e?a.a.createElement(g,{kanji:e.kanji,reading:e.reading,english:e.english}):null),a.a.createElement("div",{className:"row justify-content-center"},this.state.finished?a.a.createElement(x,null):a.a.createElement(j,{onChange:this.handleChange,onSubmit:this.checkAnswer})))}}])&&w(n.prototype,r),o&&w(n,o),t}();function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return a.a.createElement("div",{className:"jsx-1624224183 deck-info"},a.a.createElement("h3",{className:"jsx-1624224183"},'Viewing "Deck" with ',e.length," Cards"),a.a.createElement("button",{onClick:e.onClick,className:"jsx-1624224183"},"Study Cards Due"),a.a.createElement(i.a,{styleId:"1624224183",css:[".deck-info.jsx-1624224183{margin:10px;padding:10px;}"]}))}var I=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==_(a)&&"function"!=typeof a?O(r):a).state={cards:[],studyMode:!1},n.loadCards=n.loadCards.bind(O(n)),n.studyAll=n.studyAll.bind(O(n)),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),n=t,(r=[{key:"studyAll",value:function(){this.setState({studyMode:!0})}},{key:"componentDidMount",value:function(){this.loadCards()}},{key:"loadCards",value:function(){var e=this;c()("//localhost:3000/decks").then(function(t){if(t.status>=400)throw new Error("Something went wrong, that's all I know :(");console.log("Cards Found!"),t.json().then(function(t){e.setState({cards:t,test:!1})})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e,t=this.state.cards;return e=t.map(function(e){return a.a.createElement(y,{reading:e.reading,english:e.english,kanji:e.kanji,lastStudied:e.lastStudied,SRS:e.SRSLevel})}),a.a.createElement("div",{className:"container-fluid"},this.state.studyMode?null:a.a.createElement(N,{onClick:this.studyAll,length:this.state.cards.length}),this.state.studyMode?a.a.createElement(k,{cards:t}):e)}}])&&C(n.prototype,r),o&&C(n,o),t}();t.default=function(){return a.a.createElement(o.a,{name:"Stella"},a.a.createElement(I,null))}},36:function(e,t,n){e.exports=window.fetch||(window.fetch=n(61).default||n(61))},60:function(e,t,n){"use strict";var r=n(2),a=n.n(r),o=n(0),s=n.n(o),i=n(59);t.a=function(e){return s.a.createElement("div",null,s.a.createElement(i.a,null),s.a.createElement("div",{className:"jsx-2832112428 container-fluid"},s.a.createElement("div",{className:"jsx-2832112428 row"},s.a.createElement("div",{id:"sideNav",className:"jsx-2832112428 col-sm-2"},s.a.createElement("h2",{className:"jsx-2832112428"},"Welcome, ",e.name)),s.a.createElement("div",{className:"jsx-2832112428 col-md-10"},e.children)),s.a.createElement(a.a,{styleId:"2832112428",css:["#sideNav.jsx-2832112428{background-color:#FF5F5F;border-right:2px solid #eee;min-height:100vh;text-align:center;font-family:'Merriweather Sans',sans-serif;}"]})))}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest;for(var o in a.open(t.method||"get",e,!0),t.headers)a.setRequestHeader(o,t.headers[o]);function s(){var e,t=[],n=[],r={};return a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(a,o,s){t.push(o=o.toLowerCase()),n.push([o,s]),e=r[o],r[o]=e?e+","+s:s}),{ok:2==(a.status/100|0),status:a.status,statusText:a.statusText,url:a.responseURL,clone:s,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(a.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([a.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}a.withCredentials="include"==t.credentials,a.onload=function(){n(s())},a.onerror=r,a.send(t.body)})};t.default=r}},[277]).default}});