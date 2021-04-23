const palindromeFinder = (number) => {
    
    let matchFoundCount = 0;
    const numStr = number.toString();
    const strLength = number.toString().length;

    if (strLength % 2 === 0) {
        // number is even digits long
        for (let i = 0; i < strLength / 2; i++) {
            if (numStr[i] === numStr[(numStr.length - (i+1))]) {
                matchFoundCount++;
            }
        }

        if (matchFoundCount === strLength / 2) {
            return true;
        }
    } else {
        //number is odd digits long
        for (let i = 0; i < ((strLength - 1) / 2); i++) {
            if (numStr[i] === numStr[(numStr.length - (i+1))]) {
                matchFoundCount++;
            }
        }
    
        if (matchFoundCount === (strLength - 1) / 2) {
            return true;
        }
    }
};


const largestPalindromeProduct = (n) => {

    let num = (10 ** n) - 1;
    const palArr = [];
    let largestPal = 0;

    for (let i = num; i > 0; i--) {

        for (let j = i; j > 0; j--) {
            let product = j * i;
            if (palindromeFinder(product)) {
                palArr.push(product);
            }
        }
    }
    for (let num of palArr) {
        if (num > largestPal) {
            largestPal = num;
        }
    }
    return largestPal;
};

largestPalindromeProduct(2);