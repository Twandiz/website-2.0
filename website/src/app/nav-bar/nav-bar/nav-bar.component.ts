import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  logoImage: any;
  logoAlt: any;

  constructor() {

    this.logoImage='\assets\images\Logo.png';
    this.logoAlt='\assets\images\LogoAlt.jpg';
  }

}

