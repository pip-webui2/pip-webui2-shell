import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShellManifest, ShellAppbarManifest, ShellNavManifest } from './shell.manifest';
import { PipNavService } from 'pip-webui2-nav';

@Injectable()
export class ShellService {

    private manifest$: BehaviorSubject<ShellManifest>;

    constructor(private service: PipNavService) {
        let manifest: ShellManifest = new ShellManifest();
        manifest.appbar = new ShellAppbarManifest();
        manifest.nav = new ShellNavManifest();

        this.manifest$ = new BehaviorSubject<ShellManifest>(manifest);
    }


    public setManifest(manifest: ShellManifest) {
        if (manifest == this.manifest$.value) return;

        if (manifest.appbar != this.manifest$.value.appbar && manifest.appbar) {
            if (manifest.appbar.icon != this.manifest$.value.appbar.icon) {
                if (manifest.appbar.icon) {
                    this.service.showNavIcon(manifest.appbar.icon);
                } else {
                    this.service.showTitle(null);
                }
            }
            if (manifest.appbar.primaryActions != this.manifest$.value.appbar.primaryActions) {
                if (manifest.appbar.primaryActions) {
                    this.service.showPrimaryActions(manifest.appbar.primaryActions);
                }
            }

            if (manifest.appbar.secondaryActions != this.manifest$.value.appbar.secondaryActions) {
                if (manifest.appbar.secondaryActions) {
                    this.service.showSecondaryActions(manifest.appbar.secondaryActions);
                }
            }

            if (manifest.appbar.breadcrumbs != this.manifest$.value.appbar.breadcrumbs) {
                this.service.showBreadcrumb(manifest.appbar.breadcrumbs);
            }

        }
        if (manifest.nav != this.manifest$.value.nav && manifest.nav) {
            if (manifest.nav.header != this.manifest$.value.nav.header) {
                this.service.showNavHeader(manifest.nav.header);
            }

            if (manifest.nav.menu != this.manifest$.value.nav.menu) {
                this.service.showNavMenu(manifest.nav.menu);
            }
        }

        this.manifest$.next(manifest);
    }

    public destroyManifest() {


    }
}
