function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4)
logParams(1, 2, 3)
logParams(1, 2)
logParams(1)
logParams()

// let x = logParams(1, 2)
// console.log(x)

function defaultParam(a, b, c = 12) {
    console.log(a, b, c)
}

defaultParam(7, 8, 9)
defaultParam(7, 8)


// Operador Spread/Rest
function logNums(...nums) {
    console.log(Array.isArray(nums))
    for(let n of nums) {
        console.log(n)
    }
}

logNums(1, 2, 3)

// 
function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3, 4, 5))