"use strict";define("sony/app",["exports","ember","sony/resolver","ember-load-initializers","sony/config/environment"],function(e,t,n,a,l){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:n.default}),(0,a.default)(i,l.default.modulePrefix),e.default=i}),define("sony/components/game-list",["exports","ember"],function(e,t){e.default=t.default.Component.extend({actions:{up:function(e,n){var a=this,l=e.concat("&client_id=t171hp309vgcm3wxbqp801hscpjni4");t.default.$.getJSON(l,function(e){t.default.set(e,"page",n+1),a.set("model",e)})},down:function(e,n){var a=this,l=e.concat("&client_id=t171hp309vgcm3wxbqp801hscpjni4");t.default.$.getJSON(l,function(e){t.default.set(e,"page",n-1),a.set("model",e)})}}})}),define("sony/helpers/app-version",["exports","ember","sony/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n,a){function l(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.hideSha?i.match(a.versionRegExp)[0]:t.hideVersion?i.match(a.shaRegExp)[0]:i}e.appVersion=l;var i=n.default.APP.version;e.default=t.default.Helper.helper(l)}),define("sony/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("sony/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("sony/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","sony/config/environment"],function(e,t,n){var a=n.default.APP,l=a.name,i=a.version;e.default={name:"App Version",initialize:(0,t.default)(l,i)}}),define("sony/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("sony/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("sony/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("sony/initializers/export-application-global",["exports","ember","sony/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(!1!==n.default.exportApplicationGlobal){var a;if("undefined"!=typeof window)a=window;else if("undefined"!=typeof global)a=global;else{if("undefined"==typeof self)return;a=self}var l,i=n.default.exportApplicationGlobal;l="string"==typeof i?i:t.default.String.classify(n.default.modulePrefix),a[l]||(a[l]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[l]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("sony/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("sony/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("sony/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("sony/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("sony/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("sony/router",["exports","ember","sony/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});a.map(function(){this.route("home")}),e.default=a}),define("sony/routes/home",["exports","ember"],function(e,t){var n=null;e.default=t.default.Route.extend({model:function(){return t.default.$.getJSON("https://api.twitch.tv/kraken/search/streams?limit=5&client_id=t171hp309vgcm3wxbqp801hscpjni4&query=starcraft")},actions:{search:function(e){var a=this;n="https://api.twitch.tv/kraken/search/streams?limit=5&client_id=t171hp309vgcm3wxbqp801hscpjni4&query=".concat(e),t.default.$.getJSON(n,function(e){t.default.set(e,"page",1),t.default.set(e,"_totalpages",Math.ceil(e._total/5)),a.set("model",e)})}}})}),define("sony/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("sony/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"wLR9XPNZ",block:'{"statements":[["append",["unknown",["outlet"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"sony/templates/application.hbs"}})}),define("sony/templates/components/game-list",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"ytSXxSz/",block:'{"statements":[["open-element","div",[]],["static-attr","style","border-style:solid;border-width: 1px; width:80%; margin:auto;"],["flush-element"],["text","\\n\\t"],["open-element","div",[]],["static-attr","style","width:60%;float:left;padding:2px;"],["flush-element"],["text","\\n\\t\\t"],["open-element","p",[]],["flush-element"],["text","Total results: "],["append",["unknown",["model","_total"]],false],["close-element"],["text","\\n\\t"],["close-element"],["text","\\n\\t"],["open-element","div",[]],["static-attr","style","width:35%;float:right;padding:2px;"],["flush-element"],["text","\\n\\t\\t"],["open-element","p",[]],["static-attr","style","float:right;"],["flush-element"],["text","\\n\\t\\t\\t"],["open-element","button",[]],["static-attr","type","button"],["modifier",["action"],[["get",[null]],"down",["get",["model","_links","prev"]],["get",["model","page"]]]],["flush-element"],["text","◂"],["close-element"],["text","\\n\\t\\t\\t"],["append",["unknown",["model","page"]],false],["text","/"],["append",["unknown",["model","_totalpages"]],false],["text"," \\n\\t\\t\\t"],["open-element","button",[]],["static-attr","type","button"],["modifier",["action"],[["get",[null]],"up",["get",["model","_links","next"]],["get",["model","page"]]]],["flush-element"],["text","▸"],["close-element"],["text"," \\n\\t\\t"],["close-element"],["text","\\n\\t"],["close-element"],["text","\\n\\t"],["open-element","div",[]],["flush-element"],["text","\\n\\t\\t"],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["model","streams"]]],null,0],["text","\\t\\t"],["close-element"],["text","\\n\\t"],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","\\t\\t\\t\\t"],["open-element","table",[]],["static-attr","cellspacing","2"],["static-attr","cellpadding","2"],["static-attr","border","0"],["static-attr","class","project_table"],["flush-element"],["text","\\n\\t\\t\\t\\t\\t"],["open-element","tbody",[]],["flush-element"],["text","\\n\\t\\t\\t\\t\\t\\t"],["open-element","tr",[]],["flush-element"],["text","\\n\\t\\t\\t\\t\\t\\t\\t"],["open-element","td",[]],["static-attr","style","margin: 2px 0 0 0;float: left;"],["flush-element"],["open-element","img",[]],["dynamic-attr","src",["concat",[["unknown",["game","preview","small"]]]]],["static-attr","alt","Stream preview image"],["flush-element"],["close-element"],["close-element"],["text","\\n\\t\\t\\t\\t\\t\\t\\t"],["open-element","td",[]],["flush-element"],["text","\\n\\t\\t\\t\\t\\t\\t\\t\\t"],["open-element","p",[]],["static-attr","style","margin: 0 15px 0 15px;font-size:18px;font-weight:bold;"],["flush-element"],["text"," "],["append",["unknown",["game","channel","display_name"]],false],["close-element"],["text","\\n\\t\\t\\t\\t\\t\\t\\t\\t"],["open-element","p",[]],["static-attr","style","margin: 2px 15px 0 17px;font-size:12px"],["flush-element"],["append",["unknown",["game","channel","game"]],false],["text"," - "],["append",["unknown",["game","viewers"]],false],["text"," viewers"],["close-element"],["text","\\n\\t\\t\\t\\t\\t\\t\\t\\t"],["open-element","p",[]],["static-attr","style","margin: 0 15px 0 17px;font-size:12px"],["flush-element"],["text","Strean description text text text"],["close-element"],["text","\\n\\t\\t\\t\\t\\t\\t\\t"],["close-element"],["text","\\n\\t\\t\\t\\t\\t\\t"],["close-element"],["text","\\n\\t\\t\\t\\t\\t"],["close-element"],["text","\\n\\t\\t\\t\\t"],["close-element"],["text","\\n"]],"locals":["game"]}],"hasPartials":false}',meta:{moduleName:"sony/templates/components/game-list.hbs"}})}),define("sony/templates/home",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"KwQLYGXT",block:'{"statements":[["open-element","div",[]],["static-attr","style","border-style:solid;border-width: 1px; width:80%; height:100px; margin:auto;"],["flush-element"],["text","\\n\\t"],["open-element","div",[]],["static-attr","style","margin:50px 0 0 20px;"],["flush-element"],["text","\\n\\t\\t"],["append",["helper",["input"],null,[["type","name","placeholder","value"],["search","QuerySearch","Search query...",["get",["parameter"]]]]],false],["text","\\n\\t\\t"],["open-element","button",[]],["static-attr","type","button"],["modifier",["action"],[["get",[null]],"search",["get",["parameter"]]]],["flush-element"],["text","Search"],["close-element"],["text","\\n\\t"],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["append",["helper",["game-list"],null,[["model"],[["get",["model"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"sony/templates/home.hbs"}})}),define("sony/config/environment",["ember"],function(e){try{var t=document.querySelector('meta[name="sony/config/environment"]').getAttribute("content"),n=JSON.parse(unescape(t)),a={default:n};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "sony/config/environment".')}}),runningTests||require("sony/app").default.create({name:"sony",version:"0.0.0+1fcf22fe"});