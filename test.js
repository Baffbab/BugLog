/*

    Quick test to make sure everything works. :-)
    
*/

var buglog = require('./index');

// console.log(index)
function woot(argument) {
    // body...
    buglog.Level.Info();

    buglog.Level.Info('Server using Node Version  ...');


    buglog.Level.Warn('Ver:', process.version);
    
    function burp(argument) {
        // body...
        buglog.Level.Error('ERRRRRRRR');
    }
    burp();
    
};

woot();

 




process.exit(0);