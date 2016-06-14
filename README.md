# ng-token-field
Angular token input directive. A token input box that automatically creates tokens out of the typed text.

## Demo

<a href="http://lucaslouca.github.io/ng-token-field/" target="_blank">Demo</a>

## How to use

This directive requires <a href="https://jquery.com/" target="_blank">JQuery</a>

Include the stylesheet and javascript files:
```html
<link rel="stylesheet" href="ng-token-field.css"> 
<script src="ng-token-field.js"></script>
```

Add the `ngTokenField` module as a dependency in your AngularJS app;
```javascript
angular.module('myApp', ['ngTokenField'])...
```

You can also define a validator function that validates the text of each token and styles it accordingly. Below we define a function `validator` that returns `true` if the text is an email and false otherwise.
```javascript
.controller('MyController', function($scope) {
	$scope.validator = function(text) {
		// Check if token text is an email
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(text);
    };
	
	$scope.tags = [];
});
```

Add the custom element <ng-token-field> to the HTML file where you want to use and bind it to a property and/or validator function. 
```html
<ng-token-field ng-model="tags" placeholder="Enter comma separated values" validator="validator(text)"></ng-token-field>{{tags}}
```

