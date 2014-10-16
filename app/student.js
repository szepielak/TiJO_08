(function ()
{
    'use strict';

    var app = angular.module('app', []);
    app.factory('Students', function ()
    {
        var Students = {};
        Students.list = [{
            'firstName': 'Warner',
            'lastName': 'Bridges',
            'age': 18,
            'email': 'warner.bridges@undefined.biz',
            'phone': '+1 (914) 451-3055'
        }, {
            'firstName': 'Bauer',
            'lastName': 'Spencer',
            'age': 24,
            'email': 'bauer.spencer@undefined.us',
            'phone': '+1 (942) 551-2179'
        }, {
            'firstName': 'Good',
            'lastName': 'Burnett',
            'age': 27,
            'email': 'good.burnett@undefined.tv',
            'phone': '+1 (820) 450-3124'
        }, {
            'firstName': 'Austin',
            'lastName': 'Harvey',
            'age': 35,
            'email': 'austin.harvey@undefined.org',
            'phone': '+1 (957) 597-2822'
        }, {
            'firstName': 'Candace',
            'lastName': 'Gordon',
            'age': 33,
            'email': 'candace.gordon@undefined.name',
            'phone': '+1 (932) 408-2012'
        }, {
            'firstName': 'Chang',
            'lastName': 'Ryan',
            'age': 32,
            'email': 'chang.ryan@undefined.ca',
            'phone': '+1 (994) 534-3669'
        }, {
            'firstName': 'Gutierrez',
            'lastName': 'Freeman',
            'age': 22,
            'email': 'gutierrez.freeman@undefined.info',
            'phone': '+1 (944) 430-2322'
        }, {
            'firstName': 'Knapp',
            'lastName': 'Hardy',
            'age': 30,
            'email': 'knapp.hardy@undefined.biz',
            'phone': '+1 (978) 554-2635'
        }, {
            'firstName': 'Maxine',
            'lastName': 'Stevenson',
            'age': 23,
            'email': 'maxine.stevenson@undefined.co.uk',
            'phone': '+1 (845) 419-2949'
        }, {
            'firstName': 'Gray',
            'lastName': 'Rose',
            'age': 21,
            'email': 'gray.rose@undefined.io',
            'phone': '+1 (807) 582-3992'
        }];

        return Students;
    });

    app.controller('StudentCtrl', function ($scope, Students)
    {
        $scope.students = Students;
    });

})();
