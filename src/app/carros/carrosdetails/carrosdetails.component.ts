import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../carro';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  roteador = inject(ActivatedRoute);
  editar!: boolean;
  carro: Carro = new Carro("",0);


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    if(id != null)
    {
      this.editar = true;
      this.carro.nome= 'Honda Civic';
      this.carro.ano = 2015;
    }
    else
    {
      this.editar = false;
    }
  }

}
