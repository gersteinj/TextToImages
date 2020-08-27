define(function (require) {
    // load any app-specific modules
    // with a relative require call like:
    var messages = require('./messages');

    // load library/endor modules using
    // full IDs, like:
    var print = require('print');

    print(messages.getHello());
});