import { Component, OnInit,Input } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  transferencias:any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    debugger
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
    })
  }

}
