// function map(arr, t){
//     const results=[]
//     for(const element of arr){
//         results.push(t.element)
//     }
//     return results
// }

// const sampleArray=[1,2,3]

// console.log(map(sampleArray, el=>el**3))

//gresit


//reimplement the reduce(reduce left) method as a global funciton


function map(arr, t) {
    const results = [];
    for (const element of arr) {
        results.push(t(element)); // Call the function t with the current element
    }
    return results;
}

const sampleArray = [1, 2, 3];

console.log(map(sampleArray, el => el ** 3)); // This will output: [1, 8, 27]
