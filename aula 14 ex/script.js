function contar(){
   let ini = document.getElementById('txti')
   let fm = document.getElementById('txtf')
   let pass = document.getElementById('txtp')
   let res = document.getElementById('res')

   if (ini.value == 0 || fm.value == 0 || pass.value == 0){
      window.alert(`[ERRO] verifica os numeros preenchidos`)
   }else{
      res.innerHTML = 'contando'
      let i = Number(ini.value)
      let f = Number(fm.value)
      let p = Number(pass.value)
      
      if (p <= 0){
         window.alert('impossivel realizar a contagem')
         p = 1
      }
      
      if( i > f){
         for(let c = i; c >= f ; c -= p){
            res.innerHTML += `${c}`
         }
      }

      for ( let c = i ; c <= f; c += p ){
         res.innerHTML += `${c}`
      }

   }
}