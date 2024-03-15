import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {


  appointmentList :any[]=[];
 constructor(private master:MasterService){

 }

 ngOnInit(): void {
    this.getTodaysAppointment();
 }

 getTodaysAppointment(){
  this.master.getAllTodaysAppointment().subscribe((res:any) =>{
 this.appointmentList = res.data;
  },error=>{
  alert("API error Occoured");
  });
  
 }


 getAllAppointment(){
  this.master.getAllAppointment().subscribe((res:any) =>{
    this.appointmentList = res.data;
     },error=>{
     alert("API error Occoured");
     });
     
 }

 markDone(appointmentId:number){
  this.master.MarkAppointmentDone(appointmentId).subscribe((res:any) =>{
  this.getTodaysAppointment();
     },error=>{
     alert("API error Occoured");
     });
     
 }

 
}
