type notificationsListT = {
  id: number;
  name: string;
};

export const notificationsList: notificationsListT[] = [
  { id: 1, name: 'I get a new follower' },
  { id: 2, name: 'Someone create a new event' },
  { id: 3, name: 'My friend creates a new event' },
  { id: 4, name: 'When someone accepts my follow request' },
  { id: 5, name: 'My friend joins an event' },
];
