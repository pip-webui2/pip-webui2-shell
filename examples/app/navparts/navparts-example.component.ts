import * as _ from 'lodash';
import { Component } from '@angular/core';
import { PipNavService, NavHeaderConfig, PrimaryActionsConfig } from 'pip-webui2-nav';
import { PipSidenavService, PipMediaService, MediaMainChange, PipRightnavService } from 'pip-webui2-layouts';

import { PipThemesService, Theme } from 'pip-webui2-themes';
import { ShellService } from '../pip-webui2-shell';
import { manifestNavPartsExample } from './navparts-example.manifest';

@Component({
  selector: 'navparts-example',
  templateUrl: './navparts-example.component.html',
  styleUrls: ['./navparts-example.component.scss']
})
export class NavPartsExampleComponent {
  public appbarIconPartName: string = 'appbar-icon';
  public appbarBreadcrumbPartName: string = 'appbar-breadcrumb';
  public appbarPrimaryActionsPartName: string = 'appbar-primary-actions';
  public appbarSecondaryActionsPartName: string = 'appbar-secondary-actions';
  public breadcrumbTitle1: string = 'Signin';
  public breadcrumbTitle2: string = 'Nav items configuration';

  private isIconShown: boolean = true;
  private isBreadcrumbShown: boolean = true;
  private isPrimaryActionsShown: boolean = true;
  private isSecondaryActionsShown: boolean = true;
  private xsIcon: string = 'menu';
  private gtXsIcon: string = 'apps';

  public sidenavMenuPartName: string = 'sidenav-menu';
  public sidenavHeaderPartName: string = 'sidenav-header';

  public isMenuShown: boolean = true;
  public isHeaderShown: boolean = true;


  public themes: Theme[];
  public selectedTheme: Theme;

  constructor(
    private navService: PipNavService,
    private sidenav: PipSidenavService,
    private rightnav: PipRightnavService,
    private mainMedia: PipMediaService,
    private themesService: PipThemesService,
    private shell: ShellService
  ) {

    manifestNavPartsExample.appbar.primaryActions.actions[0].click = () => { this.rightnav.toggleRightnav();};
    manifestNavPartsExample.appbar.primaryActions.actions[1].subActions = this.generatePrimaryActionThemeList()
    this.shell.setManifest(manifestNavPartsExample);

    this.mainMedia.asObservableMain().subscribe((change: MediaMainChange) => {
      let is = change.aliases.includes('xs') || change.aliases.includes('sm');
      this.navService.showNavIcon({
        icon: is ? this.xsIcon : this.gtXsIcon,
        action: is ? () => {
          this.sidenav.toggleNav();
        } : null
      });
    });

    this.navService.showNavIcon({
      icon: this.gtXsIcon
    });

  }

  private selectTheme(selectedTheme) {
    this.themesService.selectedTheme = selectedTheme;
    this.selectedTheme = selectedTheme;
  }

  public ngOnInit() {
    this.selectTheme(this.themesService.selectedTheme);
  }

  private generatePrimaryActionThemeList() {
    let list = [];

    _.each(this.themesService.themes, (theme) => {
      list.push({
        title: theme.name, click: () => {
          this.selectTheme(theme);
        }
      })
    });

    return list;
  }

}
