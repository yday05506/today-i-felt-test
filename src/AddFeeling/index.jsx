import React from 'react';
import { Link } from 'react-router-dom';
import FeelingRadio from './FeelingRadio';
import './style.css';

class AddFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(event) {
    event.preventDefault();
    console.log(event.target.date.value);
    console.log(event.target.weather.value);
    console.log(event.target.feeling.value);
    console.log(event.target.happened.value);
  }

  render() {
    const now = new Date();
    return (
      <form onSubmit={this.onSubmitForm}>
        <Link to="/" className="link-back">
          ◀️ 뒤로 돌아가기
        </Link>
        <div className="add-feeling">
          <div>날짜</div>
          <div>
            <input
              type="text"
              name="date"
              defaultValue={`${now.getFullYear()}. ${now.getMonth() + 1}. ${now.getDate()}`}
              // readOnly={true}
              readOnly
            />
          </div>
          <div>날씨</div>
          <div>
            <select name="weather">
              <option>맑음</option>
              <option>구름 조금</option>
              <option>흐림</option>
              <option>비</option>
              <option>눈</option>
            </select>
          </div>
          <div>기분</div>
          <div className="feeling-radio-group">
            <FeelingRadio feeling="good" />
            <FeelingRadio feeling="nice" />
            <FeelingRadio feeling="angry" />
            <FeelingRadio feeling="disappointed" />
            <FeelingRadio feeling="sad" />
          </div>
          <div>있었던 일</div>
          <div className="what-happened">
            <textarea name="happened" />
          </div>
        </div>
        <div className="add-feeling-footer">
          <button type="submit" className="btn-submit">추가하기</button>
        </div>
      </form>
    );
  }
}

export default AddFeeling;
