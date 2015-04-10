var filedataHandler = require("../util/filedataHandler");

var stubRoutes = {
    register : function(server, options, next){
        server.route({
            method : "GET",
            path : "/example",
            handler : filedataHandler("./data/example.json")
        });
        next();
    }
};

stubRoutes.register.attributes = {
    "name" : "Stub Routes",
    version : "1.0.0"
};

module.exports = stubRoutes;