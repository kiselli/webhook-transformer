var Router = function(loader){
	var route = function(app){
		app.use(function(req,res){
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end("Hello World");
		})
	}

	return {
		route: route
	}
}

module.exports = Router;