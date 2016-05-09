(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>My First Angular 2 App 12345</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
