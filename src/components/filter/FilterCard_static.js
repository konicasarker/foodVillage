import React, {Component} from 'react';
import "./style.css"

export default class FilterCard extends Component {
   state = {
      showComponent: true,
      selectedVal : "0"

    };

    handleChange = (evt) =>
    { 
     this.setState({ showComponent: !this.state.showComponent });
     this.props.filterByMinOrder(evt.target.value)
   }


    render(){  
      let {title, options, testarr, name, checked} = this.props.item 
       
          return (
            <div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="order_amount"
                    onChange={this.handleChange}
                    checked={this.state.showComponent}
                    value="0"
                  /> No preference
                </label>
              </div>
              {/* <div>
                <label>
                  <input
                    type="radio"
                    name="order_amount"
                    onChange={this.handleChange}
                    checked={!this.state.showComponent}
                    value="10"
                  />
                  10,00 $ or less
                </label>
              </div> */}
              <div>
                  <label>
                    <input
                      type="radio"
                      name="order_amount"
                      onChange={this.handleChange}
                      checked={!this.state.showComponent}
                      value="15"
                    />
                      "15,00 $ or less"
                  </label>
              </div>
              {this.state.showComponent ? <div>Hello</div> : null}
            </div>
          );
    }
}

