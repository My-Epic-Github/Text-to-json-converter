const fs = require('fs');


function txtToJson(dir, array) {
    const filein = fs.readFile(dir, 'utf8', (err, data) => {

        if (err) {
            console.log(err);
            return;
        }
        words = data.replace(/\s/g, ' ').split('-')

        console.log('its working..')

        const jsonData = { dir : words };
        const jsonform = JSON.stringify(jsonData, 2, 4);
        console.log(jsonform);
        const output = JSON.parse(jsonform);

        fs.writeFile('output.json', jsonform, (err) => {
            if (err) {
                console.log(err)
                throw err;
                return;
            };

            console.log('Data written successfully!');



        })


    });
}




