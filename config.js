var convict = require("convict");

var config = convict({
    port : {
        doc : "Port number for the fake api server to run on.",
        default : "1337",
        env : "PO_API_PORT"
    }
});

config.validate();
module.exports = config;