import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Iemploye } from 'src/app/interfaces/Iemploye';



@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private myApiUrl = 'https://localhost:44365/api/Employes/';


  constructor(private http: HttpClient) {}
 getListEmploye(): Observable<any> {
   return this.http.get(this.myApiUrl);
 }
deleteEmploye(id: number): Observable<any>{
  return this.http.delete(this.myApiUrl + id);
}
getEmploye(id: number): Observable<any> {
  return this.http.get(this.myApiUrl + id);
}
saveEmploye(employe: Iemploye): Observable<any> {
  return this.http.post(this.myApiUrl, employe);
}
updateEmploye(id: number, employe: Iemploye): Observable<any>{
  return this.http.put(this.myApiUrl + id, employe)
}
}
