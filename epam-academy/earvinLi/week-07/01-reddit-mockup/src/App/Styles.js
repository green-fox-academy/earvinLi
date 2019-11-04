export const getAppStyles = (theme) => ({
  rootStyle: {
    display: 'flex',
  },
});

export const getAppHeaderStyles = (theme) => ({
  buttonStyle: {
    color: 'black',
    margin: theme.spacing(1),
  },
  rootStyle: {
    flexGrow: 1,
  },
  sloganImageStyle: {
    width: '100%',
  },
  titleStyle: {
    color: 'black',
    flexGrow: 1,
  },
  toolBarStyle: {
    backgroundColor: 'white',
  },
});

export const getPostListStyles = (theme) => ({
  rootStyle: {
    flex: 3,
    margin: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
  },
});

export const getPostListItemStyles = (theme) => ({
  iconStyle: {
    color: 'grey',
  },
  listItemAvatarStyle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginRight: theme.spacing(1),
  },
  listItemSecondaryActionStyle: {
    display: 'flex',
  },
  postScoreStyle: {
    color: 'grey',
  },
});

export const getSidebarStyles = (theme) => ({
  buttonStyle: {
    backgroundColor: '#4AA3DF',
    width: '100%',
  },
  rootStyle: {
    flex: 1,
    margin: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    padding: theme.spacing(2),
  },
});
