import {
  Tab, Tabs, TabList, TabPanels, TabPanel, Box,
} from '@chakra-ui/react';

import React from 'react';
import ProfileSetting from '../../components/account/ProfileSetting';
import PasswordSetting from '../../components/account/PasswordSetting';

function AccountSetting() {
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
          {page.map((tab) => (
            <Tab key={tab.label}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels borderStyle="none" _before={{ borderStyle: 'none' }} _after={{ borderStyle: 'none' }}>
          {page.map((tab) => (
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
