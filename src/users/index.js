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

// return {isAuthenticated : bool, userType : string ('customer', 'vendor', 'admin')}
export function checkIsAuthenticated() {
	try {
		var isUserPresent = checkIsUserPresentInCookie("user");
		if (isUserPresent === false) {
			return { isAuthenticated: false, userType: null };
		}
		var user = getUserFromCookie("user");
		var isTypePresent = checkIsUserPresentInCookie("userType");
		if (isTypePresent === false) {
			return { isAuthenticated: false, userType: null };
		}
		var userType = getUserFromCookie("userType");
		return { isAuthenticated: true, userType: userType, user: user };
	} catch (error) {
		console.error("Error in authenticating user....", error);
		return { isAuthenticated: false, userType: null };
	}
}

export default {
	setUserInCookie,
	clearUser,
	checkIsUserPresentInCookie,
	getUserFromCookie,
	checkIsAuthenticated
};
