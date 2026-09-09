let valores = [4,5,8,2,7,6]

/*for( let pos = 0; pos<valores.length; pos++){
    console.log(`O valor na posicao ${pos} e ${valores[pos]} `)
}*/

for (let pos in valores){
    console.log(`O valor na posicao ${pos} e ${valores[pos]}`)
}