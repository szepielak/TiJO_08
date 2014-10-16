describe('restrict', function ()
{
    'use strict';

    var rootScope;
    var logMock;
    var fifaCtrlMock;
    var getEvent;

    var eventA = {
        type: 'click', layerX: 673, layerY: 159
    };
    var eventB = {
        type: 'dblclick', layerX: 3, layerY: 11
    };

    beforeEach(module('fifaApp'));
    beforeEach(inject(function ($rootScope, $controller)
    {
        rootScope = $rootScope;
        logMock = jasmine.createSpyObj('$log', ['info']);

        logMock.info.andCallFake(function (event)
        {
            getEvent = event;
        });

        fifaCtrlMock = $controller('FifaCtrl', {$log: logMock});
    }));

    describe('display function', function ()
    {
        describe('$log with click event', function ()
        {
            beforeEach(function ()
            {
                fifaCtrlMock.showPolandRank(eventA);
            });
            it('should call $log.info', function ()
            {
                expect(eventA).toBe(getEvent);
                expect(logMock.info).toHaveBeenCalledWith(eventA);
            });

            it('should display log in console', function ()
            {
                expect(logMock.info).toHaveBeenCalledWith(eventA);
            });
            it('should display event type', function ()
            {
                expect(fifaCtrlMock.type).toBe('click');
            });
        });
        describe('$log with dblclick event', function ()
        {
            beforeEach(function ()
            {
                fifaCtrlMock.showPolandRank(eventB);
            });
            it('should call $log.info', function ()
            {
                expect(eventB).toBe(getEvent);
                expect(logMock.info).toHaveBeenCalledWith(eventB);
            });

            it('should display log in console', function ()
            {
                expect(logMock.info).toHaveBeenCalledWith(eventB);
            });

            it('should display event type', function ()
            {
                expect(fifaCtrlMock.type).toBe('dblclick');
            });
        });

    });
});
