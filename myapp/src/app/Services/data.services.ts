import { Injectable } from '@angular/core';

@Injectable()
    export class DataService {
        users:string[];
        
        constructor(){
            this.users=['Mark', 'Sharon', 'Beth', 'John', 'Brandon'];
        }
    
    
        getUsers(){
            return this.users;
        }
    }
