webpackJsonp([0],{Bkxr:function(s,t,i){"use strict";var e=i("Dd8w"),a=i.n(e),c=i("Ewld"),l=i("H1/L"),n=i("SC/i"),r=i("NYxO"),o={mixins:[i("F4+m").b],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},songsLength:{type:Number,default:0},rank:{type:Boolean,default:!1}},created:function(){this.probeType=3,this.listenScroll=!0},methods:a()({goback:function(){this.$router.go(-1)},handlePlayList:function(s){var t=s.length>0?"66px":"";this.$refs.songs.$el.style.bottom=t,this.$refs.songs.refresh()},random:function(){this.randomPlay({list:this.songs})},scroll:function(s){this.scrollY=s.y},selectItem:function(s,t){this.selectPlay({list:this.songs,index:t})},toTop:function(){var s=this;console.log(this.scrollY),this.$nextTick(function(){s.$refs.songs.scrollTo(0,0,500)})}},Object(r.b)(["selectPlay","randomPlay"])),watch:{scrollY:function(s){if(s<0){var t=Math.max(-191,s);this.$refs.bgLayer.style.transform="translate3d(0,"+t+"px,0)",this.$refs.bgLayer.style.webkitTransform="translate3d(0,"+t+"px,0)"}}},data:function(){return{scrollY:0}},components:{Scroll:c.a,songList:l.a,loading:n.a}},v={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"musicList"},[i("div",{ref:"bgLayer",staticClass:"bg-layer"},[i("div",{staticClass:"infoBox"},[i("div",{staticClass:"background"},[i("img",{attrs:{src:s.bgImage,alt:""}})]),s._v(" "),i("div",{staticClass:"topBar"},[i("i",{staticClass:"iconfont icon-fanhui",on:{click:s.goback}})]),s._v(" "),i("div",{staticClass:"album"},[i("div",{staticClass:"albumImage"},[i("img",{attrs:{src:s.bgImage,alt:""}})]),s._v(" "),i("div",{staticClass:"albumBd"},[i("h1",{domProps:{innerHTML:s._s(s.title)}}),s._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:s.songsLength,expression:"songsLength"}],domProps:{textContent:s._s("单曲:"+s.songsLength+"首")}})])]),s._v(" "),i("div",{staticClass:"opt_box"},[i("div",{staticClass:"back"},[i("i",{directives:[{name:"show",rawName:"v-show",value:-s.scrollY>150,expression:"-scrollY>150"}],staticClass:"iconfont icon-fanhui",on:{click:s.goback}})]),s._v(" "),i("div",{staticClass:"box"},[i("a",{attrs:{href:"javascript:;"},on:{click:s.random}},[i("i",{staticClass:"iconfont icon-suijibofang"}),s._v("随机播放全部")])]),s._v(" "),i("div",{staticClass:"back2"})])])]),s._v(" "),i("Scroll",{ref:"songs",staticClass:"list",attrs:{data:s.songs,probeType:s.probeType,listenScroll:s.listenScroll},on:{scroll:s.scroll}},[i("div",{ref:"songsWapper",staticClass:"song-wrapper"},[i("songList",{attrs:{songs:s.songs,rank:s.rank},on:{select:s.selectItem}})],1),s._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!s.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[i("loading")],1),s._v(" "),i("transition",{attrs:{name:"backs"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:-s.scrollY>500,expression:"-scrollY>500"}],staticClass:"btn",on:{click:s.toTop}},[i("i",{staticClass:"iconfont icon-Group-"})])])],1)],1)},staticRenderFns:[]};var d=i("VU/8")(o,v,!1,function(s){i("auKS")},"data-v-ece98eb8",null);t.a=d.exports},NTS2:function(s,t){},"SC/i":function(s,t,i){"use strict";var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"page"},[i("div",{staticClass:"circle-loader"},[i("div",{staticClass:"circle-line"},[i("div",{staticClass:"circle circle-blue"}),s._v(" "),i("div",{staticClass:"circle circle-blue"}),s._v(" "),i("div",{staticClass:"circle circle-blue"})]),s._v(" "),i("div",{staticClass:"circle-line"},[i("div",{staticClass:"circle circle-yellow"}),s._v(" "),i("div",{staticClass:"circle circle-yellow"}),s._v(" "),i("div",{staticClass:"circle circle-yellow"})]),s._v(" "),i("div",{staticClass:"circle-line"},[i("div",{staticClass:"circle circle-red"}),s._v(" "),i("div",{staticClass:"circle circle-red"}),s._v(" "),i("div",{staticClass:"circle circle-red"})]),s._v(" "),i("div",{staticClass:"circle-line"},[i("div",{staticClass:"circle circle-green"}),s._v(" "),i("div",{staticClass:"circle circle-green"}),s._v(" "),i("div",{staticClass:"circle circle-green"})])])])}]};var a=i("VU/8")({name:"loading"},e,!1,function(s){i("NTS2")},"data-v-03ba8c53",null);t.a=a.exports},auKS:function(s,t){}});
//# sourceMappingURL=0.f8ab3459978219ccf2f4.js.map