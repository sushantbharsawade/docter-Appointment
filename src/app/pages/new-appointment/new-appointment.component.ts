import { Component } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent {

  appointmentobj :any ={
    "name": "",
    "mobileNo": "",
    "city": "",
    "age": 0,
    "gender": "",
    "appointmentDate": "2024-03-15T06:42:25.241Z",
    "appointmentTime": "",
    "isFirstVisit": true,
    "naration": ""
  };

  constructor (private master:MasterService){  

  }

    onSaveAppointment(){
      this.master.createNew(this.appointmentobj).subscribe((res:any)=>{
   if(res.result){
    alert("Appointment Done- & Appointment No is -" + res.data.aapp);
   }
      },errror =>{
alert("API Error / Check Form");
      })
  }
}
