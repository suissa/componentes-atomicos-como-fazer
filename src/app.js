MessageCtrl.$inject = ['$scope', 'EventEmitter'];

function MessageCtrl($scope, EventEmitter) {
  function validate(value) {
    if (value) {
      EventEmitter.emit('validate:success', 'validou');
      $scope.validateStatus = true
    } else {
      EventEmitter.emit('validate:error', 'error');
      $scope.validateStatus = false
    }
  }
  $scope.validate = validate;
  $scope.validateStatus = false
}

FormCtrl.$inject = ['$scope', 'EventEmitter'];

function FormCtrl($scope, EventEmitter) {
  $scope.validate = false

  EventEmitter.on('validate:success', function(event, args) {
    console.log('validate:success', args);
    EventEmitter.emit('sendDisabled:false', 'validou');
  });
  EventEmitter.on('validate:error', function(event, args) {
    console.log('validate:error', args);
    EventEmitter.emit('sendDisabled:true', 'validou');
  });
}

SendCtrl.$inject = ['$scope', 'EventEmitter'];

function SendCtrl($scope, EventEmitter) {
  EventEmitter.on('sendDisabled:false', function(event, args) {
    console.log('sendDisabled:false', args);
    $scope.buttonDisabledStatus = false
  });
  EventEmitter.on('sendDisabled:true', function(event, args) {
    console.log('sendDisabled:true', args);
    $scope.buttonDisabledStatus = true
  });
  $scope.buttonDisabledStatus = true
}


EventEmitter.$inject = ['$rootScope'];

function EventEmitter($rootScope) {
  this.on = function (event, cb) {
    $rootScope.$on(event, cb)
  }
  this.emit = function (event, data) {
    $rootScope.$emit(event, data)
  }
}

angular
  .module('atomic-component-datagrid', [])
  .component('atomic-component-datagrid-cell', {
      scope: {},
      transclude: true,
      bindings: {
        value: '=',
        type: '=',
      },
      controller: MessageCtrl,
      template: function ($element, $attrs) {
        // access to $element and $attrs
        return `
          <input type="text" ng-class="validateStatus ? 'success' : 'error'" placeholder="Escreva sua mensagem aqui" ng-model="$ctrl.message" ng-blur="validate($ctrl.message)">
        `
      }
    })

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(document, ['Todo']);
});