let idade = 67
console.log(`Voce tem ${idade} anos`)
if (idade < 18){
    console.log('nao pode votar')
}else if (idade < 18 || idade > 65){
    console.log('voto opcional')
}else{
    console.log('voto obrigatorio')
}