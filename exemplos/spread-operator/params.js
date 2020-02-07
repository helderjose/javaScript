/*
obs: não funcionou com node, tentar arrumar
*/
function myCallBack() {
    console.log('myCallBack foi chamado')
}

function myFunction(...params, callbackParam) {
    console.log('params: ', params[0])
    console.log('params: ', params[1])
    console.log('callbackParam: ', callbackParam)
}

myFunction('a', 'b', 5, myCallBack)
