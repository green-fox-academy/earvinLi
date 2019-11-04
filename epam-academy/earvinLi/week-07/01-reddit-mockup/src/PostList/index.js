// External Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import PostListItem from './PostListItem';
import { getPostListStyles } from '../App/Styles';

// Local Variables
const useStyles = makeStyles(theme => getPostListStyles(theme));

// Component Definition
const PostList = (props) => {
  const {
    rootStyle,
  } = useStyles();

  const {
    fetchedPosts,
  } = props;

  const renderPostItems = () => fetchedPosts.map((post, index) => {
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
        hasDivider={index !== fetchedPosts.length - 1}
        key={`${id}-${title}`}
        postScore={scoreText}
        primaryText={title}
        secondaryText={timeOwnerText}
      />
    );
  });

  return (
    <Paper className={rootStyle}>
      <List>
        {renderPostItems()}
      </List>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  fetchedPosts: state.PostList.posts,
});

export default connect(mapStateToProps, {})(PostList);
