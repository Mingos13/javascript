function tabuada(){
    let nu = document.getElementById('txt1')
    let tab = document.getElementById('seltab')
    if (nu.value == 0){
        window.alert('Nao posso realizar tabuada de 0')
    }else{
        let t = Number(nu.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 12){
            let item = document.createElement('option')
            item.text = `${t} x ${c} = ${t*c}`
            tab.appendChild(item)
            c++
        }
    }
}