import React, {Component} from 'react';
import "./style.css"

export default class FilterCard extends Component {
    render(){
       const {title, options, testarr, name} = this.props.item
       let checked = false;
       
       //const testarr = ["aa", "bb", "cc"]
         //console.log("============= Filter OPTIONS XXX ====",this.props.item)
        return (
           <div className="filter-container">  
            <p class="container-headline"> {title}</p>
              { 
                  (testarr.map((item, index)=>{
                     if(item.selected==true){
                        checked = "checked";
                     }else{
                        checked=""
                     }
                    
                      return (
                         <>
                            <div class="container"><input type="radio" name={name} value="bread" checked={checked}/> {item.option} </div>                       
                        </> 
                      )
                   }))
               }
           </div>
        )  
    }     

}

