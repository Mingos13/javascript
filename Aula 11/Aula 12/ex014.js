let dia = new Date()
let hora = dia.getHours()
console.log(`agora sao ${hora} horas `)
if(hora <= 12){
    console.log(`Agora sao ${hora} horas da manha`)
}else if(hora > 12 && hora <= 23){
    console.log('boa noite')
}else{
    console.log('ja e madrugada') 
}