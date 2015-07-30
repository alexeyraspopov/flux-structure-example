import Dispatcher from "../AppDispatcher";
import * as ActionTypes from "../Types";
import {Immutable as Store} from "flux-stateful";

export default Store(Dispatcher, {
	getInitialState() {
		return {
			posts: [],
			error: ''
		};
	}

	[ActionTypes.POSTS_LOADED](state, action) {
		return { ...state, posts: action.data };
	},

	[ActionTypes.POSTS_LOAD_FAILED](state, action) {
		return { ...state, error: action.error };
	}
});
