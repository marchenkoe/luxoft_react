import * as React from 'react';

class Input extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e.currentTarget.checked);
  }

  render() {
    return (
      <input
        type="checkbox"
        checked={this.props.enabled}
        onChange={this.handleChange}
      />
    )
  }
}

export class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      check: true
    };
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
  }

  handleChangeCheck(checked) {
    this.setState({
      check: checked,
    })
  }

  render() {
    return (
      <div>
        Check: <Input
        enabled={this.state.check}
        onChange={this.handleChangeCheck}
      />
      </div>
    )
  }
}
