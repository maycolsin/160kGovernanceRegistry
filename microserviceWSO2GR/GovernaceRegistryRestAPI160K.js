class GovernaceRegistryCoreBusiness160K{

	constructor(respuesta) {
		this.respuesta = respuesta;
	}


	async createAsset(asset){

		var respuesta = this.respuesta

		
			exec_prom(commandLogin, function(error, stdout, stderr){


					if(error !== null)
					{
						   console.log('exec error: ' + error);

							return error;
					}
					
					console.log('stdout: ' + stdout);
					//console.log('stderr: ' + stderr);

					
					var loginResponse = JSON.parse(stdout);
					
					console.log('loginResponse.data.sessionId: ' + loginResponse.data.sessionId);
					
					var jsonServicioRegistry = '"{""overview_name"":""'+asset.overview_name+'"",""overview_version"":""'+asset.overview_version+'"",""overview_context"": ""'+asset.overview_context+'""}"';
					
					commandCreateAsset = commandCreateAsset + jsonServicioRegistry + ' -b "JSESSIONID='+loginResponse.data.sessionId+'" -v '+PUBLISHER_API_HOST_PORT+'/publisher/apis/assets?type='+asset.assetType;
					
					console.log('commandCreateAsset: ' + commandCreateAsset);
					
					
					exec_prom(commandCreateAsset, function(error2, stdout2, stderr2){						

							if(error2 !== null)
							{
								   console.log('exec error2: ' + error2);
								   
								   return error2;
							}
							
							console.log('stdout2: ' + stdout2);						
																			
							//console.log('createAssetResponse.name: ' + createAssetResponse.name);

							//this.res.status(200).send(stdout2);
							return stdout2;
						}
					).then(()=>{console.log('done')});


				}
				
				
			);		
		
	}
	  
	
}


module.exports = {
  GovernaceRegistryCoreBusiness160K: GovernaceRegistryCoreBusiness160K
}