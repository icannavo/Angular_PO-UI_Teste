import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { PoMenuItem,PoNavbarModule } from '@po-ui/ng-components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  
  readonly menus: Array<PoMenuItem> = [
    { label: 'Transferencia', action: this.destinyRouter.bind(this) },
    { label: 'Extratos', action: this.destinyRouter.bind(this) },
    { label: 'Destino', action: this.destinyRouter.bind(this) }
  ];

  constructor(private router: Router) { }

  private destinyRouter(value: any) {
    const destiny = value.label
    
    if(destiny == 'Transferencia'){
      this.router.navigateByUrl('/transferencia')
    }else if(destiny == 'Extratos'){
      this.router.navigateByUrl('/extrato')
    }else{
      this.router.navigateByUrl('/destino')
    } 

  }
  
  

}
