import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit {

lugares : Lugar[] = []
categoriasFiltro : Categoria[] = []

constructor(
  private lugarService: LugarService,
  private categoriaService: CategoriaService
){}

  ngOnInit(): void {
    this.lugarService.obterTodos().subscribe(x => this.lugares = x)

    this.categoriaService.obterCategorias().subscribe(x => this.categoriasFiltro = x)
  }

  getTotalEstrelas(lugar : Lugar) : string {
    return "&#9733;".repeat(lugar.avaliacao || 0) + "&#9734;".repeat(5 - (lugar.avaliacao || 0))

  }

}
