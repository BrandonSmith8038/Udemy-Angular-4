import { Component } from '@angular/core';
import { DataService } from '../../Services/data.services'
@Component ({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls:['./sandbox.component.css']
    
    
})

export class SandboxComponent {
    
   users:any[];
   user = {
       name:'',
       email:'',
       phone:''
   }
    
    
    
  constructor(public dataService:DataService)
   {
        this.dataService.getUsers().subscribe(users => {
            this.users = users;
        });
   }
   
   onSubmit(){
        this.dataService.addUser(this.user).subscribe(user => {
            console.log(user);
            this.users.unshift(user);
        });
    }
    
    onDeleteClick(id){
        this.dataService.deleteUser(id).subscribe(res => {
            for(let i=0;i<this.users.length;i++){
                if(this.users[i].id == id){
                    this.users.splice(i,1);
                }
            }
        });
    }
}



