if (Meteor.isClient) {
  Template.hello.rendered = function () {
    var switchRv1 = new ReactiveVar(true);
    var switchRv2 = new ReactiveVar(true);
    var switchRv3 = new ReactiveVar(true);

    for (var i = 0; i < 9; i++) {
      switchSetup(false, function (switchState) {
      }, 'firstSwitchStub', switchRv1, generatePalette(i));
    }

    switchSetup(true, function (switchState) {
    }, 'secondSwitchStub', switchRv2);

    // for (var k = 0; k < 3; k++) {
      switchSetup(true, function (switchState) {
      }, 'thirdSwitchStub', switchRv3);
    // }

    var switchRv4 = new ReactiveVar(false);
    switchSetup(true, function (switchState) {
      switchRv1.set(switchState);
      switchRv2.set(switchState);
    }, 'fourthSwitchStub', switchRv4);

    // Meteor.setInterval(function () {
    //   console.log('flipping')
    //   switchRv1.set(!switchRv1.get());
    //   switchRv2.set(!switchRv2.get());
    //   switchRv4.set(!switchRv4.get());
    // }, 250);
  };
}