// import React, { Component } from 'react';
import React from 'react';
import styles from './Button.module.scss'; // Import css modules stylesheet as styles
import './another-stylesheet.scss'; // Import regular stylesheet

console.log(styles);

export default class Button extends React.Component {
   constructor(props) {
      super(props);
      this.handleOnClick = this.handleOnClick.bind(this);
   }
   handleOnClick(e) {
      console.log(e);
   }
   render() {
      // reference as a js object
      return <button className={styles.error} onClick={this.handleOnClick}>Error Button</button>;
   }
}
