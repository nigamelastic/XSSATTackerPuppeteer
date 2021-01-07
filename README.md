# XSSATTackerPuppeteer
An automated XSS attacking tool that uses puppeteer cluster framework

## Usage

`npm install`

update the URL and attack input and run: `node <filename.js>`


use `node XSSATTackerPuppeteer.js` to run your XSS payloads parallely

use `node sequentialAttacker.js` to run XSS payloads sequentially.

For XSS payloads use the payloads from  my PublicCTFHelpers repository at : https://github.com/nigamelastic/PublicCTFHelpers/blob/master/xss_vectors

i use the XSS payloads on readfileSync so change XSS vectors input file there.

Finally please provide the path to your chrome exe file.
