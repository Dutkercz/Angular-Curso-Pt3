import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lugar } from './lugar';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http : HttpClient) { }

  salvar(lugar : Lugar) : Observable<Lugar> {
    return this.http.post('http://localhost:3000/lugares', lugar)
  }

  obterTodos() : Observable<Lugar[]>{
    return this.http.get<Lugar[]>('http://localhost:3000/lugares')
  }
}
