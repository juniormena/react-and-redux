//Closures
function hola(name){
    var hey = function(){
        console.log(`${name}`)
    };
    return hey;
};

const de = hola('Junior')

//solo es posible la auto ejecucion cuando la funcion es asignada a una funcion
 var gr = function(){
    console.log('fgsdfgsdfgds');
}();

