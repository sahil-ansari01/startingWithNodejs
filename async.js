function delayPrint(value, delay) {
    return new Promise(resolve => {
        setTimeout( () => {
            console.log(value);
            resolve();
        }, delay)
    })
}

async function printSequence() {
    await delayPrint('a', 0);
    await delayPrint('b', 0);
    await delayPrint('c', 3000);
    await delayPrint('d', 2000);
    await delayPrint('e', 0);
}

printSequence();