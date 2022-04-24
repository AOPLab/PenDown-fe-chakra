import { Button } from '@chakra-ui/react';
import React from 'react';

import { GoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
// import refreshTokenSetup from '../../function/refreshToken';

const clientId = process.env.REACT_APP_OAUTH_ID;

// const useStyles = makeStyles(() => ({
//   authButtons: {
//     color: 'black',
//   },
// }));

function GoogleLoginButton() {
  // const classNames = useStyles();
  //   const onSuccess = (res) => {
  //     console.log('Login Success: currentUser:', res.profileObj);
  //      // refreshTokenSetup(res);
  //   };

  const handleLogin = async (googleData) => {
    // const res = await fetch('/api/v1/auth/google', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     token: googleData.tokenId,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // const data = await res.json();
    // store returned user somehow
    console.log(googleData);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
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
