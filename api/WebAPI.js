export function posts(token) {
	return fetch("/posts", {
		headers: {
			Authentication: "Token " + token
		}
	}).then(response => response.json());
}
