export function createCookie(cookieName, cookieValue, daysToExpire) {
	try {
		var date = new Date();
		date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
		document.cookie =
			cookieName + "=" + cookieValue + "; expires=" + date.toGMTString() + "; path=/";
		return true;
	} catch (error) {
		console.error("Error in creating new cookie.....", error);
		return false;
	}
}

export function accessCookie(cookieName) {
	var name = cookieName + "=";
	var allCookieArray = document.cookie.split(";");
	for (var i = 0; i < allCookieArray.length; i++) {
		var temp = allCookieArray[i].trim();
		if (temp.indexOf(name) === 0) {
			return temp.substring(name.length, temp.length);
		}
	}
	return "";
}

export function deleteCookie(cookieName) {
	try {
		document.cookie = cookieName + "=; path=/";
		return true;
	} catch (error) {
		console.error("Error in deleting cookie.....", error);
		return false;
	}
}

export default {
	createCookie,
	accessCookie,
	deleteCookie
};
