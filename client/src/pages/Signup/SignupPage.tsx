import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { signup } from '../../store/auth/authThunk';
import {
  FormSignup,
  LeftSideContainerSignup,
  LeftSideSignup,
  SignupWrapper,
} from './styles';

interface SignupI {
  username: string;
  email: string;
  password: string;
  confirmPwd: string;
}

const validationOfSignupData = Yup.object().shape({
  username: Yup.string().required('User Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be shorter than 12 characters')
    .required('Password is required'),
  confirmPwd: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignupPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPwd: '',
    } as SignupI,
    validationSchema: validationOfSignupData,
    onSubmit: (values) => {
      dispatch(signup(values.username, values.email, values.password));
    },
  });

  return (
    <SignupWrapper>
      <LeftSideSignup>
        <LeftSideContainerSignup>
          <div className="app-name">
            <p>Friends & Events</p>
          </div>
          <div className="form-container">
            <div className="header-text">Signup</div>
            <FormSignup onSubmit={handleSubmit}>
              <div className="user-name">
                <label htmlFor="username">
                  User Name
                  <input
                    id="username"
                    type="text"
                    placeholder="User Name"
                    value={values.username}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="email">
                <label htmlFor="email">
                  Email
                  <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="password">
                <label htmlFor="password">
                  Password
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="confirm-pwd">
                <label htmlFor="confirmPwd">
                  Confirm password
                  <input
                    id="confirmPwd"
                    type="password"
                    placeholder="Confirm Password"
                    value={values.confirmPwd}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <button type="submit">Signup</button>
            </FormSignup>
          </div>
        </LeftSideContainerSignup>
      </LeftSideSignup>
    </SignupWrapper>
  );
};

export default SignupPage;
