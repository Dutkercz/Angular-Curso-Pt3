import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  props: LayoutProps = { titulo: '', subTitulo: ''}

  constructor(
    private router: Router,
    private activatedRout: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.router.events //captura os eventos de troca de rotas
      .pipe(
        filter( () => this.activatedRout.firstChild !== null), //ativa quando o child da rota ativada não for null
        map( () => this.extrairPropiedadesLayout() ) //mapeia para o metodo
    ).subscribe( (x : LayoutProps) => this.props = x) // por final seta as propiedades
  }

  extrairPropiedadesLayout(): LayoutProps{
    let rotaFilha = this.activatedRout.firstChild
    while(rotaFilha?.firstChild){
      rotaFilha = rotaFilha.firstChild;
    }
    return rotaFilha?.snapshot.data as LayoutProps
  }
}
