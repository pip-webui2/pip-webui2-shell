import { ShellManifest } from '../pip-webui2-shell';
export const manifestNavPartsExample: ShellManifest = {
  nav: {
    header: {
      title: 'Kate Negrienko',
      subtitle: 'frontend developer',
      picture: "/assets/girl.png"
    },
    menu: {
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
            { name: 'StickySideNav', title: 'StickySideNav ghfvdb ygbh ghbnyujnyubj  yubhj', state: 'sticky_sidenav', icon: 'backup', url: 'sticky_sidenav' }
          ]
        }
      ]
    }
  },
  appbar: {}
}