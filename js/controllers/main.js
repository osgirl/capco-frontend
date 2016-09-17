"use strict";

const ueber = require("ueber");

const controller = function controller ($scope, $sce, backend) {

  $scope.name = "";
  $scope.accessToken = "";
  $scope.ui = "accessToken";

  $scope.profile = null;
  $scope.matches = [];

  $scope.getProfile = function getProfile () {
    backend.method(`${$scope.accessToken}/profile?name=${$scope.name}`, "get", null, (err, profile) => {
      if (err) return;
      $scope.profile = profile;
      $scope.ui = "profile";
    });
  };

  $scope.getMatches = function getMatches () {
    backend.method(`${$scope.accessToken}-${$scope.name}/matches`, "get", null, (err, matches) => {
      if (err) return;
      $scope.matches = matches;
      $scope.ui = "matches";
    });
  };

};

module.exports = controller;