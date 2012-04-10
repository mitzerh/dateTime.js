var DateTime = (function(){
   
   var DateTime = function(date,formatStr) {
      formatStr = formatStr||null; // format is optional
      var i;

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
   		ampm: ((date.getHours()<12)?'am':'pm'),
   		fullStr: date.toString()
   	};

   	// old english(?) format
   	var oldEnglish = function(n) {
   	   n = n || "";
   	   n = n.toString();

   	   if (n.length < 1) { return n; }

   		var s = "", lastDigit = parseInt(n.charAt(n.length-1),10);
   		switch (lastDigit) {
   			case 1: s = "st";break;
   			case 2: s = "nd";break;
   			case 3: s = "rd";break;
   			default: s = "th";break;
   		}

   		return (n + s);
   	};

   	// Return month string
   	var getUTCMonthString = function(n,type) {
   		type = type||'full'; //type is optional
   		var month = ["January","February","March","April","May","June","July","August","September","October","November","December"], ret = month[n] || "";

   		if (type==="short") {
   		   ret = ret.slice(0,3);
   		}
   		return ret;
   	};

   	// to string
   	var toStr = function(val) {
   	   val = (!isNaN(val)) ? val : "";
   	   return val.toString();
   	};

   	// Return week days string
   	var getDayString = function(n,type) {
   		type = type || "full";
   		var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], ret = day[n];

   		if (type==="short") {
   		   ret = ret.slice(0,3);
   		}
   		return ret;
   	};

      // replacements
   	var replace = {
   		"${mm}": (obj.month+1),
   		"${month}": getUTCMonthString(obj.month),
   		"${month:short}": getUTCMonthString(obj.month,"short"),
   		"${day}": getDayString(obj.day),
   		"${day:short}": getDayString(obj.day,"short"),
   		"${yr}": obj.year,
   		"${yr:short}": toStr(obj.year).substr(2),
   		"${dd}": ((obj.date<10) ? ("0" + toStr(obj.date)) : toStr(obj.date)),
   		"${ddTH}": oldEnglish(obj.date),
   		"${hr}": ((obj.hour>12)?obj.hour-12:obj.hour),
   		"${hr:mil}": obj.hour,
   		"${min}": ((obj.minutes<10) ? ("0" + toStr(obj.minutes)) : toStr(obj.minutes)),
   		"${sec}": ((obj.seconds<10) ? ("0" + toStr(obj.seconds)) : toStr(obj.seconds)),
   		"${ampm}": obj.ampm,
   		"${AMPM}": (obj.ampm).toUpperCase(),
   		"${AmPm}": ((obj.ampm).charAt(0)).toUpperCase()+(obj.ampm).charAt(1)
   	};

   	for (i in replace) {
   		var idx = formatStr.indexOf(i);
   		while (idx!==-1) {
   			formatStr = formatStr.replace(i,replace[i]);
   			idx = formatStr.indexOf(i);
   		}
   	}
   	return formatStr; 
   };
   
	return DateTime;
}());