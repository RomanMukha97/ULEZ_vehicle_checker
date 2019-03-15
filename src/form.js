import React from "react";

class Form extends React.Component {
  render(){
    return (
        <form onSubmit={this.props.infoMethod}>
          <input type = "text" name="number" placeholder="Enter vehicle registration"/>
          <button>Go</button>
        </form>
    );
  }
}

export default Form;
