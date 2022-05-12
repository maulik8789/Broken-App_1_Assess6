const fs = require('fs');
const axios = require('axios');
const { nextTick } = require('process');

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('urls.txt')
  });
  

  lineReader.on('line', async function (line) {
    try{
        let fName = [...line];
        fName.slice(fName.length - 5);
        fName.splice(0, 8);
        fName = fName.join('');
        let fileContent = await axios.get(`${line}`)
        fs.writeFile(`${fName}`, `${fileContent.data}`, {encoding: 'utf8'}, err => {
            if(err){
                        console.log("couldn't download", err.path );
            }
            
        })
    }
    catch(e){
        console.log("could not download", e.config.url);
    }

});



// fs.readFile('urls.txt', 'utf8', (err, data) =>{
//     
//     console.log(data)
// });

// 
