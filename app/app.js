'use strict';

// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', ['ui.bootstrap']);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('BodyCtrl', function ($scope) {
  $scope.openSkillEnter = function() {
    $('div.float').first().css({left: '40%'});
  }
});

phonecatApp.controller('SkillEnterCtrl', function($scope, $http) {
  $scope.close = function() {
    $('div.float').first().css({left: '100%'});
  };
  
});

// To Do: And filter 
//    - get sid, along with skills 
//    - display sid, along with skills 
//    - create ftn to check if person_skills include all selected skills
//    - filter by selected skills 
//    - test 
// add location filter 
// To Do: pagenation for results 
// To Do: layout fix 
// To Do: delete filter selection 

phonecatApp.controller('SkillsListCtrl', function($scope, $http) {
  var _selected;
  $scope.selected = undefined;
  $scope.skill_options = ['Java', 'Oracle', 'Angular'];

  var isInArray = function (item, array) {
    var result = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] == item) {
        result = true;
      }
    }
    return result;
  };
  /*
  $('#search').on('change', function() {
    //alert('hello');
    
  });*/
  $scope.$watch('selected', function(newValue, oldValue) {
    console.log(newValue);
    if (isInArray($scope.selected, $scope.skill_options) && ! isInArray($scope.selected, $scope.selected_array)) {
      $scope.selected_array.push($scope.selected);
      $scope.selected = '';
    }
  });

  $scope.selected_array = [];
/*
  $scope.getFilter = function() {
    var result = '';
    for (var i = 0; i <$scope.selected_array; i ++ ) {
      if (result != '' ) {
        result = result + ' || '
      }
      result = result + "{skill: '" + $scope.selected_array[i] + "'}"
    }
    return result;
  }
  */
  $scope.getFilter = function(value) {
    var result = false;
    if (isInArray(value.skill, $scope.selected_array) ) {
      result = true;
    }
    return result;
  }
  var self = this;

  $scope.skills = [
    {
      sid: 'R123456',
      skill: 'Java'
    }, {
      sid: 'R123457',
      skill: 'Java'
    }, {
      sid: 'R123458',
      skill: 'Java'
    }, {
      sid: 'R123459',
      skill: 'Oracle'
    }
  ];
  
});