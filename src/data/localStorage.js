
export const set = (key,val) =>{
    localStorage.setItem(key, JSON.stringify(val));
}

export const get = (key) =>{
    return JSON.parse(localStorage.getItem(key));
}

export const remove = (key) =>{
    localStorage.removeItem(key)
}

export const clearAll = () =>{
    localStorage.clear();
}