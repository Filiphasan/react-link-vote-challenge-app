export const getDatasToLS = (key) => {
    let items;
    if (localStorage.getItem(key) === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem(key));
    }
    return items;
}
export const setDatasToLS = (key, data) => {
    let items = getDatasToLS(key);
    items.push(data);
    localStorage.setItem(key, JSON.stringify(data));
}

export const setDataToLS = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}
export default getDatasToLS;