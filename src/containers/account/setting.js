import React, { useState } from 'react';
import {
  useToast, Tab, Tabs, TabList, TabPanels, TabPanel, Box,
} from '@chakra-ui/react';

import ProfileSetting from '../../components/account/ProfileSetting';
import PasswordSetting from '../../components/account/PasswordSetting';

function AccountSetting() {
  // const history = useHistory();
  // const location = useLocation();
  // const config = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const [username, setUsername] = useState('icheft');
  const [fullName, setFullName] = useState('Brian L. Chen');
  const [email, setEmail] = useState('pendown@example.com');
  const [bio, setBio] = useState('');
  const errorToast = useToast();

  const settingPages = [
    {
      label: 'Profile',
      content: <ProfileSetting />,
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
