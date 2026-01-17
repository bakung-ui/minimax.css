module.exports = {
    preset: ['default', {
        discardEmpty: process.env.NODE_ENV == 'build:combine' ? false : {},
        normalizeWhitespace: process.env.NODE_ENV == 'build:combine' ? false : {}
    }]
};
