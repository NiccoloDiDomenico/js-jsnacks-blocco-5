const numbers = [2, 8, 4, 7, 2, 87];
console.log(numbers);

const increasedNumbers = numbers.map((curNumber, i) => {
    // console.log(curNumber);
    increase = curNumber;
    increase++
    // console.log(increase);
    return increase
})
console.log(increasedNumbers);

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]