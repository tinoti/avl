import { Component } from '@angular/core'
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { AuthService } from 'src/app/core/auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cookieService: CookieService,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, this.passwordValidator]]
    })
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value
    const errors: ValidationErrors = {}

    if (value.length < 8) {
      errors['shortLength'] = true
      return errors
    }

    if (
      !/[A-Z]/.test(value) ||
      !/[a-z]/.test(value) ||
      !/[0-9]/.test(value) ||
      !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)
    ) {
      errors['complexity'] = true
    }

    return Object.keys(errors).length ? errors : null
  }

  // Mocked token and username for example purposes
  signIn(username: string) {
    this.authService.getMockToken(username).subscribe(token => {
      this.cookieService.set('authToken', token, 0.5 / 24)
      this.authService.decodeToken(token)

      this.router.navigate(['/dashboard'])
    })
  }
}
