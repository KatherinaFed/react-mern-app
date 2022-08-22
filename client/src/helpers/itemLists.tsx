import {
  AccountIcon,
  EditProfileIcon,
  FavoriteIcon,
  FindFriendsIcon,
  LanguageIcon,
  NotificationIcon,
  PrivacyIcon,
  SettingsIcon,
  ShareIcon,
} from './Icons';

export const sidebarSettingsList = [
  {
    id: 'edit',
    name: 'Edit Profile',
    link: '/settings/edit_profile',
    icon: <EditProfileIcon />,
  },
  {
    id: 'account',
    name: 'Account',
    link: '/settings/account',
    icon: <AccountIcon />,
  },
  {
    id: 'favorite_sports',
    name: 'Favorite Sports',
    link: '/settings/favorite_sports',
    icon: <FavoriteIcon />,
  },
  {
    id: 'privacy',
    name: 'Privacy',
    link: '/settings/privacy',
    icon: <PrivacyIcon />,
  },
  {
    id: 'lang',
    name: 'Language and Units',
    link: '/settings/language',
    icon: <LanguageIcon />,
  },
  {
    id: 'notifications',
    name: 'Notifications',
    link: '/settings/notifications',
    icon: <NotificationIcon />,
  },
];

export const sidebarProfileList = [
  {
    id: 'share',
    name: 'Share',
    link: '',
    icon: <ShareIcon />,
  },
  {
    id: 'friends',
    name: 'Find Friends',
    link: '',
    icon: <FindFriendsIcon />,
  },
  {
    id: 'settings',
    name: 'Settings',
    link: '/settings/edit_profile',
    icon: <SettingsIcon />,
  },
];
