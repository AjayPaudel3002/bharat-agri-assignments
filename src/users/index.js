import { createCookie, accessCookie, deleteCookie } from "./cookies";

export function setUserInCookie(userName, user) {
	var isCookieCreated = createCookie(userName, user, 1);
	if (isCookieCreated) {
		return true;
	} else {
		return false;
	}
}

export function clearUser(userName) {
	var isCookieDeleted = deleteCookie(userName);
	if (isCookieDeleted) {
		return true;
	} else {
		return false;
	}
}

export function checkIsUserPresentInCookie(userName) {
	var user = accessCookie(userName);
	if (user !== "") return true;
	else {
		return false;
	}
}

export function getUserFromCookie(userName) {
	return accessCookie(userName);
}

export function checkIsAuthenticated() {
	try {
		var isUserPresent = checkIsUserPresentInCookie("userName");
		if (isUserPresent === false) {
			return { isAuthenticated: false, name: null };
		}
		var name = getUserFromCookie("userName");
		return { isAuthenticated: true, name: name };
	} catch (error) {
		console.error("Error in authenticating user....", error);
		return { isAuthenticated: false, name: null };
	}
}

export default {
	setUserInCookie,
	clearUser,
	checkIsUserPresentInCookie,
	getUserFromCookie,
	checkIsAuthenticated
};
