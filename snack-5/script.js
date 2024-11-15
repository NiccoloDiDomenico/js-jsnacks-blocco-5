const nums = [2, 8, 4, 7, 12, 87];
console.log(nums);

const evenNums = nums.filter((curNum, i) => {
    // console.log(curNum);
    if (curNum % 2 === 0) {
        return curNum;
    };
});
console.log(evenNums);



// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]