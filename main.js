const fs = require('fs');

const filein = fs.readFile('words.txt', 'utf8', (err, data) => {

    if (err) {
        console.log(err);
        return;
    }
    words = data.replace(/\s/g, ' ').split(' ')

    console.log('its working..')

    const jsonData = {wordlist : words};
    const jsonform = JSON.stringify(jsonData, 2, 4);
    console.log(jsonform);
    const output = JSON.parse(jsonform);

    fs.writeFile('output.json', jsonform, (err) => {
        if (err) {console.log(err)
        throw err;
        return;
        };

        console.log('Data written successfully!');



    })


});




