import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  profile : Profile | undefined

  constructor(
    private router: Router
  ){}

  navegar(){
    this.router.navigate(['/paginas/galerias'])
  }

  logarComGoogle(){}

  isLoggedIn(): boolean{
    return !!this.profile
    /*
    this.profile = { name: "João" };
    !!this.profile; >> true

    this.profile = null;
    !!this.profile; >> false

    !this.profile — Isso nega o valor de this.profile
    !!this.profile — A segunda negação nega o resultado da primeira. 
        (se ele for valido, retorna um true, pois retornar somente 'return this.profile' retornaria 
        o objeto)

    É uma forma simples de converter qualquer valor em um boolean,
    o que é util quando você quer retornar um boolean de forma clara.

    */
  }
}
