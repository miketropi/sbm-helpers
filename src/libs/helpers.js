const _Boolean = (value) => {
  return JSON.parse(value);
}

const _FixQuoteHtml = (html) => {
  let _h = String(html).replace(/\"/g, '"').replace(/\'/g, "'");
  return _h;
}

export { _Boolean, _FixQuoteHtml }