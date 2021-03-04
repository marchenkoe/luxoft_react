import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {render} from 'react-dom';
import PropTypes from 'prop-types';

class GridRecord extends React.Component {

    static defaultProps = {record: {firstName: "N/A", lastName: "N/A", active: false}};

    static propTypes = {
        record: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            active: PropTypes.bool.isRequired
        })
    };

    render() {
        let {record} = this.props;
        return <tr>
            <th>{record.firstName}</th>
            <th>{record.lastName}</th>
            <th><input type="checkbox" checked={record.active} onChange={this.props.toggleActive}/></th>
        </tr>
    }
}
