export function setSearchForUserInLocalStorage(userName, searchValue) {
	try {
        let userSearches = [];
        if(localStorage.getItem(userName)){
            userSearches = JSON.parse(localStorage.getItem(userName));
        }
        if(userSearches.includes(searchValue) === false){
            userSearches.push(searchValue);
            localStorage.setItem(userName, JSON.stringify(userSearches));		
        }
        return true;
	} catch (error) {
		console.error("Error in setSearchForUserInLocalStorage.....", error);
		return false;
	}
}

export function accessSearchFromLocalStorage(userName) {
    try {
        let userSearches = [];
        if (localStorage.getItem(userName)) {
            userSearches = JSON.parse(localStorage.getItem(userName));
        }
        if(userSearches && userSearches.length){
            return userSearches;
        }
        return [];
    } catch (error) {
        console.error("Error in accessSearchFromLocalStorage.....", error);
        return [];
    }
}

export function deleteSearchFromLocalStorage(userName) {
	try {
        localStorage.setItem(userName, JSON.stringify([]));
		return true;
	} catch (error) {
		console.error("Error in deleteSearchFromLocalStorage.....", error);
		return false;
	}
}

export default {
	setSearchForUserInLocalStorage,
	accessSearchFromLocalStorage,
	deleteSearchFromLocalStorage
};
