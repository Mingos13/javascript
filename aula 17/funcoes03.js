function fatorial(t){
    let fat = 1
    for(let c = t; c > 1; c--){
       fat *= c
    }
    return fat
}
console.log(fatorial(5))
