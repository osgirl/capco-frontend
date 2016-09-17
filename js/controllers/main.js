"use strict";

const ueber = require("ueber");

const controller = function controller ($scope, $sce, backend) {

  $scope.people = [
    {
      "name": "James Garner"
    },
    {
      "name": "Jerry Chen"
    }
  ];

};

module.exports = controller;