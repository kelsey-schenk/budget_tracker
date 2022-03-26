let db;

const request = indexedDB.open("budget_tracker")

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore('new_budget', { autoIncrement: true });
};

request.onsuccess = function (event) {
    db = event.target.result;
    if (navigator.onLine) {
        uploadBudget();
    }
};

request.onerror = function (event) {
    console.log("Error: " + event.target.errorCode);
}

function saveRecord(record) {
    const transaction = db.transaction(["new_budget"], "readwrite");

    const store = transaction.objectStore("new_budget");

    store.add(record);
}