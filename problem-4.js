const xyz = [125, 20, false, true, false, true, { name: 'imran' }]

function booleanCheck(array) {
    if (!Array.isArray(array)) {
        return 'please valid the array'
    }

    let count = 0;
    for (const element of array) {
        if (typeof element === 'boolean') {
            count++
        }
    }
    return count;
}

const result = booleanCheck("xyz");
console.log(result);
