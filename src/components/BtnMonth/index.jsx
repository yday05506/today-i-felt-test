import React from 'react';
import './style.css';

class BtnMonth extends React.Component {
  render() {
    let className = 'btn-month';
    if (this.props.active) {
      className += ' btn-month--active';
    }
    return (
      <button
        type="button"
        className={className}
        onClick={() => {
          this.props.onClick(this.props.month);
        }}
      >
        {this.props.month}
      </button>
    );
  }
}

export default BtnMonth;
