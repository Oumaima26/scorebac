import React, { Component } from 'react';
class SessionMaths extends Component {
    constructor(props){
        super(props);
          this.handleChange = this.handleChange.bind(this);
          this.state={
              principale:'',
              controle:'',


    }}

      onSubmit = (e) => {
        e.preventDefault();
        switch (this.state.value) {
          case 'principale':
            { 
              window.location = '/scoremaths';
              break;
            }
          case 'controle':
            {
              window.location = '/scoremathsc';
              break;
            }
          
          default:
            console.log('si aucune condition n\'est vraie');
        }
        
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    render(){

        return (
          <div className="wrapperacc">
            <div className="form-wrapper600">
            <a href="/" role="button" style={{fontSize:"20px"}}>
            <i className="fa fas-home"></i>
            Home
          </a>
                <center><p style={{fontSize:"50px"}}>Quelle session? </p>
                  <form onSubmit={this.onSubmit} style={{fontSize:"24px",color:"#000000"}}>
                  <label htmlFor="session">Session :</label>
                  <button>
                  <select value={this.state.value} onChange={this.handleChange}
                  style={{backgroundColor:"#ffffff",opacity:"0.8"}}>
                    <option >---</option>
                    <option value="principale">Principale</option>
                    <option value="controle">Contrôle</option>   
                  </select></button></form>
                    </center>
                    </div>
            </div>
          );
        }
    }

export default SessionMaths;