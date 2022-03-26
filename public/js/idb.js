let db;

const request = indexedDB.open("budget_tracker")

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore('new_budget', { autoIncrement: true });
};