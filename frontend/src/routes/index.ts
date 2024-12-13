import { lazy } from 'react';
const  Progress  = lazy(()=>import ('../pages/Dashboard/Progress'));
const FAQ = lazy(()=>import('../pages/Master/FAQ'));
const AdminFAQ = lazy(() => import('../pages/Transaction/AdminFAQ/AdminFAQ'));

const FilledCheckList = lazy(() => import('../pages/Master/FilledCheckList'));
const ViewProgress = lazy(() => import('../pages/Master/ViewProgress'));
const Logout = lazy(() => import('../pages/Authentication/Logout'));

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
const Member = lazy(() => import('../pages/Master/Member'));
const Transaction = lazy(() => import('../pages/Transaction/ManagerFAQ/Transaction'));

const coreRoutes = [
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,

  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
    // roles:["Manager","Admin","Master"]
  },
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
  {
    path: '/transaction/member',
    title: 'Transaction Member',
    component: Member,
    // roles:["Manager","Admin","Master"]
  },
  {
    path: '/transaction/FAQ',
    title: 'FAQ',
    component: Transaction,
    // roles:["Manager","Admin","Master"]
  },
  {
    path: '/transaction/AFAQ',
    title: 'Admin FAQ',
    component: AdminFAQ,
    // roles:["Admin","Manager"]
  },

  {
    path: '/master/FAQ',
    title: 'FAQ Master',
    component: FAQ,
    // roles:["Admin","Manager"]
  },
  {
    path: '/master/viewprogress',
    title: 'View Progress',
    component: ViewProgress,
    // roles:["Admin","Master"]
  },
  {
    path: '/master/filledchecklist/:loc_id',
    title: 'Filled Checklist',
    component: FilledCheckList,
    // roles:["Admin","Master"]
  },
  {
    path: '/auth/logout',
    title: 'Logout',
    component: Logout,
  },
  {
    path:'/progress',
    title:'Dashboard',
    component:Progress
  }
];

const routes = [...coreRoutes];
export default routes;
