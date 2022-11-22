import React, { useRef, useState } from 'react';

import checkUpload from '@panhezeng/utils/dist/check-upload';
import textOverflow from '@panhezeng/utils/dist/text-overflow';
import getObjectItemByPath from '@panhezeng/utils/dist/get-object-item-by-path';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import weekday from 'dayjs/plugin/weekday';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import calendar from 'dayjs/plugin/calendar';
import zhCn from 'dayjs/locale/zh-cn';
import xss from 'xss';
import dayjsExtend from '@panhezeng/utils/dist/dayjs-extend';
import xssExtend from '@panhezeng/utils/dist/xss-extend';

const { durationFormatHMS } = dayjsExtend(dayjs, {
  updateLocale,
  localizedFormat,
  weekday,
  relativeTime,
  duration,
  calendar,
  preset: 'zh-cn',
  localeObject: zhCn,
});
const { cleanHtml } = xssExtend(xss);

export const App = () => {
  const [data, setData] = useState({
    checkUpload: '是否可以上传结果展示',
    textOverflow: '超过3个字省略',
    object: { path: 'item' },
  });
  const fileInputEl = useRef<HTMLInputElement | null>(null);
  async function checkUploadHandle() {
    const file = fileInputEl.current!.files![0];
    if (file) {
      const checkUploadText = JSON.stringify(
        await checkUpload(file, '', 0, 50, 50)
      );
      setData((prevState) => ({ ...prevState, checkUpload: checkUploadText }));
    } else {
      setData((prevState) => ({ ...prevState, checkUpload: '' }));
    }
  }

  function textOverflowHandle() {
    setData((prevState) => ({
      ...prevState,
      textOverflow: textOverflow(prevState.textOverflow, 3),
    }));
  }
  return (
    <>
      <form>
        <label>
          Upload file:
          <input type="file" ref={fileInputEl} onChange={checkUploadHandle} />
        </label>
      </form>
      <div>checkUpload: {data.checkUpload}</div>
      <button onClick={textOverflowHandle}>超过3个字加省略符号</button>
      <div>textOverflow: {data.textOverflow}</div>
      <div>getObjectItemByPath: {getObjectItemByPath(data, 'object.path')}</div>
      <div>dayjs {dayjs().format('YYYY-MM-DD HH:mm:ss')}</div>
      <div>dayjs durationFormatHMS {durationFormatHMS(3601)}</div>
      <div>
        xss{': '}
        {cleanHtml('<strong>hello</strong><script>alert(/xss/);</script>end')}
      </div>
    </>
  );
};
