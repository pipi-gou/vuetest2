webpackJsonp([4],{"7lt2":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("Dd8w"),i=e.n(s),o=e("Bkxr"),r=e("NYxO"),a=e("m40h"),c=e("T452"),u=e("PvFA"),d={created:function(){this._getDisc()},computed:i()({},Object(r.c)(["disc"]),{title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}}),data:function(){return{songs:[]}},components:{musicList:o.a},methods:{_getDisc:function(){var t=this;this.disc.dissid?Object(a.a)(this.disc.dissid).then(function(n){n.code===c.a&&(t.songs=t._normalizeSongs(n.cdlist[0].songlist))}):this.$router.push("/recommend")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){t.songid&&t.albummid&&n.push(Object(u.a)(t))}),n}}},m={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("musicList",{attrs:{title:this.title,bgImage:this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var f=e("VU/8")(d,m,!1,function(t){e("WCFI")},"data-v-e7e7c5dc",null);n.default=f.exports},WCFI:function(t,n){},m40h:function(t,n,e){"use strict";n.c=function(){var t=r()({},c.b,{platform:"h5",uin:0,needNewCode:1});return Object(a.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,c.c)},n.b=function(){var t=r()({},c.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return d.a.get("/api/getDiscList",{params:t}).then(function(t){return i.a.resolve(t.data)})},n.a=function(t){var n=r()({},c.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0,format:"json"});return d.a.get("/api/getDisc",{params:n}).then(function(t){return i.a.resolve(t.data)})};var s=e("//Fk"),i=e.n(s),o=e("woOf"),r=e.n(o),a=e("Gak4"),c=e("T452"),u=e("mtWM"),d=e.n(u)}});
//# sourceMappingURL=4.f3d802c24a51a975b9ea.js.map