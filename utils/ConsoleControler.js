/**
 * ****************************
 * Function of user input from console
 * ****************************
 */
const readline = require('readline-sync');
function getUserInput(){
    return parseInt(readline.question(`Please input an option ... \t`));
};
module.exports = {getUserInput};
