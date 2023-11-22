import React, { useEffect, useState } from 'react';
import TimeAgo from 'react-timeago';

import util from 'common/util';

type Props = {
  value: string;
};

const getConvertValue = (value: string): string => {
  return value;
};

const Component: React.FC<Props> = ({ value: _value }) => {
  const [value, setValue] = useState(_value);
  useEffect(() => {
    setTimeout(() => {
      const convertValue = getConvertValue(value);
      setValue(convertValue);
    }, 1000);
  }, [value]);

  return (
    <TimeAgo
      date={value}
      formatter={(value, unit, suffix) => {
        const valueStr = String(value);
        return util.timeAgoFormatter(valueStr, unit, suffix);
      }}
    />
  );
};

export default Component;
