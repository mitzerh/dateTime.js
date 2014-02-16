define("DateTime", [], function() {

/**
 * DateTime script
 * https://github.com/mitzerh/dateTime.js
 * Convert date objects to a string format you need!
 */
var DateTime = (function(){

    var App = function(date, formatStr) {

        var obj = {
            // date
            month: date.getUTCMonth(),
            day: date.getDay(),
            year: date.getFullYear(),
            "date": date.getDate(),
            // time
            hour: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            ampm: (date.getHours()<12) ? "am" : "pm",

            fullStr: date.toString()
        };

        // replacements - original - will soon be deprecated
        var replace = {
            "${mm}": (obj.month < 9) ? ("0" + (obj.month + 1)) : (obj.month + 1),
            "${month}": getUTCMonthString(obj.month),
            "${month:short}": getUTCMonthString(obj.month,"short"),
            "${day}": getDayString(obj.day),
            "${day:short}": getDayString(obj.day,"short"),
            "${yr}": obj.year,
            "${yr:short}": toStr(obj.year).substr(2),
            "${dd}": (obj.date<10) ? ("0" + toStr(obj.date)) : toStr(obj.date),
            "${ddTH}": ordinalSuffix(obj.date),
            "${hr}": (obj.hour>12) ? obj.hour-12 : obj.hour,
            "${hr:mil}": (obj.hour<10) ? ("0" + toStr(obj.hour)) : toStr(obj.hour),
            "${min}": (obj.minutes<10) ? ("0" + toStr(obj.minutes)) : toStr(obj.minutes),
            "${sec}": (obj.seconds<10) ? ("0" + toStr(obj.seconds)) : toStr(obj.seconds),
            "${ampm}": obj.ampm,
            "${AMPM}": (obj.ampm).toUpperCase(),
            "${AmPm}": ((obj.ampm).charAt(0)).toUpperCase() + (obj.ampm).charAt(1)
        };

        // new
        replace["%m"] = replace["${mm}"];
        replace["%M"] = replace["${month}"];
        replace["%M:s"] = replace["${month:short}"];
        replace["%d"] = replace["${dd}"];
        replace["%d:o"] = replace["${ddTH}"];
        replace["%D"] = replace["${day}"];
        replace["%D:s"] = replace["${day:short}"];
        replace["%Y"] = replace["${yr}"];
        replace["%y"] = replace["${yr:short}"];
        replace["%h"] = replace["${hr}"];
        replace["%H"] = replace["${hr:mil}"];
        replace["%i"] = replace["${min}"];
        replace["%s"] = replace["${sec}"];
        replace["%ampm"] = replace["${ampm}"];
        replace["%AMPM"] = replace["${AMPM}"];
        replace["%AmPm"] = replace["${AmPm}"];

        if (typeof formatStr !== "string" || !formatStr) {

            formatStr = obj.fullStr;

        } else {

            for (var i in replace) {
                var idx = formatStr.indexOf(i);
                while (idx!==-1) {
                    formatStr = formatStr.replace(i,replace[i]);
                    idx = formatStr.indexOf(i);
                }
            }

        }

        return formatStr;

    };

    var ordinalSuffix = function(n) {
        n = (n || "").toString();
        if (n.length < 1) { return n; }

        var s = "",
            lastDigit = parseInt(n.charAt(n.length-1), 10);

        switch (lastDigit) {
            case 1: s = "st";break;
            case 2: s = "nd";break;
            case 3: s = "rd";break;
            default: s = "th";break;
        }

        return (n + s);
    };

    // Return week days string
    var getDayString = function(n, type) {
        var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            ret = day[n];

        if (type==="short") {
            ret = ret.slice(0,3);
        }

        return ret;
    };

    // Return month string
    var getUTCMonthString = function(n, type) {
        var month = ["January","February","March","April","May","June","July","August","September","October","November","December"],
            ret = month[n] || "";

        if (type === "short") {
            ret = ret.slice(0,3);
        }

        return ret;
    };

    // to string
    var toStr = function(val) {
        val = (!isNaN(val)) ? val : "";
        return val.toString();
    };

    return App;

}());

return DateTime;

});