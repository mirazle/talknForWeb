import { CSSProperties } from 'react';

import Ui from 'common/clientState/store/Ui';
import TimeMarker from './TimeMarker';

export class StyleBase {
  static get fontBaseRGB() {
    return 'rgb(60, 60, 60)';
  }

  static get darkLightRGB() {
    return 'rgba(0, 0, 0, 0.2)';
  }

  static get darkLightRGBA() {
    return 'rgba(0, 0, 0, 0.25)';
  }

  static get darkRGB() {
    return 'rgb(0, 0, 0)';
  }

  static get darkRGBA() {
    return 'rgba(0, 0, 0, 0.4)';
  }

  static get mono160RGB() {
    return 'rgb(160, 160, 160)';
  }
  static get mono160RGBA() {
    return 'rgb(160, 160, 160)';
  }
  static get mono180RGB() {
    return 'rgb(180, 180, 180)';
  }
  static get mono192RGB() {
    return 'rgb(192, 192, 192)';
  }
  static get mono200RGB() {
    return 'rgb(200, 200, 200)';
  }
  static get mono205RGB() {
    return 'rgb(205, 205, 205)';
  }
  static get mono210RGB() {
    return 'rgb(210, 210, 210)';
  }
  static get mono211RGB() {
    return 'rgb(211, 211, 211)';
  }
  static get mono215RGB() {
    return 'rgb(215, 215, 215)';
  }
  static get mono220RGB() {
    return 'rgb(220, 220, 220)';
  }
  static get mono225RGB() {
    return 'rgb(225, 225, 225)';
  }
  static get mono230RGB() {
    return 'rgb(230, 230, 230)';
  }
  static get mono235RGB() {
    return 'rgb(235, 235, 235)';
  }
  static get mono240RGB() {
    return 'rgb(240, 240, 240)';
  }
  static get mono245RGB() {
    return 'rgb(245, 245, 245)';
  }
  static get mono250RGB() {
    return 'rgb(250, 250, 250)';
  }
  static get mono251RGB() {
    return 'rgb(251, 251, 251)';
  }
  static get mono252RGB() {
    return 'rgb(252, 252, 252)';
  }
  static get mono253RGB() {
    return 'rgb(253, 253, 253)';
  }
  static get mono254RGB() {
    return 'rgb(254, 254, 254)';
  }
  static get mono255RGB() {
    return 'rgb(255, 255, 255)';
  }

  static get mono180RGBA() {
    return 'rgba(180, 180, 180, 0.96)';
  }
  static get mono192RGBA() {
    return 'rgba(192, 192, 192, 0.96)';
  }
  static get mono200RGBA() {
    return 'rgba(200, 200, 200, 0.96)';
  }
  static get mono205RGBA() {
    return 'rgba(205, 205, 205, 0.96)';
  }
  static get mono210RGBA() {
    return 'rgba(210, 210, 210, 0.96)';
  }
  static get mono211RGBA() {
    return 'rgba(211, 211, 211, 0.96)';
  }
  static get mono215RGBA() {
    return 'rgba(215, 215, 215, 0.96)';
  }
  static get mono220RGBA() {
    return 'rgba(220, 220, 220, 0.96)';
  }
  static get mono225RGBA() {
    return 'rgba(225, 225, 225, 0.96)';
  }
  static get mono230RGBA() {
    return 'rgba(230, 230, 230, 0.96)';
  }
  static get mono235RGBA() {
    return 'rgba(235, 235, 235, 0.96)';
  }
  static get mono240RGBA() {
    return 'rgba(240, 240, 240, 0.96)';
  }
  static get mono245RGBA() {
    return 'rgba(245, 245, 245, 0.96)';
  }
  static get mono250RGBA() {
    return 'rgba(250, 250, 250, 0.96)';
  }
  static get mono252RGBA() {
    return 'rgba(252, 252, 252, 0.96)';
  }
  static get mono255RGBA() {
    return 'rgba(255, 255, 255, 0.96)';
  }

  static get twitterRGB() {
    return 'rgba(76, 160, 235)';
  }
  static get twitterRGBA() {
    return 'rgba(76, 160, 235, 0.96)';
  }
  static get facebookRGB() {
    return 'rgba(73, 104, 173)';
  }
  static get facebookRGBA() {
    return 'rgba(73, 104, 173, 0.96)';
  }

  static get emptyLabelStyle() {
    return { maxWidth: 0, maxHeight: 0 };
  }

  static get(styles = { layout: {}, content: {}, animation: {} }): React.CSSProperties {
    return { ...styles.layout, ...styles.content, ...styles.animation };
  }

  /************************/
  /*  Layout              */
  /************************/

  static getLayoutBase(style = {}): CSSProperties {
    const baseLayout: CSSProperties = {
      display: 'block',
      boxSizing: 'border-box',
      overflow: 'hidden',
      width: 'inherit',
      height: 'inherit',
      minWidth: 'auto',
      minHeight: 'auto',
      maxWidth: 'inherit',
      maxHeight: 'inherit',
      padding: 0,
      margin: 0,
      lineHeight: 1,
      listStyle: 'none',
      userSelect: 'none',
      textDecoration: 'none',
      verticalAlign: 'baseline',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      border: 0,
      borderRadius: 0,
      zIndex: 1,
    };
    return { ...baseLayout, ...style };
  }

  static getLayoutGrid(style = {}): CSSProperties {
    const blockLayout: CSSProperties = StyleBase.getLayoutBase({
      display: 'grid',
    });
    return { ...blockLayout, ...style };
  }

  static getLayoutFlex(style = {}): CSSProperties {
    const blockLayout: CSSProperties = StyleBase.getLayoutBase({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'no-wrap',
    });
    return { ...blockLayout, ...style };
  }

  static getLayoutInlineFlex(style = {}): CSSProperties {
    const blockLayout: CSSProperties = StyleBase.getLayoutBase({
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'no-wrap',
    });
    return { ...blockLayout, ...style };
  }

  static getLayoutTable(style = {}): CSSProperties {
    const blockLayout: CSSProperties = StyleBase.getLayoutBase({
      display: 'table',
    });
    return { ...blockLayout, ...style };
  }

  static getLayoutTableRow(style = {}): CSSProperties {
    const blockLayout: CSSProperties = StyleBase.getLayoutBase({
      display: 'table-row',
    });
    return { ...blockLayout, ...style };
  }

  static getLayoutTableCol(style = {}): CSSProperties {
    const blockLayout: CSSProperties = StyleBase.getLayoutBase({
      display: 'table-cell',
    });
    return { ...blockLayout, ...style };
  }

  static getLayoutFlexChild(style = {}): CSSProperties {
    const blockLayout: CSSProperties = StyleBase.getLayoutBase({
      width: 'auto',
      height: 'auto',
    });
    return { ...blockLayout, ...style };
  }

  static getLayoutBlock(style = {}): CSSProperties {
    const blockLayout: CSSProperties = StyleBase.getLayoutBase({
      display: 'block',
    });
    return { ...blockLayout, ...style };
  }

  static getLayoutInlineBlock(style = {}): CSSProperties {
    const inlineBlockLayout: CSSProperties = StyleBase.getLayoutBase({
      display: 'inline-block',
      align: 'center',
      verticalAlign: 'middle',
    });
    return { ...inlineBlockLayout, ...style };
  }

  static getLayoutInline(style = {}): CSSProperties {
    const blockLayout: CSSProperties = StyleBase.getLayoutBase({
      display: 'inline',
    });
    return { ...blockLayout, ...style };
  }

  /************************/
  /* Content              */
  /************************/

  static getContentBase(style = {}): CSSProperties {
    const contentBase: CSSProperties = {
      wordWrap: 'break-word',
      whiteSpace: 'normal',
      quotes: 'none',
      content: 'none',
      cursor: 'default',
    };
    const fontBase = StyleBase.getFontBase();
    return { ...contentBase, ...fontBase, ...style };
  }

  static getFontBase(style = {}): CSSProperties {
    const fontBase: CSSProperties = {
      letterSpacing: 'inherit',
      lineHeight: 'inherit',
      textAlign: 'center',
      color: StyleBase.fontBaseRGB,
      fontWeight: 300,
      fontSize: 'inherit',
      fontFamily:
        '"M PLUS 1p",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Hiragino Sans,Noto Sans CJK JP,Original Yu Gothic,Yu Gothic,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Sans Emoji',
    };
    return { ...fontBase, ...style };
  }

  /************************/
  /* Animation            */
  /************************/

  static getAnimationBase(style = {}): CSSProperties {
    const animationBase = {
      transition: `${Container.transitionOff}ms`,
      transform: 'translate3d(0px, 0px, 0px)',
    };
    return { ...animationBase, ...style };
  }

  static trimUnit(value: string) {
    return Number(value.toString().replace(/px|%|vw|vh|ms/, ''));
  }
}

export default class Container {
  self: CSSProperties;
  multistreamIconWrap: CSSProperties;
  newPost: CSSProperties;
  hideScreenBottom: CSSProperties;
  linkLabel: CSSProperties;
  constructor(params: any) {
    const self = Container.getSelf(params);
    const multistreamIconWrap = Container.getMultistreamIconWrap(params);
    const newPost = Container.getNewPost(params);
    const hideScreenBottom = Container.getHideScreenBottom(params);
    const linkLabel = Container.getLinkLabel(params);
    return {
      self,
      multistreamIconWrap,
      newPost,
      hideScreenBottom,
      linkLabel,
    };
  }

  static get width() {
    return '100%';
  }
  static get widthRatio() {
    return 0.94;
  }
  static get radius() {
    return '10px';
  }
  static get radiuses() {
    return `${Container.radius} ${Container.radius} 0px 0px`;
  }
  static get openHeight() {
    return 360;
  }
  static get closeHeight() {
    return 360;
  }
  static get threadHeight() {
    return 360;
  }
  static get maxZIndex() {
    return 2147483647;
  }
  static get closeBottom() {
    return 0;
  }
  static get merginRatio() {
    return 0.034;
  }
  static get borderRGB() {
    return StyleBase.mono240RGB;
  }
  static get border() {
    return `0px solid ${Container.borderRGB}`;
  }
  static get lineShadow() {
    return `0px 0px 1px ${Container.lineShadowColor}`;
  }
  static get lineInsetShadow() {
    return `0px 0px 1px ${Container.lineShadowColor} inset`;
  }
  static get lineShadowColor() {
    return Container.downreliefRGB;
  }
  static get shadow() {
    return `${StyleBase.mono230RGB} 0px 0px 5px 0px`;
  }
  static get darkLightRGB() {
    return StyleBase.darkLightRGB;
  }
  static get darkLightRGBA() {
    return StyleBase.darkLightRGBA;
  }

  static get darkRGB() {
    return StyleBase.darkRGB;
  }

  static get darkRGBA() {
    return StyleBase.darkRGBA;
  }

  static get downreliefRGB() {
    return StyleBase.mono160RGB;
  }
  static get reliefRGB() {
    return StyleBase.mono180RGB;
  }
  static get reliefRGBA() {
    return StyleBase.mono180RGBA;
  }
  static get silverRGB() {
    return StyleBase.mono192RGB;
  }
  static get silverRGBA() {
    return StyleBase.mono192RGBA;
  }
  static get lightGrayRGB() {
    return StyleBase.mono211RGB;
  }
  static get lightGrayRGBA() {
    return StyleBase.mono211RGBA;
  }
  static get chromeOffTabRGB() {
    return StyleBase.mono225RGB;
  }
  static get chromeOffTabRGBA() {
    return StyleBase.mono225RGBA;
  }
  static get softCalmRGB() {
    return StyleBase.mono230RGB;
  }
  static get softCalmRGBA() {
    return StyleBase.mono230RGBA;
  }
  static get middleCalmRGBA() {
    return StyleBase.mono235RGBA;
  }
  static get calmRGB() {
    return StyleBase.mono240RGB;
  }
  static get calmRGBA() {
    return StyleBase.mono240RGBA;
  }
  static get lightRGB() {
    return StyleBase.mono245RGB;
  }
  static get lightRGBA() {
    return StyleBase.mono245RGBA;
  }
  static get offWhiteRGB() {
    return StyleBase.mono250RGB;
  }
  static get offWhiteRGBA() {
    return StyleBase.mono250RGBA;
  }
  static get offWhitePlusRGB() {
    return StyleBase.mono252RGB;
  }
  static get offWhitePlusRGBA() {
    return StyleBase.mono252RGBA;
  }
  static get whiteRGB() {
    return StyleBase.mono255RGB;
  }
  static get whiteRGBA() {
    return StyleBase.mono255RGBA;
  }

  static get fontBaseRGB() {
    return StyleBase.fontBaseRGB;
  }
  static get themeRGBString() {
    return '79, 174, 159';
  }
  static get themeLightRGBString() {
    return '89, 184, 169';
  }
  static get themeSuperLightRGBString() {
    return '200, 255, 220';
  }
  static get themeRGB() {
    return `rgb(${Container.themeRGBString})`;
  }
  static get themeRGBA() {
    return `rgba(${Container.themeRGBString}, 0.96)`;
  }
  static get themeRGBAA() {
    return `rgba(${Container.themeRGBString}, 0.8)`;
  }
  static getBlockSize({ app, ui }: any) {
    return ui.screenSize === Ui.screenSizeSmallLabel ? 45 : 60;
  }
  static getLiveMediaBlockSize({ app, ui }: any) {
    return 60;
  }

  static getFaviconSize({ app, ui }: any) {
    return ui.screenSize === Ui.screenSizeSmallLabel ? 24 : 30;
  }

  static getLightThemeRGBA(alpha = 0.8) {
    return `rgba(${Container.themeLightRGBString}, ${alpha})`;
  }
  static getThemeRGBA(alpha = 0.8) {
    return `rgba(${Container.themeRGBString}, ${alpha})`;
  }

  static getTransitionOn({ app, ui }: any = {}, removeUnit = false) {
    let transition = String(Container.transitionOn);
    if (app) {
      transition = ui.isTransition ? `${Container.transitionOn}ms` : `${Container.transitionOff}ms`;
    } else {
      transition = `${Container.transitionOn}ms`;
    }

    return removeUnit ? StyleBase.trimUnit(transition) : transition;
  }
  static getTransition({ app, ui }: any = {}, addUnit = false) {
    const transition = ui.isTransition ? `${Container.transitionOn}ms` : `${Container.transitionOff}ms`;
    return addUnit ? StyleBase.trimUnit(transition) : transition;
  }
  static getTransitionFirstOn({ app, ui }: any, addUnit = false) {
    const transition = ui.isTransition ? `${Container.transitionFirstOn}ms` : `${Container.transitionOff}ms`;
    return addUnit ? StyleBase.trimUnit(transition) : transition;
  }
  static get transitionOn() {
    return 600;
  }
  static get transitionNotif() {
    return 300;
  }
  static get transitionNotifDisp() {
    return 3000;
  }
  static get transitionFirstOn() {
    return 300;
  }
  static get transitionOff() {
    return 0;
  }

  static get notifHeight() {
    return 20;
  }
  static get notifOpenTranslate() {
    return 20;
  }
  static get notifOpenLiveMediaTranslateY() {
    return `translate3d( 0px, -125px, 0px )`;
  }
  static get notifCloseTranslateY() {
    return `translate3d( 0px, 0px, 0px )`;
  }
  static getNotifOpenTranslateY({ app, ui }: any) {
    const blockSize = Container.getBlockSize({ app, ui });
    return `translate3d( 0px, -${blockSize * 2}px, 0px )`;
  }
  static getNotifTranslateY({ app, ui }: any) {
    if (ui.extensionMode === Ui.extensionModeLiveMedia) {
      return ui.isOpenNewPost ? Container.notifOpenLiveMediaTranslateY : Container.notifCloseTranslateY;
    } else {
      return ui.isOpenNewPost ? Container.getNotifOpenTranslateY({ app, ui }) : Container.notifCloseTranslateY;
    }
  }

  static getNewPostDisplay({ app, ui }: any) {
    return ui.isOpenNotif ? 'none' : 'flex';
  }

  static getWidthPx({ bootOption, app, ui }: any) {
    if (bootOption) {
      return bootOption.width ? bootOption.width : Container.width;
    } else {
      return ui.width;
    }
  }

  static getRightPx({ app }: any, widthPx: string) {
    return '0%';
  }

  static get multistreamWrapDefaultTop() {
    return 5;
  }

  static getFontSize({ app, ui }: any) {
    return ui.screenSize === Ui.screenSizeSmallLabel ? 14 : 15;
  }

  static getLetterSpacing({ app, ui }: any) {
    return ui.screenSize === Ui.screenSizeSmallLabel ? 1.5 : 2;
  }

  static getSelf({ app, ui, bootOption, type }: any): Object {
    let borderRadius = '0px';
    if (ui.extensionMode === Ui.extensionModeModal) {
      borderRadius = '3px';
    }

    const layout = StyleBase.getLayoutBlock({
      display: 'initial', // build to fixed components.
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderRadius,
      opacity: 1,
    });
    const content = StyleBase.getContentBase({
      fontSize: `${Container.getFontSize({ app, ui })}px`,
      lineHeight: `${Container.getFontSize({ app, ui })}px`,
      letterSpacing: `${Container.getLetterSpacing({ app, ui })}px`,
    });
    const animation = StyleBase.getAnimationBase({
      transition: `${Container.transitionFirstOn}ms`,
    });
    return StyleBase.get({ layout, content, animation });
  }

  static getMultistreamIconWrapTop({ app, ui }: any): Object {
    if (ui.extensionMode === Ui.extensionModeBottom) {
      return Container.getBlockSize({ app, ui }) + Container.multistreamWrapDefaultTop + 'px';
    } else if (ui.extensionMode === Ui.extensionModeModal) {
      return Container.getBlockSize({ app, ui }) + Container.multistreamWrapDefaultTop + 'px';
    } else {
      return Container.getBlockSize({ app, ui }) + Container.multistreamWrapDefaultTop + 'px';
    }
  }

  static getMultistreamIconWrapRight({ app, ui }: any): Object {
    switch (ui.screenSize) {
      default:
      case Ui.screenSizeSmallLabel:
        return '5%';
      case Ui.screenSizeMiddleLabel:
        return '20px';
      case Ui.screenSizeLargeLabel:
        return `calc( ${DetailRight.getWidth({ app, ui })} + 20px)`;
    }
  }

  static getMultistreamIconWrap({ app, ui }: any): Object {
    const layout = StyleBase.getLayoutBlock({
      width: '30px',
      height: '30px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.8)',
    });

    const content = StyleBase.getContentBase({
      color: 'rgb(255,255,255)',
      textAlign: 'center',
      lineHeight: 2,
      cursor: 'pointer',
    });
    const animation = StyleBase.getAnimationBase({
      transition: Container.transitionOff,
    });
    return StyleBase.get({ layout, content, animation });
  }

  static getNewPost({ app, ui }: any): Object {
    let display = Container.getNewPostDisplay({ app, ui });
    const styles = TimeMarker.getFixTimeMarker({ app, ui });
    delete (styles as any).top;
    return {
      ...styles,
      display,
      zIndex: '1',
      margin: '0px auto',
      fontSize: '0.7em',
      bottom: `-${Container.notifHeight * 2}px`,
      transition: Container.getTransition({ app, ui }),
    };
  }

  static getHideScreenBottom({ app, ui }: any): Object {
    const layout = StyleBase.getLayoutFlex({
      position: 'fixed',
      top: `100vh`,
      width: '100vw',
      height: '100vh',
      background: Container.reliefRGB,
      zIndex: Container.maxZIndex,
    });
    const content = StyleBase.getContentBase({});
    const animation = StyleBase.getAnimationBase({});
    return StyleBase.get({ layout, content, animation });
  }

  static getLinkLabel({ app, ui }: any): Object {
    const top = Container.getBlockSize({ app, ui }) + 'px';
    const left = ui.screenSize === Ui.screenSizeSmallLabel ? '0px' : `${Menu.getWidth({ app, ui })}`;
    const layout = StyleBase.getLayoutFlex({
      maxWidth: '180px',
      position: 'fixed',
      top,
      left,
      height: '20px',
      padding: '5px 10px',
      alignItems: 'center',
      justifyContent: 'flex-start',
      background: 'rgba(0, 0, 0, 0.4)',
      zIndex: '1',
      borderRadius: '0px 0px 2px 0px',
    });
    const content = StyleBase.getContentBase({
      fontSize: '0.7em',
      lineHeight: 2,
      whiteSpace: 'nowrap',
      color: Container.whiteRGB,
    });
    const animation = StyleBase.getAnimationBase();
    return StyleBase.get({ layout, content, animation });
  }
}

export class Menu {
  static get baseWidth() {
    return '300px';
  }
  static getBorderRadius({ app, ui }: any): any {
    switch (ui.extensionMode) {
      case Ui.extensionModeNone:
      case Ui.extensionModeEmbed:
        return 0;
      default:
        switch (ui.screenSize) {
          case Ui.screenSizeSmallLabel:
            return `0 0 ${Container.radius} ${Container.radius}`;
          case Ui.screenSizeMiddleLabel:
          case Ui.screenSizeLargeLabel:
            return `0px 0px 0px ${Container.radius}`;
        }
    }
  }

  static getWidth({ app, ui }: any, addUnit = false): any {
    let width = '0';
    switch (ui.screenSize) {
      case Ui.screenSizeSmallLabel:
        width = '100.0%';
        break;
      case Ui.screenSizeMiddleLabel:
        width = Menu.baseWidth;
        break;
      case Ui.screenSizeLargeLabel:
        width = Menu.baseWidth;
        break;
    }

    return addUnit ? StyleBase.trimUnit(width) : width;
  }

  static getHeight({ app, ui }: any, addUnit = false): any {
    return `calc( 100% - ${Container.getBlockSize({ app, ui })}px )`;
  }

  static getTransform({ app, ui }: any) {
    let transform = 'translate3d( 0px, 0px, 0px )';
    switch (ui.screenSize) {
      case Ui.screenSizeSmallLabel:
        transform = ui.isOpenMenu ? 'translate3d( 0%, 0%, 0px )' : 'translate3d( -100% , 0%, 0px )';
        break;
      case Ui.screenSizeMiddleLabel:
        transform = ui.isOpenDetail ? `translate3d( 0px ,0px, 0px )` : 'translate3d( 0px ,0px, 0px )';
        break;
      case Ui.screenSizeLargeLabel:
        transform = 'translate3d( 0px ,0px, 0px )';
        break;
    }
    return transform;
  }
}

export class DetailRight {
  static get widthDecimalRate() {
    return 0.3;
  }
  static get widthRate() {
    return 100 * DetailRight.widthDecimalRate;
  }
  static get otherWidthDecimalRate() {
    return 1 - DetailRight.widthDecimalRate;
  }
  static get otherWidthRate() {
    return 100 * DetailRight.otherWidthDecimalRate;
  }
  static getWidth({ app, ui }: any, addUnit = false) {
    let width = '0';
    switch (ui.screenSize) {
      case Ui.screenSizeSmallLabel:
        width = '0%';
        break;
      case Ui.screenSizeMiddleLabel:
        width = '0%';
        break;
      case Ui.screenSizeLargeLabel:
        width = '30%';
        break;
    }
    return addUnit ? StyleBase.trimUnit(width) : width;
  }
  static getMinWidth({ app, ui }: any, addUnit = false) {
    let width = '0';
    switch (ui.screenSize) {
      case Ui.screenSizeSmallLabel:
        width = '0%';
        break;
      case Ui.screenSizeMiddleLabel:
        width = '320px';
        break;
      case Ui.screenSizeLargeLabel:
        width = '320px';
        break;
    }
    return addUnit ? StyleBase.trimUnit(width) : width;
  }

  static getTransform({ app, ui }: any) {
    let transform = DetailRight.closeSelfTransform;
    switch (ui.screenSize) {
      case Ui.screenSizeSmallLabel:
        transform = DetailRight.closeSelfTransform;
        break;
      case Ui.screenSizeMiddleLabel:
        transform = DetailRight.closeSelfTransform;
        break;
      case Ui.screenSizeLargeLabel:
        transform = `translate3d(0px, 0px, 0px)`;
        /*
        if (ui.isOpenDetail) {
          console.log("C");
          transform = `translate3d(0px, 0px, 0px)`;
        } else {
          console.log("D");
          transform = DetailRight.closeSelfTransform;
        }
        */
        break;
    }
    return transform;
  }
  static get closeSelfTransform() {
    return `translate3d(0%, calc( 100% + ${Detail.padding * 2}px ), 0px)`;
  }
  static get openSelfTransform() {
    return `translate3d(0%, 0%, 0px)`;
  }
}

export class Detail {
  static get padding() {
    return 20;
  }
  static get margin() {
    return 5;
  }
}
