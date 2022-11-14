//first non blocking using timer 

function blockMe(message) {
    console.log(message)
}
function delay(callback, timer) {
    setTimeout(callback, timer, 'Hello!')
}
//begin 
blockMe('start')
delay(function (response) {
    console.log(response)
}, 5000)
blockMe('end')