var debug = require('debug')('serandules:mongutils');
module.exports.objectId = function (id) {
    return id.match(/^[0-9a-fA-F]{24}$/);
};