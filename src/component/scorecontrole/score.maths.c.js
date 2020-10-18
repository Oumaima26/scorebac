import React, { Component } from 'react';
import '../css/sc.css';
class ScoreMathsC extends Component {
    constructor(props){
        super(props);
        this.onChangeMathematiques = this.onChangeMathematiques.bind(this);
        this.onChangePhysique = this.onChangePhysique.bind(this);
        this.onChangeMoyenneF = this.onChangeMoyenneF.bind(this);
        this.onChangeSciences = this.onChangeSciences.bind(this);
        this.onChangeFrançais = this.onChangeFrançais.bind(this);
        this.onChangeAnglais = this.onChangeAnglais.bind(this);
        this.onChangeMathematiquesC = this.onChangeMathematiquesC.bind(this);
        this.onChangePhysiqueC = this.onChangePhysiqueC.bind(this);
        this.onChangeMoyenneFC = this.onChangeMoyenneFC.bind(this);
        this.onChangeSciencesC = this.onChangeSciencesC.bind(this);
        this.onChangeFrançaisC = this.onChangeFrançaisC.bind(this);
        this.onChangeAnglaisC = this.onChangeAnglaisC.bind(this);
        this.onChangeResult = this.onChangeResult.bind(this);
        this.cal = this.cal.bind(this);
        this.state={
            mathematiques:0.00,
            physique:0.00,
            moyennef:0.00,
            sciences:0.00,
            français:0.00,
            anglais:0.00,
            mathematiquesc:0.00,
            physiquec:0.00,
            moyennefc:0.00,
            sciencesc:0.00,
            françaisc:0.00,
            anglaisc:0.00,
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
      onChangeMathematiquesC(e) {
          this.setState({
            mathematiquesc: e.target.value
          })
        }
        
      onChangePhysiqueC(e) {
          this.setState({
            physiquec: e.target.value
          })
        }
        
      onChangeMoyenneFC(e) {
          this.setState({
            moyennefc: e.target.value
          })
        }
        onChangeSciencesC(e) {
          this.setState({
            sciencesc: e.target.value
          })
        }
        onChangeFrançaisC(e) {
          this.setState({
            françaisc: e.target.value
          })
        }
        onChangeAnglaisC(e) {
          this.setState({
            anglaisc: e.target.value
          })
        }
      onChangeResult(e) {
        this.setState({
          result: e.target.value
        })
      }
      cal = () => {
        this.state.result=Number((Number(this.state.moyennef)*2+Number(this.state.moyennefc))/3)*4
        +Number((Number(this.state.physique)*2+Number(this.state.physiquec))/3)*1.5
        +Number((Number(this.state.mathematiques)*2+Number(this.state.mathematiquesc))/3)*2
        +Number((Number(this.state.sciences)*2+Number(this.state.sciencesc))/3)*0.5
        +Number((Number(this.state.anglais)*2+Number(this.state.anglaisc))/3)*1
        +Number((Number(this.state.françaisc)*2+Number(this.state.françaisc))/3)*1
        
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
            <div className="form-wrapper1000">
            <a href="/" role="button" style={{fontSize:"20px"}}>
            <i className="fa fas-home"></i>
            Home
          </a>
              <br/>
                <center><p style={{fontSize:"40px"}}>Score Baccalauréat Mathématiques </p>
                        <table style={{width:"100%" }}>
                          <tbody style={{ color: '#000000',fontSize: 24 }}>
                              <tr>
                                  <td></td>
                                  <td>Note Principale</td>
                                    <td>Note Contrôle</td>  
                                </tr>
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
                                    <td><input 
                                        required
                                        type="text"  
                                        name="mayennefc" 
                                        value={ this.state.moyennefc}
                                        onChange={this.onChangeMoyenneFC}
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
                                    <td><input 
                                        required
                                        type="text"  
                                        name="mathematiquesc" 
                                        value={ this.state.mathematiquesc}
                                        onChange={this.onChangeMathematiquesC}
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
                                    <td><input 
                                        required
                                        type="text"  
                                        name="physiquec" 
                                        value={ this.state.physiquec}
                                        onChange={this.onChangePhysiqueC}
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
                                <td><input 
                                  required   
                                  name="sciencesc" 
                                  value={ this.state.sciencesc}
                                  onChange={this.onChangeSciencesC}
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
                                <td><input 
                                  required   
                                  name="françaisc" 
                                  value={ this.state.françaisc}
                                  onChange={this.onChangeFrançaisC}
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
                                <td><input 
                                  required   
                                  name="anglaisc" 
                                  value={ this.state.anglaisc}
                                  onChange={this.onChangeAnglaisC}
                                  />
                                </td>
                                <td><label htmlFor="anglais"> الانجليزية</label></td>
                            </tr>
                            </tbody>
                          </table>
                          <br/>
                          <br/>
                        <button  onClick={this.cal} style={{backgroundColor:"grey" ,width:"12%"}}>Calculer</button>
                        <br/><br/>
                        <input name="result" id="result" type="text" style={{color:"red", fontSize:"26px"}}></input>

                        
                    </center>
                    </div>
            </div>
          );
        }
    }

export default ScoreMathsC;