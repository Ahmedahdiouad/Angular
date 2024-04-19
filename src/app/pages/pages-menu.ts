import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Smart factory',
    icon: 'shopping-cart-outline',
    link: '/pages/charts/echarts',
    home: true,
  },
  
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/charts/chartjs',
  },
  {
    title: 'Machines',
    group: true,
  },
  {
    title: 'Maintenance and Equipment ',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Maintenance',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Equipment',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Equipment Management',
        link: '/pages/ui-features/typography',
      },
      
    ],
  },
  {
    title: 'Production ',
    icon: 'layout-outline',
    children: [
      {
        title: 'Production',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Production Performance',
        link: '/pages/layout/list',
      },
      {
        title: 'Production Tracking',
        link: '/pages/layout/infinite-list',
      },
      
    ],
  },
  {
    title: 'Orders and Logistics',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Orders',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Logistics',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Order Management',
        link: '/pages/forms/buttons',
      },
      
    ],
  },

  {
    title: 'Quality and Control',
    icon: 'browser-outline',
    children: [
      {
        title: 'Quality',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Quality Control',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Quality Assurance',
        link: '/pages/modal-overlays/popover',
      },
      
    ],
  },
  
  {
    title: 'Data Analysis',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Analysis',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Data',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'Trends',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Human Resources',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'HR',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Personnel Management',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Human Resources Planning',
        link: '/pages/extra-components/spinner',
      },
      
    ],
  },
  
  {
    title: 'Notifications and Alerts',
    icon: 'text-outline',
    children: [
      {
        title: 'Notifications',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'Alerts',
        link: '/pages/editors/ckeditor',
      },
      {
        title: 'Warnings',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Support and Assistance',
    icon: 'grid-outline',
    children: [
      {
        title: 'Support',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Help',
        link: '/pages/tables/tree-grid',
      },
      {
        title: 'FAQ',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'General Settings',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: 'Settings',
        link: '/pages/miscellaneous/404',
      },
      {
        title: 'Options',
        link: '/pages/miscellaneous/404',
      },
      {
        title: 'Preferences',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  
    ]