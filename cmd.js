const fs = require('fs');
fs.readFile("addresses.txt", function (e, d) {
    if (!e) {
        let chunk = d.toString().split("\n");
        console.log("Total number before: "+chunk.length);
        let filtChunk = [...new Set(chunk)];
        console.log("Total after filter: "+filtChunk.length);
        fs.writeFileSync("sfp.json", JSON.stringify(filtChunk));
    }else{
        console.log(e);
    }
})