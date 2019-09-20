import React from 'react';
import logo from '../Logo.png';
//import Input from './input'

class Inicio extends React.Component{
  state = {
    show:true
  }
    render(){
      if(this.state.show){
        return (
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            {/* <Input />
            <Input /> */}
            

  
          </div>
        )
      }
    else{
      console.log('no hay componente');
    }
    }
  }

  export default Inicio;