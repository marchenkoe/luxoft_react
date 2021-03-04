// import * as React from 'react';
//
// class TextInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: props.firstName,
//             independent: false,
//         }
//         console.log('constructor');
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount');
//     }
//
//     static getDerivedStateFromProps(nextProps, state) {
//         console.log('getDerivedStateFromProps')
//         return {
//             firstName: nextProps.firstName
//         };
//     }
//
//     updateFirstName = (event) => {
//         this.setState({firstName: event.target.value})
//     }
//
//     componentWillUnmount() {
//         console.log("componentWillUnmount");
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         console.log('componentDidUpdate');
//     }
//
//     render() {
//         console.log('render');
//         return <input value={this.state.firstName}
//                       onChange={this.updateFirstName}/>
//     }
// }
//
//
// export class Lifecycle extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: "Vasya",
//             hide: false,
//         }
//     }
//
//     handleChangeFirstName = (event) => {
//         this.setState({firstName: event.target.value})
//     }
//
//     handleHide = (event) => {
//         this.setState({hide: !this.state.hide})
//     }
//
//     render() {
//         const {hide, firstName} = this.state;
//         return (
//             <div>
//                 <div>First name:</div>
//                 <div>
//                     <input type="text"
//                            value={firstName}
//                            onChange={this.handleChangeFirstName}/>
//                 </div>
//                 <div>
//
//                     <input type="checkbox"
//                            checked={hide}
//                            onChange={this.handleHide}
//                     /> hide
//                 </div>
//                 <br/>
//                 <div>
//                     {hide === false ?<TextInput
//                         firstName={firstName}
//                     /> : null}
//                 </div>
//             </div>
//         )
//     }
// }
