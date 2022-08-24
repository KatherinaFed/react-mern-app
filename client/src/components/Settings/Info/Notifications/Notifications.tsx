import FormItem from './FormItem/FormItem';
import { notificationsList } from './notificationsList';
import { FormsContainer, NotificationConatiner, NotificationHeader } from './styles';

const Notifications = () => {
  return (
    <NotificationConatiner>
      <NotificationHeader>Notifications</NotificationHeader>

      <FormsContainer>
        {notificationsList.map(({ id, name }) => (
          <FormItem id={id} name={name} />
        ))}
      </FormsContainer>
    </NotificationConatiner>
  );
};

export default Notifications;
