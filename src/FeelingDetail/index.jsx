import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddFeeling from '../AddFeeling';
import './style.css';

class FeelingDetail extends React.Component {
  saveName(name) {
    window.localStorage.setItem('owner-name', name);
  }

  renderCover() {
    return (
      <div className="title">
        <h1>
          Today
          <br />
          I
          <br />
          Felt
        </h1>
        <div className="owner-name">
          <strong>Name:</strong>
          <input
            type="text"
            maxLength={5}
            onBlur={(event) => {
              console.log(event.target.value);
              this.saveName(event.target.value);
            }}
            defaultValue={window.localStorage.getItem('owner-name')}
          />
        </div>
        <Link to="/add-feeling" className="link-add-feeling">
          오늘의 기분 추가하기 ▶️
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="feeling-detail">
        <Routes>
          <Route path="/" element={this.renderCover()} />
          <Route path="/add-feeling" element={<AddFeeling />} />
        </Routes>
      </div>
    );
  }
}

export default FeelingDetail;
