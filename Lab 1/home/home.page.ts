import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonIcon, IonGrid, IonCol, IonRow, IonToggle} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cameraOutline, americanFootballOutline, gameControllerOutline } from 'ionicons/icons'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonIcon, IonGrid, IonCol, IonRow, IonToggle],
})
export class HomePage {
  constructor() {
    addIcons({cameraOutline, americanFootballOutline, gameControllerOutline})
  }
}
