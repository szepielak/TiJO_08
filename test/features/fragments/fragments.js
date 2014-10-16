/*global element,by*/
var byString = function (object, fragmentName)
{
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

var fragments = function (text)
{
    'use strict';

    var mapping = {
        input: {
            search: element.bind(null, by.id('search')),
            first: element.bind(null, by.id('first')),
            last: element.bind(null, by.id('last')),
            age: element.bind(null, by.id('age')),
            email: element.bind(null, by.id('email')),
            phone: element.bind(null, by.id('phone'))
        }, student: {
            table: element.bind(null, by.id('students')),
            firstName: element.bind(null, by.css('td:nth-of-type(1)')),
            lastName: element.bind(null, by.css('td:nth-of-type(2)')),
            age: element.bind(null, by.css('td:nth-of-type(3)')),
            email: element.bind(null, by.css('td:nth-of-type(4)')),
            phone: element.bind(null, by.css('td:nth-of-type(5)'))

        }
    };
    return byString(mapping, text);
};

module.exports = fragments;
