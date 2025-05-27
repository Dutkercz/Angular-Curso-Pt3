import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GaleriasModule } from '../galerias/galerias.module';
import { LugaresModule } from '../lugares/lugares.module';

const routes: Routes = [
  {path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'categorias',
        loadChildren: () => import('../categorias/categorias.module').then(m => m.CategoriasModule),
        pathMatch: 'full',
        data: {titulo: 'Categorias', subTitulo:'Realize o cadastro de novas categorias'}
      },
      {
        path: 'galerias',
        loadChildren: () => import('../galerias/galerias.module').then(m => GaleriasModule),
        pathMatch:'full',
        data: {titulo: 'Lista de Lugares', subTitulo: 'Descubra os melhores lugares para explorar e se divertir!'
        }
      },
      {
        path: 'lugares',
        loadChildren: () => import('../lugares/lugares.module').then(m => LugaresModule),
        pathMatch: 'full',
        data:{
          titulo: 'Lugares',
          subTitulo: 'Realize o cadastro de novos lugares'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
