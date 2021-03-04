import React from "react";
import PropTypes from "prop-types";
import {GridRecord} from "./grid";


const detailsRecords = [{
    id: 1,
    name: "John Doe",
    about: "Nice guy",
    hobby: "Likes drinking wine",
    skills: ["html", "javascript", "redux"]
}, {
    id: 2,
    name: "Mary Moe",
    about: "Cute girl",
    hobby: "Likes playing xbox whole days long",
    skills: ["Fortran", "Lua", "R#"]
}];

export class UserDetails extends React.Component {
    // constructor() {
    //     super();
    //     // this.state = {id: undefined}
    // }
    // componentDidMount() {
    //     // this.setState({id: this.props.id})
    // }

    filterDetails(id) {
        if (id) {
            this.setState({
                details: detailsRecords.filter((record) => {
                    return record.id == id;
                })
            })
        } else {
            this.setState({details: detailsRecords})
        }
    }

    componentWillMount() { //componentDidMount?
        this.filterDetails(this.props.match.params.id);
    }

    componentWillReceiveProps(props) { //componentDidUpdate?
        this.filterDetails(props.match.params.id);
    }

    render() {
        const {id} = this.props.match.params;
        // console.log("!!!!!!!! ", this.props.history)
        // console.log("PATH ", this.props.path)
        // console.log("MATCH ", this.props.match)

        // let detailRow = id === undefined ? detailsRecords[0] : detailsRecords[id - 1]
        return (<div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                {this.createDetailsView(id === undefined ? detailsRecords : [detailsRecords.find(record => record.id === id)])}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    createDetailsView(detailRecords) {
        return <div className="col-xs-12 col-sm-8">
            <div>
                {detailRecords.map(record => {
                    return (
                        <div>
                            <h2>{record.name}</h2>
                            <p>
                                <strong>About: </strong> {record.about}
                            </p>
                            <p>
                                <strong>Hobbies: </strong> {record.hobby}
                            </p>
                            <div>
                                <strong>Skills: </strong>
                                <ul>
                                    {record.skills.map((i, idx) => (
                                        <li key={idx}>{i}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-4 text-center">
                                <figure><img
                                    src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg"
                                    alt="" className="img-circle img-responsive"/></figure>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>;
    }
}

UserDetails.propTypes = {
    record: PropTypes.shape({
        id: PropTypes.number.isRequired
    })
};
