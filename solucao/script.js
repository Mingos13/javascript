let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')


let numeros = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
    
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
     }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, numeros)){
        
        numeros.push(Number(num.value))
        let item =document.createElement('option')
        item.text = `valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('valor invalido ou nao encontrado')
    }
    num.value = ''
    num.focus ()
}
function finalizar(){
    if (numeros.length == 0){
        window.alert('adicione um valor...')
    }else{
        let tot = numeros.length
        let maior = numeros[0]
        let manor = numeros[0]
        let soma = 0 
        let media = 0
        for( let pos in numeros){
            soma += numeros[pos]
           /* media = soma / numeros.length*/
            if(numeros[pos] > maior)
                maior = numeros[pos]
            if(numeros[pos] < maior)
                menor = numeros[pos]
        }
        
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} numeros</p>`
        res.innerHTML += `<p> O maior valor informado e ${maior}</P>`
        res.innerHTML += `<p> O menor valor informado e ${menor}</P>`
        res.innerHTML += `<p> A soma de todos os valores e ${soma}</P>`
        res.innerHTML += `<p> A media e ${media}</p>`
    }
}
