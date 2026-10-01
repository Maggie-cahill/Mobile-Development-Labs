import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonChip, IonContent, IonHeader, IonIcon, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular';
import { locationOutline, calendarOutline } from 'ionicons/icons'
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonChip, IonList, IonItem, IonIcon, RouterLink]
})

export class EventDetailsPage {
  constructor() {
    addIcons({locationOutline, calendarOutline})

     console.log("Event Details - constructor()")
  }

  ngOnInit() {
     console.log("Event Details - ngOnInit()")
  }

  ionViewWillEnter() {
     console.log("Event Details - ionViewWillEnter()")
  }

  ionViewDidEnter() {
     console.log("Event Details - ionViewDidEnter()")
  }

  ionViewWillLeave() {
     console.log("Event Details - ionViewWillLeave()")
  }

  ionViewDidLeave() {
     console.log("Event Details - ionViewDidLeave()")
  }

  ngOnDestroy() {
     console.log("Event Details - ngOnDestroy()")
  }

}
