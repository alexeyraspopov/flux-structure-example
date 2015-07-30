import Dispatcher from "../AppDispatcher";
import * as ActionTypes from "../Types";
import {Immutable as Store} from "flux-stateful";

export default Store(Dispatcher, {
	getInitialState() {
		return {
			name: ""
		};
	}
});
