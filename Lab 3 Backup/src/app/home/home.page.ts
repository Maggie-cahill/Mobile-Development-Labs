import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem } from '@ionic/angular';

const Buttons = document.getElementById("buttons");

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, FormsModule, IonInput, IonItem  ],
})
export class HomePage {
  name : string = "Maggie";
  disabled : boolean = false;
  button : string = "Button 1";
  startNumber : number = 0;
  maxNumber : number = 5;
  minNumber : number = 0;

  products = [
  { pid:"13142", name:"2 Litre Milk", price:2.25, stock:324 },
  { pid:"56892", name:"1lb butter", price:4.98, stock:584 },
  { pid:"25968", name:"Dozen eggs", price:2.85, stock:13 },
]




  constructor() {  
  }

  alertButton1() {
      alert("Button 1 has been pressed")
    }

  alertButton2() {
      alert("Button 2 has been pressed")
    }

    // Buttons.addEventListener("mouseenter", (e) => {
    //     console.log("You have entered Button 1");             
    // });

  Button1Enter() {
    console.log("Mouse has entered Button 1")
  }

  Button2Enter() {
    console.log("Mouse has entered Button 2")
  }

  focusButton1() {
      console.log("Button 1 has been focused on");
  }

  focusButton2() {
      console.log("Button 2 has been focused on");
  }

  incrementNumber() {
      this.startNumber++;
  }

  decrementNumber() {
    this.startNumber--;
  }

  alertProduct(product:any) {
    alert("ID: " + product.pid + ", Name: " + product.name + ", Price: " + product.price + ", Stock: " + product.stock);
    
  }

}
