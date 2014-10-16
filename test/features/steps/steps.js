/*jshint -W079 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

var expect = chai.expect;
var fragments = require('../fragments/fragments.js');

module.exports = function () {
    'use strict';

    this.When(/^I browse to the "([^"]*)"$/, function (url, callback) {
        browser.get('/#' + url).then(callback);
    });

    function selectOption(item, input) {
        var desiredOption = null;
        return input.all(protractor.By.tagName('option')).getWebElements().then(function (options) {
            options.some(function (option) {
                option.getText().then(function (text) {
                    if (item === text) {
                        desiredOption = option;
                        return true;
                    }
                    return false;
                });
            });
        }).then(function () {
            if (desiredOption) {
                return desiredOption.click();
            }
            return null;
        });
    }

    this.When(/I select option "([^"]*)" in "([^"]*)"$/, function (item, input, callback) {
        selectOption(item, fragments(input)()).then(callback);
    });

    this.When(/I select option "([^"]*)" for "(\d+)" ship$/, function (item, ship, callback) {
        ship = parseInt(ship, 10);
        var shipElement = fragments('port.ships')().get(ship).element(by.css('.form-control'));
        selectOption(item, shipElement).then(callback);

    });

    this.When(/^I click "([^"]*)"/, function (name, callback) {
        browser.actions().mouseMove(fragments(name)()).perform().then(function () {
            fragments(name)().click().then(function () {
                return browser.waitForAngular();
            }).then(callback);
        });
    });

    this.When(/^I click "([^"]*)" for "(\d+)" ship/, function (name, ship, callback) {
        ship = parseInt(ship, 10);
        browser.actions().mouseMove(fragments(name)().get(ship)).perform().then(function () {
            fragments(name)().get(ship).click().then(function () {
                return browser.waitForAngular();
            }).then(callback);
        });
    });
    
    this.Then(/^I should see "([^"]*)"$/, function (image, callback) {
        expect(fragments(image)().isPresent()).to.become(true).and.notify(callback);
    });
    
    this.Then(/^I should see "([^"]*)" message for "(\d+)" ship$/, function (text, ship, callback) {
        ship = parseInt(ship, 10);
        expect(((fragments('port.ships')().get(ship)).element(by.css('.bubble'))).getText()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^I should not see message for "([^"]*)" ship$/, function (ship, callback) {
        ship = parseInt(ship, 10);
        expect((fragments('port.ships')().get(ship)).element(by.css('.bubble')).isPresent()).to.become(false).and.notify(callback);
    });

    this.Then(/^pause$/, function (callback) {
        browser.pause();
        callback();
    });
};
