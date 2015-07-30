import Dispatcher from "../AppDispatcher";
import * as ActionTypes from "../Types";
import * as WebAPI from "../api/WebAPI";

export function loadPosts(token) {
	return WebAPI.posts(token).then(
		data => Dispatcher.dispatch({ type: ActionTypes.POSTS_LOADED, data }),
		error => Dispatcher.dispatch({ type: ActionTypes.POSTS_LOAD_FAILED, error })
	);
}
