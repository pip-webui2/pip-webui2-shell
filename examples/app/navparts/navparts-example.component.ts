import * as _ from 'lodash';
import { Component } from '@angular/core';
import { PipNavService, NavHeaderConfig } from 'pip-webui2-nav';
import { PipSidenavService, PipMediaService, MediaMainChange } from 'pip-webui2-layouts';

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

  public header: NavHeaderConfig = new NavHeaderConfig();

  constructor(
    private navService: PipNavService,
    private sidenav: PipSidenavService,
    private mainMedia: PipMediaService
  ) {
    this.mainMedia.asObservableMain().subscribe((change: MediaMainChange) => {
      this.navService.showNavIcon({
        icon: change.aliases.includes('xs') || change.aliases.includes('sm') ? this.xsIcon : this.gtXsIcon,
        action: () => {
          this.sidenav.toggleNav();
        }
      });
    });

    this.navService.showNavIcon({
      icon: this.xsIcon,
      action: () => {
        this.sidenav.toggleNav();
      }
    });

    this.navService.showBreadcrumb({
      items: [
        { title: this.breadcrumbTitle1 },
        { title: this.breadcrumbTitle2 }
      ]
    });

    this.navService.showPrimaryActions({
      actions: [
        {
          icon: 'notifications', click: () => {
            console.log('clicked on "Notifications"');
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

    this.navService.showSecondaryActions({
      actions: [
        { title: 'Title 1' },
        { title: 'Title 2' }
      ]
    }
    );

    this.header.title = 'Kate Negrienko';
    this.header.subtitle = 'frontend developer';
    this.header.picture = "/assets/1.png";

    this.navService.showNavHeader(_.cloneDeep(this.header));
    this.navService.showNavMenu({
      sections: [
        {
          name: 'appbar',
          title: 'Appbar',
          //icon: 'goal',
          links: [
            { name: 'Nav icons', title: 'Nav icons', state: 'nav_icons', icon: 'archive', url: 'appbar', tooltipText: 'Nav icons' },
            { name: 'Titles', title: 'Titles', state: 'titles', icon: 'list', url: 'titles' },
          ]
        },
        {
          name: 'sidenav',
          title: 'SideNav and something else',
          icon: 'area',
          links: [
            { name: 'StickySideNav', title: 'StickySideNav ghfvdb ygbh ghbnyujnyubj  yubhj', state: 'sticky_sidenav', icon: 'backup', url: 'sticky_sidenav'}
          ]
        }
      ]
    });
  }

  public ngOnInit() {
  }

  public onToogleIcon(): void {
    this.isIconShown = !this.isIconShown;
    //this.navService.changeVisibility(this.appbarIconPartName, this.isIconShown);
  }

  public onToogleBreadcrumb(): void {
    this.isBreadcrumbShown = !this.isBreadcrumbShown;
    //this.navService.changeVisibility(this.appbarBreadcrumbPartName, this.isBreadcrumbShown);
  }

  public onTooglePrimaryActions(): void {
    this.isPrimaryActionsShown = !this.isPrimaryActionsShown;
    //this.navService.changeVisibility(this.appbarPrimaryActionsPartName, this.isPrimaryActionsShown);
  }

  public onToogleSecondaryActions(): void {
    this.isSecondaryActionsShown = !this.isSecondaryActionsShown;
    //this.navService.changeVisibility(this.appbarSecondaryActionsPartName, this.isSecondaryActionsShown);
  }

  public onChangeIcon(): void {
    this.xsIcon = this.xsIcon == 'menu' ? 'arrow_back' : 'menu';
    this.navService.showNavIcon({
      icon: this.xsIcon, action: () => {
        this.sidenav.toggleNav();
      }
    });
  }

  public onChangeBreadcrumb(): void {
    this.navService.showBreadcrumb({
      items: [
        { title: this.breadcrumbTitle1 },
        { title: this.breadcrumbTitle2 }
      ]
    });
  }

  public changeVisibleMenu() {
    this.isMenuShown = !this.isMenuShown;
    //this.navService.changeVisibility(this.sidenavMenuPartName, this.isMenuShown);
  }

  public changeVisibleHeader() {
    this.isHeaderShown = !this.isHeaderShown;
    //this.navService.changeVisibility(this.sidenavHeaderPartName, this.isHeaderShown);
  }

  public changeHeaderSubtitle() {
    this.navService.showNavHeader(_.cloneDeep(this.header));
  }
}
