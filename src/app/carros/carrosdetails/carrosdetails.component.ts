import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../carro';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent implements OnInit{

  roteador = inject(ActivatedRoute);
  
  carro: Carro = new Carro("",0);

  @Output() retorno = new EventEmitter<Carro>();

  @Input() editar: boolean = false;
  @Input() carroRecebido!: Carro;

  ngOnInit(): void {
    this.carro = this.carroRecebido;
  }

  constructor(){
    /*let id = this.roteador.snapshot.paramMap.get('id');
    if(id != null)
    {
      this.editar = true;
      this.carro.nome= 'Honda Civic';
      this.carro.ano = 2015;
    }
    else
    {
      this.editar = false;
    }*/
  }
  
  enviar()
  {
    this.retorno.emit(this.carro);
  }
  

}
