// ### Flattening
//
// Use the existing Array \`reduce\` method in combination with the \`concat\` method to “flatten”an array of arrays into a single array that has all the elements of the original arrays.
// You must name the function "flatten".

// e.g.
//
// ```
// let a = [[1,2],[3,4],[5,6,7]];
// ```
//
// ```
// flatten(a);
// ```
//
// ```
// // result is:
// ```
//
// ```
// // [1,2,3,4,5,6,7]
// ```
//
// Bonus: make it work even with a nested array like:
//
// ```
// let nested = [[1,2],[3, [4, 5]], [6], 7]
// ```
//
// ```
// flatten(nested);
// ```
//
// ```
// // [1,2,3,4,5,6,7]
// ```

function flatten(array){
    let array2 =[];
    const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

    // Attempd the bonus but was not sure how to access the nested arrays

    // for(let i=0;i<array.length;i++) {
    //     console.log(array[i].length)
    //     if(array[i].length>2){
    //         array2 = array.reduce(reducer)
    //     console.log(array[i])
    //     //console.log(array2)
    //     }
    // }

    array2 = array.reduce(reducer)
    //console.log(Array.isArray(array2)) check to see if is array type
    return array2;
}

module.exports = flatten;


let a = [[1,2],[3,4],[5,6,7]];
console.log(flatten(a));

//let nested = [[1,2],[3, [4, 5]], [6], 7]
//flatten(nested);