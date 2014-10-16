/*global element,by*/

var byString = function (object, fragmentName) {
    'use strict';
    if (!fragmentName || !fragmentName.replace) {
        return null;
    }
    fragmentName = fragmentName.replace(/\[(\w+)\]/g, '($1)');
    fragmentName = fragmentName.replace(/^\./, '');
    var a = fragmentName.split('.');
    while (a.length) {
        var n = a.shift();
        var arrayExpr = n.match(/(\w+)\(([^)]*)\)/);
        if (arrayExpr) {
            object = object[arrayExpr[1]](arrayExpr[2]);
        } else if (n in object) {
            object = object[n];
        } else {
            throw new Error('Undefined fragment "' + n + '" in "' + fragmentName + '"');
        }
    }
    return object;
};

var fragments = function (text) {
    'use strict';

    var mapping = {
        docks: {
            availableConditions: element.bind(null, by.id('availableConditions')),
            updateButton: element.bind(null, by.id('updateButton')),
            clearButton: element.bind(null, by.id('clearButton')),
            currentConditionImages: element.bind(null, by.id('currentConditionImages')),
            clearImg: element.bind(null, by.id('clearImg')),
            cloudyImg: element.bind(null, by.id('cloudyImg')),
            HeavyRainImg: element.bind(null, by.id('HeavyRainImg')),
            stormyImg: element.bind(null, by.id('stormyImg')),
            sunnyImg: element.bind(null, by.id('sunnyImg')),
            windyImg: element.bind(null, by.id('windyImg'))
        },
        port: {
            ships: element.all.bind(null, by.tagName('ship-sender')),
            checkButton: element.all.bind(null, by.id('checkButton')),
            message: element.all.bind(null, by.css('.bubble'))
        }

    };
    return byString(mapping, text);
};

module.exports = fragments;
