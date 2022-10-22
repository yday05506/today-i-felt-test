import React from 'react';
import './style.css';
import BtnMonth from '../components/BtnMonth';

class FeelingList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedMonth: 1,
    };

    this.onClickBtnMonth = this.onClickBtnMonth.bind(this);
  }

  onClickBtnMonth(month) {
    this.setState({ selectedMonth: month });
  }

  renderBtnMonthList() {
    const btnList = [];

    for (let i = 1; i < 13; i += 1) {
      const btn = (
        <BtnMonth
          month={i}
          active={this.state.selectedMonth === i}
          onClick={this.onClickBtnMonth}
        />
      );
      btnList.push(btn);
    }

    return btnList;
  }

  render() {
    return (
      <div className="feeling-list">
        <div className="header">
          {this.renderBtnMonthList()}
        </div>
      </div>
    );
  }
}

export default FeelingList;
