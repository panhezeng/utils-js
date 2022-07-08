import xssType from 'xss';

export default function (xss: typeof xssType) {
  /**
   * 过滤所有HTML，得到纯文本
   * @param source
   * @returns {string}
   */
  function cleanHtml(source: string) {
    return xss(source, {
      whiteList: {}, // 白名单为空，表示过滤所有标签
      stripIgnoreTag: true, // 过滤所有非白名单标签的HTML
      stripIgnoreTagBody: ['script'], // script标签较特殊，需要过滤标签中间的内容
    })
      .trim()
      .replace(/&nbsp;/g, ' ')
      .replace(/&ldquo;/g, '“')
      .replace(/&rdquo;/g, '”')
      .replace(/&lsquo;/g, '‘')
      .replace(/&rsquo;/g, '’')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&hellip;/g, '…')
      .replace(/&middot;/g, '·');
  }

  Object.defineProperty(xss, 'cleanHtml', {
    get: function () {
      return cleanHtml;
    },
  });

  return { cleanHtml };
}
