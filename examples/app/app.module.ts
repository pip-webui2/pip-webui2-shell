import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipAppbarModule, PipRightnavModule, PipMediaModule, PipSidenavModule, PipMainModule, PipRootModule } from 'pip-webui2-layouts';
import { PipAppbarBreadcrumbModule, PipAppbarIconModule, PipAppbarPrimaryActionsModule, PipAppbarSecondaryActionsModule, PipNavPartModule, PipSidenavHeaderModule, PipSidenavMenuModule } from 'pip-webui2-nav';

import { NavPartsExampleModule } from './navparts/navparts-example.module';
import { NavPartsExampleComponent } from './navparts/navparts-example.component';
import { AppComponent } from './app.component';

import {PipShellModule} from './pip-webui2-shell';

const appRoutes: Routes = [
  { path: 'navparts', component: NavPartsExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'navparts' }
];

@NgModule({
  declarations: [
    AppComponent
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

    PipShellModule,

    PipAppbarBreadcrumbModule, 
    PipAppbarIconModule, 
    PipAppbarPrimaryActionsModule, 
    PipAppbarSecondaryActionsModule, 
    PipNavPartModule, 
    PipSidenavHeaderModule, 
    PipSidenavMenuModule,

    NavPartsExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
