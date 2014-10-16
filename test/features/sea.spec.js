var SeaApplication = require('./pageFragments/seaApplication.fragment.js');
var seaApplication = new SeaApplication();

describe('Sea application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });

    describe('initialization', function ()
    {
        describe('first ship', function ()
        {
            it('should display first ship', function ()
            {
                expect(seaApplication.isFirstShipPresent()).toEqual(true);
            });
            it('should have custom-check attribute', function ()
            {
                expect(seaApplication.getFirstShipCustomCheckAttribute()).toEqual('checkMyBoat(boat, currentConditions)');
            });
            it('should have conditions attribute', function ()
            {
                expect(seaApplication.getFirstShipConditionsAttribute()).toEqual('');
            });
        });

        describe('second ship', function ()
        {
            it('should display second ship', function ()
            {
                expect(seaApplication.isSecondShipPresent()).toEqual(true);
            });
            it('should have custom-check attribute', function ()
            {
                expect(seaApplication.getSecondShipCustomCheckAttribute()).toEqual('checkMyBoat(boat, currentConditions)');
            });
            it('should have conditions attribute', function ()
            {
                expect(seaApplication.getSecondShipConditionsAttribute()).toEqual('');
            });
        });
        describe('third ship', function ()
        {
            it('should display third ship', function ()
            {
                expect(seaApplication.isThirdShipPresent()).toEqual(true);
            });
            it('should have custom-check attribute', function ()
            {
                expect(seaApplication.getThirdShipCustomCheckAttribute()).toEqual('checkMyBoat(boat, currentConditions)');
            });
            it('should have conditions attribute', function ()
            {
                expect(seaApplication.getThirdShipConditionsAttribute()).toEqual('');
            });
        });
    });

    describe('set conditions', function ()
    {
        beforeAll(function ()
        {
            seaApplication.selectSloopAsFirstShip();
            seaApplication.selectTowboatAsSecondShip();
            seaApplication.selectBrigAsThirdShip();
        });
        describe('set good weather conditions', function ()
        {
            describe('set sunny', function ()
            {
                beforeAll(function ()
                {
                    seaApplication.clickClearButton();
                    seaApplication.selectSunnyWeatherCondition();
                    seaApplication.clickUpdateButton();
                });

                it('should display "sunny" image', function ()
                {
                    expect(seaApplication.isSunnyCondition()).toEqual(true);
                });
                it('should display "Set sails!" message for first ship', function ()
                {
                    seaApplication.clickFirstShipCheckButton();
                    expect(seaApplication.getFirstShipMessage()).toEqual('Set sails!');
                });
                it('should display "Set sails!" message for second ship', function ()
                {
                    seaApplication.clickSecondShipCheckButton();
                    expect(seaApplication.getSecondShipMessage()).toEqual('Set sails!');
                });
                it('should display "Set sails!" message for third ship', function ()
                {
                    seaApplication.clickThirdShipCheckButton();
                    expect(seaApplication.getThirdShipMessage()).toEqual('Set sails!');
                });
            });

            describe('set clear', function ()
            {
                beforeAll(function ()
                {
                    seaApplication.clickClearButton();
                    seaApplication.selectClearWeatherCondition();
                    seaApplication.clickUpdateButton();
                });

                it('should display "clear image', function ()
                {
                    expect(seaApplication.isClearCondition()).toEqual(true);
                });
                it('should display "Set sails!" message for first ship', function ()
                {
                    seaApplication.clickFirstShipCheckButton();
                    expect(seaApplication.getFirstShipMessage()).toEqual('Set sails!');
                });
                it('should display "Set sails!" message for second ship', function ()
                {
                    seaApplication.clickSecondShipCheckButton();
                    expect(seaApplication.getSecondShipMessage()).toEqual('Set sails!');
                });
                it('should display "Set sails!" message for third ship', function ()
                {
                    seaApplication.clickThirdShipCheckButton();
                    expect(seaApplication.getThirdShipMessage()).toEqual('Set sails!');
                });
            });
        });

        describe('set bad weather conditions', function ()
        {
            beforeAll(function ()
            {
                seaApplication.clickClearButton();
                seaApplication.clickFirstShipCheckButton();
                seaApplication.clickSecondShipCheckButton();
                seaApplication.clickThirdShipCheckButton();
            });

            describe('set heavy rain', function ()
            {
                beforeAll(function ()
                {
                    seaApplication.clickClearButton();
                    seaApplication.selectHeavyRainWeatherCondition();
                    seaApplication.clickUpdateButton();
                });

                it('should display "heavy rain image', function ()
                {
                    expect(seaApplication.isHeavyRainCondition()).toEqual(true);
                });
                it('should not display "Set sails!" message for first ship', function ()
                {
                    seaApplication.clickFirstShipCheckButton();
                    expect(seaApplication.isFirstShipMessage()).toBe(false);
                });
                it('should display "Set sails!" message for second ship', function ()
                {
                    seaApplication.clickSecondShipCheckButton();
                    expect(seaApplication.getSecondShipMessage()).toEqual('Set sails!');
                });
                it('should display "Set sails!" message for third ship', function ()
                {
                    seaApplication.clickThirdShipCheckButton();
                    expect(seaApplication.getThirdShipMessage()).toEqual('Set sails!');
                });
            });

            describe('set storm', function ()
            {
                beforeAll(function ()
                {
                    seaApplication.clickClearButton();
                    seaApplication.selectStormyWeatherCondition();
                    seaApplication.clickUpdateButton();
                });

                it('should display "stormy" image', function ()
                {
                    expect(seaApplication.isStormyCondition()).toEqual(true);
                });
                it('should not display "Set sails!" message for first ship', function ()
                {
                    seaApplication.clickFirstShipCheckButton();
                    expect(seaApplication.isFirstShipMessage()).toBe(false);
                });
                it('should not display "Set sails!" message for second ship', function ()
                {
                    seaApplication.clickSecondShipCheckButton();
                    expect(seaApplication.isSecondShipMessage()).toBe(false);
                });
                it('should not display "Set sails!" message for third ship', function ()
                {
                    seaApplication.clickThirdShipCheckButton();
                    expect(seaApplication.isThirdShipMessage()).toBe(false);
                });
            });
        });
    });
});
