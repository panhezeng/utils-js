import React, { useRef, useState } from 'react';

import checkUpload from '@panhezeng/utils/dist/check-upload';
import textOverflow from '@panhezeng/utils/dist/text-overflow';
import getObjectItemByPath from '@panhezeng/utils/dist/get-object-item-by-path';
import moment from 'moment';
import xss from 'xss';
import momentExtend from '@panhezeng/utils/dist/moment-extend';
import xssExtend from '@panhezeng/utils/dist/xss-extend';

const { durationFormatHMS } = momentExtend(moment);
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
      <div>moment {moment().format('YYYY-MM-DD HH:mm:ss')}</div>
      <div>moment durationFormatHMS {durationFormatHMS(3601)}</div>
      <div>
        xss{': '}
        {cleanHtml('<strong>hello</strong><script>alert(/xss/);</script>end')}
      </div>
    </>
  );
};
