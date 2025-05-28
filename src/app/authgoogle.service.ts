import { Injectable, inject, signal } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { auth } from './Auth.config'

@Injectable({
  providedIn: 'root'
})
export class AuthgoogleService {

  private oauthSerivice: OAuthService = inject(OAuthService)
  private router : Router = inject(Router)
  profile = signal<any>(null)

  constructor() {
    this.initConfiguration()
   }

  initConfiguration(){
    this.oauthSerivice.configure(auth)
    this.oauthSerivice.setupAutomaticSilentRefresh()
    this.oauthSerivice.loadDiscoveryDocumentAndTryLogin().then(() => {
      if(this.oauthSerivice.hasValidIdToken()){
        this.profile.set(this.oauthSerivice.getIdentityClaims())
      }
    })

  }

   login(){
    this.oauthSerivice.initImplicitFlow() //fluxo de autent. do google
  }

  logout(){
    this.oauthSerivice.revokeTokenAndLogout()
    this.oauthSerivice.logOut()
    this.profile.set(null)
    this.router.navigate([''])
  }

  getLoggedProfile(){
    return this.profile()
  }
}
