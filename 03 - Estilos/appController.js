// Función contructora 
function appController() {
    //$scope -> objeto que nos permite acceder a elementos que estan definidos 
    // tanto en la vista (html) como en el controller.

    // Podemos utilizar el mismo nombre para hacer referencia a $scope que en la vista con var vm = this.

    var vm = this;
    vm.user = {
        name: 'Pepe',
        apellidos: 'Pérez'
    };
    vm.curso = 'AngularJS';

    vm.borrar = function () {
        vm.user.name = '';
        console.info("click borrar");
        console.log($scope);
    }
}

angular.module("appMain", [])
    .controller("appController", appController
    )
