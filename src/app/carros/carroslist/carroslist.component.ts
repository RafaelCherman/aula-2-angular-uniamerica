import { Component } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[] = [];

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
}
