import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Snackbar,
} from '@material-ui/core';
import GeneralLoading from '../GeneralLoading';
import PageTitle from '../ui/PageTitle';
import NoMatch from '../noMatch';
import BasicInfo from './BasicInfo';
import BasicInfoEdit from './BasicInfoEdit';
import NewPassword from './NewPassword';

/* This is a level 3 component (page component) */

export default function AccountSetting() {
  const [editBasicInfo, setEditBasicInfo] = useState(false);
  const [message, setMessage] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  // const dispatch = useDispatch();
  // const accountId = useSelector((state) => state.user.id);
  // const authToken = useSelector((state) => state.user.token);
  const account = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading.user);
  const error = useSelector((state) => state.error.user);

  useEffect(() => {
    if (!loading.user.editAccount && error.user.editAccount) {
      if (error.user.editAccount === 'UniqueViolationError') {
        setMessage('Edit account error: Username already taken.');
      } else {
        setMessage(`Edit account error: ${error.user.editAccount}`);
      }
      setShowSnackbar(true);
    }
  }, [error.user.editAccount, loading.user.editAccount]);

  if (account === undefined) {
    if (loading.auth.fetchAccount || loading.user.fetchStudentCards || loading.user.browsePendingStudentCards) {
      return <GeneralLoading />;
    }
    return <NoMatch />;
  }

  const handleBasicBack = (msg) => {
    setEditBasicInfo(false);
    if (msg !== '') {
      setMessage(msg);
      setShowSnackbar(true);
    }
  };

  const handleBasicEdit = () => {
    setEditBasicInfo(true);
  };

  return (
    <>
      <PageTitle text={`${account.username} / Setting`} />
      {editBasicInfo ? (
        <BasicInfoEdit
          handleBack={handleBasicBack}
          username={account.username}
          fullName={account.fullName}
          email={account.email}
        />
      ) : (
        <BasicInfo
          handleEdit={handleBasicEdit}
          username={account.username}
          fullName={account.fullName}
          email={account.email}
        />
      )}
      <NewPassword />
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => {
          setShowSnackbar(false);
          setMessage('');
        }}
        message={message}
      />
    </>
  );
}
