import {
  Tab, Tabs, TabList, TabPanels, TabPanel, Box,
} from '@chakra-ui/react';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfileSetting from '../../components/account/ProfileSetting';
import PasswordSetting from '../../components/account/PasswordSetting';
import { editAccount } from '../../actions/user/user';

function AccountSetting() {
  const config = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = () => {
    dispatch(editAccount(config.token, username, fullName, email, description));
  };

  useEffect(() => {
    setUsername(user.username);
    setFullName(user.fullName);
    setEmail(user.email);
    setDescription(user.description);
  }, [user.description, user.email, user.fullName, user.username]);

  // const [username, setUsername] = useState('icheft');
  // const [fullName, setFullName] = useState('Brian L. Chen');
  // const [email, setEmail] = useState('pendown@example.com');
  // const [bio, setBio] = useState('');
  // const errorToast = useToast();

  const settingPages = [
    {
      label: 'Profile',
      content: <ProfileSetting onSubmit={onSubmit} />,
    },
    {
      label: 'Password',
      content: <PasswordSetting />,
    },

  ];
  function SettingsTab({ page }) {
    return (
      <Tabs isLazy size="lg" width="100%" colorScheme="primary" defaultIndex={1}>
        <TabList borderBottomWidth="2px" borderBottomColor="black">
          {page.map((tab, index) => (
            <Tab key={tab.label}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels borderStyle="none" _before={{ borderStyle: 'none' }} _after={{ borderStyle: 'none' }}>
          {page.map((tab, index) => (
            <TabPanel p={0} pt={2} key={tab.label}>
              {tab.content}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  }

  return (
    <>
      <Box px={4} py={8}>
        <SettingsTab page={settingPages} />
      </Box>
    </>

  );
}

export default AccountSetting;
