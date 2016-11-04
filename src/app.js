

var CellComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {
    type: '<',
    value: '<',
    mask: '&'
    events: '<'
    actions: '<'
  },
  controller: function () {
    this.$onInit = function() {

    };
  }
};

angular
  .module('atomic-component-datagrid', [])
  .component('atomic-component-datagrid-cell', CellComponent)