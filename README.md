# DateTime Script

> Generate a string format base on the passed `date` object

> `js/` folder also contains files for use in `node` and `amd`

## Format options

**Month**

`%m` - Month in number (1 - 12)

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



