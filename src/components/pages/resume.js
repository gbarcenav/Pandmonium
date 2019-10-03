import React, { Component } from "react";
import Navbar from "../navbar";
import logo from "../ux_resources/Logo2017-02.png";
import Input from "../components/input";
import InputIncreaseDecrease from "../components/increase_decrease";
import BtnGreen from "./btn_green;"

class Resume extends Component {
    render() {
        return (
            <div className="resume-screen">
                <Navbar/>
                
                <h1 className="resume-title">Resumen de Pedido</h1>
                <Input/>
                <InputIncreaseDecrease/>
            
                <textarea className="comments" placeholder="Observaciones"></textarea>
                <br></br>
            </div>
            
            <BtnGreen btntext="ENVIAR" onClick='/kitchen'/>
        );
    }

}

export default Resume;