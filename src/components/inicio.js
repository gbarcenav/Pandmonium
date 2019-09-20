import React, {Component} from 'react';
import logo from '../Logo.png';
import Input from './input'

class Inicio extends Component{
  state = {
    show:true
  }

    render(){
      if(this.state.show){
        return (
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <Input placeholder="escribe tu nombre"/>
          
          </div>
        )
      }
    else{
      console.log('no hay componente');
    }
    }
  }

  export default Inicio;