import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livro';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent implements OnInit{

  roteador = inject(ActivatedRoute);
  livro: Livro = new Livro("","");

  @Output() retorno = new EventEmitter<Livro>();

  @Input() editar: boolean = false;
  @Input() livroRecebido!: Livro;


  constructor(){
    /*let id = this.roteador.snapshot.paramMap.get('id');
    if(id != null)
    {
      this.editar = true;
      this.livro.autor= "Miguel de Cervantes";
      this.livro.titulo = "Dom Quixote";
    }
    else
    {
      this.editar = false;
    }*/
  }

  ngOnInit(): void {
    this.livro = this.livroRecebido;
  }

  enviar()
  {
    this.retorno.emit(this.livro);
  }
}
