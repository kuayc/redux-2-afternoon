import React, { Component } from "react";
import Background from "./../shared/Background/Background";
import Chart1 from "./../shared/Chart1";
import Chart2 from "./../shared/Chart2";
import AddPurchase from "./../shared/AddPurchase";
import DisplayPurchases from "./../shared/DisplayPurchases";
import Loading from "./../shared/Loading/Loading";
import Nav from "./../shared/Nav";
import "./Budget.css";
import { connect } from "react-redux";
// IMPORT THE ACTION CREATOR FROM THE REDUCER FILE FOR USE BY THE CONNECT METHOD, WHICH THEN ADDS THE FUNCTION TO THE PROPS // OBJECT OF THIS COMPONENT
import { requestUserData } from "./../../ducks/userReducer";

class Budget extends Component {
  componentDidMount() {
    // WHEN THE COMPONENT MOUNTS, THE ACTION CREATOR IS INVOKED, THE REDUCER FUNCTION FIRES, AND STATE IS UPDATED ACCORDINGLY   // IN THE REDUX STORE
    this.props.requestUserData();
  }

  render() {
    const { loading } = this.props.budget;
    const { firstName, lastName } = this.props.user;
    return (
      <Background>
        {loading ? <Loading /> : null}
        <div className="budget-container">
          <Nav firstName={firstName} lastName={lastName} />
          <div className="content-container">
            <div className="purchases-container">
              <AddPurchase />
              <DisplayPurchases />
            </div>
            <div className="chart-container">
              <Chart1 />
              <Chart2 />
            </div>
          </div>
        </div>
      </Background>
    );
  }
}

function mapStateToProps(state) {
  return {
    budget: state.budget,
    user: state.user,
  };
}

// IN ORDER TO ACCESS THE REQUESTUSERDATA ACTION CREATOR, YOU NEED TO CONNECT IT TO
// THE REDUCER FUNCTION THROUGH THE CONNECT METHOD. THE CONNECT METHOD ACCEPTS TWO ARGUMENTS, A MAPSTATETOPROPS OBJECT, AND A MAPDISPATCHTOPROPS OBJECT. OUR DISPATCHED ACTIONS GO INSIDE OF THE SECOND ARGUMENT OBJECT AS A KEY/VALUE PAIR.
export default connect(
  mapStateToProps,
  { requestUserData }
)(Budget);
