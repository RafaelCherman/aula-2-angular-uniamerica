import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[] = [];
  index: number = -1;
  editar: boolean = false; 
  modalService = inject(NgbModal);
  carroEnviar!: Carro;

  constructor(){
    this.lista.push(new Carro("carro1", 2001));
    this.lista.push(new Carro("carro2", 2002));
    this.lista.push(new Carro("carro3", 2003));
    this.lista.push(new Carro("carro4", 2004));
    this.lista.push(new Carro("carro5", 2005));
    this.lista.push(new Carro("carro6", 2006));
    this.lista.push(new Carro("carro7", 2007));
    this.lista.push(new Carro("carro8", 2008));
    this.lista.push(new Carro("carro9", 2009));
    this.lista.push(new Carro("carro10", 2010));

  }

  abrirModal(content: any, i: number)
  {
    this.index = -1;
    this.carroEnviar = new Carro("", 0);
    if(i < 0)
    {
      this.editar = false;
    }
    else
    {
      this.editar = true;
      this.index = i;
      this.carroEnviar = this.lista[i];
    }
    this.modalService.open(content, {size: 'lg'});
  }

  alteraLista(carro: Carro)
  {
    if(this.index < 1)
    {
      this.lista.push(carro);
    }
    else
    {
      this.lista[this.index] = carro;
    }
    this.modalService.dismissAll(); 
  }

}
