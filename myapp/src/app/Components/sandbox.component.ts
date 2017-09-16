import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component ({
    selector: 'sandbox',
    template: `
        <h1>Hello World</h1>
    `
})

export class SandboxComponent {
    customer:Customer
    customers:Customer[];
    
    constructor(){
        this.customer ={
            id:1,
            name:'John Doe',
            email:'John@gmail.com'
            
        }
        this.customers = [{
            id:1,
            name:'John Doe',
            email:'John@gmail.com'
        },
        {
            id:2,
            name:'Brandon Doe',
            email:'Brandon@gmail.com'
        },
        {
            id:1,
            name:'Jane Doe',
            email:'Jane@gmail.com'
        },
            
        ]
    }
}

