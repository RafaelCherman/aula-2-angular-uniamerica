import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent implements OnInit{

  roteador = inject(ActivatedRoute);
  pessoa: Pessoa = new Pessoa();

  @Output() retorno = new EventEmitter<Pessoa>();
  
  @Input() editar: boolean = false;
  @Input() pessoaRecibida!: Pessoa;

  ngOnInit(): void {
    
      this.pessoa = this.pessoaRecibida;
    
  }

  constructor(){
    
    /*let id = this.roteador.snapshot.paramMap.get('id');
    if(id != null)
    {
      this.editar = true;
      this.pessoa.idade = 30;
      this.pessoa.nome = "João";
    }
    else
    {
      this.editar = false;
    }*/
  }

  enviar()
  {
    this.retorno.emit(this.pessoa);
  }

  


}
