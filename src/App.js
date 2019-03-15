import React from "react";
import Info from "./info";
import Form from "./form";
import Car from "./searchVrm";

const API_KEY = "098c1d99b2da9543cc9025b7f04d5e1a";
const APP_ID = "b594f92c";

class App extends  React.Component{


  state = {
    color_car: undefined,
    mark_car: undefined,
    compliance_ruls: undefined,
    model_car: undefined,
    type_car: undefined,
    vrm_number: undefined,
    err: undefined
    }


  gettingInfo = async (e) => {
    e.preventDefault();
    var number = e.target.elements.number.value;

    if(number){
      const api_url = await fetch(`https://api.tfl.gov.uk/Vehicle/UlezCompliance?vrm=${number}&app_id=${APP_ID}&app_key=${API_KEY}`);
      const data = await api_url.json();
      console.log(data);

    this.setState ({
        vrm_number: data.vrm,
        color_car: data.colour,
        mark_car:  data.make,
        compliance_ruls: data.compliance,
        model_car: data.model,
        type_car: data.type,
        err: undefined
      });
    } else {
      this.setState ({
        color_car: undefined,
        mark_car: undefined,
        compliance_ruls: undefined,
        model_car: undefined,
        type_car: undefined,
        vrm_number: undefined,
        err: "Please enter your Number Plate (VRM)"
      });
    }
  }

  render () {
    return  (
        <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                  <Info
                  />
              </div>
              <div className="col-sm-7 form">
              <Form infoMethod = {this.gettingInfo}/>
              <Car
                color_car={this.state.color_car}
                mark_car={this.state.mark_car}
                compliance_ruls={this.state.compliance_ruls}
                model_car={this.state.model_car}
                type_car={this.state.type_car}
                vrm_number={this.state.vrm_number}
                err={this.state.err}
                />
                </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default App;
