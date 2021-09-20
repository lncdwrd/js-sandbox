// Outer Height & Width
const outHeight = window.outerHeight;
const outWidth = window.outerWidth;

console.group('Outer Dimensions');
  console.log(outHeight);
  console.log(outWidth);
console.groupEnd();

// Inner Height & Width
const inHeight = window.innerHeight;
const inWidth = window.innerWidth;

console.group('Inner Dimensions');
  console.log(inHeight);
  console.log(inWidth);
console.groupEnd();

// Scroll Points
const scrollY = window.scrollY;
const scrollX = window.scrollX;

console.group('Inner Dimensions');
  console.log(scrollY);
  console.log(scrollX);
console.groupEnd();

// Location Object
const winLocation = window.location;
const winLocationPort = window.location.port;

console.group('Location Object');
  console.log(winLocation);
  console.log(winLocationPort);
console.groupEnd();

// Redirect & Reload
// window.location.href = 'https://google.com';
// window.location.reload();

// History Object
window.history.go(-1);
const historyLength = window.history.length;

console.group('History');
  console.log(historyLength);
console.groupEnd();

// Navigator Object
const winNav = window.navigator;
const winNavAppName = window.navigator.appName;
const winNavAppVer = window.navigator.appVersion;
const winNavUserAgent = window.navigator.userAgent;
const winNavPlatform = window.navigator.platform;
const winNavVendor = window.navigator.vendor;
const winNavLanguage = window.navigator.language;

console.group('Location Object');
  console.log(winNav);
  console.log(winNavAppName);
  console.log(winNavAppVer);
  console.log(winNavUserAgent);
  console.log(winNavPlatform);
  console.log(winNavVendor);
  console.log(winNavLanguage);
console.groupEnd();
