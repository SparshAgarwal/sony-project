define('ember-ajax/services/ajax', ['exports', 'ember', 'ember-ajax/mixins/ajax-request'], function (exports, _ember, _emberAjaxMixinsAjaxRequest) {
  var Service = _ember['default'].Service;
  exports['default'] = Service.extend(_emberAjaxMixinsAjaxRequest['default']);
});