webpackJsonp([7],{Nobs:function(t,s){},"qP2/":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Dd8w"),n=e.n(i),a=e("scGh"),r=e("Ewld"),c=e("H1/L"),o=e("k98b"),l=e("PvFA"),u=e("NYxO"),f={mixins:[e("F4+m").b],data:function(){return{currentIndex:0,switches:[{name:"我喜欢的"},{name:"最近听的"}]}},computed:n()({noResult:function(){return 0===this.currentIndex?!this.favoriteList.length:!this.playHistory.length},noResultDesc:function(){return 0===this.currentIndex?"暂无收藏歌曲":"你还没有听过歌曲"}},Object(u.c)(["favoriteList","playHistory"])),methods:n()({handlePlayList:function(t){var s=t.length>0?"60px":"";this.$refs.listWrapper.style.bottom=s,this.$refs.favoriteList&&this.$refs.favoriteList.refresh(),this.$refs.playList&&this.$refs.playList.refresh()},switchItem:function(t){this.currentIndex=t},selectSong:function(t){this.insertSong(new l.b(t))},back:function(){this.$router.back()},random:function(){var t=0===this.currentIndex?this.favoriteList:this.playHistory;0!==t.length&&(t=t.map(function(t){return new l.b(t)}),this.randomPlay({list:t}))}},Object(u.b)(["insertSong","randomPlay"])),components:{Switches:a.a,Scroll:r.a,SongList:c.a,NoResult:o.a}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"slide"}},[e("div",{staticClass:"user-center"},[e("div",{staticClass:"back"},[e("i",{staticClass:"iconfont icon-fanhui1",on:{click:t.back}}),t._v(" "),e("span",{staticClass:"text"},[t._v("我")]),t._v(" "),e("span",{staticClass:"text1"})]),t._v(" "),e("div",{staticClass:"switches-wrapper"},[e("switches",{attrs:{switches:t.switches,currentIndex:t.currentIndex},on:{switch:t.switchItem}})],1),t._v(" "),e("div",{staticClass:"btnWrapper"},[e("div",{ref:"playBtn",staticClass:"play-btn",on:{click:t.random}},[e("i",{staticClass:"iconfont icon-suijibofang"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),e("div",{ref:"listWrapper",staticClass:"list-wrapper"},[0===t.currentIndex?e("scroll",{ref:"favoriteList",staticClass:"list-scroll",attrs:{data:t.favoriteList}},[e("div",{staticClass:"list-inner1"},[e("song-list",{attrs:{songs:t.favoriteList},on:{select:t.selectSong}})],1)]):t._e(),t._v(" "),1===t.currentIndex?e("scroll",{ref:"playList",staticClass:"list-scroll",attrs:{data:t.playHistory}},[e("div",{staticClass:"list-inner1"},[e("song-list",{attrs:{songs:t.playHistory},on:{select:t.selectSong}})],1)]):t._e()],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.noResult,expression:"noResult"}],staticClass:"no-result-wrapper"},[e("no-result",{attrs:{title:t.noResultDesc}})],1)])])},staticRenderFns:[]};var h=e("VU/8")(f,d,!1,function(t){e("Nobs")},"data-v-9cc81728",null);s.default=h.exports}});
//# sourceMappingURL=7.a97a9db718df48a5b0a9.js.map