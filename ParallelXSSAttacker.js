const { Cluster } = require('puppeteer-cluster');
const fs = require('fs');
var path = require('path')

//Config change it to urs
const targetURL = "https://xss-game.appspot.com/level1/frame";
const inputSelector = '#query'
const logfile = "jeher.log"

console.log("______________________________________")
var lines = []


//Handling Files
try {
    // read contents of the file
    const data = fs.readFileSync('<file with your xss attack vectors>', 'UTF-8');
    // split the contents by new line
    lines = data.split(/\r?\n/);
} catch (err) {
    console.error(err);
}


async function jeher() {
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_CONTEXT,
        maxConcurrency: 2,
        monitor: true,
    });



    // Extracts document.title of the crawled pages
    await cluster.task(async ({ page, data: xss }) => {
        await page.goto(targetURL, { "waitUntil": "load" });




        //Handling Dialog and Ending the script (Assertion)
        page.on('dialog', async dialog => {
            dialog.accept()
            var detection = dialog.message() + "\n_____________________________________________________________\n" + "This is your Attack Vector" + "\n\t|\n\t|\n\t|\n\tV\n" + xss + "\n\n_______________________________________________________"
            //appending results to a file
            fs.appendFile(logfile, detection, function (err) { })
            
            await cluster.close();
            process.exit()

        });

        await page.waitForSelector(inputSelector)
        await page.type(inputSelector, xss)
        await page.click("#button")
        await page.waitForSelector('#level1 > div > a')
        console.log("______")
        

    });


    // In case of problems, log them
    cluster.on('taskerror', (err, data) => {
        console.log(`  Error crawling ${data}: ${err.message}`);
    });

    for (var i = 0; i < lines.length; i++) {

       cluster.queue(lines[i])
       

    }


    await cluster.idle();
    await cluster.close();
}
/* lines.forEach((line) => {
    cluster.queue(line);
    
});*/






jeher()
