#Exercise 11 : Understanding isolate scope

##Summary
You are an owner of a small sea cargo company. Everyday, you are checking the weather reports to make sure the conditions allow your fleet to depart from the port. This is very tiring and you decide to create a simple application that will allow you to automatically check weather conditions and report to the boat.

Local weather monitoring station provide a very simple API with an example how to use it so you don't have to worry about the data.

Furthermore, you plan to share your application with others so you need to create it as a directive accepting custom reporting function and conditions message. Every boat captain should also be able to set their boat type, because some boats are not able to withstand heavy rain or wind.

##Goals

* `shipSender` directive in **port.js**:
	* should expect to receive two attributes passed to it's isolated scope: a `customCheck` function and `conditions` string
	* in **Check** button ng-click directive should be added and invoke `customCheck`(with **boat** model and **currentConditions** passed as 	parameters)
	* template should assign a returning value from **customCheck** to **answer** variable ( ***Hint***: you can assign the variable in ng-click directive)
* **weatherConditions** (use correct method as indicated in comment) and **checkMyBoat** function should be passed to **shipSender** directive
* three **shipSender** directives should be added in the correct place and with proper parameters to **index.html**(check comments)

###Before you start, please refer to:
* [angularjs-understanding-isolate-scope](https://egghead.io/lessons/angularjs-understanding-isolate-scope)
* [angularjs-isolate-scope-attribute-binding](https://egghead.io/lessons/angularjs-isolate-scope-attribute-binding)

##Setup
 
###To install dependencies

```
npm install
```

```
bower install
```

###To start application in live reload mode

    grunt serve
    
###Jshint
To run verify jshint:
    
    grunt jshint:default

###Run tests

To run e2e tests in development mode:

    grunt test:e2e

To run verify jshint, tests and coverage:

    npm test


Good luck!

