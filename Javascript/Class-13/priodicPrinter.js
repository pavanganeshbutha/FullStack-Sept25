function priodicPrinter(callback, timeInterval) {
    setInterval(callback, timeInterval);
}

function cb() {
    console.log("This is callback");
}

priodicPrinter(cb, 1000);