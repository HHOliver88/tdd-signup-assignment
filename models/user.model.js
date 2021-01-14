const Mysql                 = require('mysql');
const Constants     		= require("../config/constants");

import { Model } from './model';

class UserModel extends Model {
	constructor() {
		super();
	}

	async getUser(name) {
		let response_data 	    = {status: false, result: [], err: null};
		
		try{
			let get_user_query 		= Mysql.format(`
				SELECT users.id, users.name
				FROM users
				WHERE users.name = ? LIMIT 1;`, [name]
			);

			let [get_user_result] = await this.executeQuery(get_user_query);
	
			if(get_user_result){
				response_data.status 	= true;
				response_data.result 	= get_user_result;
			}else{
				response_data.message 	= "No user found";
			}
		}catch(err){
			response_data.err 			= err;
			response_data.message 		= "Error in getting a user.";
		};
	
		return response_data;		
	}

	async addUser(params){
		let response_data 	    = {status: false, result: [], err: null, redirect_url: null};
		let redirect_url 		= Constants.FRONTEND_URL + ':' + Constants.PORT + '/projects';
		
		try{
			let insert_user_query  = Mysql.format(`INSERT INTO users SET ?;`, params);
			let insert_user_result = await this.executeQuery(insert_user_query);
	
			if(insert_user_result){
				response_data.status 		= true;
				response_data.redirect_url 	= redirect_url;
			}else{
				response_data.message 	= "Something went wrong";
			}
		}catch(err){
			response_data.err 			= err;
			response_data.message 		= "Something went wrong";
		};
	
		return response_data;		
	}
}

export { UserModel };