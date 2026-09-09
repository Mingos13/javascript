function carregar(){
    let msg = document.getElementById('msg')
    let imag = document.getElementById('imagem')
    let agora = new Date()
   // let hora = agora.getHours()
    let hora = new Date()
    msg.innerHTML = `Agora sao ${hora} horas`
    
    if ( hora >= 0 && hora < 12){
        imag.src = 'fototarde(1)(1).png'
        document.body.style.background = 'red'

    }else if ( hora >= 12 && hora < 18 ){
        imag.src = 'fototarde(1)(1).png'
    }else{
        imag.src = 'fotoanoite.png'
        document.body.style.background = 'blue'
    }
}