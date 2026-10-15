import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLink, IonList, IonItem],
})
export class HomePage {
  constructor(private router: Router) {
    console.log("Home - constructor()")
  }

  routeToAboutPage() {
    this.router.navigate(['/about']);
  }

 
  ngOnInit() {
  console.log("Home - ngOnInit()")
  }
  ionViewWillEnter() {
  console.log("Home - ionViewWillEnter()")
  }
  ionViewDidEnter() {
  console.log("Home - ionViewDidEnter()")
  }
  ionViewWillLeave() {
  console.log("Home - ionViewWillLeave()")
  }
  ionViewDidLeave() {
  console.log("Home - ionViewDidLeave()")
  }
  ngOnDestroy() {
  console.log("Home - ngOnDestroy()")
  }
}
