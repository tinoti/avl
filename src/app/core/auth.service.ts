import { Injectable } from '@angular/core'
import jwt_decode from 'jwt-decode'
import { CookieService } from 'ngx-cookie-service'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private cookieService: CookieService) {}
  private _username: string | null = null

  decodeToken(token: string): void {
    if (token) {
      const decoded = jwt_decode(token) as any
      this._username = decoded.username
    } else {
      const token = this.cookieService.get('authToken')
      const payload = token.split('.')[1]
      const decoded = JSON.parse(atob(payload))
      this._username = decoded.username
    }
  }

  // For example purposes
  getMockToken(username: string): Observable<string> {
    const header = {
      alg: 'HS256',
      typ: 'JWT'
    }

    const payload = {
      sub: '1234567890',
      name: 'Test',
      username: username,
      iat: 1516239022
    }

    const encodedHeader = btoa(JSON.stringify(header))
    const encodedPayload = btoa(JSON.stringify(payload))

    return of(`${encodedHeader}.${encodedPayload}`)
  }

  get username(): string | null {
    return this._username
  }
}
