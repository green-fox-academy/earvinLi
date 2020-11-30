// External Dependencies
import React, { useState } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import SvgIcon from '@material-ui/core/SvgIcon';
import {
  css,
  StyleSheet,
} from 'aphrodite';

// Internal Dependencies
import { TodoItemStyles } from '../App/Theme';

// Local Variables
const styles = StyleSheet.create(TodoItemStyles);

// Component Definition
const TodoItem = (props) => {
  const {
    greyColor,
    mainContainer,
    mainText,
    purpleColor,
  } = styles;

  const [ doneIconColor, setDoneIconColor ] = useState('grey');

  const {
    todoText,
  } = props;

  return (
    <div className={css(mainContainer)}>
      <div className={css(mainText)}>{todoText}</div>
      <div>
        <SvgIcon>
          <DeleteIcon
            className={css(greyColor)}
          />
        </SvgIcon>
        <SvgIcon
          onClick={() => {
            const newIconColor = doneIconColor === 'grey' ? 'purple' : 'grey';
            setDoneIconColor(newIconColor);
          }}
        >
          <CheckCircleIcon
            className={css(doneIconColor === 'grey' ? greyColor : purpleColor)}
          />
        </SvgIcon>
      </div>
    </div>
  );
}

export default TodoItem;
