import { Component, inject } from '@angular/core';
import { Livro } from '../livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

    lista: Livro[] = [];
    index: number = -1;
  editar: boolean = false; 
  modalService = inject(NgbModal);
  livroEnviar!: Livro;

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

    abrirModal(content: any, i: number)
  {
    this.index = -1;
    this.livroEnviar = new Livro("","");
    if(i < 0)
    {
      this.editar = false;
    }
    else
    {
      this.editar = true;
      this.index = i;
      this.livroEnviar = this.lista[i];
    }
    this.modalService.open(content, {size: 'lg'});
  }

  alteraLista(livro: Livro)
  {
    if(this.index < 1)
    {
      this.lista.push(livro);
    }
    else
    {
      this.lista[this.index] = livro;
    }
    this.modalService.dismissAll(); 
  }

}
