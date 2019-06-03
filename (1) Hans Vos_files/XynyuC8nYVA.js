if (self.CavalryLogger) { CavalryLogger.start_js(["lTl\/M"]); }

__d("PixelNumConverter",[],(function(a,b,c,d,e,f){function g(a){return a!=null&&!isNaN(a)&&isFinite(a)&&a!==""}a={pixelValue:function(a){return g(a)?Number(a)+"px":"auto"},numValue:function(a){a=a.replace("px","");return g(a)?Number(a):0}};e.exports=a}),null);
__d("stopIframe",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.contentWindow;a.stop?a.stop():a.document.execCommand&&a.document.execCommand("Stop")}e.exports=a}),null);
__d("XPlaceClaimLogEntryPointController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/place_claim/log_entry_point/",{})}),null);
__d("PlaceClaimLogEntryPoint",["AsyncRequest","Event","XPlaceClaimLogEntryPointController"],(function(a,b,c,d,e,f){__p&&__p();a={init:function(a,c,d){var e=this;b("Event").listen(a,"click",function(){e.sendLoggingRequest(c,d)})},initMenu:function(a,b,c,d){var e=this;a.subscribe("itemclick",function(a,f){f.item.getValue()==b&&e.sendLoggingRequest(c,d)})},sendLoggingRequest:function(a,c){var d=b("XPlaceClaimLogEntryPointController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setData({pageid:a,pageevent:c}).setMethod("POST").send()}};e.exports=a}),null);
__d("AdPreviewIFramePOSTRequest",["Arbiter","CSS","DOM","DOMEventListener","Form","lowerFacebookDomain","stopIframe"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){if(!c)return;var d=b("DOMEventListener").add(a,"load",function(){if(!c)return;b("CSS").hide(c);d.remove();b("Arbiter").inform("AdPreview/IFrameLoadSuccess",{iframe:a})});b("CSS").show(c)}a={init:function(a,c,d,e,f){function h(){g(e,f),b("Form").post(a,c,d)}b("lowerFacebookDomain")();h();return b("Arbiter").subscribe("contextualLayer/toggle",function(a,c){if(!b("DOM").contains(c.contentRoot,e))return;c.show?h():b("stopIframe")(e)})}};e.exports=a}),null);
__d("AdPreviewIFrameResizeListener",["Arbiter","DOM","PixelNumConverter","Style","lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();a={listen:function(a,c,d,e){__p&&__p();var f=!1;b("lowerFacebookDomain")();return b("Arbiter").subscribe(["iframe/resize","contextualLayer/toggle"],function(g,h){__p&&__p();if(g==="iframe/resize"){if(f||h.frame!==a)return;c.height=h.frameHeight;if(!d)return;g=!e||!h.storyHeight?h.frameHeight:h.storyHeight-1;b("Style").set(d,"height",b("PixelNumConverter").pixelValue(g))}else{if(!b("DOM").contains(h.contentRoot,c))return;h.show?f=!1:f=!0}})}};e.exports=a}),null);
__d("SaveState",[],(function(a,b,c,d,e,f){a=Object.freeze({SAVING:"saving",SAVED:"saved",UNSAVING:"unsaving",UNSAVED:"unsaved"});e.exports=a}),null);
__d("SaveStateHandler",["Run","SaveState"],(function(a,b,c,d,e,f){__p&&__p();var g=null;a=function(){"use strict";__p&&__p();function a(){this.$1={},this.$2={},b("Run").onLeave(function(){g=null})}var c=a.prototype;c.addListener=function(a,b){this.$1[a]||(this.$1[a]=[]),this.$1[a].push(b)};c.setState=function(a,b){a.forEach(function(a){this.$2[a]=b;if(!this.$1[a])return;a=this.$1[a];a.forEach(function(a){try{a.call(window,b)}catch(a){}})},this)};c.getState=function(a){return this.$2[a]};a.$3=function(){g||(g=new a());return g};a.listen=function(a,b){this.$3().addListener(a,b)};a.getState=function(a){this.$3().getState(a)};a.saving=function(a){this.$3().setState(a,b("SaveState").SAVING)};a.saved=function(a){this.$3().setState(a,b("SaveState").SAVED)};a.unsaving=function(a){this.$3().setState(a,b("SaveState").UNSAVING)};a.unsaved=function(a){this.$3().setState(a,b("SaveState").UNSAVED)};a.isSaveAction=function(a){a=this.$3().getState(a);return a==b("SaveState").UNSAVED||a==b("SaveState").UNSAVING};return a}();e.exports=a}),null);
__d("CurationToggleButton",["cx","CSS","Event","SaveState","SaveStateHandler","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h="_vu",i="_vv";a=function(){"use strict";__p&&__p();function a(a,c,d,e,f){__p&&__p();this.$1=!1,this.$2=f,b("tidyEvent")([b("Event").listen(c,"click",this.setSaving.bind(this)),b("Event").listen(c,"error",this.setUnsaved.bind(this)),b("Event").listen(d,"click",this.setUnsaving.bind(this)),b("Event").listen(d,"error",this.setSaved.bind(this))]),b("SaveStateHandler").listen(e,function(e){__p&&__p();switch(e){case b("SaveState").SAVING:b("CSS").addClass(a,h);b("CSS").addClass(a,i);d.setAttribute("rel","");this.$1=!0;break;case b("SaveState").SAVED:b("CSS").addClass(a,h);b("CSS").removeClass(a,i);d.setAttribute("rel","async-post");this.$1=!1;break;case b("SaveState").UNSAVING:b("CSS").removeClass(a,h);b("CSS").addClass(a,i);c.setAttribute("rel","");this.$1=!0;break;case b("SaveState").UNSAVED:b("CSS").removeClass(a,h);b("CSS").removeClass(a,i);c.setAttribute("rel","async-post");this.$1=!1;break}}.bind(this))}var c=a.prototype;c.setSaving=function(){this.$1||b("SaveStateHandler").saving(this.$2)};c.setUnsaving=function(){this.$1||b("SaveStateHandler").unsaving(this.$2)};c.setSaved=function(){b("SaveStateHandler").saved(this.$2)};c.setUnsaved=function(){b("SaveStateHandler").unsaved(this.$2)};return a}();e.exports=a}),null);
__d("MenuTogglingItem",["DOM","MenuItem"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.handleClick=function(){this.toggleMenuItem();return a.prototype.handleClick.call(this)};d.toggleMenuItem=function(){this._data=babelHelpers["extends"]({},this._data,{ajaxify:this._data.toggleAjaxify,toggleAjaxify:this._data.ajaxify,value:this._data.toggleValue,toggleValue:this._data.value,markup:this._data.toggleMarkup,toggleMarkup:this._data.markup}),this._rerender()};d.setValue=function(a){this._data=babelHelpers["extends"]({},this._data,{value:a})};d._rerender=function(){var a=this._anchor;b("DOM").replace(a,this._renderItemContent())};return c}(b("MenuItem"));e.exports=a}),null);
__d("getEventTarget",[],(function(a,b,c,d,e,f){"use strict";var g=3;function a(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return a.nodeType===g?a.parentNode:a}e.exports=a}),null);