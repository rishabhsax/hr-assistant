import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Digi Assist';
  flagLogin:boolean;

  constructor(private sharedService:SharedService, private router: Router){
    router.events.subscribe((val) => {
      if(router.url == "/hr" || router.url == "/ticket"){
        this.flagLogin= true;
      }
      else{
        this.flagLogin = false;
      }
    })
  }

}
