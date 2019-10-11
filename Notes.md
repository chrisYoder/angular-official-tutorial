# Official Angular Guide Gettin Started
- Your First App
  - Template Syntax
    - Interpolation {{...}}
      - This is the embedding expressions into marked up text. 
      - Angular replaces the name within the curly brackets with the corresponding component property
      - Template expressions are expressions within the curly braces that Angular evaluates and then converts to a string.
        - For example: {{ 1 + 1 }} will be evaluated to 2, converted to "2", and rendered
    - Property Binding [...]
      - allows you to use the property value in a template expression.
    - Event Binding (...) 
      - allows you bind a method to an Event
    - *ngFor 
      - allows to you to iterate through an array and render the template for each array element.
    - *ngIf
      - allows you to conditionally render something from the template
  - Components
    - Components define areas of responsibility in the UI that let you resuse sets of UI functionality.
    - comprised of three parts: 
      1. A component class that handles data and functionality
      2. An HTML template that determines the UI
      3. Component Specific styles that define the look and feel
    - When you create a new component the following is created
      1. @Component which includes metadata such as the name of the component when rendered in the template page.
        - by convention this ought to be name app-component-name
      2. The template and style filenames that reference the HTML and CSS files
  - Input/Output
    - @Input/@Output Decorators allow Angular to share data between the parent context and child directives or components. The data flow is from the perspective of the child component
      - @Input: 
        - writable property
        - the "doorway" that allows data into a components
      - @Output
        - oberservale property
        - allows child component to send data out to the parent
      -How to use @Input:
        - In the Child Component
          - Use @Input decorator, after importing it from @angular/core,  in child component/directive to let angular know that a property in that component can receive its value from its parent component
            
            ```javascript
                import { Component, Input } from '@angular/core'; // First, import Input
                export class ItemDetailComponent {
                  @Input() item: string; // decorate the property with @Input()
                }
            ```
          - Use property in the child  template
            - `<p>Today's item: {{ item }}</p>`
        - In the Parent Component:
          - use the child's selector as a directive within the parent component Template and use property binding to bind the property in the child to the property of the parent 
            -`<app-item-detail [item]="currentItem"></app-item-detail>`
          - In the parent TS file designate a value for currentItem
            ```javascript
              export class AppComponent {
                currentItem = 'Television';
              }
            ```
      -How to use @Output:
        - Child Component
          - In the child Component TS File:
          ```javascript
            import { Output, EventEmitter } from '@angular/core';
            export class ItemOutputComponent {
                @Output( ) newItemEvent = newEventEmitter<string>();
            }            
          ```
          - Parts: 
            - @Output() - a decorator function marking the property as a way for data to go from child to the Parent
            - newItemEvent - the name of the Output
            - new EventEmitter()<string> tells Angular to create a new event emitter and that the data it emits will be a string
          -  add method to component class 
              ```javascript
              import { Output, EventEmitter } from '@angular/core';
              export class ItemOutputComponent {
                  @Output( ) newItemEvent = newEventEmitter<string>();

                  addNewItem(value: string){
                    this.newItemEvent.emit(value);
                  }
              }            
            ```
              - addNewItem uses the newItemEvent to raise an event which emits the value the user types into <input>. In other words, when the user clicks the add button in the UI, the child lets the parent know about the event and gives that data to the parent.
          - In the child component template file:
          - Template reference variable #varName - a reference to a DOM element within a template 
          - Event binder - this is bound to the method in TS file and takes as an argument whatever #newItem's value is
          ```HTML
            <label>Add an item: <input #newItem></label>
            <button (click)="addNewItem(newItem.value)">Add to parent's list</button>
          ```
        - Parent Component  
          - TS File:
            - Write a method that uses the emitted data. In this case it is going to add the newItem to an array
            ```javascript
              export class AppComponent {
                items = ['item1', 'item2'];

                addItem(newitem: string) {
                  this.items.push(newItem);
                }
              }
            ```
          - Template File: 
            - Bind the parents method to the child's Event  
              - `<app-item-output (newItemEvent)="addItem($event)"></app-item-output>`
              - this is where the data handoff happens
- Routing
      

    