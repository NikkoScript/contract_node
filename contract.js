/**
Design by Nikko 2016

module to validate request receive by server.
the Json request must be a specific format, if not , send false boolean
**/
"use strict";

var contract = class Contract{
	/**
	Constructor
	@param params Array Mandatory aprameter to fullfilled contract
	@return Contract this
	**/
	constructor(params,optionnal){
		this.schema=Array.from(params);
		this.optionnal=Array.from(optionnal||[]);
		this.validParams=[];
		this.invalidParams=[];
		this.validate=false;
		this.locked=false;
	};
	/**
	@param request Object add params to check
	@return contract this
	**/
	params(request){
		var self= this;
		if(this.locked){
			//add parameter after ending contract invalidate current contract
			this.validate=false;
			return this;
		}
		// Loop inside property name of object to check Contract
		var trait=Object.keys(request);
		trait.forEach(function(value,index,array){
			var i=this.schema.lastIndexOf(value);
			if( i !=-1){
				this.validParams.push(this.schema.splice(i,1));
			}
			else {
				var j=this.optionnal.lastIndexOf(value);
				if(j!=-1){
					this.validParams.push(this.optionnal.splice(j,1));
				}
				else{
					this.invalidParams.push(value);
				}
			}

		},self)
		return this;
	}

	/**
	end this contract, after none params can be checked
	@return contract this
	**/
	end(){
		this.locked=true;
		if (this.invalidParams.length != 0 || this.schema.length !=0){
			this.validate=false;
		}
		else{
			this.validate=true;
		}
		return this;

	}
	/**
	@return Boolean : Valid Request
	**/
	valid(){
		if(this.locked){return this.validate;}
		return false
	}
}

exports = module.exports = contract;
