!function(){var i=require("underscore");function e(){c&&Backbone.fetchCache.localStorage&&(Backbone.fetchCache._cache=JSON.parse(localStorage.getItem("backboneCache"))||{})}var n=Backbone.Model.prototype.fetch,h=Backbone.Collection.prototype.fetch,c=void 0!==window.localStorage;Backbone.fetchCache=Backbone.fetchCache||{},Backbone.fetchCache._cache=Backbone.fetchCache._cache||{},void 0===Backbone.fetchCache.localStorage&&(Backbone.fetchCache.localStorage=!0),Backbone.Model.prototype.fetch=function(e){e=e||{};var c=i.isFunction(this.url)?this.url():this.url,t=Backbone.fetchCache._cache[c],a=!1,o=!1,c=new $.Deferred;if(t&&(a=(a=t.expires)&&t.expires<(new Date).getTime(),o=t.value),!a&&(e.cache||e.prefill)&&o){if(this.set(o,e),i.isFunction(e.prefillSuccess)&&e.prefillSuccess(this),!e.prefill)return i.isFunction(e.success)&&e.success(this),c.resolve(this);c.notify(this)}return n.apply(this,arguments).done(i.bind(c.resolve,this,this)).done(i.bind(Backbone.fetchCache.setCache,null,this,e)),c},Backbone.Collection.prototype.fetch=function(e){e=e||{};var c=i.isFunction(this.url)?this.url():this.url,t=Backbone.fetchCache._cache[c],a=!1,o=!1,c=new $.Deferred;if(t&&(a=(a=t.expires)&&t.expires<(new Date).getTime(),o=t.value),!a&&(e.cache||e.prefill)&&o){if(this[e.add?"add":"reset"](this.parse(o),e),i.isFunction(e.prefillSuccess)&&e.prefillSuccess(this),!e.prefill)return i.isFunction(e.success)&&e.success(this),c.resolve(this);c.notify(this)}return h.apply(this,arguments).done(i.bind(c.resolve,this,this)).done(i.bind(Backbone.fetchCache.setCache,null,this,e)),c},e(),Backbone.fetchCache.setCache=function(e,c,t){c=c||{};var a=i.isFunction(e.url)?e.url():e.url,e=!1;a&&(!1!==c.expires&&(e=(new Date).getTime()+1e3*(c.expires||300)),Backbone.fetchCache._cache[a]={expires:e,value:t},Backbone.fetchCache.setLocalStorage())},Backbone.fetchCache.setLocalStorage=function(){c&&Backbone.fetchCache.localStorage&&localStorage.setItem("backboneCache",JSON.stringify(Backbone.fetchCache._cache))},Backbone.fetchCache.getLocalStorage=e,"function"==typeof define&&define.amd&&define(function(){return Backbone})}();