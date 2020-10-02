import{_ as t}from"./_rollupPluginBabelHelpers-5bd7183e.js";import{L as e,c as n,h as r}from"./lit-element-ae08ccac.js";function a(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var o=6e4;var u={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var d={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function h(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,d=u[0],c=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(c)?c.findIndex((function(t){return t.test(r)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(c,(function(t){return t.test(r)})),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(d.length)}}}var f,m={formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof u[t]?u[t]:1===e?u[t].one:u[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:d,formatRelative:function(t,e,n,r){return c[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(f.matchPattern);if(!a)return null;var i=a[0],o=n.match(f.parsePattern);if(!o)return null;var u=f.valueCallback?f.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return function(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=a(t).getTime(),r=i(e);return new Date(n+r)}(t,-i(e))}function w(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var y=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return w("yy"===e?r%100:r,e.length)},v=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):w(n+1,2)},b=function(t,e){return w(t.getUTCDate(),e.length)},p=function(t,e){return w(t.getUTCHours()%12||12,e.length)},T=function(t,e){return w(t.getUTCHours(),e.length)},M=function(t,e){return w(t.getUTCMinutes(),e.length)},C=function(t,e){return w(t.getUTCSeconds(),e.length)},x=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return w(Math.floor(r*Math.pow(10,n-3)),e.length)},D=864e5;function P(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=a(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function U(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=a(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=P(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var u=P(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}var E=6048e5;function S(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=a(t),n=P(e).getTime()-function(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=U(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),P(n)}(e).getTime();return Math.round(n/E)+1}function k(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=e||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,u=null==o?0:i(o),s=null==n.weekStartsOn?u:i(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=a(t),c=d.getUTCDay(),l=(c<s?7:0)+c-s;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function q(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=a(t,e),r=n.getUTCFullYear(),o=e||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,d=null==s?1:i(s),c=null==o.firstWeekContainsDate?d:i(o.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,c),l.setUTCHours(0,0,0,0);var h=k(l,e),f=new Date(0);f.setUTCFullYear(r,0,c),f.setUTCHours(0,0,0,0);var m=k(f,e);return n.getTime()>=h.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}var W=6048e5;function Y(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=a(t),r=k(n,e).getTime()-function(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:i(a),u=null==n.firstWeekContainsDate?o:i(n.firstWeekContainsDate),s=q(t,e),d=new Date(0);return d.setUTCFullYear(s,0,u),d.setUTCHours(0,0,0,0),k(d,e)}(n,e).getTime();return Math.round(r/W)+1}var O="midnight",N="noon",z="morning",j="afternoon",H="evening",L="night",X={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y(t,e)},Y:function(t,e,n,r){var a=q(t,r),i=a>0?a:1-a;return"YY"===e?w(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):w(i,e.length)},R:function(t,e){return w(U(t),e.length)},u:function(t,e){return w(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return w(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return w(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return v(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return w(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=Y(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):w(a,e.length)},I:function(t,e,n){var r=S(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):w(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):b(t,e)},D:function(t,e,n){var r=function(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=a(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/D)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):w(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return w(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return w(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return w(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?N:0===a?O:a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?H:a>=12?j:a>=4?z:L,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return p(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):T(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):w(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):w(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):M(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):C(t,e)},S:function(t,e){return x(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return Q(a);case"XXXX":case"XX":return B(a);case"XXXXX":case"XXX":default:return B(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return Q(a);case"xxxx":case"xx":return B(a);case"xxxxx":case"xxx":default:return B(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+F(a,":");case"OOOO":default:return"GMT"+B(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+F(a,":");case"zzzz":default:return"GMT"+B(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return w(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return w((r._originalDate||t).getTime(),e.length)}};function F(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+w(i,2)}function Q(t,e){return t%60==0?(t>0?"-":"+")+w(Math.abs(t)/60,2):B(t,e)}function B(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+w(Math.floor(a/60),2)+n+w(a%60,2)}function G(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function A(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var R={p:A,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return G(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",G(a,e)).replace("{{time}}",A(i,e))}},J=["D","DD"],_=["YY","YYYY"];function I(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var V=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$=/^'([^]*?)'?$/,Z=/''/g,tt=/[a-zA-Z]/;function et(t,e,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=String(e),u=n||{},s=u.locale||m,d=s.options&&s.options.firstWeekContainsDate,c=null==d?1:i(d),l=null==u.firstWeekContainsDate?c:i(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=s.options&&s.options.weekStartsOn,f=null==h?0:i(h),w=null==u.weekStartsOn?f:i(u.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var y=a(t);if(!function(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=a(t);return!isNaN(e)}(y))throw new RangeError("Invalid time value");var v=g(y,function(t){var e=new Date(t.getTime()),n=e.getTimezoneOffset();e.setSeconds(0,0);var r=e.getTime()%o;return n*o+r}(y)),b={firstWeekContainsDate:l,weekStartsOn:w,locale:s,_originalDate:y};return r.match(K).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,R[e])(t,s.formatLong,b):t})).join("").match(V).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return t.match($)[1].replace(Z,"'");var n,r=X[e];if(r)return u.useAdditionalWeekYearTokens||(n=t,-1===_.indexOf(n))||I(t),!u.useAdditionalDayOfYearTokens&&function(t){return-1!==J.indexOf(t)}(t)&&I(t),r(v,t,s.localize,b);if(e.match(tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("")}function nt(){var e=t(["\n          <div>\n            ","\n          </div>\n        "]);return nt=function(){return e},e}function rt(){var e=t(["\n      <div>\n        ","\n      </div>\n      ","\n    "]);return rt=function(){return e},e}function at(){var e=t(["\n      :host {\n        display: var(--x-date-time-display, block);\n        flex-direction: var(--x-date-time-flex-direction, initial);\n        font-size: var(--x-date-time-font-size, initial);\n        font-weight: var(--x-date-time-font-weight, initial);\n      }\n    "]);return at=function(){return e},e}var it=class extends e{static get styles(){return n(at())}static get properties(){return{displayTime:{type:Boolean},datefmt:{type:String},timefmt:{type:String},timestamp:{type:String}}}constructor(){super(),this.displayTime=!1,this.datefmt="yyyy-MM-dd",this.timefmt="h:mm:ss a",this.timestamp="0"}render(){var t=new Date(function(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return a(1e3*i(t))}(this.timestamp)),e=et(t,this.datefmt),n=et(t,this.timefmt);return r(rt(),e,this.displayTime?r(nt(),n):null)}};customElements.get("x-date-time")||customElements.define("x-date-time",it);export default it;export{it as XDateTime};