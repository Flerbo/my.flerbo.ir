(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(t,e,n){var content=n(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("1faca3e2",content,!0,{sourceMap:!1})},175:function(t,e,n){var content=n(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("e94581ec",content,!0,{sourceMap:!1})},176:function(t,e,n){var content=n(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("2b44c2ac",content,!0,{sourceMap:!1})},177:function(t,e,n){var content=n(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("709bd247",content,!0,{sourceMap:!1})},178:function(t,e,n){"use strict";var o=n(174);n.n(o).a},179:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,".reset[data-v-048cc595]{top:0;left:0;position:absolute;background-color:#fff;border-radius:5px;color:#9e9e9e;cursor:pointer;user-select:none;transition:color .3s}.reset svg[data-v-048cc595]{width:20px;height:20px;fill:#9e9e9e;transition:fill .3s;margin-right:10px}.reset[data-v-048cc595]:hover{color:#e5aa61}.reset:hover svg[data-v-048cc595]{fill:#e5aa61}",""])},180:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("4db6ee7b",content,!0,{sourceMap:!1})},181:function(t,e,n){var content=n(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("96a8928e",content,!0,{sourceMap:!1})},182:function(t,e,n){var content=n(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("e5daff96",content,!0,{sourceMap:!1})},188:function(t,e,n){"use strict";var o={methods:{reset:function(){this.$emit("click")}}},l=(n(178),n(4)),component=Object(l.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"reset row align-content-middle half-gutter gap",on:{click:this.reset}},[e("span",[this._v("از اول")]),this._v(" "),e("svg-icon",{attrs:{name:"undo"}})],1)},[],!1,null,"048cc595",null);e.a=component.exports},189:function(t,e,n){"use strict";n(16);var o={data:function(){return{picked:"",items:[{name:"laptop"},{name:"category",icon:"sticker"}]}},watch:{picked:function(t){this.$emit("input",t)}}},l=(n(190),n(4)),main=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row align-content-center"},t._l(t.items,function(e){return n("div",{key:e.name,staticClass:"half-padding"},[n("label",{class:["type_select-item box padding pointer",{active:t.picked===e.name},{disabled:e.disabled}]},[n("svg-icon",{staticClass:"icon",attrs:{name:e.icon||e.name}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],attrs:{type:"radio",disabled:e.disabled},domProps:{value:e.name,checked:t._q(t.picked,e.name)},on:{change:function(n){t.picked=e.name}}})],1)])}),0)},[],!1,null,"e1313668",null).exports,r=n(192),c={components:{Carousel:r.Carousel,Slide:r.Slide},props:{items:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!0},canReturn:{type:Boolean,default:!1}},methods:{clicked:function(t){this.$emit("click",t)}}},sub=(n(193),n(195),Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"submenu-wrapper half-gutter"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"row carousel full-width full-height"},t._l(9,function(t){return n("div",{key:t,staticClass:"all-auto relative"},[n("div",{staticClass:"spinner"})])}),0),t._v(" "),n("carousel",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"carousel full-width full-height",attrs:{"navigation-next-label":"➜","navigation-prev-label":"➜","pagination-enabled":!1,"navigation-enabled":!0,"per-page-custom":[[320,4],[1199,11]],"center-mode":!0}},[t.canReturn?n("slide",{staticClass:"item half-padding relative"},[n("div",{staticClass:"spinner"}),t._v(" "),n("div",{staticClass:"item-content row align-content-middle align-content-center full-height half-padding relative",on:{click:function(e){return t.clicked()}}},[n("span",[t._v("عوض کردن دسته‌بندی")])])]):t._e(),t._v(" "),t._l(t.items,function(e){return n("slide",{key:e.id,staticClass:"item half-padding relative"},[n("div",{staticClass:"spinner"}),t._v(" "),n("div",{staticClass:"item-content row align-content-middle align-content-center full-height half-padding relative",on:{click:function(n){return t.clicked(e)}}},[n("v-lazy-image",{staticClass:"code",attrs:{src:e.image_url,alt:e.title,title:e.title}}),t._v(" "),n("div",{staticClass:"spinner"})],1)])})],2)],1)},[],!1,null,"17e67414",null).exports),d=n(188),v=(n(197),Object(l.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"reset row align-content-middle half-gutter gap"},[e("svg-icon",{attrs:{name:"next"}}),this._v(" "),e("a",{staticClass:"no-link",attrs:{href:"https://flerbo.ir/?utm_source=myflerbo&utm_campaign=v1&utm_content=order",target:"_blank"}},[this._v("\n        ثبت سفارش\n    ")])],1)},[],!1,null,"2d6f2b4d",null).exports),h=n(199),f={layout:"no-footer",components:{MainController:main,SubController:sub,Reset:d.a,Order:v},data:function(){return{endpoints:{CATEGORIES:"/a8af0d95-2b49-43d6-a5ed-1c8e5b21a587",LAPTOPS:"/f37b6a67-5f79-4cc6-b6b3-defa0a254862"},loading:{laptops:!1,stickers:!1,categries:!1},mainItem:"",stickers:{available:[],selected:[]},laptops:{available:[],selected:null},categries:{available:[],selected:null},inchToPixelConstant:0,canvas:null,isEmptyLayout:!1}},watch:{mainItem:function(t){"category"===t&&0===this.stickers.available.length?this.loadCategories():"laptop"===t&&0===this.laptops.available.length&&this.loadLaptops()},inchToPixelConstant:function(t,e){this.canvas.setHeight(this.laptops.selected.height*t),this.canvas.setWidth(this.laptops.selected.width*t)}},mounted:function(){var t=this;window.addEventListener("resize",this.updateInchToPixelConstant),window.addEventListener("keydown",function(e){"Delete"===e.key&&t.removeStickers()})},methods:{initCanvas:function(){this.canvas||(this.canvas=new h.fabric.Canvas("canvas"),h.fabric.Group.prototype._controlsVisibility={tl:!1,tr:!1,br:!1,bl:!1,ml:!1,mt:!1,mr:!1,mb:!1,mtr:!0})},updateInchToPixelConstant:function(){this.$refs.laptop&&this.laptops.selected&&(this.inchToPixelConstant=this.$refs.laptop.$el.width/this.laptops.selected.width)},addSticker:function(t){var e=this;t?(this.stickers.selected.push(t),h.fabric.Image.fromURL(t.image_url,function(img){t.width?img.scaleToWidth(t.width*e.inchToPixelConstant,!0):img.scaleToHeight(t.height*e.inchToPixelConstant,!0),img.setControlsVisibility({mt:!1,mb:!1,ml:!1,mr:!1,bl:!1,br:!1,tl:!1,tr:!1,mtr:!0}),img.setShadow({color:"#00000030",blur:1,offsetX:1,offsetY:1}),e.canvas.centerObject(img),e.canvas.add(img)})):this.mainItem="category"},removeStickers:function(){var t=this;this.canvas.remove(this.canvas.getActiveObject()),this.canvas.getActiveObjects().forEach(function(e){t.canvas.remove(e)}),this.canvas.discardActiveGroup()},addLaptop:function(t){this.laptops.selected=t,this.initCanvas()},reset:function(){this.canvas.clear(),this.stickers.selected=[]},loadStickers:function(t){var e=this;this.loading.stickers=!0,this.stickers.available=[],this.$axios.$get(t).then(function(t){e.loading.stickers=!1,e.stickers.available=t})},loadLaptops:function(){var t=this;this.loading.laptops=!0,this.laptops.available=[],this.$axios.$get(this.endpoints.LAPTOPS).then(function(e){t.loading.laptops=!1,t.laptops.available=e})},loadCategories:function(t){var e=this;this.loading.categries=!0,this.categries.available=[],this.$axios.$get(this.endpoints.CATEGORIES).then(function(t){e.loading.categries=!1,e.categries.available=t})},openCategory:function(t){this.mainItem="sticker",this.categries.selected=t,this.loadStickers(t.id)}}},m=(n(208),n(210),Object(l.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container preview",class:{notEmpty:!t.isEmptyLayout}},[n("div",{staticClass:"relative full-height align-center"},[n("div",{staticClass:"laptop-wrapper gap full-height"},[t.laptops.selected?n("v-lazy-image",{ref:"laptop",staticClass:"laptop",attrs:{alt:t.laptops.selected.title,src:t.laptops.selected.image_url},on:{load:t.updateInchToPixelConstant}}):[n("div",{staticClass:"placeholder-wrapper row full-height align-content-middle align-center"},[n("div",{staticClass:"all-auto"},[n("svg-icon",{attrs:{name:"laptop"}}),t._v(" "),n("span",[t._v("برای چیدن استیکر روی لپتاپ، ابتدا یک لپتاپ انتخاب کنید.")])],1)])],t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.laptops.selected,expression:"laptops.selected"}],staticClass:"sticker-wrapper gap"},[n("canvas",{attrs:{id:"canvas"}})])],2),t._v(" "),n("reset",{on:{click:t.reset}}),t._v(" "),t.isEmptyLayout?t._e():n("order"),t._v(" "),n("div",{staticClass:"full-width controller-wrapper",attrs:{dir:"ltr"}},["laptop"===t.mainItem?n("sub-controller",{attrs:{items:t.laptops.available,loading:t.loading.laptops},on:{click:t.addLaptop}}):t._e(),t._v(" "),"category"===t.mainItem?n("sub-controller",{attrs:{items:t.categries.available,loading:t.loading.categries},on:{click:t.openCategory}}):t._e(),t._v(" "),"sticker"===t.mainItem?n("sub-controller",{attrs:{items:t.stickers.available,loading:t.loading.stickers,"can-return":!0},on:{click:t.addSticker}}):t._e(),t._v(" "),n("main-controller",{model:{value:t.mainItem,callback:function(e){t.mainItem=e},expression:"mainItem"}})],1)],1)])},[],!1,null,"3fcaa7d1",null));e.a=m.exports},190:function(t,e,n){"use strict";var o=n(175);n.n(o).a},191:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,".type_select-item[data-v-e1313668]{display:block;transition:background .3s}.type_select-item input[data-v-e1313668]{display:none}.type_select-item .icon[data-v-e1313668]{width:40px;height:40px;display:block;transition:fill .3s}.type_select-item:not(.active):not(.disabled) .icon[data-v-e1313668]{fill:#45424e}.type_select-item:not(.active):not(.disabled):hover .icon[data-v-e1313668]{fill:#e5aa61}.type_select-item.active .icon[data-v-e1313668]{fill:#fff}.type_select-item.disabled[data-v-e1313668]{cursor:no-drop}.type_select-item.disabled .icon[data-v-e1313668]{fill:#eee}",""])},193:function(t,e,n){"use strict";var o=n(176);n.n(o).a},194:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,'.submenu-wrapper[data-v-17e67414]{height:100px}.carousel[data-v-17e67414]{background-color:#eceff1;border-radius:5px;position:relative}.carousel[data-v-17e67414]:after,.carousel[data-v-17e67414]:before{width:20px;height:100%;top:0;bottom:0;position:absolute;content:"";z-index:2}.carousel[data-v-17e67414]:after{background-image:linear-gradient(90deg,#eceff1,transparent);left:0}.carousel[data-v-17e67414]:before{background-image:linear-gradient(-90deg,#eceff1,transparent);right:0}.item[data-v-17e67414]{font-size:12px;height:85px}.item-content[data-v-17e67414]{border-radius:5px;cursor:pointer;transition:all .3s;background-color:#eceff1}.item-content[data-v-17e67414]:hover{background-color:#e0e0e0}.item-content .v-lazy-image[data-v-17e67414]{width:auto;height:100%;display:block;opacity:.2;transition:opacity 1.6s;will-change:opacity}.item-content .v-lazy-image-loaded[data-v-17e67414]{opacity:1;filter:drop-shadow(1px 1px 1px rgba(0,0,0,.19))}.item-content .v-lazy-image-loaded+.spinner[data-v-17e67414]{display:none}.spinner[data-v-17e67414]{width:40px;height:40px;top:0;right:0;bottom:0;left:0;position:absolute;transform:scale(0);background-color:#e5aa61;border-radius:100%;margin:23px auto;animation:sk-scaleout-data-v-17e67414 1s ease-in-out infinite}@keyframes sk-scaleout-data-v-17e67414{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}',""])},195:function(t,e,n){"use strict";var o=n(177);n.n(o).a},196:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,".VueCarousel-wrapper{padding:3px 0}.VueCarousel-navigation-button{color:#45424e!important;transition:all .3s;font-size:32px;line-height:1;outline:none!important;user-select:none;z-index:9;filter:drop-shadow(-5px 0 5px #eceff1) drop-shadow(-5px 0 10px #eceff1) drop-shadow(-5px 0 10px #eceff1)}.VueCarousel-navigation-button:hover{color:#e5aa61!important}.VueCarousel-navigation-prev{transform:translateY(-50%) scale(-1)!important}.VueCarousel-navigation-next{transform:translateY(-50%)!important}.VueCarousel-navigation--disabled{cursor:auto;opacity:0!important}",""])},197:function(t,e,n){"use strict";var o=n(180);n.n(o).a},198:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,".reset[data-v-2d6f2b4d]{top:0;right:0;position:absolute;background-color:#fff;border-radius:5px;color:#4caf50;cursor:pointer;user-select:none;transition:color .3s}.reset svg[data-v-2d6f2b4d]{width:20px;height:20px;fill:#4caf50;transition:fill .3s;margin-left:10px}.reset[data-v-2d6f2b4d]:hover{color:#e5aa61}.reset:hover svg[data-v-2d6f2b4d]{fill:#e5aa61}",""])},204:function(t,e){},205:function(t,e){},206:function(t,e){},207:function(t,e){},208:function(t,e,n){"use strict";var o=n(181);n.n(o).a},209:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,".preview[data-v-3fcaa7d1]{height:100vh}.preview.notEmpty[data-v-3fcaa7d1]{margin-top:-160px;padding-top:160px;padding-bottom:20px}@media (max-width:768px){.preview>div[data-v-3fcaa7d1]{height:unset}}.controller-wrapper[data-v-3fcaa7d1]{right:0;bottom:0;left:0;position:absolute}.placeholder-wrapper[data-v-3fcaa7d1]{color:#bdbdbd}.placeholder-wrapper svg[data-v-3fcaa7d1]{display:inline-block;fill:#bdbdbd}@media (min-width:768px){.placeholder-wrapper svg[data-v-3fcaa7d1]{width:auto;height:100%}}@media (max-width:768px){.placeholder-wrapper svg[data-v-3fcaa7d1]{width:100%;height:auto}}.placeholder-wrapper span[data-v-3fcaa7d1]{display:block}.laptop-wrapper[data-v-3fcaa7d1]{position:relative;padding-top:20px;padding-bottom:190px}.laptop-wrapper[data-v-3fcaa7d1],.laptop-wrapper .laptop[data-v-3fcaa7d1]{display:inline-block}@media (min-width:768px){.laptop-wrapper .laptop[data-v-3fcaa7d1]{width:auto;height:100%}}@media (max-width:768px){.laptop-wrapper .laptop[data-v-3fcaa7d1]{width:100%;height:auto}}.laptop-wrapper *[data-v-3fcaa7d1]{user-select:none}.sticker-wrapper[data-v-3fcaa7d1]{top:0;right:0;bottom:0;left:0;position:absolute;padding-top:20px;padding-bottom:190px}",""])},210:function(t,e,n){"use strict";var o=n(182);n.n(o).a},211:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,".canvas-container{margin:auto}",""])}}]);