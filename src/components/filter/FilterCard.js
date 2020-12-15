import React, {Component} from 'react';
import "./style.css"

export default class FilterCard extends Component {

    handleChange = (evt) => {
      this.props.getFilter(evt.target.name, evt.target.value)
   }

    render(){
      let {title, options, name} = this.props.filterOptions
      const { orderValIdentifier, deliveryValIdentifier, filterOptions, updateIdentifier } = this.props
      let checkedVal = false;
       
         return (
            <div className="filter-container">  
             <p className="container-headline"> {title}</p>
               { 
                   (options.map((item, index)=>{
                      if((item.id===orderValIdentifier && filterOptions.id == 1) || (item.id===deliveryValIdentifier && filterOptions.id == 2)){  
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
                                    onChange={(evt) => { updateIdentifier(item.id, item.value, filterOptions.id) }}
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

