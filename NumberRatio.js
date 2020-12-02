/*
Take an array containing integer values as an input. 
Return the ratios of positive numbers, negative numbers,
 zeros, even and odd to the length of the array.

The numbers should be rounded to 3 decimal places.

Example:

NumberRatio([-4,3,-9,0,4,1]) = [0.5, 0.333, 0.167, 0.5, 0.5]
*/
const NumberRatio = (arr) => {
    let positive = negative = zeros = even = odd = 0

    for(i=0; i < arr.length; i++){
        if (arr[i] < -arr[i]){
            negative += 1
        } else if (arr[i] > -arr[i]){
            positive += 1
        } else if (arr[i] === 0){
            zeros += 1
        }

        if (arr[i]%2 === 0){
            even += 1
        } else {
            odd += 1
        }
    }
    const result = [positive, negative, zeros, even, odd]
    return result.map(a => (a/arr.length).toString().length <= 5? a/arr.length : Number((a/arr.length).toFixed(3)))
}

console.log(NumberRatio([-4,3,-9,0,4,1]))

/*
dari ini jadi tau
perbedaan dari parseInt dengan Number
parseInt = dibulatkan
Number = angka aslinya
*/