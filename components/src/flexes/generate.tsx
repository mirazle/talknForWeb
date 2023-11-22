import React, { useEffect, useRef, useState } from 'react';

import config from './config';
import { flexesPropsInit } from './constants';
import { FlexesContextType, useFlexesContext } from './nodes/context';
import styledComponents, { StyledComponentsKeys } from './styledComponents';
import { Props, FlexesOptionType } from './types';
import { TagType } from './types/tag';
import { isValidKey } from 'components/utils/obj';

export * from './types';
export * from './constants';
export * from './entity/FlexLayout';

const { libName } = config;
const deleteChildren = ['Img'];
let elements: { [key in TagType]: (props: any, option: any) => React.ReactElement };

Object.keys(styledComponents).forEach((_category) => {
  const category = _category as StyledComponentsKeys;
  Object.keys(styledComponents[category]).forEach((tagName: TagType) => {
    if (styledComponents[category] && isValidKey(tagName, elements)) {
      const styledComponentsCategories = styledComponents[category] as any;
      const FlexesComponent = styledComponentsCategories[tagName];
      elements[tagName] = (props: any, option: any) => {
        if (deleteChildren.includes(tagName)) delete props.children;
        return (
          <FlexesComponent {...props} {...option}>
            {props.children}
          </FlexesComponent>
        );
      };
    }
  });
});

export default (tagType: TagType) =>
  (props: Props): React.ReactElement => {
    const globalContext: FlexesContextType = useFlexesContext();

    let p: Props = {
      ref: useRef(),
      ...flexesPropsInit,
      ...props,
      className: props.className ? `${libName} ${tagType} ${props.className}` : `${libName} ${tagType}`,
    };

    const [option, setOption] = useState<FlexesOptionType>({ height: p.height });
    const isOverflowYScroll = String(p.overflow).split(' ')[1] && String(p.overflow).split(' ')[1] === 'scroll';
    const selfElm = p.ref.current as unknown as HTMLElement;
    useEffect(() => {
      if (selfElm) {
        if (isOverflowYScroll) {
          const parentElm = selfElm.parentElement;
          if (parentElm) {
            setOption({ ...option, height: `${parentElm.clientHeight}px` });
          } else {
            setOption({ ...option });
          }
        }
      }
    }, [isOverflowYScroll && globalContext.innerHeight]);

    useEffect(() => {
      if (selfElm) {
        if (p.mouted) {
          p.mouted(selfElm);
        }
        setOption({ ...option, clientWidth: selfElm.clientWidth, clientHeight: selfElm.clientHeight });
      }
    }, [selfElm]);

    if (isValidKey(tagType, elements)) {
      return elements[tagType](p, option);
    } else {
      return elements.Div(p, option);
    }
  };
