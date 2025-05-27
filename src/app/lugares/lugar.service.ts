import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  filtrar(nome: string, categoria: string): Observable<Lugar[]>{
    let parametrosDeBusca = new HttpParams

    if(nome){
      parametrosDeBusca = parametrosDeBusca.set('nome_like', nome)
    }

    if(categoria && categoria !== '0'){
      parametrosDeBusca = parametrosDeBusca.set('categoria', categoria) //'categoria', é o nome do campo dentro 'db' ou aqui db.json
    }
    return this.http.get<Lugar[]>('http://localhost:3000/lugares', {
      params: parametrosDeBusca
    })
  }
}
