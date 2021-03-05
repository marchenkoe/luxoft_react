import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import {SummaryActive} from "./summaries";
import {GridFilter} from "./grid-filter";



/*export*/ class GridRecord extends React.Component {
    showUserDetails(e) {
        e.preventDefault();
        this.props.history.push(`/details/${this.props.record.id}`);
    }

    render() {
        let {record} = this.props;
        return <tr>
            <th onClick={this.showUserDetails.bind(this)}><a href="#">{record.id}</a></th>
            {/*<th><input type="text" defaultValue={record.firstName} onChange={this.props.updateFirstName}/></th>*/}
            <th><input type="text" value={record.firstName} onChange={this.props.updateFirstName}/></th>
            <th>{record.lastName}</th>
            <th><input type="checkbox" checked={record.active} onChange={this.props.toggleActive}/></th>
        </tr>
    }
}

GridRecord.defaultProps = {record: {firstName: "N/A", lastName: "N/A", active: false}};

// GridRecord.propTypes = {
//     record: PropTypes.shape({
//         firstName: PropTypes.string.isRequired,
//         lastName: PropTypes.string.isRequired,
//         active: PropTypes.bool.isRequired
//     })
// };


/*export*/ class GridComponent extends React.Component {
    getUpdateFirstNameHandler(id) {
         return (event) => {
             const value = event.target.value;
             const {records} = this.props;
             for (const record of records) {
                 if (record.id === id) {
                     record.firstName = value;
                 }
             }
             this.setState({records});
         }
    }

    updateFirstName(event) {
        // this.setState({firstName: event.target.value})
        // this.state.records[index].firstName = event.target.value
    }

    handleFilterChange(text) {
        // let value = e.target.value,
        //     // records = dataSource.filter((record) => record.firstName.toUpperCase().includes(value.toUpperCase()));
        //     records = this.state.records.filter((record) => record.firstName.toUpperCase().includes(value.toUpperCase()));
        //
        // this.setState({records: records});

        this.props.dispatch({
            type: "FILTER",
            payload: text,
        })

        // this.setState({filteredValue: e.target.value});
    }

    // toggleActive(id) {
    //     let {records} = this.state;
    //
    //     for (const record of records) {
    //         if (record.id === id) {
    //             record.active = !record.active;
    //         }
    //     }
    //
    //     this.setState({records: records});
    // }

    toggleActive(index) {
        let {dispatch} = this.props;
        dispatch({type: "TOGGLE_ACTIVE", value: index});
    }

    constructor() {
        super();
        this.state = {/*records: [], */filteredValue: ''}
    }

    // componentDidMount() {
    //     this.setState({records: dataSource})
    // }

    componentDidMount() {
        this.refs.filterInput && this.refs.filterInput.focus();
        // this.setState({records: dataSource})
    }

    // handleChange(arg1, arg2, arg3, arg4) {
    //     console.log(arg1, arg2, arg3, arg4)
    //     let a = arg1;
    // }


    render() {
        console.log("!!this.props ", this.props)
        // let filteredRecords = this.props.records;//
        // if (this.state.filteredValue) {
        //     filteredRecords = this.state.records.filter((record) => record.firstName.toUpperCase().includes(this.state.filteredValue.toUpperCase()));
        // }

        let records = this.props.records.map((record, index) => {
            // return <GridRecord record={undefined} key={index} toggleActive={this.toggleActive.bind(this, index)}/>
            return <GridRecord record={record} history={this.props.history} key={record.id}
                               toggleActive={this.toggleActive.bind(this, record.id - 1)}
                               updateFirstName={this.getUpdateFirstNameHandler(record.id)}/>
        })

        return (
            <div style={{width: 300, height: 300, padding: 20}}>
                {/*<p>*/}
                {/*    <input type="text" ref="filterInput" placeholder="Filter by..."*/}
                {/*           onChange={this.handleFilterChange.bind(this)}/>*/}
                {/*</p>*/}
                <GridFilter />
                <table className="table table-condensed">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Active</th>
                        {/*<th><input onChange={this.handleChange.bind(this)}/></th>*/}

                    </tr>
                    </thead>
                    <tbody>{records}</tbody>
                </table>
                <div>
                    {/*<SummaryActive/>*/}
                    {/*{this.props.children &&*/}
                    {/*React.cloneElement(this.props.children, {records: this.state.records})}*/}
                </div>
            </div>)
    }


}

function mapStateToProps(store) {
    // console.log("state ", state)
    return {
        records: store.grid.filtered,
        filteredText: store.grid.filteredText
    }
}

export default connect(mapStateToProps)(
    GridComponent
)

GridComponent.propTypes = {
    records: PropTypes.array.isRequired
};