// External Dependencies
import React, { Component } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
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

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = { doneIconColor: 'grey' };
  }

  render() {
    const {
      todoText,
    } = this.props;

    const { doneIconColor } = this.state;

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
          <SvgIcon
            onClick={() => {
              const newIconColor = doneIconColor === 'grey' ? 'purple' : 'grey';
              this.setState({ doneIconColor: newIconColor })
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
}

export default TodoItem;
