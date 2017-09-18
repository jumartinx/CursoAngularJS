class AppController {

    constructor() {

    }

    $onInit() {
        this.user = {
            name: 'Pepe',
            apellidos: 'Pérez'
        };
        this.curso = 'AngularJS';
    }

    borrar = function () {
        this.user.name = '';

    }
}


// Función contructora 
function appController() {
    //$scope -> objeto que nos permite acceder a elementos que estan definidos 
    // tanto en la vista (html) como en el controller.

    // Podemos utilizar el mismo nombre para hacer referencia a $scope que en la vista con var vm = this.





}

angular.module("appMain", [])
    .controller("appController", appController
    )

