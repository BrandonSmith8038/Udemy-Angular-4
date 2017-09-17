import { Component } from '@angular/core';
import { DataService } from '../../Services/data.services'
@Component ({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls:['./sandbox.component.css']
    
    
})

export class SandboxComponent {
    
    data:any[];
    
    
    
  constructor(public dataService:DataService)
   {
        this.dataService.getData().subscribe(data => {
            this.data.push(data);
        }); 
   }
}



