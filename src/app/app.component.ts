import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  isLoginPage = true;
  showFiller = false;
  sideBarOpen=true;


  constructor(
    @Inject(DOCUMENT) public document: Document,
    public readonly router: Router,
    
  ) { }




  ngOnInit(): void {

   

    // this.router.events
    //   .subscribe(
    //     (event: any) => {
    //       if (event instanceof NavigationStart) {
    //         this.isLoginPage = event.url.split('/')[1] === 'login';
    //       }
    //     });
  }
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
