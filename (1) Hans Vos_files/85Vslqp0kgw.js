if (self.CavalryLogger) { CavalryLogger.start_js(["R1dPw"]); }

__d("DirectDebitCredentialStatus",[],(function(a,b,c,d,e,f){e.exports={INITED:73,PENDING:80,VERIFIED:86,CANCELED:67}}),null);
__d("DliteSessionConfig",[],(function(a,b,c,d,e,f){e.exports={loggedOutErrorCodes:[1340002,1340004,1357001,1780001,1348007]}}),null);
__d("FacebookAppIDs",[],(function(a,b,c,d,e,f){e.exports={BONFIRE_FOR_WWW:784885635046813,FACEBOOK_FOR_ANDROID:74769995908,FACEBOOK_FOR_EMERGING_MARKET_ANDROID:275254692598279,TURDUCKEN:400954310366822,FACEBOOK_MEDIA_EFFECTS:1779302845618373,MOST_RECENT_FEED:608920319153834,SAVED_FOR_LATER:586254444758776,TRANSLATIONS:4329892722,MESSENGERDOTCOM:772021112871879,MESSENGER_DESKTOP:195376314393036,WWW:256281040558,FBPAGES:2530096808,ADS_PAYMENT:123097351040126,EVENTS:2344061033,BUSINESS_ACCOUNTS:436761779744620,ADS_EVENTS_MANAGER:2094176354154603,WORKPLACE_BILLING:1350397358363828,WORKPLACE_FOR_EVERY_PHONE:1263749867021676,WORKPLACE_DESKTOP:267999183646265,CHATPROXY_WEB:229895473858072,MARKETPLACE:1606854132932955,WHATSAPP_BUSINESS_ACCOUNT_MANAGER:225181538219344,LIFT_STUDY_VIEW:1501349520163380,LIFT_STUDY_CREATION:367378623468359,INTERN_ADS_PREVIEW_GENERATION_APP:2004203579636813,DESKTOP_VIDEO_CHAT:451384735309667,DESKTOP_VIDEO_CHAT_WINDOWS:1931350367173590,PAGE_INBOX:263902037430900,MEDIA_MANAGER:2007914219485853}}),null);
__d("AdsValidatorTests",["AdmanagerAccountStatuses","ClientIDs","DirectDebitCredentialStatus","getObjectValues"],(function(a,b,c,d,e,f){__p&&__p();var g="CONFIRMED",h="PENDING",i=/^-?\d+$/,j=/[\f\n\r\t\v]/,k=/^[1-9]\d*$/,l=Date.parse("Jan 1, 1970"),m=Date.parse("March 21, 2100"),n=143,o=new RegExp("[^@]+@[^@]+$"),p=b("getObjectValues")(b("DirectDebitCredentialStatus")),q=b("getObjectValues")(b("AdmanagerAccountStatuses"));function a(a){return{isValid:!!a,text:"must have non-zero length"}}function c(a){return{isValid:typeof a==="boolean",text:"must represent a boolean value"}}function d(a){return{isValid:a instanceof Array,text:"must represent a array value"}}function f(a,b){return{isValid:b.length>=a,text:"should contain at least "+a+" items"}}function r(a){return{isValid:a instanceof Object,text:"must represent a object value"}}function s(a,b){return{isValid:b.length===a,text:"string should be exactly "+a+" characters"}}function t(a,b){return{isValid:b.length>=a,text:"must be at least "+a+" characters"}}function u(a,b){return{isValid:b.length<=a,text:"must be at most "+a+" characters"}}function v(a,b){return{isValid:a.test(b),text:"must not contain invalid characters"}}function w(a){return{isValid:!j.test(a),text:"must not contain invalid whitespace characters like tab or return"}}function x(a){var b=parseFloat(a);return{isValid:!isNaN(b)&&b==a,text:"must represent a floating point number"}}function y(a){a=v(i,a);a.text="must represent an integer";return a}function z(a){return{isValid:a%1===0&&a>=0,text:"must be a positive integer or zero"}}function A(a){return{isValid:a%1===0&&a>0,text:"must be a positive integer"}}function B(a){return{isValid:a>l&&a<m,text:"must be in the valid timestamp range,"}}function C(a){return{isValid:B(a).isValid||a===0,text:"must be either in the valid timestamp range or is zero"}}function D(a){return{isValid:Object.prototype.toString.call(a)==="[object Date]",text:"must be a valid date"}}function E(a,b){b=b&&b.endTime;return{isValid:B(a).isValid&&typeof b==="number"&&a<=b,text:"need valid end time and start time cannot be later than end time"}}function F(a,b){b=b.startTime;return{isValid:B(a).isValid&&typeof b==="number"&&b<=a,text:"need valid start time and end time cannot be earlier than start time"}}function G(a){return{isValid:k.test(a),text:"must be a valid FBID"}}function H(a){return{isValid:a>=0&&a<=n,text:"must be a valid timezone id"}}function I(a,b){return{isValid:!a.validateProperties(b),text:"must be a valid object"}}function J(a,b){return{isValid:a.every(b.hasOwnProperty,b),text:"object must contain all given props"}}function K(a){return{isValid:G(a).isValid||!!b("ClientIDs").isExistingClientID(a),text:"must be a valid FBID or ClientID"}}function L(a,b){__p&&__p();var c=!0,d="";for(var e=0;e<b.length;e++){var f=b[e],g=a(f).text;d="each item "+typeof g==="string"?g:"";if(!a(f).isValid){c=!1;break}}return{isValid:c,text:d}}function M(a){return{isValid:!!(a===g||a===h),text:"must be a CONFIRMED or PENDING status"}}function N(a){return{isValid:q.indexOf(a)>=0,text:"must be a valid ad account status"}}function O(a){return{isValid:p.indexOf(a)>=0,text:"must be a valid direct debit credential status"}}function P(a,b){return{isValid:a.indexOf(b)>=0,text:"must be one of values in array"}}function Q(a){var b=!1;a.match(o)&&(b=!0);return{isValid:b,text:"must be a valid email address"}}e.exports={isLengthyString:a,isExactLengthString:s,isAllValidCharacters:v,hasNoInvalidWhitespace:w,isFloatString:x,isIntegerString:y,isPositiveInteger:A,isPositiveOrZeroInteger:z,isMinLengthString:t,isMaxLengthString:u,isUnixTimestamp:B,isUnixTimestampOrZero:C,isDate:D,isValidStartTime:E,isValidEndTime:F,isBoolean:c,isValidJson:r,isValidArray:d,isMinLengthArray:f,isFBIDString:G,isValidTimeZoneID:H,isValidObject:I,hasProperties:J,isFBIDOrClientIDString:K,isValidCollection:L,isValidAssetStatus:M,isValidAccountStatus:N,isValidDirectDebitStatus:O,isInArray:P,isValidEmail:Q}}),null);
__d("CometRouterDispatcherContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext();e.exports=a}),null);
__d("SchedulerTracing-dev",["ReactFeatureFlags"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("SchedulerTracing",["requireCond","SchedulerTracing-dev","cr:687059"],(function(a,b,c,d,e,f){"use strict";a=b("cr:687059");e.exports=a}),null);
__d("JSTracing",["SchedulerTracing","performanceNow"],(function(a,b,c,d,e,f){"use strict";a={clear:function(a){return b("SchedulerTracing").unstable_clear(a)},getCurrent:function(){return b("SchedulerTracing").unstable_getCurrent()},trace:function(a,c,d){d===void 0&&(d=b("performanceNow")());return b("SchedulerTracing").unstable_trace(a,d,c)},wrap:function(a){return b("SchedulerTracing").unstable_wrap(a)}};e.exports=a}),null);
__d("PromiseUtil",["Promise","nullthrows","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g={allSettled:function(a){var c=b("Promise").all(a);return b("Promise").all(a.map(function(a){return b("Promise").resolve(a).then(void 0,function(a){return void 0})})).then(function(){return c})},allSettledInSeries:function(a){var c=[];return a.reduce(function(a,b){return a.then(b).then(function(){return void 0},function(a){c.push(a);return void 0})},b("Promise").resolve()).then(function(){if(c.length)throw c[0]})},exponentialBackoff:function(a,b,c){b===void 0&&(b=Math.sqrt(2));c===void 0&&(c=1);var d=c;c=function(){var a=d;d*=b;return a};return g.rateLimit(a,c)},forEach:function(a,c){return a.then(function(a){return b("Promise").resolve(c(a)).then(function(){return a})})},forEachError:function(a,c){return a.then(void 0,function(a){return b("Promise").resolve(c(a)).then(function(){throw a})})},iterateUntil:function(a,c){var d=function d(e){return c(e)?b("Promise").resolve(e):b("Promise").resolve(a(e)).then(d)};return d},pollUntilImpl:function(a,c){var d,e=new(b("Promise"))(function(b,e){var f=function(){try{var c=a();c&&b(c.value)}catch(a){e(a)}};d=setInterval(f,1e3*c)});return e["finally"](function(){return clearInterval(b("nullthrows")(d))})},pollUntil:function(a,b){b===void 0&&(b=1);return g.pollUntilImpl(function(){var b=a();return b?{value:b}:void 0},b)},rateLimit:function(a,b){__p&&__p();var c=[],d=void 0,e=0;return function(){var f=b();for(var h=arguments.length,i=new Array(h),j=0;j<h;j++)i[j]=arguments[j];c=i;d||(d=g.wait(e+f-Date.now()/1e3).then(function(){e=Date.now()/1e3;d=void 0;return a.apply(void 0,c)}));return d}},rateLimitWithLastResult:function(a,c){var d=!1,e=void 0;return function(){d||(b("promiseDone")(g.wait(c()),function(){return d=!1}),e=a.apply(void 0,arguments),d=!0);return e}},repeatUntil:function(a,c){var d=function d(){return b("Promise").resolve(a()).then(function(a){return c(a)?b("Promise").resolve(a):d()})};return d},repeatWhileErrorUntil:function(a,c,d){var e=function e(){return b("Promise").resolve(a()).then(function(a){c(a);return b("Promise").resolve(a)},function(a){return d(a)?e():b("Promise").reject(a)})};return e},series:function(a,c){c=c;return a.reduce(function(a,b){return a.then(b)},b("Promise").resolve(c))},wait:function(a){return 0<a?new(b("Promise"))(function(b,c){return setTimeout(b,1e3*a)}):b("Promise").resolve()},waitAtMost:function(a,b){return g.waitOrElse(a,b,function(){throw new Error("Promise timed out")})},waitOrElse:function(a,c,d){var e=!1;return b("Promise").race([a.then(function(a){e=!0;return a},function(a){e=!0;throw a}),g.wait(c).then(function(){return e?void 0:d()})])}};e.exports=g}),null);
__d("ShareDialogAudienceTypes",["ShareModeConst","getObjectValues"],(function(a,b,c,d,e,f){__p&&__p();a=Object.freeze({OWN:b("ShareModeConst").SELF_POST,PERSON:b("ShareModeConst").FRIEND,GROUP:b("ShareModeConst").GROUP,EVENT:b("ShareModeConst").EVENT,PAGE:b("ShareModeConst").PAGE,FUNDRAISER:b("ShareModeConst").FUNDRAISER,MESSAGE:b("ShareModeConst").MESSAGE,SILENT_DISCO:b("ShareModeConst").SILENT_DISCO,STORY:b("ShareModeConst").STORY});var g=b("getObjectValues")(a);c=Object.freeze(babelHelpers["extends"]({},a,{ALL:g}));function h(a){return g.some(function(b){return b===a})}d=babelHelpers["extends"]({},c,{isValid:h,propType:function(a,b){if(!h(a[b]))throw new Error("Invalid audience "+a[b])}});e.exports=d}),null);
__d("AbstractDialogFitHeight",["csx","cx","CSS","DOM","Event","Style","SubscriptionsHandler","Vector","throttle"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=450,j=100,k=67,l=67;a=function(){"use strict";__p&&__p();function a(a){this.$1=a}var c=a.prototype;c.enable=function(){this.$2=new(b("SubscriptionsHandler"))(),this.$2.addSubscriptions(this.$1.subscribe("beforeshow",this.$3.bind(this)),b("Event").listen(window,"resize",b("throttle")(this.$3.bind(this)))),this.$4=b("DOM").find(this.$1.getRoot(),"._4-i2"),b("CSS").addClass(this.$4,"_5pfh"),b("CSS").addClass(this.$1.getRoot(),"_3thl"),this.$5=j,b("DOM").scry(this.$1.getRoot(),"._4-i0").length&&(this.$5+=k),b("DOM").scry(this.$1.getRoot(),"._5a8u").length&&(this.$5+=l)};c.disable=function(){this.$2.release(),this.$2=null,b("CSS").removeClass(this.$4,"_5pfh"),b("CSS").removeClass(this.$1.getRoot(),"_3thl")};c.$3=function(){var a=b("Vector").getViewportDimensions().y;a=a-this.$5;b("Style").set(this.$4,this.getHeightProperty(),Math.max(i,a)+"px");this.$1.updatePosition()};return a}();e.exports=a}),null);
__d("DialogFitHeight",["AbstractDialogFitHeight"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getHeightProperty=function(){return"height"};return b}(b("AbstractDialogFitHeight"));e.exports=a}),null);
__d("DialogFitHeightToContent",["AbstractDialogFitHeight"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getHeightProperty=function(){return"max-height"};return b}(b("AbstractDialogFitHeight"));e.exports=a}),null);
__d("forceSubdomain",["URI"],(function(a,b,c,d,e,f){function a(a,c){var d=new(b("URI"))(window.location.href),e=d.getDomain().split(".");e.length<=2?e.unshift(c):e[0]=c;return new(b("URI"))(a).setProtocol(d.getProtocol()).setDomain(e.join(".")).setPort(d.getPort())}e.exports=a}),null);
__d("serializeFormQueryMap",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return[].concat(Array.from(a.querySelectorAll("input")),Array.from(a.querySelectorAll("select")),Array.from(a.querySelectorAll("textarea")),Array.from(a.querySelectorAll("button")))}function h(a,b){__p&&__p();g(a).forEach(function(a){__p&&__p();if(!a.name||a.disabled)return;var c=a.type;if(c==="submit"||c==="reset"||c==="button"||c==="image"||c==="file")return;if((c==="radio"||c==="checkbox")&&!a.checked)return;if(a.nodeName==="SELECT"){for(var d=0,e=a.options.length;d<e;d++){var f=a.options[d];f.selected&&b("select",a.name,f.value)}return}b(c,a.name,a.value||"")})}function a(a){var b={};h(a,function(a,c,d){a=b[c];Object.prototype.hasOwnProperty.call(b,c)?Array.isArray(a)?a.push(d):b[c]=[a,d]:b[c]=d});return b}e.exports=a}),null);
__d("FlexLayoutItem.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,d=a.align,e=a.basis,f=a.children,g=a.className,h=a.grow,i=a.order,j=a.shrink;a=a.style;d=c.flexLayoutItem({align:d,basis:e,grow:h,order:i,shrink:j,className:g,style:a});return b("React").createElement("div",d,f)};c.flexLayoutItem=function(a){a=a!==void 0?a:{};var d=a.className,e=a.order,f=a.grow,g=a.shrink,h=a.basis,i=a.align;a=a.style;e===void 0&&(e=c.defaultProps.order);f===void 0&&(f=c.defaultProps.grow);g===void 0&&(g=c.defaultProps.shrink);h===void 0&&(h=c.defaultProps.basis);i===void 0&&(i=c.defaultProps.align);return{className:b("joinClasses")((i==="auto"?"_6g3g":"")+(i==="start"?" _6g3m":"")+(i==="center"?" _6g3n":"")+(i==="end"?" _6g3v":"")+(i==="stretch"?" _6g3w":""),d),style:babelHelpers["extends"]({},a,{flexBasis:h,flexGrow:f,flexShrink:g,order:e})}};return c}(b("React").Component);a.defaultProps={align:"auto",basis:"auto",grow:0,order:0,shrink:1};e.exports=a}),null);
__d("NoIframeResponsiveBlock.react",["cx","Event","React","UserAgent","joinClasses","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("UserAgent").isBrowser("IE")&&"onresize"in document.createElement("div"),i=window.ResizeObserver!=void 0,j=window.MutationObserver!=void 0,k={attributes:!0,characterData:!0,childList:!0,subtree:!0},l=["top","right","bottom","left","width","height","size","weight"],m=20;c=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(d,c);function d(){__p&&__p();var d,e;for(var f=arguments.length,g=new Array(f),n=0;n<f;n++)g[n]=arguments[n];return(d=e=c.call.apply(c,[this].concat(g))||this,e.$1=null,e.$4=null,e.$5=b("throttle")(function(){var a=!1;if(e.$1!=null){var b=e.$1.style,c={boxSizing:b.boxSizing,paddingTop:b.paddingTop,paddingLeft:b.paddingLeft,paddingBottom:b.paddingBottom,paddingRight:b.paddingRight,borderTop:b.borderTop,borderLeft:b.borderLeft,borderBottom:b.borderBottom,borderRight:b.borderRight,marginTop:b.marginTop,marginLeft:b.marginLeft,marginBottom:b.marginBottom,marginRight:b.marginRight,width:b.width,height:b.height},d=e.$4;d!=null?Object.keys(c).map(function(b){c[b]!=d[b]&&(a=!0)}):a=!0;e.$4=c;a&&e.props.onResize(+c.width,+c.height)}},m),e.$6=function(a){e.$1=a},e.$7=function(a){var b=a.propertyName;if(b){a=!1;l.forEach(function(c){b.indexOf(c)!==-1&&(a=!0)});a&&e.$5()}else e.$5()},e.$8=function(c){c?(h?c.onresize=e.$5:i?(e.$2=new ResizeObserver(e.$5),e.$2.observe(c)):(document.addEventListener("transitionend",e.$7),window.addEventListener("resize",e.$5),j?(b("Event").listen(window,"resize",e.$5),e.$3=new a.MutationObserver(e.$5),e.$3.observe(c,k)):document.addEventListener("DOMSubtreeModified",e.$5)),e.$5()):h||(i?(e.$2&&e.$2.disconnect(),delete e.$2):(document.removeEventListener("transitionend",e.$5),window.removeEventListener("resize",e.$5),j?(e.$3&&e.$3.disconnect(),delete e.$3):document.removeEventListener("DOMSubtreeModified",e.$5)))},d)||babelHelpers.assertThisInitialized(e)}var e=d.prototype;e.componentDidMount=function(){this.$5()};e.render=function(){var a=b("joinClasses")("_4u-c",this.props.className);return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:a,ref:this.$6}),this.props.children,b("React").createElement("div",{key:"sensor",ref:this.$8,className:"_4u-f"}))};return d}(b("React").Component);e.exports=c}),null);
__d("StoreAndPropBasedStateMixin",["invariant","FluxMixinLegacyInstrumentation","StoreBasedStateMixinHelper","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return b("FluxMixinLegacyInstrumentation").addInstrumentation({_callCalculateState:function(a){return this.constructor.calculateState(a)},getInitialState:function(){this._onInitialStateForInstrumentation&&this._onInitialStateForInstrumentation();return this._callCalculateState(this.props)},UNSAFE_componentWillMount:function(){__p&&__p();var a=this;this.constructor.calculateState||g(0,3582);this._recalculateStateID=null;var d=function(){if(a.isMounted()){var b=a._collectStoreEmitsForInstrumentation?a._collectStoreEmitsForInstrumentation():null,c=a._callCalculateState(a.props),d=a._getCurrentDispatchForInstrumentation&&a._getCurrentDispatchForInstrumentation();a.setState(a._logStoreEmitsForInstrumentation!=null?function(){b!=null&&a._logStoreEmitsForInstrumentation&&a._logStoreEmitsForInstrumentation(b,d);return c}:c)}a._recalculateStateID=null};this._mixin=new(b("StoreBasedStateMixinHelper"))(c);this._mixin.subscribeCallback(function(){a._recalculateStateID===null&&(a._recalculateStateID=b("setImmediate")(d))},this._addStoreEmitForInstrumentation)},UNSAFE_componentWillReceiveProps:function(a){var b=this,c=this._callCalculateState(a),d=this._getCurrentDispatchForInstrumentation&&this._getCurrentDispatchForInstrumentation();this.setState(this._onReceivePropsForInstrumentation?function(){b._onReceivePropsForInstrumentation&&b._onReceivePropsForInstrumentation(d);return c}:c)},componentWillUnmount:function(){this._mixin&&this._mixin.release(),this._mixin=null}})};e.exports=a}),null);
__d("FBPaymentsCountdownTimer.react",["DateConsts","React","formatDate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("DateConsts").MS_PER_SEC;a="i:s";var h=g;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={remainingTimeInMs:c.getRemainingTimeInMs()},c.updateRemainingTimeInMs=function(){var a=c.getRemainingTimeInMs();c.setState({remainingTimeInMs:a});a<=0&&(c.$1&&clearInterval(c.$1),c.props.onTimerCompleted&&c.props.onTimerCompleted())},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.updateRemainingTimeInMs(),this.$1=setInterval(this.updateRemainingTimeInMs,h)};d.componentWillUnmount=function(){this.$1&&clearInterval(this.$1)};d.getRemainingTimeInMs=function(){return Math.max(this.props.endTime-Date.now(),0)};d.formatTime=function(a,c){a=a/g;return b("formatDate")(a,c,{skipPatternLocalization:!0,utc:!0})};d.render=function(){return b("React").createElement("span",null,this.formatTime(this.state.remainingTimeInMs,this.props.dateTimeFormat))};return c}(b("React").PureComponent);c.defaultProps={dateTimeFormat:a};e.exports=c}),null);
__d("FBPaymentsNewPaymentOptionTypes",[],(function(a,b,c,d,e,f){"use strict";a={NEW_CREDIT_CARD:"new_cc",NEW_PAYPAL:"paypal",NEW_AFFIRM:"affirm",NEW_ALT_PAY:"alt_pay",NEW_CREDIT_CARD_FROM_GRAPHQL:"NEW_CREDIT_CARD",NEW_PAYPAL_FROM_GRAPHQL:"NEW_PAYPAL_BA",NEW_AFFIRM_FROM_GRAPHQL:"AFFIRM",NEW_ALT_PAY_FROM_GRAPHQL:"ALT_PAY"};e.exports=a}),null);
__d("FBPaymentsPaymentMethodTypes",[],(function(a,b,c,d,e,f){"use strict";a={CREDIT_CARD:"cc",CREDIT_CARD_FROM_GRAPHQL:"CREDIT_CARD",DUMMY_PAYMENT_METHOD:"dummy",DUMMY_PAYMENT_METHOD_FROM_GRAPHQL:"DUMMY",MANUAL_TRANSFER:"manual_transfer",NET_BANKING:"net_banking",PAYPAL_BILLING_AGREEMENT:"paypal_ba",PAYPAL_BILLING_AGREEMENT_FROM_GRAPHQL:"PAYPAL_BA",AFFIRM_MONTHLY_PAYMENT:"affirm",GIFTCARD_BALANCE:"giftcard_balance",GIFTCARD_BALANCE_FROM_GRAPHQL:"GIFTCARD_BALANCE",ALT_PAY:"alt_pay",ALT_PAY_FROM_GRAPHQL:"ALT_PAY"};e.exports=a}),null);
__d("CreditCardType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DINERSCLUB:64,AMERICANEXPRESS:65,DISCOVER:68,ELO:69,JCB:74,MASTERCARD:77,CUP:80,UNKNOWN:85,VISA:86,RUPAY:82})}),null);
__d("CreditCardTypeField",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:"unknown",VISA:"visa",MASTERCARD:"mastercard",DISCOVER:"discover",AMERICAN_EXPRESS:"american_express",JCB:"jcb",DINERS_CLUB:"diners_club",CUP:"cup",RUPAY:"rupay",ELO:"elo"})}),null);
__d("PaymentMethodUtils",["fbt","ix","CreditCardType","CreditCardTypeEnum","CreditCardTypeField","FBLogger","FBPaymentsNewPaymentOptionTypes","FBPaymentsPaymentMethodTypes"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=16,j=4,k=[{pattern:/^40117[8-9]/,name:"elo",cscDigits:3,digits:16,supported:!0,code:69,type:b("CreditCardTypeField").ELO},{pattern:/^5[1-5]|^2(2(2[1-9]|[3-9])|[3-6]|7([01]|20))/,name:"mc",cscDigits:3,digits:16,supported:!0,code:77,type:b("CreditCardTypeField").MASTERCARD},{pattern:/^4/,name:"visa",cscDigits:3,digits:16,supported:!0,code:86,type:b("CreditCardTypeField").VISA},{pattern:/^3[47]/,name:"amex",cscDigits:4,digits:15,supported:!0,code:65,type:b("CreditCardTypeField").AMERICAN_EXPRESS},{pattern:/^35(2[8-9]|[3-8])/,name:"jcb",cscDigits:3,digits:16,supported:!0,code:74,type:b("CreditCardTypeField").JCB},{pattern:/^62/,name:"cup",cscDigits:3,digits:16,supported:!0,code:80,type:"china_union_pay"},{pattern:/^(6011|65|64[4-9])/,name:"disc",cscDigits:3,digits:16,supported:!0,code:68,type:b("CreditCardTypeField").DISCOVER},{pattern:/^(508[5-9]|60[6-8])/,name:"rupay",cscDigits:3,digits:16,supported:!0,code:82,type:b("CreditCardTypeField").RUPAY},{pattern:/^30[0-5]/,name:"diners",digits:14,cscDigits:3,supported:!1,code:64,type:b("CreditCardTypeField").DINERS_CLUB},{name:"unknown",pattern:null,digits:16,cscDigits:3,supported:!1,code:85,type:b("CreditCardTypeField").UNKNOWN}],l=function(a){return a.replace(/[iIl]/g,"1").replace(/[Oo]/g,"0").replace(/[^\d]/gi,"")},m={isElo:function(a){a=parseInt(a,10);var b=[[401178,401179],[431274,431274],[438935,438935],[457393,457393],[457631,457632],[504175,504175],[506717,506718],[506720,506721],[506723,506733],[506739,506739],[506741,506748],[506753,506753],[506774,506775],[506777,506778],[509e3,509002],[509004,509012],[509014,509014],[509020,509030],[509035,509053],[509064,509064],[509066,509072],[509074,509083],[509085,509092],[509095,509103],[509105,509105],[509107,509807],[636297,636297],[636368,636368],[650485,650513],[650516,650516],[650518,650538],[650552,650598],[650720,650727],[650901,650922],[650928,650928],[650939,650939],[650946,650978],[651652,651704],[655e3,655019],[655021,655058]];for(var c=0;c<b.length;c++)if(a>=b[c][0]&&a<=b[c][1])return!0;return!1},getCardType:function(a){__p&&__p();var c=l(a).substr(0,6);if(m.isElo(c))return m.getCardTypeFromFieldType(b("CreditCardTypeField").ELO);var d=c.substr(0,2);if(d==="65"){d=Number(c);if(d>=652150&&d<=653143)return m.getCardTypeFromFieldType(b("CreditCardTypeField").RUPAY);else return m.getCardTypeFromFieldType(b("CreditCardTypeField").DISCOVER)}for(var c=0;c<k.length;c++)if(k[c].pattern&&a.match(k[c].pattern))return k[c];return k[k.length-1]},getCardTypeFromFieldType:function(a){var b=k.find(function(b){return a===b.type})||k[k.length-1];return b},getCardTypeFromCode:function(a){for(var b=0;b<k.length;b++)if(a==k[b].code)return k[b];return null},isValidCCNumber:function(a){a=l(a);var b=m.getCardType(a);if(b.digits!==a.length)return!1;return!b.supported?!1:m.isValidLuhn(a)},isValidLuhn:function(a){__p&&__p();a=l(a);a=a.split("").reverse();var b="";for(var c=0;c<a.length;c++){var d=parseInt(a[c],10);c%2!==0&&(d*=2);b+=d}d=0;for(c=0;c<b.length;c++)d+=parseInt(b.charAt(c),10);return!!(d!==0&&d%10===0)},getMaxCardLength:function(a){return i},getMaxCSCLength:function(){return j},getImageForCard:function(a){a=a==null?"unknown":a.name;return this.getImageForCardType(a)},getImageForCardType:function(a){switch(a){case"visa":return h("95533");case"mc":return h("95531");case"amex":return h("95528");case"disc":return h("95529");case"jcb":return h("95530");case"rupay":return h("571080");case"elo":return h("783003");default:return h("95526")}},getImageForPayPal:function(){return h("95532")},getRawCreditCardString:function(a){__p&&__p();switch(a){case b("CreditCardTypeEnum").VISA:return"Visa";case b("CreditCardTypeEnum").MASTERCARD:return"Mastercard";case b("CreditCardTypeEnum").DISCOVER:return"Discover";case b("CreditCardTypeEnum").RUPAY:return"Rupay";case b("CreditCardTypeEnum").ELO:return"Elo";case b("CreditCardTypeEnum").AMERICANEXPRESS:return"Amex";case b("CreditCardTypeEnum").JCB:return"JCB";case b("CreditCardTypeEnum").DINERSCLUB:return"Diners";default:return"Credit Card"}},getCreditCardString:function(a){__p&&__p();switch(a){case b("CreditCardTypeEnum").VISA:return g._("Visa");case b("CreditCardTypeEnum").MASTERCARD:return g._("Mastercard");case b("CreditCardTypeEnum").DISCOVER:return g._("Discover");case b("CreditCardTypeEnum").RUPAY:return g._("Rupay");case b("CreditCardTypeEnum").ELO:return g._("Elo");case b("CreditCardTypeEnum").AMERICANEXPRESS:return g._("Amex");case b("CreditCardTypeEnum").JCB:return g._("JCB");case b("CreditCardTypeEnum").DINERSCLUB:return g._("Diners");default:return g._("Credit Card")}},getCardTypeFromServerSideCardType:function(a){__p&&__p();switch(a){case"VISA":return this.getCardTypeFromCode(b("CreditCardType").VISA);case"MASTERCARD":return this.getCardTypeFromCode(b("CreditCardType").MASTERCARD);case"AMERICANEXPRESS":return this.getCardTypeFromCode(b("CreditCardType").AMERICANEXPRESS);case"DISCOVER":return this.getCardTypeFromCode(b("CreditCardType").DISCOVER);case"JCB":return this.getCardTypeFromCode(b("CreditCardType").JCB);case"DINERSCLUB":return this.getCardTypeFromCode(b("CreditCardType").DINERSCLUB);case"RUPAY":return this.getCardTypeFromCode(b("CreditCardType").RUPAY);case"ELO":return this.getCardTypeFromCode(b("CreditCardType").ELO);default:return m.getCardTypeFromFieldType(a)}},getGraphQLPaymentMethodTypeFromLegacyType:function(a){switch(a){case b("FBPaymentsNewPaymentOptionTypes").NEW_CREDIT_CARD:return b("FBPaymentsNewPaymentOptionTypes").NEW_CREDIT_CARD_FROM_GRAPHQL;case b("FBPaymentsNewPaymentOptionTypes").NEW_PAYPAL:return b("FBPaymentsNewPaymentOptionTypes").NEW_PAYPAL_FROM_GRAPHQL;case b("FBPaymentsNewPaymentOptionTypes").NEW_AFFIRM:return b("FBPaymentsNewPaymentOptionTypes").NEW_AFFIRM_FROM_GRAPHQL;case b("FBPaymentsPaymentMethodTypes").CREDIT_CARD:return b("FBPaymentsPaymentMethodTypes").CREDIT_CARD_FROM_GRAPHQL;case b("FBPaymentsPaymentMethodTypes").PAYPAL_BILLING_AGREEMENT:return b("FBPaymentsPaymentMethodTypes").PAYPAL_BILLING_AGREEMENT_FROM_GRAPHQL;case b("FBPaymentsPaymentMethodTypes").ALT_PAY:return b("FBPaymentsPaymentMethodTypes").ALT_PAY_FROM_GRAPHQL;default:b("FBLogger")("purchase_experience").warn("No corresponding graphQL payment method type: %s",a);return a}},getCreditCardGrouping:function(a){var b=[0,4,8,12,16];switch(m.getCardType(a).name){case"amex":b=[0,4,10,15];break;case"diners":b=[0,4,10,14];break;case"visa":case"mc":case"disc":default:break}return b}};e.exports=m}),null);
__d("FBPaymentsValidators",["EmojiRenderer","PaymentMethodUtils","isEmail"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={nonEmpty:function(a){return!!(a&&a.trim())},isEmailAddress:function(a){return b("isEmail")(a)},onlyASCII:function(a){return/^[\x00-\x7F]*$/.test(a)},containsNoEmojis:function(a){return!b("EmojiRenderer").containsEmoji(a)},isPrice:function(a){return/^\d+(\.\d{1,2})?$/.test(a)},onlyNumeric:function(a){return!/\D/g.test(a)},minLength:function(a){return function(b){return b.length>=a}},maxLength:function(a){return function(b){return b.length<=a}},exactLength:function(a){return function(b){return b.length==a}},greaterOrEqualTo:function(a){return function(b){return Number(b)>=a}},lessOrEqualTo:function(a){return function(b){return Number(b)<=a}},exactMatch:function(a){return function(b){return b==a}},matchesRegex:function(a){return function(b){var c=new RegExp(a);return c.test(b)}},isAcceptedCardType:function(a){return function(c){c=b("PaymentMethodUtils").getCardType(c).type;return a.includes(c)}},isValidCreditCardNumber:function(){return function(a){return b("PaymentMethodUtils").isValidCCNumber(a)}},isValidCreditCardExpDate:function(a){var b=a.split("/"),c=new Date(),d=parseInt(c.getFullYear().toString().substring(2),10);c=c.getMonth()+1;var e=parseInt(b[0],10);b=parseInt(b[1],10);if(a.length!==5||!e||!b||isNaN(e)||isNaN(b)||e<1||e>12)return!1;return b<d||b===d&&e<c?!1:!0}};e.exports=a}),null);
__d("InsightsNumUtils",["NumberFormatConfig","PECurrencyConfig","intlNumUtils","intlSummarizeNumber"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("NumberFormatConfig").decimalSeparator,h=new RegExp("(\\"+g+")?0+$"),i={prettyCurrency:function(a,c,d){d===void 0&&(d=2);c=c.toFixed(d).split(".");d=b("NumberFormatConfig").decimalSeparator;d=i.prettyInt(parseInt(c[0],10))+d+c[1];return i._formatCurrency(a,d)},prettyShortCurrency:function(a,b){return i._formatCurrency(a,i.prettyShortInt(b))},prettyShortCurrencyRounded:function(a,b){return i._formatCurrency(a,i.prettyShortIntRounded(b))},_formatCurrency:function(a,c){var d;a=b("PECurrencyConfig").currency_map_for_render[a];d=(d=a==null?void 0:a.format)!=null?d:"{symbol}{amount}";a=(a=a==null?void 0:a.symbol)!=null?a:"";return d.replace("{symbol}",a).replace("{amount}",c)},prettyCurrencyEx:function(a,b){if(b>-1e3&&b<1e3)return i.prettyCurrency(a,b);else return i.prettyShortCurrency(a,b)},prettyFloat:function(a){return b("intlNumUtils").formatNumberWithThousandDelimiters(a)},prettyShortFloat:function(a,b){b||(b=0);a=Number(Math.round(Number(a+"e"+b))+"e-"+b);return i.prettyFloat(a)},_getDecimals:function(a){a=Math.abs(a);if(a<9.995)return 2;else if(a<99.95)return 1;else return 0},prettyShortInt:function(a){if(Math.abs(a)>=999.5*1e6)return b("intlSummarizeNumber")(a,i._getDecimals(a/1e9));if(Math.abs(a)>=999.5*1e3)return b("intlSummarizeNumber")(a,i._getDecimals(a/1e6));return Math.abs(a)>=999.5?b("intlSummarizeNumber")(a,i._getDecimals(a/1e3)):i.prettyInt(a)},prettyShortIntRounded:function(a){return b("intlSummarizeNumber")(a)},prettyInt:function(a){return b("intlNumUtils").formatNumberWithThousandDelimiters(Math.round(a))},prettyPercent:function(a,c){var d=c==null?void 0:c.precision;a=a*100;d==null&&(a>=99.95?d=0:a>=9.995?d=1:d=2);a=d===0?i.prettyShortInt(a):b("intlSummarizeNumber")(a,d);d=(c==null?void 0:c.hidePercentSign)?"":"%";return((c==null?void 0:c.trimZeroes)?i._trimZeroDecimals(a):a)+d},_trimZeroDecimals:function(a){return a.indexOf(g)!==-1?a.replace(h,""):a},prettyPercentInt:function(a){return i.prettyPercent(a,{precision:0})},prettyPercentNoTrailingZeroes:function(a){return i.prettyPercent(a,{trimZeroes:!0})},prettyPercentQuotient:function(a){var b=a.numerator,c=a.denominator;a=a.precision;var d=1;b!=null&&c!=null&&(d=c===0?0:Math.min(1,b/c));return i.prettyPercent(d,{precision:a})}};e.exports=i}),null);
__d("CreditCardFormParam",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACCOUNT_ID:"account_id",ACCOUNT_COUNTRY_CODE:"account_country_code",APP_ID:"app_id",CARD_EXPIRATION:"exp",CARD_FBID:"cc_fbid",CARD_ID:"cc_id",CARD_TYPE:"cardType",CITY:"city",CONTEXT_ID:"context_id",COUNTRY:"country",CSC_LENGTH:"csc_length",EMAIL:"email",FIRST_NAME:"firstName",TRACKING_ID:"tracking_id",JSFAIL_SOURCE:"jsfail_source",KEYPRESS_TIMES:"kpts",LAST_NAME:"lastName",MONTH:"month",STATE:"state",STREET:"street",STREET_2:"street2",VALIDATE_ADDRESS:"validate_address",VALIDATE_NAME:"validate_name",VALIDATE_ZIP:"validate_zip",YEAR:"year",ZIP:"zip",CARD_HOLDER_NAME:"card_holder_name",VALIDATOR_CHECKS:"checks",CARD_NUMBER:"creditCardNumber",CSC:"csc",CARD_NUMBER_FIRST_6:"creditCardNumber_first6",CARD_NUMBER_LAST_4:"creditCardNumber_last4",CARD_NUMBER_TOKEN:"creditCardNumber_token",CSC_TOKEN:"csc_token",AUTH_LEVEL_FLAG:"auth_level",AUTH_AMOUNT:"auth_amount",AUTH_CURRENCY:"auth_currency",AUTO_EXPAND_AUTH_LEVEL_FLAG:"auto_expand_auth_level",PAYMENT_ITEM_TYPE:"payment_item_type",COMBINED_PAYMENT_TYPE:"combined_payment_type",RECEIVER_ID:"receiver_id",CREDENTIAL_ID:"credential_id",IS_STORED_BALANCE:"is_stored_balance",IS_CHECKOUT_ELIGIBLE:"is_checkout_eligible",CHECKOUT_SAVE_CC_WITH_AUTH:"checkout_save_cc_with_auth",CHECKOUT_FUND_AMOUNT:"checkout_fund_amount",FLOW_PLACEMENT:"flow_placement",FLOW_TYPE:"flow_type",STORED_BALANCE_STATUS:"stored_balance_status",SESSION_ID:"session_id",IS_FROM_SUPPORT:"is_from_support",SOURCE_SUPPORT_FORM_ID:"source_support_form_id",GEO_COUNTRY:"geo_country"})}),null);
__d("InlineCommentsMode",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:1,LIMITED:2,EXPAND_ALL:3})}),null);
__d("scheduler/tracing",["SchedulerTracing"],(function(a,b,c,d,e,f){"use strict";e.exports=b("SchedulerTracing")}),null);
__d("PaymentTokenProxyUtils",["CurrentEnvironment","URI"],(function(a,b,c,d,e,f){__p&&__p();a={getURI:function(a,c){__p&&__p();c===void 0&&(c=null);a=new(b("URI"))("/ajax/payment/token_proxy.php").setDomain(window.location.hostname).setProtocol("https").addQueryData(a);var d=a.getDomain().split(".");d.indexOf("secure")<0&&(d.splice(1,0,"secure"),c==="www"||c==="secure"?d[0]!=="secure"&&d.shift():c!==null?d[0]==="secure"?d.splice(0,0,c):d[0]=c:d[0]=="www"&&d.shift(),a.setDomain(d.join(".")));if(b("CurrentEnvironment").messengerdotcom){c=a.getDomain();c=c.replace("messenger.com","facebook.com");a.setDomain(c)}return a}};e.exports=a}),null);
__d("SchedulerTracing-prod",["ReactFeatureFlags"],(function(a,b,c,d,e,f){"use strict";__p&&__p();Object.defineProperty(f,"__esModule",{value:!0});b("ReactFeatureFlags");var g=0;f.__interactionsRef=null;f.__subscriberRef=null;f.unstable_clear=function(a){return a()};f.unstable_getCurrent=function(){return null};f.unstable_getThreadID=function(){return++g};f.unstable_trace=function(a,b,c){return c()};f.unstable_wrap=function(a){return a};f.unstable_subscribe=function(){};f.unstable_unsubscribe=function(){}}),null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("object-assign-4.1.1",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={};var g={exports:a};function h(){__p&&__p();var a=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(a){if(a===null||a===void 0)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function e(){__p&&__p();try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if(Object.getOwnPropertyNames(a)[0]==="5")return!1;var b={};for(var a=0;a<10;a++)b["_"+String.fromCharCode(a)]=a;a=Object.getOwnPropertyNames(b).map(function(a){return b[a]});if(a.join("")!=="0123456789")return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return Object.keys(Object.assign({},c)).join("")!=="abcdefghijklmnopqrst"?!1:!0}catch(a){return!1}}g.exports=e()?Object.assign:function(e,f){__p&&__p();var g,h=d(e),i;for(var j=1;j<arguments.length;j++){g=Object(arguments[j]);for(var k in g)b.call(g,k)&&(h[k]=g[k]);if(a){i=a(g);for(var l=0;l<i.length;l++)c.call(g,i[l])&&(h[i[l]]=g[i[l]])}}return h}}var i=!1,j=function(){i||(i=!0,h());return g.exports};b=function(a){switch(a){case void 0:return j()}};e.exports=b}),null);
/**
 * License: https://www.facebook.com/legal/license/V9vdYColc4k/
 */
__d("react-dom-0.0.0",["ReactDOM"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return a&&typeof a==="object"&&"default"in a?a["default"]:a}var g=a(b("ReactDOM"));c={};var h={exports:c};function i(){h.exports=g}var j=!1,k=function(){j||(j=!0,i());return h.exports};d=function(a){switch(a){case void 0:return k()}};e.exports=d}),null);
__d("react-dom",["react-dom-0.0.0"],(function(a,b,c,d,e,f){e.exports=b("react-dom-0.0.0")()}),null);
__d("XCMSBlockDeliveryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/cms/render_block/",{})}),null);
__d("XShareDialogSubmitController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/share/dialog/submit/",{post_id:{type:"Int"},share_type:{type:"Int"},url:{type:"String"},audience_type:{type:"String"},owner_id:{type:"Int"},app_id:{type:"Int"},message:{type:"String"},shared_ad_id:{type:"Int"},sharer_id:{type:"Int"},source:{type:"String"},composer_session_id:{type:"String"},audience_targets:{type:"IntVector"},album_id:{type:"Int"},ephemeral_ttl_mode:{type:"Int"},tagged_people:{type:"IntVector"},tagged_place:{type:"Int"},tagged_action:{type:"Int"},tagged_object:{type:"Int"},tagged_object_str:{type:"String"},tagged_action_icon:{type:"Int"},tagged_feed_topics:{type:"StringVector"},attribution:{type:"Int"},privacy:{type:"String"},messaging_tags:{type:"StringVector"},ft:{type:"HackType"},internalextra:{type:"StringToStringMap"},internal_preview_image_id:{type:"Int"},share_now:{type:"Bool",defaultValue:!1},is_forced_reshare_of_post:{type:"Bool",defaultValue:!1},is_throwback_post:{type:"Bool",defaultValue:!1},targeted_privacy_data:{type:"HackType"},unpublished_content_type:{type:"Enum",enumType:0},branded_content_repost_root:{type:"Int"},share_to_group_as_page:{type:"Bool",defaultValue:!1},shared_to_group_id:{type:"Int"},civic_product_source:{type:"String"},holiday_card_source:{type:"Enum",enumType:1},shared_from_post_id:{type:"Int"},silent_disco_friends:{type:"IntVector"},silent_disco_audience_id:{type:"Int"},silent_disco_audience_type:{type:"Enum",enumType:1},logging_session_id:{type:"String"},section_name:{type:"String"},perform_messenger_logging:{type:"Bool",defaultValue:!1},video_start_time_ms:{type:"Int"},instant_game_entry_point_data:{type:"String"}})}),null);