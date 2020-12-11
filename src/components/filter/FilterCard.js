import React, {Component} from 'react';
import "./style.css"

export default class FilterCard extends Component {
   state = {
      showComponent: false
    };

    handleChange = (evt) => {
      this.props.getFilter(evt.target.name, evt.target.value)
   }

    render(){
      let {title, options, name} = this.props.item
      let checkedVal = false;
       
         return (
            <div className="filter-container">  
             <p className="container-headline"> {title}</p>
               { 
                   (options.map((item, index)=>{
                      if(item.selected==="true"){  
                        checkedVal = true;
                      }else{
                        checkedVal = false;
                      }
                    
                       return (
                          <>
                             <div className="container">
                                <input 
                                    type="radio" 
                                    name={name}
                                    value={item.option} 
                                    checked={checkedVal}
                                    onChange={this.handleChange}
                                 /> {item.option}   
                              </div>                       
                         </> 
                       )
                    }))
                }
            </div>

         )  
   
    }
}

