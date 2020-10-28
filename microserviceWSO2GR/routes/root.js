async function routes (fastify, options) {
	
  fastify.post('/createAsset', async (request, reply) => {

   this.respuesta = {
	   error: true,
	   codigo: 503,
	   mensaje: 'se deben enviar todos los campos obligatorios'
   };

    try {
		
		console.log("request.body.assetType:",request.body.assetType);
		console.log("request.body.overview_name:",request.body.overview_name);
		console.log("request.body.overview_version:",request.body.overview_version);
		console.log("request.body.overview_context:",request.body.overview_context);
		
		
		if(!request.body.assetType || !request.body.overview_name || !request.body.overview_version || !request.body.overview_context) {

		   return this.respuesta;
		}

		var governaceRegistryCoreBusiness160K = new GovernaceRegistryCoreBusiness160K();

		var asset = new Asset(request.body.assetType,request.body.overview_name,request.body.overview_version,request.body.overview_context);



		await governaceRegistryCoreBusiness160K.createAsset(asset).then((value)=> this.respuesta = value );
		
		return this.respuesta;
		/*
		    respuesta = {
			   error: false,
			   codigo: 0,
			   mensaje: 'asset creado exitosamente'
		    };
			
			res.status(200).send(respuesta)
		
		catch(e){
			
		   respuesta = {
			   error: true,
			   codigo: 503,
			   mensaje: 'error al crear asset'
		   };
		   
		   res.status(200).send(respuesta)
		}
		*/
		
		
		//var respuesta = await governaceRegistryCoreBusiness160K.createAsset(asset,res).then((res.status(200).send(respuesta)));
		
		//let hello = async function() { return "Hello" };
		
		//hello().then((value)=> res.status(200).send(value));
		
		//const user = await User.findOne({email: req.body.email})
		
		
		/*const hello = await governaceRegistryCoreBusiness160K.createAsset(asset);
		
		hello.then((value)=> res.status(200).send(value));
		*/
		
		
		//governaceRegistryCoreBusiness160K.createAsset(asset).then((value)=> res.status(200).send(value));

	  
		
	  
    } catch (err) {
		console.error(err);

		   this.respuesta = {
			   error: true,
			   codigo: 502,
			   mensaje: 'se deben enviar todos los campos obligatorios'
		   };

		return this.respuesta;

    }

  })
}

module.exports = routes