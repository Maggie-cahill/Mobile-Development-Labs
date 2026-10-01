import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-comedy-details',
  templateUrl: './comedy-details.page.html',
  styleUrls: ['./comedy-details.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem]
})
export class ComedyDetailsPage {

  constructor() { 
     console.log("Comedy Details - constructor()")
  }

  ngOnInit() {
     console.log("Comedy Details - ngOnInit()")
  }

  ionViewWillEnter() {
     console.log("Comedy Details - ionViewWillEnter()")
  }

  ionViewDidEnter() {
     console.log("Comedy Details - ionViewDidEnter()")
  }

  ionViewWillLeave() {
     console.log("Comedy Details - ionViewWillLeave()")
  }

  ionViewDidLeave() {
     console.log("Comedy Details - ionViewDidLeave()")
  }

  ngOnDestroy() {
     console.log("Comedy Details - ngOnDestroy()")
  
  }

}
