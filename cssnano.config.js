module.exports = {
  preset: ['default', {
    discardEmpty: (["noMinimize"].includes(process.env.NODE_ENV)) ? false : {},
    normalizeWhitespace: (["noMinimize"].includes(process.env.NODE_ENV)) ? false : {}
  }]
};
