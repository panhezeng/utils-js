export default {
  getItemByJSONParse(item: string, api: keyof Window = 'localStorage') {
    try {
      return JSON.parse(window[api].getItem(item));
    } catch (e) {
      return null;
    }
  },
};
