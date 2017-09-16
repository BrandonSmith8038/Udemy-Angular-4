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
    myNumbersArray:number[] = [1,2,3];
    myStringsArray:string[] = ["Hello", "World"];
    myTuple:[string, number] = ['hello', 35];
    unusable:void = undefined;
    u:undefined = undefined;
    n:null = null;
    
    constructor(){
        this.name = 'Brandon';
        this.age = 45;
        this.hasChildren = true;
        this.myNumbersArray = [4,5,6];
        this.myStringsArray = ["Goodbye", "World"];
    }
}