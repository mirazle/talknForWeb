import Ui from 'common/clientState/store/Ui';

import Style, { StyleBase, Menu, DetailRight } from './Style';

export default class TimeMarker {
  self: Object;
  fixTimeMarker: Object;
  constructor(params: any) {
    const self = TimeMarker.getSelf(params);
    const fixTimeMarker = TimeMarker.getFixTimeMarker(params);
    return {
      self,
      fixTimeMarker,
    };
  }

  static getSelfWidthRate() {
    return 36;
  }

  static getSelfHeightPx() {
    return 22;
  }

  static getSelfMarginTop() {
    return 15;
  }

  static getSelfLeftRate() {
    return 50 - TimeMarker.getSelfWidthRate() / 2;
  }

  static getFixTimeMarkerStyles({ app, ui }: any) {
    const fontSize = '0.8em';
    let widthRate = TimeMarker.getSelfWidthRate() / 100;
    let width = ui.width * widthRate;
    let height = `${TimeMarker.getSelfHeightPx()}px`;
    let top = `${Style.getBlockSize({ app, ui })}px`;
    let left = '25%';
    let menuWidthPx = 0;
    let detailWidthPx = 0;
    let postsWidthPx = 0;
    ui.screenMode = ui.extensionMode === Ui.extensionModeLiveMedia && Ui.screenSizeSmallLabel;
    if (ui.extensionMode === Ui.extensionModeLiveMedia) {
      postsWidthPx = ui.width;
      width = postsWidthPx * widthRate;
      top = '0';
      left = menuWidthPx + postsWidthPx * (TimeMarker.getSelfLeftRate() / 100) + 'px';
    } else {
      switch (ui.screenSize) {
        default:
        case Ui.screenSizeSmallLabel:
          postsWidthPx = ui.width;
          width = postsWidthPx * widthRate;
          left = menuWidthPx + postsWidthPx * (TimeMarker.getSelfLeftRate() / 100) + 'px';
          break;
        case Ui.screenSizeMiddleLabel:
          menuWidthPx = Menu.getWidth({ app, ui }, true);
          postsWidthPx = ui.width - menuWidthPx;
          width = postsWidthPx * widthRate;
          left = menuWidthPx + postsWidthPx * (TimeMarker.getSelfLeftRate() / 100) + 'px';
          break;
        case Ui.screenSizeLargeLabel:
          menuWidthPx = Menu.getWidth({ app, ui }, true);
          detailWidthPx = (ui.width * Number(DetailRight.getWidth({ app, ui }, true))) / 100;
          postsWidthPx = ui.width - (menuWidthPx + detailWidthPx);
          width = postsWidthPx * widthRate;
          left = menuWidthPx + postsWidthPx * (TimeMarker.getSelfLeftRate() / 100) + 'px';
          break;
      }
    }
    return { width, height, top, left, fontSize };
  }

  static getSelf({ app, ui }: any) {
    const display = app.isMediaCh ? 'none' : 'flex';
    const layout = StyleBase.getLayoutFlex({
      top: `${Style.getBlockSize({ app, ui })}px`,
      width: `${TimeMarker.getSelfWidthRate()}%`,
      height: `${TimeMarker.getSelfHeightPx()}px`,
      margin: `${TimeMarker.getSelfMarginTop()}px auto 10px auto`,
      padding: '5px 10px',
      background: Style.darkLightRGBA,
      borderRadius: '20px',
      display,
    });
    const content = StyleBase.getContentBase({
      color: Style.whiteRGB,
      letterSpacing: '2px',
      fontSize: '0.8em',
    });
    const animation = StyleBase.getAnimationBase();
    return StyleBase.get({ layout, content, animation });
  }

  static getFixTimeMarker({ app, ui }: any) {
    const timeMarker = TimeMarker.getSelf({ app, ui });
    const { top, left, width, height, fontSize } = TimeMarker.getFixTimeMarkerStyles({ app, ui });
    return {
      ...timeMarker,
      position: 'fixed',
      width,
      minWidth: width,
      height,
      top,
      left,
      fontSize,
      lineHeight: '0.9em',
    };
  }
}
