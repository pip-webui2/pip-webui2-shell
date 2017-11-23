import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatToolbarModule } from '@angular/material';

import { PipNavModule } from 'pip-webui2-nav';
import { PipDocumentLayoutModule, PipShadowModule } from 'pip-webui2-layouts';
import { NavPartsExampleComponent } from './navparts-example.component';
import { PipNavService } from 'pip-webui2-nav';


@NgModule({
  declarations: [
    NavPartsExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,

    PipDocumentLayoutModule,
    PipShadowModule,

    PipNavModule
  ],
  exports: [
    NavPartsExampleComponent
  ],
  providers: [
    PipNavService
  ],
})
export class NavPartsExampleModule { }