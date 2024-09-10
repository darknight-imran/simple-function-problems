const person1 = {
    name: 'imran',
    honars: 30,
    hsc: 20,
    ffFamily: true
}

const person2 = {
    name: 'jobaer',
    honars: 40,
    hsc: 20,
    ffFamily: false
}

function gvJobs(info) {
    if (typeof info !== 'object') {
        return 'please provide the valid objects'
    }
    let totalMarks = info.honars + info.hsc;
    if (info.ffFamily) {
        totalMarks += (totalMarks * 0.2)
    }

    if (info.ffFamily && totalMarks >= 80) {
        return 'F F family job...!'
    } else if (info.ffFamily && totalMarks < 80) {
        return 'mamma bad luck try again..!'
    } else if (!info.ffFamily && totalMarks >= 80) {
        return 'good luck'
    } else if (!info.ffFamily && totalMarks < 80) {
        return 'tmi ke ami ke rajakar rajkar'
    }

    //     if (totalMarks >= 80) {
    //         return 'you life the success'
    //     }
    //     else {
    //         return 'bad luck...! please try to other job.'
    //     }
}

const result = gvJobs(person1);
console.log(result);


