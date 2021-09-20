let re;
re = /Hello/i;
// Metacharacter
re = /^h/;
re = /o$/;
re = /h.llo/;
re = /h*llo/;
re = /he?a?llo/;
// Character
re = /h[ea]llo/; 
re = /h[^ea]/;            // Anything except
re = /h[a-z]llo/;
re = /h[A-Za-z]llo/;  
re = /h[0-9]llo/
// Quantifier
re = /hel{2}o/;
re = /hel{2,}o/;          // {min,}
re = /hel{2,4}o/;
// Grouping
re = /he([a-z]){2,}o/;
// Shorthand
re = /\w/;                // Alphanumeric and _
re = /\w+/;               // \w One or More
re = /\W/;                // Non-word character
re = /\d/;                // Any digit
re = /\d+/;               // \d One or more
re = /\D/;                // Non-digit
re = /\s/;                // Whitespace
re = /\S/;                // Non-whitespace
re = /Hell\b/             // Word boundary
// Assertions
re = /h(?=e)/             // Followed by =value
re = /h(?!e)/             // Not Followed by =value
const str = 'hello';


// console.log(re);
// console.log(re.source);
console.log(re.exec(str));
// console.log(re.test('Hello'));
// console.log(str.match(re));
// console.log(str.search(re));
// console.log(str.replace(re,'Hi'));

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);