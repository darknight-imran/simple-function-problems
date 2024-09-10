function calculateSavings(income) {
    if (typeof income !== 'number') {
        return ('please provid the number');

    }
    const homeRent = 5000;
    const mealRent = 3000;
    const personalExpenses = 2000;
    const totalExpenses = homeRent + mealRent + personalExpenses;
    // console.log(totalExpenses);
    if (totalExpenses > income) {
        return ("Earn more...!")
    }

    const savings = income - totalExpenses;
    return savings;
}

const result = calculateSavings(55000)
console.log(result);
