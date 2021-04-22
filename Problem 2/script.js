function fiboEvenSum(n) {
    let n1 = 1;
    let n2 = n1;
    let evenSum = 0;
    
    for (let i = 0; i < n; i++) {
        let sum = n1 + n2;
        if (sum > n) {
            break;
        } else if (sum % 2 === 0) {
            evenSum += sum;
        }
        n1 = n2;
        n2 = sum;
    }
  return evenSum;
}

console.log(fiboEvenSum(10));