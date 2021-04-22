// Original
// function largestPrimeFactor(number) {

//     const allFactors = [];
    
//     // Find all the factors of the given number
//     // Store each of these factors in 'allFactors'
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             allFactors.push(i);
//         }
//     }

//     // Filter for only prime factors
//     const primeFactors = allFactors.filter(fac => {
//         // Find all factors of each factor in 'allFactors'
//         let facStorage = [];
//             for (let i = 1; i <= fac; i++) {
//                 if (fac % i === 0) {
//                 facStorage.push(i);
//             }
//         }
//         // Find the prime factors
//         if (facStorage.length <= 2) {
//             return true;
//         }
//     });
//     // return the largest prime factor
//   return primeFactors[primeFactors.length-1];
// }

// largestPrimeFactor(13195);


// Refactored
function largestPrimeFactor(number) {
    const primeFactors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            let facStorage = [];
            for (let j = 1; j <= i; j++) {
                if (i % j === 0) {
                    facStorage.push(j);
                }
            }
            if (facStorage.length <= 2) {
                primeFactors.push(i);
            }
        }
    }
  return primeFactors[primeFactors.length-1];
}

largestPrimeFactor(13195);
