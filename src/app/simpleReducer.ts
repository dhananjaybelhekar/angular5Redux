import {  Action } from '@ngrx/store';

export function simpleReducer(state :string,action:Action){
	console.log(action.type,state);
	switch(action.type){
		case 'hii':
				return state ="BHello";
		case 'bye':
				return state ="see you soon";
		default:
				return state;
	}

}