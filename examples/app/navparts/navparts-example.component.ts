import * as _ from 'lodash';
import { Component } from '@angular/core';
import { PipNavPartService, SidenavHeader } from 'pip-webui2-nav';
import { PipSidenavService, PipMediaService, MediaMainChange, PipRightnavService } from 'pip-webui2-layouts';

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
  public breadcrumbTitle1: string = 'Title 1';
  public breadcrumbTitle2: string = 'Title 2';

  private isIconShown: boolean = true;
  private isBreadcrumbShown: boolean = true;
  private isPrimaryActionsShown: boolean = true;
  private isSecondaryActionsShown: boolean = true;
  private xsIcon: string = 'menu';
  private gtXsIcon: string = 'home';

  public sidenavMenuPartName: string = 'sidenav-menu';
  public sidenavHeaderPartName: string = 'sidenav-header';

  public isMenuShown: boolean = true;
  public isHeaderShown: boolean = true;

  public header: SidenavHeader = new SidenavHeader();

  constructor(
    private navparts: PipNavPartService,
    private sidenav: PipSidenavService,
    private mainMedia: PipMediaService,
    private rightnav: PipRightnavService
  ) {
    this.mainMedia.asObservableMain().subscribe((change: MediaMainChange) => {
      this.navparts.updateProp(this.appbarIconPartName, 'icon', change.aliases.includes('xs') || change.aliases.includes('sm') ? this.xsIcon : this.gtXsIcon);
    });

    this.navparts.updatePartByName(this.appbarIconPartName, this.isIconShown, {
      icon: this.xsIcon,
      action: () => {
        this.sidenav.toggleNav();
      }
    });

    this.navparts.updatePartByName(this.appbarBreadcrumbPartName, this.isBreadcrumbShown, {
      items: [
        { title: this.breadcrumbTitle1 },
        { title: this.breadcrumbTitle2 }
      ]
    });

    this.navparts.updatePartByName(this.appbarPrimaryActionsPartName, this.isPrimaryActionsShown, {
      actions: [
        {
          icon: 'notifications', click: () => {
            this.rightnav.toggleRightnav();
          }
        },
        {
          icon: 'cloud', subActions: [
            {
              title: 'Upload', click: () => {
                console.log('clicked on "Upload"');
              }
            },
            { title: 'Open cloud' }
          ]
        }
      ]
    });

    this.navparts.updatePartByName(this.appbarSecondaryActionsPartName, this.isSecondaryActionsShown, {
      actions: [
        { title: 'Title 1' },
        { title: 'Title 4' }
      ]
    });

    this.header.title = 'Kate Negrienko';
    this.header.subtitle = 'frontend developer';
    this.header.picture = "/assets/1.png";

    this.navparts.updatePartByName(this.sidenavHeaderPartName, this.isHeaderShown, _.cloneDeep(this.header));
    this.navparts.updatePartByName(this.sidenavMenuPartName, this.isMenuShown, {
      sections: [
        {
          title: 'Appbar',
          icon: 'goal',
          links: [
            { name: 'Nav icons', title: 'Nav icons', state: 'nav_icons', icon: 'archive', url: 'appbar', controller: 'IconsController', tooltipText: 'Nav icons' },
            { name: 'Titles', title: 'Titles', state: 'titles', icon: 'list', url: 'titles', controller: 'TitlesController' },
          ]
        },
        {
          title: 'SideNav tvh ybhjnyubj nyukbygjbnyuhbjygbh',
          icon: 'area',
          links: [
            { name: 'StickySideNav', title: 'StickySideNav ghfvdb ygbh ghbnyujnyubj  yubhj', state: 'sticky_sidenav', icon: 'backup', url: 'sticky_sidenav', controller: 'StickySideNavController' },
            //{ name: 'Navigations', title: 'Navigations', state: 'navigations', icon: 'icons:preview', url: '/navigations', controller: 'NavigationsController', templateUrl: 'navigations.html' }
          ]
        }
      ]
    });
  }

  public ngOnInit() {
    console.log('this.service.parts', this.navparts.parts);
  }

  public onToogleIcon(): void {
    this.isIconShown = !this.isIconShown;
    this.navparts.changeVisibility(this.appbarIconPartName, this.isIconShown);
  }

  public onToogleBreadcrumb(): void {
    this.isBreadcrumbShown = !this.isBreadcrumbShown;
    this.navparts.changeVisibility(this.appbarBreadcrumbPartName, this.isBreadcrumbShown);
  }

  public onTooglePrimaryActions(): void {
    this.isPrimaryActionsShown = !this.isPrimaryActionsShown;
    this.navparts.changeVisibility(this.appbarPrimaryActionsPartName, this.isPrimaryActionsShown);
  }

  public onToogleSecondaryActions(): void {
    this.isSecondaryActionsShown = !this.isSecondaryActionsShown;
    this.navparts.changeVisibility(this.appbarSecondaryActionsPartName, this.isSecondaryActionsShown);
  }

  public onChangeIcon(): void {
    this.xsIcon = this.xsIcon == 'menu' ? 'arrow_back' : 'menu';
    this.navparts.updateProp(this.appbarIconPartName, 'icon', this.xsIcon);
  }

  public onChangeBreadcrumb(): void {
    this.navparts.updateProp(this.appbarBreadcrumbPartName, 'items', [
      { title: this.breadcrumbTitle1 },
      { title: this.breadcrumbTitle2 }
    ]);
  }

  public changeVisibleMenu() {
    this.isMenuShown = !this.isMenuShown;
    this.navparts.changeVisibility(this.sidenavMenuPartName, this.isMenuShown);
  }

  public changeVisibleHeader() {
    this.isHeaderShown = !this.isHeaderShown;
    this.navparts.changeVisibility(this.sidenavHeaderPartName, this.isHeaderShown);
  }

  public changeHeaderSubtitle() {
    this.navparts.updateProps(this.sidenavHeaderPartName, _.cloneDeep(this.header));
  }
}
