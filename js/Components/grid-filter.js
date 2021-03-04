import React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';

export function filterGrid(value) {
  return {
    type: 'FILTER',
    payload: value,
  }
}

export class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  // handleFilterChange() {
  //   if (this.props.onChange) {
  //     this.props.onChange(this.inputRef.current.value)
  //   }
  // }

  handleFilterChange () {
    const text = this.inputRef.current.value;
    this.props.dispatch(filterGrid(text));
  }

  render() {
    return <input
      type="text"
      placeholder="Filter by..."
      onChange={this.handleFilterChange}
      ref={this.inputRef}
      value={this.props.filter}
    />;
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.grid.filterText,
  };
}

export const GridFilter = connect(mapStateToProps)(Filter)
