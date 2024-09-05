function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){ 
         fat = fat * c
    }
    return fat
}

let res = fatorial(5)
console.log(res)
