import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const token = this.cookieService.get('authToken')

    if (token) {
      return true
    } else {
      this.router.navigate(['/sign-in'])
      return false
    }
  }
}
