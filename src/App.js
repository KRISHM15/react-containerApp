import React, { Component } from "react";
import Header from "./components/Header.js";
import Body from "./components/Body";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [
        {
          id: 1,
          Name: "SaiKrishna",
          Avatar:
            "https://image.shutterstock.com/z/stock-vector-web-developer-design-vector-illustration-eps-314602424.jpg"
        },
        {
          id: 2,
          Name: "Avinash",
          Avatar:
            "https://image.shutterstock.com/image-vector/image-icon-architect-engineer-profile-600w-321183128.jpg"
        },
        {
          id: 3,
          Name: "Irishman",
          Avatar:
            "https://image.shutterstock.com/image-vector/man-shows-plate-contract-manager-260nw-252290638.jpg"
        },
        {
          id: 4,
          Name: "Al Pacino",
          Avatar:
            "https://image.shutterstock.com/z/stock-vector-man-speaks-in-front-of-the-public-reads-poetry-poems-lyrics-speech-businessman-a-hand-gesture-515485591.jpg"
        },
        {
          id: 5,
          Name: "Christiano Ronaldo",
          Avatar:
            "https://image.shutterstock.com/image-photo/businessman-box-600w-290170169.jpg"
        }
      ],
      rights: [],
      tempStore: []
    };
  }
  selectElement = data => {
    // let index = this.state.names.indexOf(data);
    // return console.log(this.state.names[index].id);
    this.setState({ tempStore: data });

    // console.log(this.state.tempStore);
  };
  batchAssign = () => {
    let tempArray = this.state.rights;
    tempArray.push(this.state.tempStore);
    this.setState({ rights: tempArray });
    // console.log(this.state.rights);
    tempArray = this.state.names;
    let index = this.state.names.indexOf(this.state.tempStore);
    tempArray.splice(index, 1);
    this.setState({ names: tempArray });
    let emptyArray = [];
    this.setState({ tempStore: emptyArray });
  };
  batchReassign = () => {
    let tempArray = this.state.names;
    tempArray.push(this.state.tempStore);
    this.setState({ names: tempArray });
    tempArray = this.state.rights;
    let index = this.state.rights.indexOf(this.state.tempStore);
    tempArray.splice(index, 1);
    this.setState({ rights: tempArray });
    let emptyArray = [];
    this.setState({ tempStore: emptyArray });
  };
  render() {
    return (
      <div>
        <Header />
        <Body
          names={this.state.names}
          selectElement={this.selectElement}
          rights={this.state.rights}
          batchAssign={this.batchAssign}
          batchReassign={this.batchReassign}
          tempStore={this.state.tempStore}
        />
      </div>
    );
  }
}

export default App;
