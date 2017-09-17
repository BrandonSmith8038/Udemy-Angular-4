import { Component } from '@angular/core';
import { DataService } from '../../Services/data.services'
@Component ({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls:['./sandbox.component.css']
    
    
})

export class SandboxComponent {
    
    users:string[];
    
  constructor(public dataService:DataService)
   {
       this.users = this.dataService.getUsers();
   }
}



