import React from 'react';

class FeelingRadio extends React.Component {
  render() {
    const { feeling } = this.props;
    const id = `feeling-${feeling}`;
    return (
      <label htmlFor={id}>
        <input type="radio" id={id} value={feeling} name="feeling" />
        <img
          src={`${process.env.PUBLIC_URL}/feeling-${feeling}.svg`}
          alt=""
        />
      </label>
    );
  }
}

export default FeelingRadio;
