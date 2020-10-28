'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

const { GovernaceRegistryCoreBusiness160K } = require('./GovernaceRegistryCoreBusiness160K.js');
const { Asset } = require('./asset.js');
const { AssetAsociation } = require('./asset.js');

const fastify = require('fastify')({
  logger: true
})

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines



  
  fastify.post('/createAsset', async (request, reply) => {

    try {
		
		console.log("request.body.assetType:",request.body.assetType);
		console.log("request.body.overview_name:",request.body.overview_name);
		console.log("request.body.overview_version:",request.body.overview_version);
		console.log("request.body.overview_context:",request.body.overview_context);
		
		
		if(!request.body.assetType || !request.body.overview_name || !request.body.overview_version || !request.body.overview_context) {

		   var respuesta = {
			   error: true,
			   codigo: 503,
			   mensaje: 'se deben enviar todos los campos obligatorios: assetType, overview_name, overview_version, overview_context'
		   };

		   return respuesta;
		   
		}

		var governaceRegistryCoreBusiness160K = new GovernaceRegistryCoreBusiness160K();

		var asset = new Asset(request.body.assetType,request.body.overview_name,request.body.overview_version,request.body.overview_context);


	   var respuesta = {
		   error: true,
		   codigo: 503,
		   mensaje: 'se deben enviar todos los campos obligatorios'
	   };

		await governaceRegistryCoreBusiness160K.createAsset(asset).then((value)=> respuesta = value );
		
		return respuesta;

	  
    } catch (err) {
		console.error(err);

		   var respuesta = {
			   error: true,
			   codigo: 502,
			   mensaje: 'Error al crear Asset'
		   };

		return respuesta;

    }

  })
  
  fastify.delete('/deleteAsset', async (request, reply) => {

    try {
		
		console.log("request.body.assetType:",request.body.assetType);
		console.log("request.body.overview_name:",request.body.overview_name);
		console.log("request.body.overview_version:",request.body.overview_version);
		console.log("request.body.overview_context:",request.body.overview_context);
		
		
		if(!request.body.assetType || !request.body.overview_name) {

		   var respuesta = {
			   error: true,
			   codigo: 503,
			   mensaje: 'se deben enviar todos los campos obligatorios: assetType y overview_name'
		   };

		   return respuesta;
		   
		}

		var governaceRegistryCoreBusiness160K = new GovernaceRegistryCoreBusiness160K();

		var asset = new Asset(request.body.assetType,request.body.overview_name,request.body.overview_version,request.body.overview_context);


	   var respuesta = {
		   error: true,
		   codigo: 503,
		   mensaje: 'se deben enviar todos los campos obligatorios'
	   };

		await governaceRegistryCoreBusiness160K.deleteAsset(asset).then((value)=> respuesta = value );
		
		return respuesta;

	  
    } catch (err) {
		console.error(err);

		   var respuesta = {
			   error: true,
			   codigo: 502,
			   mensaje: 'Error al crear Asset'
		   };

		return respuesta;

    }

  })
  
  fastify.put('/updateAsset', async (request, reply) => {

    try {
		
		console.log("request.body.assetType:",request.body.assetType);
		console.log("request.body.overview_name:",request.body.overview_name);
		console.log("request.body.overview_version:",request.body.overview_version);
		console.log("request.body.overview_context:",request.body.overview_context);
		console.log("request.body.overview_newname:",request.body.overview_newname);
		//console.log("request.body.overview_newversion:",request.body.overview_newversion);
		console.log("request.body.overview_newcontext:",request.body.overview_newcontext);		
		
		if(!request.body.assetType || !request.body.overview_name || !request.body.overview_newname) {

		   var respuesta = {
			   error: true,
			   codigo: 503,
			   mensaje: 'se deben enviar todos los campos obligatorios: assetType, overview_name y overview_newname'
		   };

		   return respuesta;
		   
		}

		var governaceRegistryCoreBusiness160K = new GovernaceRegistryCoreBusiness160K();

		var asset = new Asset(request.body.assetType,request.body.overview_name,request.body.overview_version,request.body.overview_context,request.body.overview_newname,request.body.overview_newcontext);


	   var respuesta = {
		   error: true,
		   codigo: 503,
		   mensaje: 'se deben enviar todos los campos obligatorios'
	   };

		await governaceRegistryCoreBusiness160K.updateAsset(asset).then((value)=> respuesta = value );
		
		return respuesta;

	  
    } catch (err) {
		console.error(err);

		   var respuesta = {
			   error: true,
			   codigo: 502,
			   mensaje: 'Error al crear Asset'
		   };

		return respuesta;

    }

  })
  
  fastify.get('/searchAsset', async (request, reply) => {

    try {
		
		
		console.log('request.query', request.query);   // undefined
		console.log('request.params', request.params); // undefined		
		
		console.log("request.query.assetType:",request.query.assetType);
		console.log("request.query.overview_name:",request.query.overview_name);
		console.log("request.query.overview_version:",request.query.overview_version);
		console.log("request.query.overview_context:",request.query.overview_context);
		
		
		if(!request.query.assetType) {

		   var respuesta = {
			   error: true,
			   codigo: 503,
			   mensaje: 'se deben enviar todos los campos obligatorios: assetType'
		   };

		   return respuesta;
		   
		}

		var governaceRegistryCoreBusiness160K = new GovernaceRegistryCoreBusiness160K();

		var asset = new Asset(request.query.assetType,request.query.overview_name,request.query.overview_version,request.query.overview_context);


	   var respuesta = {
		   error: true,
		   codigo: 503,
		   mensaje: 'se deben enviar todos los campos obligatorios'
	   };

		await governaceRegistryCoreBusiness160K.searchAsset(asset).then((value)=> respuesta = value );
		
		return respuesta;

	  
    } catch (err) {
		console.error(err);

		   var respuesta = {
			   error: true,
			   codigo: 502,
			   mensaje: 'Error al consultar Assets'
		   };

		return respuesta;

    }

  })
  
  fastify.get('/getAssetAssociations', async (request, reply) => {

    try {
		
		
		console.log('request.query', request.query);   // undefined
		console.log('request.params', request.params); // undefined		
		
		console.log("request.query.assetType:",request.query.assetType);
		console.log("request.query.overview_name:",request.query.overview_name);
		console.log("request.query.overview_version:",request.query.overview_version);
		console.log("request.query.overview_context:",request.query.overview_context);
		
		
		if(!request.query.assetType) {

		   var respuesta = {
			   error: true,
			   codigo: 503,
			   mensaje: 'se deben enviar todos los campos obligatorios: assetType y overview_name'
		   };

		   return respuesta;
		   
		}

		var governaceRegistryCoreBusiness160K = new GovernaceRegistryCoreBusiness160K();

		var asset = new Asset(request.query.assetType,request.query.overview_name,request.query.overview_version,request.query.overview_context);


	   var respuesta = {
		   error: true,
		   codigo: 503,
		   mensaje: 'se deben enviar todos los campos obligatorios'
	   };

		await governaceRegistryCoreBusiness160K.getAssetAssociations(asset).then((value)=> respuesta = value );
		
		return respuesta;

	  
    } catch (err) {
		console.error(err);

		   var respuesta = {
			   error: true,
			   codigo: 502,
			   mensaje: 'Error al consultar asociaciones de un asset'
		   };

		return respuesta;

    }

  })
  
  fastify.post('/createAssetAssociations', async (request, reply) => {

	console.log("Iniciando createAssetAssociations...");

    try {	
	
		var respuesta = {
		   error: true,
		   codigo: 503,
		   mensaje: 'se deben enviar todos los campos obligatorios'
		};
		
		var asset = {};
		var assetTarget = {};
		var assetAsociation = {};
		var i = 0;
		var listaAssetAsociation = [];
		
		for( i=0;i<request.body.length;i++){	 		
		
			/*console.log("request.body["+i+"].assetType:",request.body[i].assetType);
			console.log("request.body["+i+"].overview_name:",request.body[i].overview_name);
			console.log("request.body["+i+"].overview_version:",request.body[i].overview_version);
			console.log("request.body["+i+"].overview_context:",request.body[i].overview_context);
			console.log("request.body["+i+"].type:",request.body[i].type);
			console.log("request.body["+i+"].targetAssetType:",request.body[i].targetAssetType);
			console.log("request.body["+i+"].targetAssetName:",request.body[i].targetAssetName);
			console.log("request.body["+i+"].targetAssetContext:",request.body[i].targetAssetContext);
			console.log("request.body["+i+"].targetAssetVersion:",request.body[i].targetAssetVersion);
			*/
			if(!request.body[i].assetType || !request.body[i].overview_name || !request.body[i].type || !request.body[i].targetAssetType || !request.body[i].targetAssetName ) {

			   var respuesta = {
				   error: true,
				   codigo: 503,
				   mensaje: 'se deben enviar todos los campos obligatorios: assetType, overview_name, type, targetAssetType, targetAssetName'
			   };

			   return respuesta;
			   
			}

			asset = new Asset(request.body[i].assetType,
								request.body[i].overview_name,
								request.body[i].overview_version,
								request.body[i].overview_context);
								
			assetTarget = new Asset(request.body[i].targetAssetType,
								request.body[i].targetAssetName,
								request.body[i].targetAssetVersion,
								request.body[i].targetAssetContext);

			assetAsociation = new AssetAsociation(asset,request.body[i].type,assetTarget);		

			listaAssetAsociation[i]=assetAsociation;
		   
		}  

		var governaceRegistryCoreBusiness160K = new GovernaceRegistryCoreBusiness160K();

		await governaceRegistryCoreBusiness160K.createAssetAssociations(listaAssetAsociation).then((value)=> respuesta = value );
		
		return respuesta;

	  
    } catch (err) {
		console.error(err);

		   var respuesta = {
			   error: true,
			   codigo: 502,
			   mensaje: 'Error al crear Asset'
		   };

		return respuesta;

    }

  })

  fastify.post('/promoteDemoteLifecycleAsset', async (request, reply) => {

	console.log("Iniciando promoteDemoteLifecycleAsset...");

    try {	
	
		var respuesta = {
		   error: true,
		   codigo: 503,
		   mensaje: 'se deben enviar todos los campos obligatorios'
		};
		
		var asset = {};

		var i = 0;

/*		
{"assetType":"restservice", (oblig)
"overview_name":"TestRESTService", (oblig)
"overview_version":"1.0.0", (oblig)
"overview_context": "/test"} (oblig)
"nextState":"Testing", (oblig)
"comment": "Se Promueve estado"} (opcional)
}
*/
		
		console.log("request.body.assetType:",request.body.assetType);
		console.log("request.body.overview_name:",request.body.overview_name);
		console.log("request.body.overview_version:",request.body.overview_version);
		console.log("request.body.overview_context:",request.body.overview_context);
		console.log("request.body.nextState:",request.body.nextState);
		console.log("request.body.comment:",request.body.comment);
		
		if(!request.body.assetType || !request.body.overview_name || !request.body.nextState) {

		   var respuesta = {
			   error: true,
			   codigo: 503,
			   mensaje: 'se deben enviar todos los campos obligatorios: assetType, overview_name y nextState'
		   };

		   return respuesta;
		   
		}

		asset = new Asset(request.body.assetType,
							request.body.overview_name,
							request.body.overview_version,
							request.body.overview_context);	


		var governaceRegistryCoreBusiness160K = new GovernaceRegistryCoreBusiness160K();

		await governaceRegistryCoreBusiness160K.promoteDemoteLifecycleAsset(asset,request.body.nextState,request.body.comment).then((value)=> respuesta = value );
		
		return respuesta;

	  
    } catch (err) {
		console.error(err);

		   var respuesta = {
			   error: true,
			   codigo: 502,
			   mensaje: 'Error al crear Asset'
		   };

		return respuesta;

    }

  })
  
  /*
	fastify.get('/', async (request, reply) => {
	  return { hello: 'world' }
	})  
*/
/*

const start = async () => {
  try {
    await fastify.listen(9080,'0.0.0.0', (err, address) => {
	  if (err) throw err
	  const port = fastify.server.address().port
	  console.log(`server listening on ${port}`)
	  console.log(`server listening on ${address}`)
	})
	
	
	
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()

*/
/*

	fastify.listen(3000, err => {
	  if (err) throw err
	  const port = fastify.server.address().port
	  console.log(`server listening on ${port}`)
	})
*/

	fastify.listen(3000, function (err, address) {
	  if (err) {
		console.log(err)
		process.exit(1)
	  }
	  console.log(`server listening on ${address}`)
	})

  
}
