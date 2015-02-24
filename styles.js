if (Meteor.isClient) {
  generatePalette = function (i) {
    return {
      passive: css.color(0.1 * i, 0.297, 0.197, 1.0),
      active: css.color(0.927, 0.1 * i, 0.278, 1.0),
      background: css.color(1.0, 1.0, 1.0, 1.0),
      deactivated: css.color(0.6, 0.6, 0.1 *i, 1.0)
    };
  }
}