const _Boolean = (value) => {
  return value ? JSON.parse(value) : false;
}

const _FixQuoteHtml = (html) => {
  let _h = String(html).replace(/\"/g, '"').replace(/\'/g, "'");
  return _h;
}

export { _Boolean, _FixQuoteHtml }