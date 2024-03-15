import { Component } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent {

  appointmentobj :any ={
    "name": "string",
    "mobileNo": "string",
    "city": "string",
    "age": 0,
    "gender": "string",
    "appointmentDate": "2024-03-15T06:42:25.241Z",
    "appointmentTime": "string",
    "isFirstVisit": true,
    "naration": "string"
  };

  constructor (private master:MasterService){  

  }

    onSaveAppointment(){
      this.master.createNew(this.appointmentobj).subscribe((res:any)=>{
   if(res.result){
    alert("Appointment Done");
   }
      },errror =>{
alert("API Error / Check Form");
      })
  }
}
