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
}
