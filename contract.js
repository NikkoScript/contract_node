/**
	Design by Nikko 2016

	module to validate request receive by server.
	the Json request must be a specific format, if not , send false boolean
**/
"use strict";

var contract = class Contract{
	/**
	Constructor
	@param Contarct Object To check
	@return Contract
	**/
	constructor(params){
		this.schema=Array.from(params);
		this.validParams=[];
		this.invalidParams=[];
		this.validate=false
	};
	/**
	@param : add params to check
	**/
	params(request){
		var self= this
		var trait=Object.keys(request)
		trait.forEach(function(value,index,array){
			var i=this.schema.lastIndexOf(value)
			if( i !=-1){
			        this.validParams.push(this.schema.splice(i,1))
			}
				else {
					this.invalidParams.push(value)
				}
				
		},self)
		return this;
	}

	end(){
		if (this.invalidParams.length != 0 || this.schema.length !=0){
			console.log("\nbroke contract mismatch params :"+this.invalidParams.toString()+" ; missing params :"+this.schema.toString()+"\n")
		}
		else{
			this.validate=true
		}
		return this;

	}
}

exports = module.exports = contract;
