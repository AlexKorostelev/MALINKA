/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';

const UserRoute = ({ children, ...rest }) => {
  // const history = useHistory();

  const user = useSelector((state) => (state.user));

  return user ? <Route {...rest} /> : <LoadingToRedirect />;
};

export default UserRoute;
