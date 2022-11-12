import React from 'react';
import './style.css';

class FeelingDetail extends React.Component {
  saveName(name) {
    window.localStorage.setItem('owner-name', name);
  }

  render() {
    return (
      <div className="feeling-detail">
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
        </div>
      </div>
    );
  }
}

export default FeelingDetail;
