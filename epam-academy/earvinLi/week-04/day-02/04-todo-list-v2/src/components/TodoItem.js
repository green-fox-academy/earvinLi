// External Dependencies
import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import SvgIcon from '@material-ui/core/SvgIcon';
import {
  css,
  StyleSheet,
} from 'aphrodite';

// Local Variables
const styles = StyleSheet.create({
  greyColor: {
    color: '#b8b8b8'
  },
  mainContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  mainText: {
    color: '#b8b8b8',
    fontFamily: ['Lato', 'sans-serif'],
    fontSize: 26,
    lineHeight: 2.2,
  },
  purpleColor: {
    color: '#DE69E8',
  },
});

function TodoItem(props) {
  const {
    todoText,
  } = props;

  const {
    greyColor,
    mainContainer,
    mainText,
    purpleColor,
  } = styles;

  return (
    <div className={css(mainContainer)}>
      <div className={css(mainText)}>{todoText}</div>
      <div>
        <SvgIcon>
          <DeleteIcon
            className={css(greyColor)}
          />
        </SvgIcon>
        <SvgIcon>
          <CheckCircleOutlineIcon
            className={css(greyColor)}
            onClick={() => console.log('!')}
          />
        </SvgIcon>
      </div>
    </div>
  );
}

export default TodoItem;
