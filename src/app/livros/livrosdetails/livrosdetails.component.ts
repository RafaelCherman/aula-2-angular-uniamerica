import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livro';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {

  roteador = inject(ActivatedRoute);
  editar!: boolean;
  livro: Livro = new Livro("","");


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    if(id != null)
    {
      this.editar = true;
      this.livro.autor= "Miguel de Cervantes";
      this.livro.titulo = "Dom Quixote";
    }
    else
    {
      this.editar = false;
    }
  }
}
