import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from './icon/index';

const StyledPaper = withStyles({
  root: {
    padding: '5px',
    textAlign: 'center',
    width: '18vw',
    margin: '5px',
    display: 'inherit',
  },
})(Paper);

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
  },
}));

export default function IconList() {
  const classes = useStyles();

  return (
    <div>
      <h1>svg icon</h1>
      <Grid className={classes.root}>
        <StyledPaper>
          <Icon.Dots style={{ color: 'orange' }} />
          <p>Dots</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Menu />
          <p>Menu</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.DevTeam />
          <p>DevTeam</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Info />
          <p>Info</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.NewWin />
          <p>NewWin</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.FilterIdle />
          <p>FilterIdle</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.FilterSelected />
          <p>FilterSelected</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.TriangleDown />
          <p>TriangleDown</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.TriangleLeft />
          <p>TriangleLeft</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.TriangleRight />
          <p>TriangleRight</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.TriangleUp />
          <p>TriangleUp</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Advancedsearch />
          <p>Advancedsearch</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Challenge />
          <p>Challenge</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Class />
          <p>Class</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Collapse />
          <p>Collapse</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Confirmed />
          <p>Confirmed</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Copy />
          <p>Copy</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Download />
          <p>Download</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Expand />
          <p>Expand</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Folder style={{ color: 'orange' }} />
          <p>Folder</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Overview />
          <p>Overview</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Paper />
          <p>Paper</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Peerreview />
          <p>Peerreview</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Project />
          <p>Project</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Statistic />
          <p>Statistic</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Submission />
          <p>Submission</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Trash />
          <p>Trash</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Upload />
          <p>Upload</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.TA />
          <p>TA</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.StatusCE />
          <p>StatusCE</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.StatusMLE />
          <p>StatusMLE</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.StatusOTR />
          <p>StatusOTR</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.StatusRE />
          <p>StatusRE</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.StatusRF />
          <p>StatusRF</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.StatusSE />
          <p>StatusSE</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.StatusTLE />
          <p>StatusTLE</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.StatusWA />
          <p>StatusWA</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Add />
          <p>Add</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Bell />
          <p>Bell</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Book />
          <p>Book</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Grade style={{ color: 'orange' }} />
          <p>Grade</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.History />
          <p>History</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Institute />
          <p>Institute</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Member />
          <p>Member</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Newadd />
          <p>Newadd</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Sort />
          <p>Sort</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Star />
          <p>Star</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Team />
          <p>Team</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Warning />
          <p>Warning</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Code />
          <p>Code</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Profile />
          <p>Profile</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Setting />
          <p>Setting</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Facebook />
          <p>Facebook</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.Github />
          <p>Github</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.LinkedIn />
          <p>LinkedIn</p>
        </StyledPaper>
      </Grid>
      <h1>MUI icon</h1>
      <Grid className={classes.root}>
        <StyledPaper>
          <Icon.HistoryIcon />
          <p>HistoryIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.BookIcon />
          <p>BookIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.StarIcon />
          <p>StarIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.ArrowForwardRoundedIcon />
          <p>ArrowForwardRoundedIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.ArrowBackRoundedIcon />
          <p>ArrowBackRoundedIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.ChevronLeftOutlinedIcon />
          <p>ChevronLeftOutlinedIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.ChevronRightOutlinedIcon />
          <p>ChevronRightOutlinedIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.ExpandMoreOutlinedIcon />
          <p>ExpandMoreOutlinedIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.ExpandLessOutlinedIcon />
          <p>ExpandLessOutlinedIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.SupervisedUserCircleIcon />
          <p>SupervisedUserCircleIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.BlockIcon />
          <p>BlockIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.RefreshOutlinedIcon />
          <p>RefreshOutlinedIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.LinkOutlinedIcon />
          <p>LinkOutlinedIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.SearchIcon />
          <p>SearchIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.NotificationsIcon />
          <p>NotificationsIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.SchoolIcon />
          <p>SchoolIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.PersonIcon />
          <p>PersonIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.SettingsIcon />
          <p>SettingsIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.AddBoxIcon />
          <p>AddBoxIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.PeopleIcon />
          <p>PeopleIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.DescriptionIcon style={{ color: 'orange' }} />
          <p>DescriptionIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.CodeIcon />
          <p>CodeIcon</p>
        </StyledPaper>
        <StyledPaper>
          <Icon.ErrorIcon />
          <p>ErrorIcon</p>
        </StyledPaper>
      </Grid>
    </div>
  );
}
