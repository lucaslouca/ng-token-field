# ng-token-field
Angular token input directive. A token input box that automatically creates tokens out of the typed text.

## How to use it

Include the stylesheet and javascript files:
```
<link rel="stylesheet" href="ng-token-field.css"> 
<script src="ng-token-field.js"></script>
```

Add the `ngTokenField` module as a dependency in your AngularJS app;
```
angular.module('myApp', ['ngTokenField'])...
```

Add the custom element <ng-token-field> to the HTML file where you want to use and bind it to a property. 
```
<ng-token-field ng-model="tags"></ng-token-field>{{tags}}
```

