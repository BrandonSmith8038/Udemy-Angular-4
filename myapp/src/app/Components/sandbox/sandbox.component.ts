import { Component } from '@angular/core';

@Component ({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls:['./sandbox.component.css']
    
    
})

export class SandboxComponent {
    name:string = 'John Doe';
    showName:boolean = true;
    greeting:number;
}



