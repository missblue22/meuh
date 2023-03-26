const userInfo = require('./information');
const cowsay = require("cowsay");

let message = "I'm "+userInfo.prenom+" I come from ze campus of "+ userInfo.campus


console.log(cowsay.say({
    text : message,
    e : "oO",
    T : "U "
}));

// or cowsay.think()