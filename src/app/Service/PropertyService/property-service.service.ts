import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Properties } from '../../Model/Properties/properties';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService 
{
  private apiUrl = 'https://localhost:7208/api/Property' ;
  
  constructor(private http: HttpClient) { };
 
  getProperties(): Observable<Properties[]> {
    
    return this.http.get<Properties[]>(this.apiUrl);
  }
   
}
