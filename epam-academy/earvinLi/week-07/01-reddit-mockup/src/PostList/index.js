// External Dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import PostAddEditDialog from './PostAddEditDialog';
import PostListItem from './PostListItem';
import { fetchPosts } from './action';
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
    deletedPost,
    onFetchPosts,
    postedPost,
    votedPost,
  } = props;

  useEffect(() => {
    onFetchPosts();
    // TODO: Use one single state to handle update monitoring
  }, [ deletedPost, onFetchPosts, postedPost, votedPost ]);

  const renderPostItems = () => fetchedPosts.map((post, index) => {
    const {
      id,
      owner,
      score,
      title,
      timestamp,
    } = post;

    const timeText = new Date(timestamp * 1000).toLocaleDateString('en-US', {
      dateStyle: 'long',
      timeStyle: 'medium',
    });
    const timeOwnerText = `submitted on ${timeText} by ${owner || 'Anonymous'}`;
    const scoreText = score < 1000 ? score : `${score / 1000}k`;

    return (
      <PostListItem
        hasDivider={index !== fetchedPosts.length - 1}
        id={id}
        key={`${id}-${title}`}
        postScore={scoreText}
        primaryText={title}
        secondaryText={timeOwnerText}
      />
    );
  });

  return (
    <>
      <Paper className={rootStyle}>
        <List>
          {renderPostItems()}
        </List>
      </Paper>
      <PostAddEditDialog />
    </>
  );
};

const mapStateToProps = (state) => {
  const {
    postedPost,
    posts,
  } = state.PostList;

  return {
    fetchedPosts: posts,
    postedPost,
  };
};

export default connect(mapStateToProps, {
  onFetchPosts: fetchPosts,
})(PostList);
