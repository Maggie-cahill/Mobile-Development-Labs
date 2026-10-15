import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { NavController } from '@ionic/angular';
inject

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, RouterLink, IonButton]
})
export class StudentsPage implements OnInit {

  constructor(private router: Router) { 
     console.log("Students - constructor()")
  }

  navCtrl = inject(NavController);

  students: any[] = [
    {
      sid: "G001",
      name: "Jack Duggan",
      programme: "Software Development",
      registered: true,
      grades: [65, 70, 75]
    },
    {
      sid: "G002",
      name: "Seamus Kelly",
      programme: "Digital Media",
      registered: true,
      grades: [58,64,80]
      },
      {
      sid: "G004",
      name: "Bob Davis",
      programme: "Law",
      registered: true,
      grades: [72,68,74]
      },
      {
      sid: "G005",
      name: "Brendan Fitzroy",
      programme: "Law",
      registered: false,
      grades: [48,52,57]
    }

    
  ]



  ngOnInit() {
    console.log("Students - ngOnInit()")
  }

  // openStudentDetails(s:any) {
  //   this.router.navigate(['/student-details.page', s.sid]);
  // }

  openStudentDetails(s:any) {
    this.router.navigate(['/student-details']);
  }

  
  close() {
    this.navCtrl.pop();
  }

  ionViewWillEnter() {
  console.log("Students - ionViewWillEnter()")
  }
  ionViewDidEnter() {
  console.log("Students - ionViewDidEnter()")
  }
  ionViewWillLeave() {
  console.log("Students - ionViewWillLeave()")
  }
  ionViewDidLeave() {
  console.log("Students - ionViewDidLeave()")
  }
  ngOnDestroy() {
  console.log("Students - ngOnDestroy()")
  }


}
