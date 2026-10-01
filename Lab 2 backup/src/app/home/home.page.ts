import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonRadio, IonRadioGroup,IonSelect, IonSelectOption, IonButton, RouterLink],
})
export class HomePage {
  constructor() {
    console.log("Home - constructor()") // called when the page opens immediatly
  }

  ngOnInit() {
     console.log("Home - ngOnInit()") // called when the system initially opens but after the constructor
  }

  ionViewWillEnter() {
     console.log("Home - ionViewWillEnter()") // called once the interface view is loading into shot
  }

  ionViewDidEnter() {
     console.log("Home - ionViewDidEnter()") // called when the entire interface is in full view (all components loaded)
  }

  ionViewWillLeave() {
     console.log("Home - ionViewWillLeave()") // called when you first leave the page to another interface
  }

  ionViewDidLeave() {
     console.log("Home - ionViewDidLeave()") // called when you leave the page entirely and the other page's interace has fully loaded
  }

  ngOnDestroy() {
     console.log("Home - ngOnDestroy()") // called when the system or interface is entirely shut down
  }
}
