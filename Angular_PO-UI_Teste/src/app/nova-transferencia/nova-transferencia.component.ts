import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Destinos } from '../models/destino.model';
import {Router} from "@angular/router"


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})

export class NovaTransferenciaComponent{
  @Output() aoTransferir = new EventEmitter<any>();
  listaDestinos:any[];
  valor:number;
  destino:number;

  constructor(private service: TransferenciaService,private router: Router) {}


  transferir(){
    debugger
    if(this.valor == undefined || this.destino == undefined){
      alert('Valor e Destino não pode estar zerado')
      return false
    }
    
    const valorEmitir = { 
                            valor:this.valor,
                            destino:this.destino
                        }

    this.service.adicionar(valorEmitir).subscribe(result => {
      this.router.navigateByUrl('/extrato')
    })
  }

  ngOnInit(): void {
    this.service.getDestinos().subscribe((destinos: Destinos[]) => {
      this.listaDestinos = destinos;
    })
  }
}

