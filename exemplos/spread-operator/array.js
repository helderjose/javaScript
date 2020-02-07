const arr = [1, 2, 3]

function sum (x, y, z) {
    return x + y + z;
}

let result = sum(...arr)

console.log(result) // 6