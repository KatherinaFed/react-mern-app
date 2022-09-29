import _ from 'lodash'
import { NavLink } from 'react-router-dom';
import { Item } from './styles';

type SidebarProfileItemT = {
  // id: string;
  name: string;
  link: string;
  icon: JSX.Element;
};

const SidebarProfileItem = ({ name, link, icon }: SidebarProfileItemT) => {
  return (
    <Item key={_.uniqueId()}>
      <NavLink to={link} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="container-link">
          <span>{icon}</span>
          <p>{name}</p>
        </div>
      </NavLink>
    </Item>
  );
};

export default SidebarProfileItem;
