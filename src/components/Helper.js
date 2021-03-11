export const getDataToLS = (key) => {
    let items;
    if (localStorage.getItem(key) === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem(key));
    }
    return items;
}
export const setDataToLS = (key, data) => {
    let items = getDataToLS(key);
    items.push(data);
    localStorage.setItem(key, JSON.stringify(data));
}
export default getDataToLS;