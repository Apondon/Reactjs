var banner = require('./banner.json');
var part = require('./parts.json');
var video = require('./video.json');
var more = require('./more.json');


module.exports = function() {
    return {
        "banner": banner,
        "parts": part,
        "video": video,
        "more": more
    }
}
