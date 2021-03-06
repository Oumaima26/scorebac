import React, { Component } from 'react';
import './css/sc.css';
class ScoreMaths extends Component {
    constructor(props){
        super(props);
        this.onChangeMathematiques = this.onChangeMathematiques.bind(this);
        this.onChangePhysique = this.onChangePhysique.bind(this);
        this.onChangeMoyenneF = this.onChangeMoyenneF.bind(this);
        this.onChangeSciences = this.onChangeSciences.bind(this);
        this.onChangeFrançais = this.onChangeFrançais.bind(this);
        this.onChangeAnglais = this.onChangeAnglais.bind(this);
        this.onChangeResult = this.onChangeResult.bind(this);
        this.cal = this.cal.bind(this);
        this.state={
            mathematiques:0.00,
            physique:0.00,
            moyennef:0.00,
            sciences:0.00,
            français:0.00,
            anglais:0.00,
            result:0.00
        }
    }
    onChangeMathematiques(e) {
        this.setState({
          mathematiques: e.target.value
        })
      }
      
    onChangePhysique(e) {
        this.setState({
          physique: e.target.value
        })
      }
      
    onChangeMoyenneF(e) {
        this.setState({
          moyennef: e.target.value
        })
      }
      onChangeSciences(e) {
        this.setState({
          sciences: e.target.value
        })
      }
      onChangeFrançais(e) {
        this.setState({
          français: e.target.value
        })
      }
      onChangeAnglais(e) {
        this.setState({
          anglais: e.target.value
        })
      }
      onChangeResult(e) {
        this.setState({
          result: e.target.value
        })
      }
      cal = () => {
        this.state.result=Number(this.state.moyennef)*4+Number(this.state.physique)*1.5
          +Number(this.state.mathematiques)*2+Number(this.state.sciences)*0.5
          +Number(this.state.anglais)*+Number(this.state.français)*1
        
          document.getElementById("result").value = this.state.result;
          return this.state.result;
      }
      onSubmit = (e) => {
        e.preventDefault();
        this.cal();
        
        
      }

    render(){
        return (
          <div className="wrappermaths">
            <div className="form-wrapper800">
            <a href="/" role="button" style={{fontSize:"20px"}}>
            <i className="fa fas-home"></i>
            Home
          </a>
                <center><p style={{fontSize:"40px"}}>Score Baccalauréat Mathématiques </p>
                        <table style={{width:"100%" }}>
                          <tbody style={{ color: '#000000',fontSize: 24 }}>
                            <tr >

                                    <td><label htmlFor="moyennef" >Moyenne finale </label></td> 
                                    <td><input 
                                        required
                                        type="text"  
                                        name="mayennef" 
                                        value={ this.state.moyennef}
                                        onChange={this.onChangeMoyenneF}
                                        />
                                    </td> 
                                    <td><label htmlFor="moyennef"> المعدل النهائي للبكالوريا</label></td> 
                       
                            </tr>
                            <tr className="tt">

                                    <td><label htmlFor="mathematiques">Mathématiques </label></td> 
                                    <td><input 
                                        required
                                        type="text"  
                                        name="mathematiques" 
                                        value={ this.state.mathematiques}
                                        onChange={this.onChangeMathematiques}
                                        />
                                    </td> 
                                    <td><label htmlFor="mathematiques"> الرياضيات</label></td> 
                       
                            </tr>
                            <tr>
                                    <td><label htmlFor="physique">Science physique </label></td>
                                    <td><input 
                                        required
                                        type="text"  
                                        name="physique" 
                                        value={ this.state.physique}
                                        onChange={this.onChangePhysique}
                                        />
                                    </td>
                                    <td><label htmlFor="physique"> العلوم الفيزيائية</label></td>
                                
                            </tr>
                            <tr>
                                <td><label htmlFor="sciences">Sciences de la vie et de la Terre </label></td>
                                <td><input 
                                  required   
                                  name="sciences" 
                                  value={ this.state.sciences}
                                  onChange={this.onChangeSciences}
                                  />
                                </td>
                                <td><label htmlFor="sciences"> علوم الحياة والارض</label></td>
                            </tr>
                            
                            <tr>
                                <td><label htmlFor="français">Français </label></td>
                                <td><input 
                                  required   
                                  name="français" 
                                  value={ this.state.français}
                                  onChange={this.onChangeFrançais}
                                  />
                                </td>
                                <td><label htmlFor="français"> الفرنسية</label></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="anglais">Anglais </label></td>
                                <td><input 
                                  required   
                                  name="anglais" 
                                  value={ this.state.anglais}
                                  onChange={this.onChangeAnglais}
                                  />
                                </td>
                                <td><label htmlFor="anglais"> الانجليزية</label></td>
                            </tr>
                            </tbody>
                          </table>
                          <br/>
                        <button  onClick={this.cal} style={{backgroundColor:"grey" ,width:"12%"}}>Calculer</button>
                        <br/><br/>
                        <input name="result" id="result" type="text" style={{color:"red", fontSize:"26px"}}></input>

                        
                    </center>
                    <br/>
                    <div className="req">
                      <p style={{color:"#ffffff", fontSize:"16px"}}>Formule de session contrôle :</p>
                      <p style={{color:"#ffffff", fontSize:"14px"}}>
                    *Moyenne finale = [(Moyenne de la session principale * 2)+(Moyenne de la session de contrôle)]/3
                    <br/>
                    *Note = [(Note de la session principale * 2)+(Note de la session de contrôle)]/3
                    </p></div>
                    </div>
            </div>
          );
        }
    }

export default ScoreMaths;
//(e) => { this.onSubmit(e) }