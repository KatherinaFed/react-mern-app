import { EmailIcon, MobileIcon } from './IconsNotif';
import { IconsContainer, Item } from './styles';

type FormItemProps = {
  id: number;
  name: string;
};

const FormItem = ({ id, name }: FormItemProps) => {
  return (
    <Item key={id}>
      <p>{name}</p>
      <IconsContainer>
        <label htmlFor={`mobile-${id}`}>
          <input id={`mobile-${id}`} type="checkbox" />
          <span>
            <MobileIcon />
          </span>
        </label>

        <label htmlFor={`email-${id}`}>
          <input id={`email-${id}`} type="checkbox" />
          <span>
            <EmailIcon />
          </span>
        </label>
      </IconsContainer>
    </Item>
  );
};

export default FormItem;
