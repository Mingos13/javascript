let agora = new Date()
//let diasem = agora.getDay()
diasem = 5
switch (diasem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    default:
        console.log('[erro]: dia invalido')
        break        
}