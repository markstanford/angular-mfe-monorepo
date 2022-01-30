import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { RemoteErrorRoutingModule } from './remote-error-routing.module';
import { RemoteErrorComponent } from './remote-error.component';


@NgModule({
  declarations: [
    RemoteErrorComponent
  ],
  imports: [
    CommonModule,
    RemoteErrorRoutingModule,
    MatIconModule
  ]
})
export class RemoteErrorModule { }
