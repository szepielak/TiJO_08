'use strict';

var fifaApp = angular.module('fifaApp', []);

fifaApp.controller('FifaCtrl', function ($log)
{
    var ctrl = this;
    ctrl.type = '';
    ctrl.ranking = [{
        team: 'Germany', points: 1725
    }, {
        team: 'Argentina', points: 1583
    }, {
        team: 'Colombia', points: 1450
    }, {
        team: 'Belgium', points: 1417
    }, {
        team: 'Netherlands', points: 1374
    }];

    ctrl.PolandRank = false;

    ctrl.showPolandRank = function (event)
    {
        ctrl.PolandRank = !ctrl.PolandRank;
        $log.info(event);
        ctrl.type = event.type;

    };

});
