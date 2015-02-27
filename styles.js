if (Meteor.isClient) {
  generatePalette = function (i) {
    return {
      passive: css.color(0.1 * i, 0.297, 0.197, 1.0),
      active: css.color(0.927, 0.1 * i, 0.278, 1.0),
      background: css.color(1.0, 1.0, 1.0, 1.0),
      deactivated: css.color(0.6, 0.6, 0.1 * i, 1.0)
    };
  };

  var palette = generatePalette(5);

  funkyStyle = {
    general: css.merge( {
      border: [css.px(1), 'dotted', css.color(0.1, 0.2, 0.5, 1.0)],
      position: css.relative,
      display: css.inlineBlock,
      height: css.em(2),
      width: css.em(5),
      background: palette.background,
      borderRadius: css.px(1000),
      cursor: css.pointer,
      overflow: css.hidden,
      marginTop: css.em(0.25),
      fontWeight: 600,
      textTransform: css.uppercase
    }, css.userSelect(css.none)),
    switchBase: css.merge( {
      display: css.inlineBlock,
      height: css.pct(100),
      width: css.pct(40),
      borderRadius: css.pct(75),
    }, css.transition([css.marginLeft, 'cubic-bezier(0.34,1.61,0.7,1)', css.ms(1000)])),
    open: {
      marginLeft: css.pct(60),
      background: css.color(0.1, 0.2, 0.5, 1.0)
    },
    closed: {
      marginLeft: 0,
      background: palette.passive
    },
    switchLabelBase: {
      position: css.absolute,
      left: 0,
      top: 0,
      width: css.pct(100),
      lineHeight: css.em(1.85),
    },
    switchLabelOpen: {
      color: palette.active,
      paddingLeft: css.em(0.85),
      textAlign: css.left
    },
    switchLabelClosed: {
      color: palette.deactivated,
      paddingRight: css.em(0.65),
      textAlign: css.right
    }
  };
}