DateTime Script
=======================

Convert javascript `date` object to string based on a custom format

jQuery plugin alternative available.

Example:

[http://jsfiddle.net/mitzerh/oexeL8ca/](http://jsfiddle.net/mitzerh/oexeL8ca/)

##Bower Install

`bower install datetime-js`

---

## Format options

**Month**

`%m` - Month in number (01 - 12)

`%M` - Month (January - December)

`%M:s` - Month in short format (Jan - Dec)

**Day**

`%d` - Day of the month (01 - 31)

`%D` - Day of the week (Monday - Sunday)

`%D:s` - Day of the week short format (Mon - Sun)

`%d:o` - Day of the month with ordinal suffix

**Year**

`%Y` - Year in full format

`%y` - Year in short format

**Time**

`%h` - 12-hour format

`%H` - 24-hour format

`%i` - Minutes

`%s` - Seconds

`%ampm` - am/pm lowercase

`%AMPM` - am/pm uppercase

`%AmPm` - am/pm capitalized

### Examples

_**The date is 02-14-2014**_

```js
DateTime((new Date()), 'The date is %m-%d-%Y')
```

_**Time Now: 04:45 PM**_

```js
DateTime((new Date()), 'Time Now: %h:%i %AMPM')
```

_**Today is the 25th day of August**_

```js
DateTime((new Date()), 'Today is the %d:o day of %M')
```



