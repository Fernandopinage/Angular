import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectRoutingModule } from './select-routing.module';
import { SelectComponent } from './select/select.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    SelectRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class SelectModule { }
