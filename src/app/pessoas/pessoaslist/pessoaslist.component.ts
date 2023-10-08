import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {

  lista: Pessoa[] = [];
  index: number = -1;
  editar: boolean = false; 
  modalService = inject(NgbModal);
  pessoaEnviar!: Pessoa;

  constructor()
  {
    let pessoa1: Pessoa = new Pessoa();
    pessoa1.nome = "Carlos";
    pessoa1.idade = 21;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.nome = "Lucas";
    pessoa2.idade = 28;

    let pessoa3:  Pessoa = new Pessoa();
    pessoa3.nome = "Cauan";
    pessoa3.idade = 39;

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.nome = "Vitor";
    pessoa4.idade = 22;

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.nome = "Adrian";
    pessoa5.idade = 26;

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.nome = "Gustavo";
    pessoa6.idade = 36;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.nome = "Raphael";
    pessoa7.idade = 23;

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.nome = "Ederson";
    pessoa8.idade = 37;

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.nome = "Gabriela";
    pessoa9.idade = 35;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.nome = "Guilherme";
    pessoa10.idade = 31;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);

  }

  abrirModal(content: any, i: number)
  {
    this.index = -1;
    this.pessoaEnviar = new Pessoa();
    if(i < 0)
    {
      this.editar = false;
    }
    else
    {
      this.editar = true;
      this.index = i;
      this.pessoaEnviar = this.lista[i];
    }
    this.modalService.open(content, {size: 'lg'});
  }

  alteraLista(pessoa: Pessoa)
  {
    if(this.index < 1)
    {
      this.lista.push(pessoa);
    }
    else
    {
      this.lista[this.index] = pessoa;
    }
    this.modalService.dismissAll(); 
  }

}
