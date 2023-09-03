import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompoundResponse,Compound } from '../types/compound';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CompoundService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

  getAllCompounds(): Observable<CompoundResponse> {
    return this.http.get<CompoundResponse>(this.apiUrl+'compounds');
  };

  getCompoundById(id: string): Observable<Compound> {
    const url = `${this.apiUrl}`+'compounds'+`/${id}`;
    return this.http.get<Compound>(url);
  };

  addCompound(compound: Compound): Observable<Compound> {
    return this.http.post<Compound>(this.apiUrl+'compounds', compound, httpOptions);
  }
}
