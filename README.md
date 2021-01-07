# XSSATTackerPuppeteer
An automated XSS attacking tool that uses puppeteer cluster framework

## Usage


For XSS payloads use the payloads from  my PublicCTFHelpers repository at : https://github.com/nigamelastic/PublicCTFHelpers/blob/master/xss_vectors

The XSS payloads are on readfileSync so change XSS vectors input file there.

Finally please provide the path to your chrome exe file.

once these pre-requisites are done use the following command to install install all the pacakges

`npm install`


update the URL and run: `node <filename.js>`


use `node XSSATTackerPuppeteer.js` to run your XSS payloads parallely

use `node sequentialAttacker.js` to run XSS payloads sequentially.


