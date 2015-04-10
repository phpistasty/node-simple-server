var stubRoutes = {
    register : function(server, options, next){
        server.route({
           method : "GET",
            path : "/stubRoutes",
            handler : function(req, reply){

            }
        });
        next();
    }
};

stubRoutes.register.attributes = {
    "name" : "Stub Routes",
    version : "1.0.0"
};

module.exports = stubRoutes;