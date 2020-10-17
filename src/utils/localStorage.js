export function setLocalStorageItem(name, value){
    if(window.localStorage){
        return window.localStorage.setItem(name, value);
    }
    else{
        console.error("LocalStorage is unavailable");
        return null;
    }
}

export function getLocalStorageItem(name){
    if(window.localStorage){
        return window.localStorage.getItem(name);
    }
    else{
        console.error("LocalStorage is unavailable");
        return null;
    }
}