import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';

@NgModule({
  declarations: [SignInPageComponent, SignInFormComponent],
  imports: [CommonModule, SignInRoutingModule],
})
export class SignInModule {}
