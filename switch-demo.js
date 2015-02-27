if (Meteor.isClient) {
  var id = 0;
  Template.hello.rendered = function () {
    var switchReactiveVars = [];

    for (var g = 0; g < 4; g++) {
      for (var h = 0; h < 20; h++) {
        switchReactiveVars.push(new ReactiveVar(true));
      }

      for (var i = 0; i < 9; i++) {
        switchSetup(false, function (switchState) {
        }, 'switchStub-0', switchReactiveVars[0], generatePalette(i));
      }

      for (var j = 0; j < 9; j++) {
        switchSetup(true, function (switchState) {
        }, 'switchStub-1', switchReactiveVars[1]);
      }

      for (var k = 0; k < 9; k++) {
        switchSetup(true, function (switchState) {
        }, 'switchStub-2', switchReactiveVars[2]);
      }

      switchSetup(true, function (switchState) {
        switchReactiveVars[0].set(switchState);
        switchReactiveVars[1].set(switchState);
      }, 'switchStub-3', switchReactiveVars[19]);
    }

    Meteor.setInterval(function () {
      console.log('flipping')
      switchReactiveVars[0].set(!switchReactiveVars[0].get());
      switchReactiveVars[1].set(!switchReactiveVars[1].get());
      switchReactiveVars[19].set(!switchReactiveVars[19].get());
    }, 500);
  };

  Template.hello.helpers({
    stubId: function () {
      return id++;      
    }
  });
}