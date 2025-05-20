import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GaleriasModule } from '../galerias/galerias.module';
import { LugaresModule } from '../lugares/lugares.module';

const routes: Routes = [
  {path: 'paginas',
    component: LayoutComponent,
    children: [
      {
        path: 'categorias',
        loadChildren: () => import('../categorias/categorias.module').then(m => m.CategoriasModule)
      },
      {
        path: 'galerias',
        loadChildren: () => import('../galerias/galerias.module').then(m => GaleriasModule)
      },
      {
        path: 'lugares',
        loadChildren: () => import('../lugares/lugares.module').then(m => LugaresModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
