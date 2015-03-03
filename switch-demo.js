if (Meteor.isClient) {
  var id = 0;
  Template.hello.rendered = function () {
    var switchReactiveVars = [];

    for (var g = 0; g < 6; g++) {
      for (var h = 0; h < 10; h++) {
        switchReactiveVars.push(new ReactiveVar(true));
      }

      for (var i = 0; i < 10; i++) {
        switchSetup(false, function (switchState) {
        }, 'switchStub-' + g, switchReactiveVars[0]); //, generatePalette(i));
      }
    }

    Meteor.setInterval(function () {
      switchReactiveVars[0].set(!switchReactiveVars[0].get());
    }, 250);
  };

  Template.hello.helpers({
    stubId: function () {
      return id++;      
    }
  });
}