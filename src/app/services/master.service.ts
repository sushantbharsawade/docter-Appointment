import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiEndpoint : string = "https://freeapi.gerasim.in/api/HospitalAppointment/"
  constructor(private http:HttpClient) { }

  createNew (obj:any):Observable<any>{
    return this.http.post(this.apiEndpoint +"AddNewAppointment",obj)
  }


  getAllAppointment():Observable<any>{
    return this.http.get<Observable<any> >(this.apiEndpoint +".GetAllAppointments")
  }

  getAllTodaysAppointment():Observable<any>{
    return this.http.get<Observable<any> >(this.apiEndpoint +".GetTodaysAppointments")
  }


  MarkAppointmentDone( appointmentId: number):Observable<any>{
    return this.http.get<Observable<any> >(this.apiEndpoint +".MarkAppointmentDone?appointmentId" + appointmentId)
  }
}
