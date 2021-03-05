import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menudata: any;
  constructor(private route :Router) { }
  menuactive(menudata) {


    switch (menudata) {
      case "home":
        {
          this.menudata = menudata;

        }

      case "jobseeker":
        {
          this.menudata = menudata;
          this.route.navigate(['/signup', { type: menudata }]);
        }
      case "mentor":
        {
          this.menudata = menudata;
          this.route.navigate(['/signup', { type: menudata }]);
        }
      case "training": {
        this.menudata = menudata;
        this.route.navigate(['/signup', { type: menudata }]);
      }
    }

  }

  ngOnInit() {
  }

}
