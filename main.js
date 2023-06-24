const fs = require('fs');
const prompt = require('prompt-sync')();

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

            console.log('Data written successfully!');



        })


    });
}
while (true) {
    let directoryin = prompt('Input directory: ');
    txtToJson(directoryin);
    break;
}

