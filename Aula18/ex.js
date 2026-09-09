const frutas = ['maca','banana','laranja']
frutas.forEach(function(item, indice){
    console.log(indice, item)
})

const numeros = [2,4,7,8,20]
let duplicar = numeros.map(function(item){
    return item * 2
})
console.log(duplicar)