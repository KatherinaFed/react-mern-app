import { sidebarSettingsList } from '../../../helpers/itemLists';
import SidebarItem from './SidebarItem/SidebarItem';
import {
  SidebarContainer,
  SidebarItems,
  SidebarWrapper,
} from './styles';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarContainer>
        <SidebarItems>
          {sidebarSettingsList.map(({ id, name, link, icon }) => (
            <SidebarItem id={id} name={name} link={link} icon={icon} />
          ))}
        </SidebarItems>
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
