
const os = require('os');



const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmemory: os.totalmem(),
}

console.log(currentOS);
