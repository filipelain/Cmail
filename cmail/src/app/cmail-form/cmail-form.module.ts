import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormFieldDirective } from './cmail-form-group/form-field.directive';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';



@NgModule({
  declarations: [
    CmailFormGroupComponent,
    FormFieldDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [CmailFormGroupComponent, FormFieldDirective]
})
export class CmailFormModule { }
