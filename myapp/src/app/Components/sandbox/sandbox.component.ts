import { Component } from '@angular/core';

@Component ({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls:['./sandbox.component.css']
    
    
})

export class SandboxComponent {
    isSpecial = true;
    canSave = false;
    currentClasses = {};
    
    constuctor(){
        
        this.setCurrentClasses();
        
    }
    setCurrentClasses(){
        this.currentClasses = {
            saveable:this.canSave,
            special:this.isSpecial
        }
    }
}



