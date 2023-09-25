import { NgModule } from '@angular/core'

import { AuthRoutingModule } from './auth-routing.module'
import { SignInComponent } from './container/sign-in/sign-in.component'
import { PrimeNGModule } from 'src/app/shared/modules/primeng.module'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [SignInComponent],
  imports: [AuthRoutingModule, PrimeNGModule, SharedModule]
})
export class AuthModule {}
