import { Button } from '@chakra-ui/react';
import React from 'react';

import { GoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
// import refreshTokenSetup from '../../function/refreshToken';
import { useDispatch } from 'react-redux';
import { userGoogleSignIn } from '../../actions/user/auth';

const clientId = process.env.REACT_APP_OAUTH_ID;

function GoogleLoginButton() {
  const dispatch = useDispatch();

  const handleLogin = async (googleData) => {
    dispatch(userGoogleSignIn(googleData.tokenId, googleData.profileObj.name));
  };

  const onFailure = (res) => {
    console.log('Google Login failed: ', res);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Continue with Google"
      onSuccess={handleLogin}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      style={{ marginTop: '100px' }}
      isSignedIn
      render={(renderProps) => (
        <Button
          size="lg"
          variant="pendown"
          leftIcon={<FcGoogle />}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >

          Continue with Google
        </Button>
      )}
    />
  );
}

export default GoogleLoginButton;
