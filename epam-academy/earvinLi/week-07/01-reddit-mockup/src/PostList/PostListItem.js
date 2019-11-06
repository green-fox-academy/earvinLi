// External Dependencies
import React from 'react';

// Material-UI Dependencies
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import TooltippedIconButton from '../SharedUnits/TooltippedIconButton';
import { getPostListItemStyles } from '../App/Styles';

// Local Variables
const useStyles = makeStyles(theme => getPostListItemStyles(theme));

const PostListItem = (props) => {
  const {
    iconStyle,
    listItemAvatarStyle,
    listItemSecondaryActionStyle,
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
        <ArrowDropUpIcon className={iconStyle} />
        <Typography
          className={postScoreStyle}
          variant="body2"
        >
          {postScore}
        </Typography>
        <ArrowDropDownIcon className={iconStyle} />
      </ListItemAvatar>
      <ListItemText
        primary={primaryText}
        secondary={secondaryText}
      />
    <div className={listItemSecondaryActionStyle}>
        <TooltippedIconButton
          arialLabel='modify'
          edge='end'
          title="Modify"
        >
          <EditIcon className={iconStyle} />
        </TooltippedIconButton>
        <TooltippedIconButton
          arialLabel='remove'
          edge='end'
          title="Remove"
        >
          <DeleteIcon className={iconStyle} />
        </TooltippedIconButton>
      </div>
    </ListItem>
    {hasDivider && <Divider />}
    </>
  );
};

export default PostListItem;
