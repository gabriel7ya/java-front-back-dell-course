import { Component, OnInit } from '@angular/core';
import { Filme } from '../cadastrar-filme/filme.model';
import { FilmeService } from '../cadastrar-filme/filme.service';

@Component({
  selector: 'app-consultar-filme',
  templateUrl: './consultar-filme.component.html',
  styleUrls: ['./consultar-filme.component.css']
})



export class ConsultarFilmeComponent implements OnInit {

  retorno: number = 0;

  filme: Filme = {
    id: null,
    nome: null,
    genero: null,
    ano: null,
    autor: {
      id: null,
      nome: null,
      dataNascimento: null
    }
  }

  constructor(private filmeService: FilmeService) {
    this.filmeService = filmeService;
  }

  ngOnInit(): void {
  }

  onSubmitConsultar(form) {

    this.filme.id = form.value.id;

    this.filmeService.consultarFilmes(this.filme).subscribe(dados => {
      console.log("Consulta filme:");
      console.log(dados);

      this.retorno = (dados !== null) ? 1 : 0;
      this.filme = {
        id: dados.id,
        nome: dados.nome,
        genero: dados.genero,
        ano: dados.ano,
        autor: {
          id: dados.autor.id,
          nome: dados.autor.nome,
          dataNascimento: dados.autor.dataNascimento
        }
      }
    });
  }


}
