import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Settings } from '../../models/settings'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings:Settings;
  constructor(
    public settingsService:SettingsService,
    public flashMessagesService:FlashMessagesService,
    public router:Router
    ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }
  
  onSubmit(){
    this.settingsService.changeSettings(this.settings);
    this.flashMessagesService.show("Settings Saved", {cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['/settings']);
  }

}
