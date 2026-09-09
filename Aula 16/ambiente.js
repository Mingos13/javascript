let num = [8, 9, 8,]


num.sort()
 console.log(`o primeiro vetor ${num[0]}`)
 console.log(`a variavel num tem ${num.length} elementos`)
 let pos = num.indexOf(9)
 let ache = num.indexOf(2)

 if (ache == -1){
    console.log('valor nao encontrado')
 }else{
    console.log('valor existe')
 }
  
 console.log(`o valor 2 esta na posicao ${ache}`)
 console.log(`o valor 8 esta na posicao ${pos}`)