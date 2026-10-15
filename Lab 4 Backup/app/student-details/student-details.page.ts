import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
inject

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.page.html',
  styleUrls: ['./student-details.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonList, IonButton]
})
export class StudentDetailsPage implements OnInit {
  sid: string | null = null;
  selectedStudent: any;

  activatedRoute = inject(ActivatedRoute);

  navCtrl = inject(NavController);

  constructor() { 
    console.log("Student Details - constructor()")
  }

  ngOnInit() {
    // this.sid = this.activatedRoute.snapshot.paramMap.get('sid');

    this.selectedStudent = window.history.state.selectedStudent;
    console.log("Student Details - ngOnInit()")
  }

  close() {
    this.navCtrl.pop();
  }

  ionViewWillEnter() {
  console.log("Student Details - ionViewWillEnter()")
  }
  ionViewDidEnter() {
  console.log("Student Details - ionViewDidEnter()")
  }
  ionViewWillLeave() {
  console.log("Student Details - ionViewWillLeave()")
  }
  ionViewDidLeave() {
  console.log("Student Details - ionViewDidLeave()")
  }
  ngOnDestroy() {
  console.log("Student Details - ngOnDestroy()")
  }

  


  

}
