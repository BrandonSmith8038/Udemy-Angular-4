import { Component } from '@angular/core';

@Component ({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls:['./sandbox.component.css']
    
    
})

export class SandboxComponent {
    
    text:string = "Hello";
    
    fireEvent(e){
        console.log(e.type)
    }
    
    changeText(e){
        this.text = e.target.value;
    }
}



