import { Component } from '@angular/core';

@Component ({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls:['./sandbox.component.css']
    
    
})

export class SandboxComponent {
    
   name:string = '';
   users:string[]=['John Doe', 'Mary Sawson', 'Kevin Smith']
   
   
   onSubmit(){
       this.users.push(this.name);
       this.name = '';
   }
   
   
}



