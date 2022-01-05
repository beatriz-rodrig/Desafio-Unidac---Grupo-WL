import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cafe } from '../model/cafe.model';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  constructor(
    private http: HttpClient
  ) { }

    postCafe(cafe: Cafe): Observable<Cafe>{
      return this.http.post<Cafe>('https://desafiounidacwl.herokuapp.com/cafe/cadastrar', cafe)
    }

    readCafe(): Observable<Cafe[]>{
      return this.http.get<Cafe[]>('https://desafiounidacwl.herokuapp.com/cafe/listartodos')
    }

    findByIdCafe(id: number): Observable<Cafe>{
      return this.http.get<Cafe>(`https://desafiounidacwl.herokuapp.com/cafe/id/${id}`)
    }

    updateCafe(cafe: Cafe): Observable<Cafe>{
      return this.http.put<Cafe>('https://desafiounidacwl.herokuapp.com/cafe/atualizar', cafe)
    }

    deleteCafe(id: number): Observable<Cafe>{
      return this.http.delete<Cafe>(`https://desafiounidacwl.herokuapp.com/cafe/deletar/${id}`)
    }
}
