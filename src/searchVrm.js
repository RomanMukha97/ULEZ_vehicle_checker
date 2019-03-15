import React from "react";

const Car = props => (
  <div className="Carinfo">
      {props.vrm_number  &&
        <div>
          <p>Color car:  {props.color_car}</p>
          <p>Mark car:   {props.mark_car}</p>
          <p>Compliance: {props.compliance_ruls}</p>
          <p>Model car:  {props.model_car}</p>
          <p>Type:       {props.type_car}</p>
          <p>Vrm car:    {props.vrm_number}</p>
        </div>
      }
      <p className="err"> {props.err}</p>
   </div>
);


export default Car;
