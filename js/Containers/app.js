import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import GridComponent from '../Components/grid';
import {SummaryActive, SummaryUsers} from '../Components/summaries';
import {UserDetails} from '../Components/user-details';
import {HashRouter, Switch, Route, Link} from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from '../store/index'
const store = configureStore();




// const dataSource = [{firstName: "John", lastName: "Doe", active: false},
//     {firstName: "Mary", lastName: "Moe", active: false},
//     {firstName: "Peter", lastName: "Noname", active: true}
// ]
//
// class GridRecord extends React.Component {
//
//     render() {
//         let {record} = this.props;
//         return <tr>
//             <th><input type="text" defaultValue={record.firstName} onChange={this.props.updateFirstName}/></th>
//             <th>{record.lastName}</th>
//             <th><input type="checkbox" checked={record.active} onChange={this.props.toggleActive}/></th>
//         </tr>
//     }
// }
//
// GridRecord.defaultProps = {record: {firstName: "N/A", lastName: "N/A", active: false}};
//
// GridRecord.propTypes = {
//     record: PropTypes.shape({
//         firstName: PropTypes.string.isRequired,
//         lastName: PropTypes.string.isRequired,
//         active: PropTypes.bool.isRequired
//     })
// };
//
//
// class GridComponent extends React.Component {
//     updateFirstName(event) {
//         this.setState({firstName: event.target.value})
//     }
//
//     handleFilterChange(e) {
//         let value = e.target.value,
//             records = dataSource.filter((record) => record.firstName.toUpperCase().includes(value.toUpperCase()));
//         this.setState({records: records});
//     }
//
//     toggleActive(index) {
//         let {records} = this.state;
//         records[index].active = !records[index].active;
//         this.setState({records: records})
//     }
//
//     constructor() {
//         super();
//         this.state = {records: []}
//     }
//
//     // componentDidMount() {
//     //     this.setState({records: dataSource})
//     // }
//
//     componentDidMount() {
//         this.refs.filterInput && this.refs.filterInput.focus();
//         this.setState({records: dataSource})
//     }
//
//     render() {
//         let records = this.state.records.map((record, index) => {
//             // return <GridRecord record={undefined} key={index} toggleActive={this.toggleActive.bind(this, index)}/>
//             return <GridRecord record={record} key={index} toggleActive={this.toggleActive.bind(this, index)}/>
//         })
//
//         return (
//             <div style={{width: 300, height: 300, padding: 20}}>
//                 <p>
//                     <input type="text" ref="filterInput" placeholder="Filter by..."
//                            onChange={this.handleFilterChange.bind(this)}/>
//                 </p>
//                 <table className="table table-condensed">
//                     <thead>
//                     <tr>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Active</th>
//                     </tr>
//                     </thead>
//                     <tbody>{records}</tbody>
//                 </table>
//                 <div>
//                     {this.props.children &&
//                     React.cloneElement(this.props.children, {records: this.state.records})}
//                 </div>
//             </div>)
//     }
//
//
// }

// class SummaryActive extends React.Component {
//     render() {
//         return (<div>Active Users: {this.props.records.filter((record) => record.active).length}</div>)
//     }
// }
//
// class SummaryUsers extends React.Component {
//     render() {
//         return (<div>Users Count: {this.props.records.length}</div>)
//     }
// }
const App = ({children}) =>
    <div>
        <h1>Our awesome app</h1>
        <ul role="nav">
            <li><Link to="/grid">Grid</Link></li>
            <li><Link to="/details">Details</Link></li>
        </ul>
        {children}
    </div>;


// UserDetails.propTypes = {id: PropTypes.number};
// render(<GridComponent/>, document.getElementById('app'));
// render(
//     <HashRouter>
//         <div>
//             <App/>
//         <Switch>
//             <Route path="/grid" component={GridComponent}/>
//             <Route exact path="/details" component={UserDetails}/>
//             <Route path="/details/:id" component={UserDetails}/>
//         </Switch>
//         </div>
//     </HashRouter>,
// //     <GridComponent>
// //     <SummaryActive/>
// // </GridComponent>,
// //     <UserDetails id={1}/>,
//     document.getElementById('app')
// );
render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <App/>
                <Switch>
                    <Route path="/grid" component={GridComponent}/>
                    <Route exact path="/details" component={UserDetails}/>
                    <Route path="/details/:id" component={UserDetails}/>
                </Switch>
            </div>
        </HashRouter>,
    </Provider>,
    document.getElementById('app')
);