import React from 'react';
import './style.css';

class BtnMonth extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    // console.log(this);
    // console.log(this === window);
    this.props.onClick(this.props.month);
  }

  render() {
    let className = 'btn-month';
    if (this.props.active) {
      className += ' btn-month--active';
    }
    return (
      <button
        type="button"
        className={className}
        onClick={this.onClick}
      >
        {this.props.month}
      </button>
    );
  }
}

export default BtnMonth;
