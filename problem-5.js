function rickshawCost(people) {
    if (typeof people !== 'number') {
        return 'please provide the valid number'
    }

    const bus = 50;
    const microBus = 15;
    const rickshawVara = 20;

    const busReman = people % bus;

    const microBusRemain = busReman % microBus;


    return microBusRemain * rickshawVara;

}

const result = rickshawCost(50);
console.log(result);
