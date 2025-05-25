import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit{

  camposForm: FormGroup
  categoriasList: Categoria[] = []

  constructor(
    private categoriaService : CategoriaService,
    private service : LugarService
  ){
    this.camposForm = new FormGroup(
      {
        nome: new FormControl('', Validators.required),
        categoria: new FormControl('', Validators.required),
        localizacao: new FormControl('', Validators.required),
        urlFoto: new FormControl('', Validators.required),
        avaliacao: new FormControl('', Validators.required)
      }
    )
  }
  ngOnInit(): void {
    this.categoriaService.obterCategorias().subscribe(
      {
        next: x => this.categoriasList = x
      }
    )
  }

  salvar(){
    this.service.salvar(this.camposForm.value)
      .subscribe(
        {
          next: x => {
            console.log('Salvo com sucesso ', x)
            this.camposForm.reset()
          },
          error: x => console.log('Error ', x.error)
        }
      )
    console.log('valores ', this.camposForm.value)
  }

}
