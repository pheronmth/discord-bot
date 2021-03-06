const moment = require('moment-timezone');

const timezone = {
    "us": "America/Los_Angeles",
    "fr": "Europe/Paris",
    "jp": "Asia/Tokyo",
    "ru": "Europe/Moscow",
    "au": "Australia/Sydney"
}

function getTimeZone(tz) {

    if (timezone.hasOwnProperty(tz)) {
        return {
            flag: tz,
            zone: timezone[tz],
            street: timezone[tz].split("/")[1].replace("_", " ")
        }
    }

    return false

}

function getTime(zone) {

    let info = getTimeZone("fr")
    if (zone) info = getTimeZone(zone)

    return "It is " + moment().tz(info.zone).format("MMMM DD YYYY, HH[:]mm ") + info.street + " :flag_"+info.flag+":"

}

module.exports = function (opts) {
    opts.event.channel.send(getTime(opts.argsRaw[0]))
}
