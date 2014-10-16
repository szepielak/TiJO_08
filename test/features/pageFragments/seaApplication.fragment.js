(function ()
{
    'use strict';

    function TextField(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Select(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Button(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Image(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function ShipDirective(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }


    TextField.prototype.getValue = function ()
    {
        return this.element.getText();
    };

    TextField.prototype.isFound = function ()
    {
        return this.element.isPresent();
    };

    Select.prototype.selectOption = function (item)
    {
        var desiredOption = null;
        return this.element.all(protractor.By.tagName('option')).getWebElements().then(function (options)
        {
            options.some(function (option)
            {
                option.getText().then(function (text)
                {
                    if (item === text) {
                        desiredOption = option;
                        return true;
                    }
                    return false;
                });
            });
        }).then(function ()
        {
            if (desiredOption) {
                return desiredOption.click();
            }
            return null;
        });
    };

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    Image.prototype.isFound = function ()
    {
        return this.element.isPresent();
    };

    ShipDirective.prototype.isFound = function (number)
    {
        return this.element.get(number).isPresent();
    };

    ShipDirective.prototype.getCustomCheckAttribute = function (number)
    {
        return this.element.get(number).getAttribute('custom-check');
    };

    ShipDirective.prototype.getConditionsAttribute = function (number)
    {
        return this.element.get(number).getAttribute('conditions');
    };

    var helper = {
        text: function (e)
        {
            return new TextField(e);
        },
        select: function (e)
        {
            return new Select(e);
        },
        button: function (e)
        {
            return new Button(e);
        },
        image: function (e)
        {
            return new Image(e);
        },
        ship: function (e)
        {
            return new ShipDirective(e);
        }
    };

    var elements = {
        select: {
            weatherCondition: element.bind(null, by.id('weatherCondition')),
            shipSender: element.all.bind(null, by.css('ship-sender select'))
        },
        button: {
            update: element.bind(null, by.id('updateButton')),
            clear: element.bind(null, by.id('clearButton')),
            check: element.all.bind(null, by.id('checkButton'))
        },
        image: {
            clear: element.bind(null, by.id('clearImg')),
            cloudy: element.bind(null, by.id('cloudyImg')),
            heavyRain: element.bind(null, by.id('heavyRainImg')),
            stormy: element.bind(null, by.id('stormyImg')),
            sunny: element.bind(null, by.id('sunnyImg')),
            windy: element.bind(null, by.id('windyImg'))
        },
        directive: {
            shipSender: element.all.bind(null, by.css('ship-sender'))
        },
        message: {
            boat1: element.bind(null, by.css('#boat1 .bubble')),
            boat2: element.bind(null, by.css('#boat2 .bubble')),
            boat3: element.bind(null, by.css('#boat3 .bubble'))
        }

    };

    function PageFragment()
    {
    }

    PageFragment.prototype.selectSunnyWeatherCondition = function ()
    {
        return helper.select(elements.select.weatherCondition()).selectOption('sunny');
    };
    PageFragment.prototype.selectClearWeatherCondition = function ()
    {
        return helper.select(elements.select.weatherCondition()).selectOption('clear');
    };
    PageFragment.prototype.selectCloudyWeatherCondition = function ()
    {
        return helper.select(elements.select.weatherCondition()).selectOption('cloudy');
    };
    PageFragment.prototype.selectHeavyRainWeatherCondition = function ()
    {
        return helper.select(elements.select.weatherCondition()).selectOption('heavy rain');
    };
    PageFragment.prototype.selectStormyWeatherCondition = function ()
    {
        return helper.select(elements.select.weatherCondition()).selectOption('stormy');
    };
    PageFragment.prototype.selectWindyWeatherCondition = function ()
    {
        return helper.select(elements.select.weatherCondition()).selectOption('windy');
    };

    PageFragment.prototype.clickUpdateButton = function ()
    {
        return helper.button(elements.button.update()).clickOn();
    };
    PageFragment.prototype.clickClearButton = function ()
    {
        return helper.button(elements.button.clear()).clickOn();
    };


    PageFragment.prototype.isSunnyCondition = function ()
    {
        return helper.image(elements.image.sunny()).isFound();
    };
    PageFragment.prototype.isClearCondition = function ()
    {
        return helper.image(elements.image.clear()).isFound();
    };

    PageFragment.prototype.isCloudyCondition = function ()
    {
        return helper.image(elements.image.cloudy()).isFound();
    };

    PageFragment.prototype.isHeavyRainCondition = function ()
    {
        return helper.image(elements.image.heavyRain()).isFound();
    };

    PageFragment.prototype.isStormyCondition = function ()
    {
        return helper.image(elements.image.stormy()).isFound();
    };

    PageFragment.prototype.isWindyCondition = function ()
    {
        return helper.image(elements.image.windy()).isFound();
    };

    PageFragment.prototype.isFirstShipPresent = function ()
    {
        return helper.ship(elements.directive.shipSender()).isFound(0);
    };

    PageFragment.prototype.isSecondShipPresent = function ()
    {
        return helper.ship(elements.directive.shipSender()).isFound(1);
    };

    PageFragment.prototype.isThirdShipPresent = function ()
    {
        return helper.ship(elements.directive.shipSender()).isFound(2);
    };


//get custom-check attribute
    PageFragment.prototype.getFirstShipCustomCheckAttribute = function ()
    {
        return helper.ship(elements.directive.shipSender()).getCustomCheckAttribute(0);
    };
    PageFragment.prototype.getSecondShipCustomCheckAttribute = function ()
    {
        return helper.ship(elements.directive.shipSender()).getCustomCheckAttribute(1);
    };
    PageFragment.prototype.getThirdShipCustomCheckAttribute = function ()
    {
        return helper.ship(elements.directive.shipSender()).getCustomCheckAttribute(2);
    };

// get conditions attribute
    PageFragment.prototype.getFirstShipConditionsAttribute = function ()
    {
        return helper.ship(elements.directive.shipSender()).getConditionsAttribute(0);
    };
    PageFragment.prototype.getSecondShipConditionsAttribute = function ()
    {
        return helper.ship(elements.directive.shipSender()).getConditionsAttribute(1);
    };
    PageFragment.prototype.getThirdShipConditionsAttribute = function ()
    {
        return helper.ship(elements.directive.shipSender()).getConditionsAttribute(2);
    };

// select ship
    PageFragment.prototype.selectSloopAsFirstShip = function ()
    {
        return helper.select(elements.select.shipSender().get(0)).selectOption('Sloop');
    };
    PageFragment.prototype.selectTowboatAsSecondShip = function ()
    {
        return helper.select(elements.select.shipSender().get(1)).selectOption('Towboat');
    };
    PageFragment.prototype.selectBrigAsThirdShip = function ()
    {
        return helper.select(elements.select.shipSender().get(2)).selectOption('Brig');
    };

// click check button
    PageFragment.prototype.clickFirstShipCheckButton = function ()
    {
        return helper.button(elements.button.check().get(0)).clickOn();
    };
    PageFragment.prototype.clickSecondShipCheckButton = function ()
    {
        return helper.button(elements.button.check().get(1)).clickOn();
    };
    PageFragment.prototype.clickThirdShipCheckButton = function ()
    {
        return helper.button(elements.button.check().get(2)).clickOn();
    };

// get messages
    PageFragment.prototype.getFirstShipMessage = function ()
    {
        return helper.text(elements.message.boat1()).getValue();
    };
    PageFragment.prototype.getSecondShipMessage = function ()
    {
        return helper.text(elements.message.boat2()).getValue();
    };
    PageFragment.prototype.getThirdShipMessage = function ()
    {
        return helper.text(elements.message.boat3()).getValue();
    };

// get messages
    PageFragment.prototype.isFirstShipMessage = function ()
    {
        return helper.text(elements.message.boat1()).isFound();
    };
    PageFragment.prototype.isSecondShipMessage = function ()
    {
        return helper.text(elements.message.boat2()).isFound();
    };
    PageFragment.prototype.isThirdShipMessage = function ()
    {
        return helper.text(elements.message.boat3()).isFound();
    };

    module.exports = PageFragment;
})();
