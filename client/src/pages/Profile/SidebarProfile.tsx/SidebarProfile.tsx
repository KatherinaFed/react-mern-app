import { isEmpty } from 'lodash';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Followers,
  FollowersInfo,
  Following,
  FooterInfo,
  Item,
  LinksInfo,
  ProfileInfo,
  SidebarProfileContainer,
} from './styles';
import userImg from '../../../assets/avatar2.png';
import SidebarProfileItem from './SidebarProfileItem/SidebarProfileItem';
import { sidebarProfileList } from '../../../helpers/itemLists';
import { useAppSelector } from '../../../hooks/hook';
import Preloader from '../../../components/Preloader';

type SidebarProfileProps = {
  id: string;
  username: string;
  followers: string;
  following: string;
  city: string;
  img: string;
};

const SidebarProfile = () => {
  const { profile } = useAppSelector((state) => state.profile);
  console.log('PROFILE SIDEBAR DATA: ', profile);
  // if (!profile) {
  //   return <Preloader />;
  // }

  return (
    <SidebarProfileContainer>
      <div className="wrapper">
        <ProfileInfo>
          <div className="avatar-wrapper">
            <img className="avatar" alt="profilePhoto" src={userImg} />
          </div>
          <div className="name-wrapper">
            <p>{profile.username}</p>
          </div>
        </ProfileInfo>

        <FollowersInfo>
          <div className="followers-wrapper">
            {/* тут можно сделать отдельный айтем, в пропсы которых будет приходить количество подписчиков */}
            <Followers>
              <div className="follower-item">
                <p className="count">
                  {isEmpty(profile.followers) ? 0 : profile.followers.length}
                </p>
                <p className="text">Followers</p>
              </div>
            </Followers>

            <Following>
              <div className="following-item">
                <p className="count">
                  {isEmpty(profile.following) ? 0 : profile.followers.length}
                </p>
                <p className="text">Following</p>
              </div>
            </Following>
          </div>
        </FollowersInfo>

        <LinksInfo>
          <Item>
            <NavLink
              to={`/user/${profile._id}/events`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div className="container-link">
                <p>Events</p>
              </div>
            </NavLink>
          </Item>
        </LinksInfo>

        <FooterInfo>
          {sidebarProfileList.map(({ id, name, link, icon }) => (
            <SidebarProfileItem id={id} name={name} link={link} icon={icon} />
          ))}
        </FooterInfo>
      </div>
    </SidebarProfileContainer>
  );
};

export default SidebarProfile;
