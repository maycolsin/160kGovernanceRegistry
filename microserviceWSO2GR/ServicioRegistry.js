
class ServicioRegistry {
   
   constructor(title, subtitle, stateMain, stateCdlv, stateLgvl, first, last, uptime, uptimeAnterior) {
	   
	    this.title = title;
		this.subtitle = subtitle;
		this.uptime = uptime;
		this.uptimeAnterior = uptimeAnterior;
		
		if(stateMain!=undefined){
			
			var servers = undefined;
			
			if(stateCdlv!=undefined || stateLgvl!=undefined)
				servers = new ServerState(stateCdlv, stateLgvl);
		
			this.state = new State(stateMain, servers);
		}

		if(first!=undefined)
			this.first=first;
		if(last!=undefined)
			this.last=last;
   }   
   
}


module.exports = {
  ServicioRegistry: ServicioRegistry
}
