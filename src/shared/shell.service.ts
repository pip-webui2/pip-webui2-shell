import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ShellManifest, ShellAppbarManifest, ShellNavManifest } from './shell.manifest';
import { PipNavService } from 'pip-webui2-nav';

@Injectable()
export class ShellService {

    public manifest: ShellManifest;

    constructor(private service: PipNavService) {

        this.manifest = new ShellManifest();
        this.manifest.appbar = new ShellAppbarManifest();
        this.manifest.nav = new ShellNavManifest();

    }

    public setManifest(manifest: ShellManifest) {
        if (manifest == this.manifest) return;

        if (manifest.appbar != this.manifest.appbar && manifest.appbar) {
            if (manifest.appbar.icon != this.manifest.appbar.icon) {
                if (manifest.appbar.icon) {
                    this.service.showNavIcon(manifest.appbar.icon);
                } else {
                    this.service.showTitle(null);
                }
            }
            if (manifest.appbar.primaryActions != this.manifest.appbar.primaryActions) {
                if (manifest.appbar.primaryActions) {
                    this.service.showPrimaryActions(manifest.appbar.primaryActions);
                }
            }

            if (manifest.appbar.secondaryActions != this.manifest.appbar.secondaryActions) {
                if (manifest.appbar.secondaryActions) {
                    this.service.showSecondaryActions(manifest.appbar.secondaryActions);
                }
            }

            if (manifest.appbar.breadcrumbs != this.manifest.appbar.breadcrumbs) {
                this.service.showBreadcrumb(manifest.appbar.breadcrumbs);
            }

        }
        if (manifest.nav != this.manifest.nav && manifest.nav) {
            if (manifest.nav.header != this.manifest.nav.header) {
                this.service.showNavHeader(manifest.nav.header);
            }

            if (manifest.nav.menu != this.manifest.nav.menu) {
                this.service.showNavMenu(manifest.nav.menu);
            }
        }

        this.manifest = manifest;
    }

    public destroyManifest() {


    }
}
