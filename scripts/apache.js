const { writeFile } = require("fs");
const { promisify } = require("util");
const asyncWriteFile = promisify(writeFile);


const destFolder = './out/';
const fileName = '.htaccess';

/*
    NextJS & apache servers configuration
    https://stackoverflow.com/questions/54838373/next-js-htaccess-file
*/

const content = 
`RewriteEngine On
RewriteRule ^([^/]+)/$ $1.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^/]+)/$ $1.html
RewriteRule ^([^/]+)/([^/]+)/$ /$1/$2.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !(\.[a-zA-Z0-9]{1,5}|/)$
RewriteRule (.*)$ /$1/ [R=301,L]`



const apacheRewriteConfig = () => {
  asyncWriteFile(destFolder + fileName, content);
}

apacheRewriteConfig();