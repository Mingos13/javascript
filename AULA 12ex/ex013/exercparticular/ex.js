let agora = new Date()
//let hora = agora.getHours()
let hora = 13

console.log(`agora sao ${hora} horas`)
if (hora <= 12){
    console.log('bom dia')
}else if(hora < 18){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}