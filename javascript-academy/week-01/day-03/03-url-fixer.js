'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

var url = "https//www.reddit.com/r/nevertellmethebots";

// splice changes the original array
// split and join do not change the original array,
// so we need new variables to store the results,
// and this is why we cannot put all these code below in one line
const newURL = url.split('');
newURL.splice(url.indexOf('s') + 1, 0, ':');
const targetURL = newURL.join('').replace('bots', 'odds');

console.log(targetURL);
