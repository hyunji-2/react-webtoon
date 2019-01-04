(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(55)},29:function(e,t,a){},31:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(21),c=a.n(s),l=(a(29),a(6)),i=a(7),r=a(9),m=a(8),u=a(10),d=a(57),b=a(58),E=(a(31),a(11)),h=a.n(E),p=function(){return o.a.createElement("div",{className:"header"},"WEBTOON")},w=a(56),y=function(e){return o.a.createElement("ul",{className:"gnb"},o.a.createElement("li",null,o.a.createElement(w.a,{to:"/?day=mon",className:"mon"===e.day?"tab_day on":"tab_day"},"\uc6d4\uc694\uc77c")),o.a.createElement("li",null,o.a.createElement(w.a,{to:"/?day=tue",className:"tue"===e.day?"tab_day on":"tab_day"},"\ud654\uc694\uc77c")),o.a.createElement("li",null,o.a.createElement(w.a,{to:"/?day=wed",className:"wed"===e.day?"tab_day on":"tab_day"},"\uc218\uc694\uc77c")),o.a.createElement("li",null,o.a.createElement(w.a,{to:"/?day=thu",className:"thu"===e.day?"tab_day on":"tab_day"},"\ubaa9\uc694\uc77c")),o.a.createElement("li",null,o.a.createElement(w.a,{to:"/?day=fri",className:"fri"===e.day?"tab_day on":"tab_day"},"\uae08\uc694\uc77c")),o.a.createElement("li",null,o.a.createElement(w.a,{to:"/?day=sat",className:"sat"===e.day?"tab_day on":"tab_day"},"\ud1a0\uc694\uc77c")),o.a.createElement("li",null,o.a.createElement(w.a,{to:"/?day=sun",className:"sun"===e.day?"tab_day on":"tab_day"},"\uc77c\uc694\uc77c")))},f=function(){return o.a.createElement("div",{className:"footer"},"\xa9 HyunJi-2")},_=function(e){return o.a.createElement("ul",{className:"list_webtoon"},e.list.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(w.a,{to:"/webtoon/".concat(e.id),className:"link_webtoon"},o.a.createElement("img",{src:e.thumbnail,className:"img_webtoon",alt:e.title}),o.a.createElement("div",{className:"info_webtoon"},o.a.createElement("strong",{className:"tit_webtoon"},e.title),e.artist)))}))},v=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(r.a)(this,Object(m.a)(t).call(this,e));var n=new URLSearchParams(e.location.search).get("day");return a.state={day:n||"mon",webtoonList:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){var t=new URLSearchParams(e.location.search).get("day"),a=new URLSearchParams(this.props.location.search).get("day");t!==a&&this.setState({day:a})}},{key:"componentDidMount",value:function(){this._getList()}},{key:"_getList",value:function(){var e=this;h.a.get("/dummy/webtoon_list.json").then(function(t){e.setState({webtoonList:t.data.webtoonList})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement(y,{day:this.state.day}),this.state.webtoonList.length>0?o.a.createElement(_,{list:this.state.webtoonList.filter(function(t){return t.day===e.state.day})}):o.a.createElement("span",null,"LOADING..."),o.a.createElement(f,null))}}]),t}(n.Component),g=function(e){var t=e.webtoon;return o.a.createElement("div",{className:"wrap_webtoon"},o.a.createElement("img",{src:t.thumbnail,className:"img_webtoon",alt:t.title}),o.a.createElement("div",{className:"info_webtoon"},o.a.createElement("strong",{className:"tit_webtoon"},t.title),t.genre.map(function(e,t){return o.a.createElement("span",{key:t,className:"txt_genre"},e)}),o.a.createElement("span",{className:"num_score"},"\ud3c9\uc810 : ",t.score)))},N=function(e){return o.a.createElement("ul",{className:"list_webtoon list_episode"},e.episodes.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(w.a,{to:"/viewer/".concat(e.id),className:"link_webtoon"},o.a.createElement("img",{src:e.thumbnailImage.url,className:"img_webtoon",alt:e.title}),o.a.createElement("div",{className:"info_webtoon"},o.a.createElement("strong",{className:"tit_webtoon"},e.title),"".concat(e.dateCreated.substr(0,4),".").concat(e.dateCreated.substr(4,2),".").concat(e.dateCreated.substr(6,2)))))}))},O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={webtoonId:parseInt(e.match.params.webtoonId,10),webtoon:{},episodeList:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this._getWebtoon(),this._getEpisodeList()}},{key:"_getWebtoon",value:function(){var e=this;h.a.get("/dummy/webtoon_detail.json").then(function(t){e.setState({webtoon:t.data.webtoons.find(function(t){return t.id===e.state.webtoonId})})}).catch(function(e){console.log(e)})}},{key:"_getEpisodeList",value:function(){var e=this;h.a.get("/dummy/episode_list.json").then(function(t){e.setState({episodeList:t.data.webtoonEpisodes.filter(function(t){return t.webtoonId===e.state.webtoonId})})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement(y,{day:this.state.day}),this.state.webtoon.id?o.a.createElement(g,{webtoon:this.state.webtoon}):o.a.createElement("span",null,"LOADING..."),this.state.episodeList.length>0?o.a.createElement(N,{episodes:this.state.episodeList}):o.a.createElement("span",null,"LOADING..."),o.a.createElement(f,null))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={episodeId:parseInt(e.match.params.episodeId,10),episode:{}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this._getEpisodeList()}},{key:"_getEpisodeList",value:function(){var e=this;h.a.get("/dummy/episode_list.json").then(function(t){e.setState({episode:t.data.webtoonEpisodes.find(function(t){return t.id===e.state.episodeId})})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.episode;return o.a.createElement("div",{className:"wrap_viewer"},e.id?o.a.createElement("div",null,o.a.createElement("div",{className:"top_viewer"},e.title,o.a.createElement(w.a,{to:"/webtoon/".concat(e.webtoonId),className:"btn_close"},"X")),o.a.createElement("div",{className:"wrap_images"},e.images.map(function(e,t){return o.a.createElement("img",{key:t,src:e,alt:""})}))):o.a.createElement("span",null,"LOADING..."))}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("test"),o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(b.a,{exact:!0,path:"/",component:v}),o.a.createElement(b.a,{path:"/webtoon/:webtoonId",component:O}),o.a.createElement(b.a,{path:"/viewer/:episodeId",component:j})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.7b981742.chunk.js.map