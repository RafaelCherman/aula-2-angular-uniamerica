import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  roteador = inject(ActivatedRoute);
  editar!: boolean;
  pessoa: Pessoa = new Pessoa();


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    if(id != null)
    {
      this.editar = true;
      this.pessoa.idade = 30;
      this.pessoa.nome = "João";
    }
    else
    {
      this.editar = false;
    }
  }

}
