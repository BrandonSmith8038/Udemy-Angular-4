import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.css']
})
export class ClientdetailsComponent implements OnInit {
  id:string;
  client:Client;
  // tslint:disable-next-line:no-inferrable-types
  hasBalance:boolean = false ;
  // tslint:disable-next-line:no-inferrable-types
  showBalanceUpdateInput:boolean = false;
  constructor(
    public clientService:ClientService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    // Get Client
    this.clientService.getClient(this.id).subscribe(client => {
      if(client.balance > 0){
        this.hasBalance = true;
      }
      this.client = client;
      console.log(this.client);
    });
  }

  updateBalance(id:string){
    // Update Client
    this.clientService.updateClient(this.id, this.client);
    this.flashMessagesService.show('Balance Updated', {class: 'alert-success', timeout: 4000 });
    this.router.navigate(['/client/'+this.id]);
    this.showBalanceUpdateInput = false;
  }

}
