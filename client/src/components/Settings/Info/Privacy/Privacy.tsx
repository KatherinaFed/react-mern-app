import {
  PrivacyContainer,
  PrivacyHeader,
  PrivacyInputs,
  PrivacyText,
  Private,
  Public,
} from './styles';

const Privacy = () => {
  return (
    <PrivacyContainer>
      <PrivacyHeader>Privacy</PrivacyHeader>

      <PrivacyText>
        <div className="privacy-text-container">Account privacy</div>
        <p>
          Adjust the privacy settings for your profile. Changing these settings
          doesn`t affect your existing followers.
        </p>
      </PrivacyText>

      <PrivacyInputs>
        <label htmlFor="public">
          <Public>
            <div className="public-input-container">
              <input id="public" type="radio" />
            </div>
            <div className="public-description-container">
              <div className="header-text">Public</div>
              <div className="description-text">
                <p className="text">
                  Your profile, Tours and Collections may be viewed by anyone on
                  Friends & Events. Tours and Collections set to "Only me" or
                  "Close friends" won't be affected.
                </p>
              </div>
            </div>
          </Public>
        </label>

        <label htmlFor="private">
          <Private>
            <div className="private-input-container">
              <input id="private" type="radio" />
            </div>
            <div className="private-description-container">
              <div className="header-text">Private</div>
              <div className="description-text">
                <p className="text">
                  Only people you approve as followers can see your profile,
                  Events and Friends. Events and Friends set to "Only me"
                  or "Close friends" won't be affected.
                </p>
              </div>
            </div>
          </Private>
        </label>
      </PrivacyInputs>
    </PrivacyContainer>
  );
};

export default Privacy;
