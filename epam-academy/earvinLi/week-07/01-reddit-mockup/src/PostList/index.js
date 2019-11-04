// External Dependencies
import React from 'react';

// Material-UI Dependencies
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import PostListItem from './PostListItem';
import { getPostListStyles } from '../App/Styles';

// Local Variables
const useStyles = makeStyles(theme => getPostListStyles(theme));

// Local Variables
const posts = [
  {
    id: 1,
    title: 'NASA Ozone hole smallest it\'s been since 1988',
    url: '',
    timestamp: 1572852057152,
    score: 14700,
    owner: 'Anonymous',
  },
  {
    id: 2,
    title: 'Best Photobomb Ever - Hubble telescope was trying to take a picture of distant galaxies, but asteroids kept getting in the way',
    url: '',
    timestamp: 1572852319465,
    score: 278,
    owner: 'Anonymous',
  }
];

// Component Definition
const PostList = () => {
  const {
    rootStyle,
  } = useStyles();

  return (
    <Paper className={rootStyle}>
      <List>
        {
          posts.map((post, index) => {
            const {
              id,
              owner,
              score,
              title,
              timestamp,
            } = post;

            const timeText = new Date(timestamp).toLocaleDateString('en-US', {
              dateStyle: 'long',
              timeStyle: 'medium',
            });
            const timeOwnerText = `submitted on ${timeText} by ${owner}`;
            const scoreText = score < 1000 ? score : `${score / 1000}k`;

            return (
              <PostListItem
                hasDivider={index !== posts.length - 1}
                key={`${id}-${title}`}
                postScore={scoreText}
                primaryText={title}
                secondaryText={timeOwnerText}
              />
            );
          })
        }
      </List>
    </Paper>
  );
};

export default PostList;
