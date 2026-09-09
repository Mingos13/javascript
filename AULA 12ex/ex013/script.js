function verificar (){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value == 0 || Number(fano.value) > ano ){
        window.alert('[ERRO] verifica os dados e tente novamente')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('src', 'foto')

        
        if (fsex[0].checked){
            genero = 'homem'
            
            if ( idade >=0 && idade <10 ){
                img.setAttribute('src', 'foto-bebe-m..png')
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}