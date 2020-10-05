# Project Information
Simple project to add items in the list and log the status changes in console
This is just a simple service.
Any function that will be used in common by all the other components is stored in services

# Services and Components
## There are three components
## app component
* This components has in it accounts and new-accounts component account component is looped over to create multiple elements.

* By using constructor(dependency injection) we are accessing the array present in the service 

## account component
* In this component we are change the status of object element from active to inactive
* This is done by calling functions from account.service.ts
* When the status is changed, we use the service.eventemitter_element.emit() function to let all the components know that the value is changed.
* This emit() function can be called because the object on which it is called is an EventEmitter

## new-account component
* In this component we add new element
* We also listen to changes in eventemitter_element by using service.eventemitter_element.subscribe() . This function is called whenever service.eventemitter_element.emit() is called.
* the event is subscribed in the constructor itself
* To use the services offcourse you have to import them and pass them via constructors

## There is two service file 

## Accounts Services : account.service.ts
We have kept 
* new element add function
* existing element edit function
in this service. 
You can see that these functions are used by other components. By keeping the functons here we have combined the logic.
* Event Emitter element is defined in this service. 
* Accounts component uses this event emitter to emit changes happening to status of elements of array
* We also pass some data while emitting the event information
* New Accounts component used this event emitter to subscribe to changes that are happening to statos of elements of array.


##  logging.service.ts
This file is to log the changes in item element into the console

