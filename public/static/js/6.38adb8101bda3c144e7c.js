webpackJsonp([6],{BRgg:function(t,n,e){"use strict";n.a=function(){var t=a()({},r.b,{uin:0,needNewCode:1,platform:"h5",format:"json"});return c.a.get("/api/getTop",{params:t}).then(function(t){return s.a.resolve(t.data)})},n.b=function(t){var n=a()({},r.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5",format:"json"});return c.a.get("/api/getTopSong",{params:n}).then(function(t){return s.a.resolve(t.data)})};var i=e("//Fk"),s=e.n(i),o=e("woOf"),a=e.n(o),r=e("T452"),u=e("mtWM"),c=e.n(u)},q2Se:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),o=e("Bkxr"),a=e("NYxO"),r=e("BRgg"),u=e("T452"),c=e("PvFA"),g={name:"topList",data:function(){return{songs:[],rank:!0}},components:{musicList:o.a},computed:s()({},Object(a.c)(["topList"]),{title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}}),created:function(){this._getTopList()},methods:{_getTopList:function(){var t=this;this.topList.id?Object(r.b)(this.topList.id).then(function(n){n.code===u.a&&(t.songs=t._normalizeSongs(n.songlist))}):this.$router.push("/rank")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var e=t.data;e.songid&&e.albumid&&n.push(Object(c.a)(e))}),n}}},p={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("musicList",{attrs:{title:this.title,bgImage:this.bgImage,songs:this.songs,rank:this.rank}})],1)},staticRenderFns:[]};var f=e("VU/8")(g,p,!1,function(t){e("qKuk")},"data-v-5a0fb8c5",null);n.default=f.exports},qKuk:function(t,n){}});
//# sourceMappingURL=6.38adb8101bda3c144e7c.js.map