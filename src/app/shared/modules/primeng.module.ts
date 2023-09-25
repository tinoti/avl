import { NgModule } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext'
import { MessageModule } from 'primeng/message'
import { MessagesModule } from 'primeng/messages'
import { PasswordModule } from 'primeng/password'
import { TableModule } from 'primeng/table'
import { ToolbarModule } from 'primeng/toolbar'

@NgModule({
  imports: [
    InputTextModule,
    PasswordModule,
    MessagesModule,
    CardModule,
    ButtonModule,
    MessageModule,
    ToolbarModule,
    TableModule
  ],

  exports: [
    InputTextModule,
    PasswordModule,
    MessagesModule,
    CardModule,
    ButtonModule,
    MessageModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNGModule {}
