import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destinos } from '../models/destino.model';

@Injectable({
  providedIn: 'root'
})

export class DestinoService {
  private listaDestino: any[]
  private url = 'http://localhost:3000/destino';

  constructor(private httpClient: HttpClient) { 
    this.listaDestino = []
  }

  get destinos(){
    return this.listaDestino
  }

  adicionarDestino(destino: any):Observable<Destinos>{

    return this.httpClient.post<Destinos>(this.url ,destino);
  }
}
