const fs = require('fs');
const path = require('path');
const prompt = require('prompt-sync')();
const readline = require('readline');
const rcedit = require('rcedit');
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


function txtToJson(dir, filename) {
    const filein = fs.readFile(dir, 'utf8', (err, data) => {

        if (err) {
            console.log(err);
            return;
        }
        words = data.replace(/\s/g, ' ').split(' ');
        words = words.filter((str) => str !== '');


        console.log('its working..')

        const jsonData = { array: words };
        const jsonform = JSON.stringify(jsonData, 2, 4);
        console.log(jsonform);
        const output = JSON.parse(jsonform);

        return fs.writeFile(`${filename}.json`, jsonform, (err) => {
            if (err) {
                console.log(err)
                throw err;
                return;
            };

            console.log('Data written successfully!');
            return r1.question('Press any button to exit..', () => {
                r1.close();
            })



        })


    });
}


let directoryin = prompt('Input .txt file directory: ');
let suffix = path.extname(directoryin);
if (suffix !== '.txt') {
    console.log('Error: Input file is not plaintext');
    return;
}
let filename = prompt('Input the filename to output to: ');
return txtToJson(directoryin, filename);


