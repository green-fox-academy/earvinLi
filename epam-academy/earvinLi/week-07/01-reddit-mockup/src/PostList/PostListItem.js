// External Dependencies
import React from 'react';

// Material-UI Dependencies
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import { getPostListItemStyles } from '../App/Styles';

// Local Variables
const useStyles = makeStyles(theme => getPostListItemStyles(theme));

const PostListItem = (props) => {
  const {
    iconStyle,
    listItemAvatarStyle,
    postScoreStyle,
  } = useStyles();

  const {
    hasDivider,
    postScore,
    primaryText,
    secondaryText,
  } = props;

  return (
    <>
    <ListItem>
      <ListItemAvatar className={listItemAvatarStyle}>
        <div>
          <ArrowDropUpIcon className={iconStyle} />
          <Typography
            className={postScoreStyle}
            variant="body2"
          >
            {postScore}
          </Typography>
          <ArrowDropDownIcon className={iconStyle} />
        </div>
      </ListItemAvatar>
      <ListItemText
        primary={primaryText}
        secondary={secondaryText}
      />
      <ListItemSecondaryAction>
        {/* TODO: Create a shared Tooltip(Icon)Button component */}
        <Tooltip title="Modify">
          <IconButton edge='end' arial-label='modify'>
            <EditIcon className={iconStyle} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove">
          <IconButton edge='end' arial-label='remove'>
            <DeleteIcon className={iconStyle} />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
    {hasDivider && <Divider variant="inset" />}
    </>
  );
};

export default PostListItem;
