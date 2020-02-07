//app.js

//criação de um módulo "biblioteca" chamada "app".
var app = angular.module('app', []);

app.controller('ClienteCtrl', function ($scope) {

    $scope.nome = "Fulano";

    $scope.cliente = {
        "id": 1,
        "nome": "Bentrano"
    };

    $scope.clientes =
    [
        {
            "id": 1,
            "nome": "João",
            "blocked": true
        },
        {
            "id": 2,
            "nome": "Maria",
            "blocked": false
        }
    ];

});

app.controller('FormCtrl', function ($scope) {

    $scope.cliente = {
        "nome": "Fulano",
        "email": "fulano@gmail.com",
        "genero": "Masculino"
    };

    /*$scope.generos = [
        "Masculino", "Feminino", "Indefinido", "Outros"
    ];*/

    $scope.generos = [
        { "label": "Masculino", "id": 1 },
        { "label": "Feminino", "id": 2 }
    ];

    $scope.clientes = [
        
    ]

    $scope.salvar = function () {
        //TODO: Salvar em uma BD ou enviar para Servidor.
        if($scope.cliente){
            $scope.clientes.push(this.cliente);
        }
        $scope.cliente = {};
        //alert($scope.cliente.nome);
    }
    

    
    
    var varSetFocus = setInterval(function(){setFocus() }, 1000);
    
    function setFocus(){
        var elemento = document.getElementById("teste");
        elemento.focus();
        //alert(elemento.hasAttribute('class'));
        // alert(elemento.classList);
        console.log(elemento.className);
        console.log(elemento.className += ' focado');
        //console.log(elemento.hasAttribute('class'));
        
        var classes = elemento.classList;
        console.log(classes);
        for( i = 0; i < classes.length; i++ ){
            if(classes[i] ==  "focado"){
                clearInterval(varSetFocus);
            }
        }
        
        if(elemento.hasFocus== 1){
            alert("foi");
        }
        
        //clearInterval(varSetFocus);
        
        // if( document.getElementById("teste").hasFocus() ){
        //     clearInterval(varSetFocus);
        // }
        console.log("no fim do setFocus()");
    }
    
});




//app.js

//criação de um módulo "biblioteca" chamada "app".
var app = angular.module('app', []);

app.controller('CllienteCtrl', function ($scope) {

    $scope.nome = "Fulano";

    $scope.cliente = {
        "id": 1,
        "nome": "Bentrano"
    };

    $scope.clientes =
    [
        {
            "id": 1,
            "nome": "João",
            "blocked": true
        },
        {
            "id": 2,
            "nome": "Maria",
            "blocked": false
        }
    ];

});

app.controller('FormCtrl', function ($scope) {

    $scope.cliente = {
        "nome": "Fulano",
        "email": "fulano@gmail.com",
        "genero": "Masculino"
    };

    /*$scope.generos = [
        "Masculino", "Feminino", "Indefinido", "Outros"
    ];*/

    $scope.generos = [
        { "label": "Masculino", "id": 1 },
        { "label": "Feminino", "id": 2 }
    ];

    $scope.clientes = [
        
    ]

    $scope.salvar = function () {
        //TODO: Salvar em uma BD ou enviar para Servidor.
        if($scope.cliente){
            $scope.clientes.push(this.cliente);
        }
        $scope.cliente = {};
        //alert($scope.cliente.nome);
    }
    

    
    
    var varSetFocus = setInterval(function(){setFocus() }, 1000);
    
    function setFocus(){
        var elemento = document.getElementById("teste");
        
        //elemento.focus();
        elemento.getAttribute('focus');
        //alert(elemento.getAttribute('focus'));
        //console.log(elemento.getAttribute('id'))
        // console.log(elemento.)
        //elemento.value = "aaa@gmail.com";
        
        //alert(elemento.hasAttribute('class'));
        // console.log(elemento.classList);
        // console.log("className: " + elemento.className);
        elemento.className += ' focado';
        // console.log(elemento.classList);
        //console.log(elemento.hasAttribute('class'));
        
        var classes = elemento.classList;
        // console.log(classes);
        for( i = 0; i < classes.length; i++ ){
            if(classes[i] ==  "focado"){
//                clearInterval(varSetFocus);
            }
        }
        
        // console.log(document.activeElement.tagName);
        console.log(document.activeElement.classList);
        
        //clearInterval(varSetFocus);
        
        // if( document.getElementById("teste").hasFocus() ){
        //     clearInterval(varSetFocus);
        // }
        console.log("no fim do setFocus()");
    }
    
});