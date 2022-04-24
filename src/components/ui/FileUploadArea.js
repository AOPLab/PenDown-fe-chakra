/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  makeStyles,
  Typography,
  Button,
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import Icon from './icon/index';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    // verticalAlign: 'center',
  },
  alignedTextWrapper: {
    boxSizing: 'content-box',
  },
  alignedTextWrapperMd: {
    width: '190px',
  },
  alignedText: {
    marginTop: '23px',
    marginBottom: '16px',
  },
  textAlignedText: {
    marginTop: '0px',
    marginBottom: '16px',
  },
  browseButton: {
    marginRight: '10px',
    marginLeft: '0px',
  },
  fieldAlignedText: {
    marginTop: '18px',
  },
  input: {
    width: '30px',
    height: '40px',
    display: 'none',
    marginTop: '10px',
  },
  root: {
    width: '100%',
    overflowX: 'hide',
  },
  container: {
    maxHeight: 800,
  },
  fileNameCell: {
    height: '40px',
    padding: 'unset',
    paddingLeft: '50px',
    borderBottomColor: theme.palette.grey.A700,
  },
  deleteCell: {
    height: '40px',
    padding: '8px 30px 4px 0',
    borderBottomColor: theme.palette.grey.A700,
  },
  deleteIcon: {
    height: '20px',
    width: '20px',
    cursor: 'pointer',
  },
  row: {
    height: '40px',
    '&:first-child': {
      borderTopColor: theme.palette.grey.A400,
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
    },
  },
}));

export default function FileUploadArea({
  text,
  fileAcceptFormat = '.pdf',
  selectedFile,
  setSelectedFile,
  multipleFiles = true,
}) {
  const classes = useStyles();

  useEffect(() => {
    if (multipleFiles === false) {
      if (selectedFile.length > 1) {
        const newSelectedFile = selectedFile.slice(1);
        setSelectedFile(newSelectedFile);
      }
    }
  }, [multipleFiles, selectedFile, setSelectedFile]);

  const handleUploadFile = (e) => {
    const newFiles = Object.keys(e.target.files).map((key) => e.target.files[key]);
    setSelectedFile(selectedFile.concat(newFiles));
  };

  const handleDelete = (e, deleteFile) => {
    const filtered = selectedFile.filter((file) => file !== deleteFile);
    setSelectedFile(filtered);
  };

  return (
    <>
      <div className={`${classes.wrapper}`}>
        <div className={`${classes.alignedTextWrapper} ${classes.alignedTextWrapperMd}`}>
          <Typography variant="body1" className={classes.fieldAlignedText}>
            {text}
          </Typography>
        </div>
        <label htmlFor="upload-file">
          <input
            style={{ display: 'none' }}
            id="upload-file"
            name="upload-file"
            type="file"
            accept={fileAcceptFormat}
            onChange={(e) => handleUploadFile(e)}
            multiple={multipleFiles}
          />
          <Button
            className={classes.browseButton}
            variant="outlined"
            color="primary"
            component="span"
            startIcon={<Icon.Folder />}
          >
            Browse
          </Button>
        </label>
        {selectedFile.length !== 0 && (
          <Typography variant="body2" className={classes.fieldAlignedText}>
            {selectedFile.length}
            {' '}
            files selected
          </Typography>
        )}
      </div>
      <Paper className={classes.root} elevation={0}>
        <TableContainer className={classes.container}>
          <Table>
            <TableBody>
              {selectedFile.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name} className={classes.row}>
                  <TableCell align="left" className={classes.fileNameCell}>
                    <Typography variant="body2">{row === undefined ? 'error' : row.name}</Typography>
                  </TableCell>
                  <TableCell key={`${row.id}-deleteIcon`} className={classes.deleteCell} align="right">
                    <Icon.Trash
                      className={classes.deleteIcon}
                      onClick={(e) => {
                        handleDelete(e, row);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
