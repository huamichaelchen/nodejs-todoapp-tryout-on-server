
/*
 *
 * Within the controller we are using the $http service to make an AJAX 
 * request to the '/api/v1/todos' endpoint and then updating the 
 * scope accordingly.
 *
 *
 * Well, we’re injecting the $scope and $http services. 
 * Also, we’re defining and updating $scope to handle binding.
 */
angular.module('nodeTodo', []).controller('mainController', function($scope, $http) {
    $scope.formData = {};
    $scope.todoData = {};

    // Get all todos
    $http.get('/api/v1/todos').success(function(data) {
        $scope.todoData = data;
        console.log(data);
    }).error(function(error) {
        console.log('Error: ' + error);
    });

    // Create a new todo
    $scope.createTodo = function(todoID) {
        $http.post('/api/v1/todos', $scope.formData).success(function(data) {
            $scope.formData = {};
            $scope.todoData = data;
            console.log(data);
        }).error(function(error) {
            console.log('Error: ' + error);
        });
    };

    // Delete a todo
    $scope.deleteTodo = function(todoID) {
        $http.delete('/api/v1/todos/' + todoID).success(function(data) {
            $scope.todoData = data;
            console.log(data);
        }).error(function(data) {
            console.log('Error: ' + data);
        });
    };
});


