// Controller HolaMundo
// Enalzamos Hola_Mundo_con_controller.html con el js
// [] -> Array de dependencias
angular.module("appMain", [])
    .controller("AppController", ['$scope', function ($scope) {

        //$scope -> objeto que nos permite acceder a elementos que estan definidos 
        // tanto en la vista (html) como en el controller.

        $scope.user = {
            name: 'Pepe',
            apellidos: 'Pérez'
        };
        $scope.curso = 'AngularJS';

        $scope.borrar = function () {
            $scope.user.name = '';
            console.info("click borrar");
            console.log($scope);
        }


    }]
    )




