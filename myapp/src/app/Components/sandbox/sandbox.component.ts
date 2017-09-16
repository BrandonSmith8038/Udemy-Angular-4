import { Component } from '@angular/core';

@Component ({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls:['./sandbox.component.css']
    
    
})

export class SandboxComponent {
    imageUrl = 'http://lorempixel.com/400/200';
    isUnchanged:boolean = true;
}



