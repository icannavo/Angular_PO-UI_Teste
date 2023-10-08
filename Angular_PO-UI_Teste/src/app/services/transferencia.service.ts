import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';
import { Destinos } from '../models/destino.model';
import * as moment from 'moment';



@Injectable({
  providedIn: 'root'
})

export class TransferenciaService {
  private listaTransferencia: any[]
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { 
    this.listaTransferencia = []
  }

  get transferencias(){
    return this.listaTransferencia
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  getDestinos(): Observable<Destinos[]>{
    return this.httpClient.get<Destinos[]>('http://localhost:3000/destino')
  }

  adicionar(transferencia: any):Observable<Transferencia>{
    this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url,transferencia);
  }

  private hidratar(transferencia: any){
    const date = new Date()

    if(date.getDay() == 0){
      transferencia.data = moment(date).add(1, 'days');
    }else if(date.getDay() == 6){
      transferencia.data = moment(date).add(2, 'days');
    }else{
      transferencia.data = date;
    }
  }
}
