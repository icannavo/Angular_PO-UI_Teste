import { Component,OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { DestinoService } from '../services/destino.service';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css']
})
export class DestinoComponent implements OnInit {

  nome:string;
  sobrenome:string;
  conta:string;

  constructor(private service: DestinoService,private router: Router) {}

  novoDestino(){
    if(this.nome == undefined || this.sobrenome == undefined || this.conta == undefined){
      alert('Campos Nome,Sobrenome e Conta devem estar preenchidos')
      return false
    }
    
    const value = { 
      nome:this.nome,
      sobrenome:this.sobrenome,
      conta:this.conta
  }

    this.service.adicionarDestino(value).subscribe(result => {
      this.router.navigateByUrl('/extrato')
    })
  }

  ngOnInit(): void {
  }

}
