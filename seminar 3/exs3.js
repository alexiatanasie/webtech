
function sumDiv(arr, div) {
    
    const divisible = arr.filter(num => num % div === 0);
    
    
    const sum = divisible.reduce((acc, curr) => acc + curr, 0);
    
    return sum;
}

const numbers = [1, 2,3, 4,5];
const div = 2;
console.log(sumDiv(numbers, div));  





//cocorul-gri-007