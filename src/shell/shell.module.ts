import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipAppbarModule, PipRightnavModule, PipMediaModule, PipSidenavModule, PipMainModule, PipRootModule } from 'pip-webui2-layouts';
import { PipAppbarBreadcrumbModule, PipAppbarIconModule, PipAppbarPrimaryActionsModule, PipAppbarSecondaryActionsModule, PipNavPartModule, PipSidenavHeaderModule, PipSidenavMenuModule } from 'pip-webui2-nav';

import { PipShellComponent } from './shell.component';

@NgModule({
  declarations: [
    PipShellComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,

    PipAppbarModule,
    PipRightnavModule,
    PipMediaModule,
    PipSidenavModule,
    PipMainModule,
    PipRootModule,

    PipAppbarBreadcrumbModule, 
    PipAppbarIconModule, 
    PipAppbarPrimaryActionsModule, 
    PipAppbarSecondaryActionsModule, 
    PipNavPartModule, 
    PipSidenavHeaderModule, 
    PipSidenavMenuModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    PipShellComponent
  ],
  providers: [],
})
export class PipShellModule { }
