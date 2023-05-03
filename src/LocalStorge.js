export function removeItem(item){
    window.localStorage.removeItem(item);

}
export function getItem(item){
    return localStorage.getItem(item);
}
export function addItem(localeStorageItem, item){
    localStorage.setItem(localeStorageItem, item);
}
export default {removeItem,getItem,addItem}