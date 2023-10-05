import { Component } from '@angular/core';
import { Livro } from '../livro';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

    lista: Livro[] = []

    constructor(){
      this.lista.push(new Livro("Autor1", "Titulo1"));
      this.lista.push(new Livro("Autor2", "Titulo2"));
      this.lista.push(new Livro("Autor3", "Titulo3"));
      this.lista.push(new Livro("Autor4", "Titulo4"));
      this.lista.push(new Livro("Autor5", "Titulo5"));
      this.lista.push(new Livro("Autor6", "Titulo6"));
      this.lista.push(new Livro("Autor7", "Titulo7"));
      this.lista.push(new Livro("Autor8", "Titulo8"));
      this.lista.push(new Livro("Autor9", "Titulo9"));
      this.lista.push(new Livro("Autor10", "Titulo10"));

    }
}
