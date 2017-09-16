import { Component } from '@angular/core';

@Component ({
    selector: 'sandbox',
    template: `
        <h1>{{ name }}</h1>
    `
})

export class SandboxComponent {
    name:string = 'John Doe';
    age:number = 36;
    hasChildren:boolean = true;
    
    constructor(){
        this.name = 'Brandon';
        this.age = 45;
        this.hasChildren = true;
    }
}