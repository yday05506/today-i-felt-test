import React from 'react';
import FeelingRadio from './FeelingRadio';
import './style.css';

class AddFeeling extends React.Component {
  render() {
    const now = new Date();
    return (
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
          <input type="text" name="weather" />
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
          <textarea />
        </div>
      </div>
    );
  }
}

export default AddFeeling;
