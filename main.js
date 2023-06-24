const fs = require('fs');
const prompt = require('prompt-sync')();
const readline = require('readline')
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

function txtToJson(dir) {
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

        return fs.writeFile('output.json', jsonform, (err) => {
            if (err) {
                console.log(err)
                throw err;
                return;
            };

            return console.log('Data written successfully!');



        })


    });
}

function processInput() {
let directoryin = prompt('Input directory: ');
return txtToJson(directoryin);
}

while (true) {
    processInput();
    r1.question('Press any key to leave..', () => {
        return r1.close();
    })
}

