import React, { Component } from 'react';

class ScoreMaths extends Component {
    constructor(props){
        super(props);
        this.onChangeMathematiques = this.onChangeMathematiques.bind(this);
        this.onChangePhysique = this.onChangePhysique.bind(this);
        this.onChangeInformatique = this.onChangeInformatique.bind(this);
        this.onChangeSciences = this.onChangeSciences.bind(this);
        this.onChangeArabe = this.onChangeArabe.bind(this);
        this.onChangeFrançais = this.onChangeFrançais.bind(this);
        this.onChangeSport = this.onChangeSport.bind(this);
        this.onChangeOption = this.onChangeOption.bind(this);
        this.onChangeAnglais = this.onChangeAnglais.bind(this);
        this.onChangePhilosophie = this.onChangePhilosophie.bind(this);
        this.state={
            mathematiques:0.00,
            physique:0.00,
            informatique:0.00,
            sciences:0.00,
            arabe:0.00,
            français:0.00,
            sport:0.00,
            option:0.00,
            anglais:0.00,
            philosophie:0.00
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
      
    onChangeInformatique(e) {
        this.setState({
          informatique: e.target.value
        })
      }
      onChangeSciences(e) {
        this.setState({
          sciences: e.target.value
        })
      }
      onChangeArabe(e) {
        this.setState({
          arabe: e.target.value
        })
      }
      onChangeFrançais(e) {
        this.setState({
          français: e.target.value
        })
      }
      onChangeSport(e) {
        this.setState({
          sport: e.target.value
        })
      }
      onChangeOption(e) {
        this.setState({
          option: e.target.value
        })
      }
      onChangeAnglais(e) {
        this.setState({
          anglais: e.target.value
        })
      }
      onChangePhilosophie(e) {
        this.setState({
            philosophie: e.target.value
        })
      }
      calcLineItemsTotal = () => {
        return this.state.mathematiques+this.state.informatique
      }
      onSubmit = (e) => {
        e.preventDefault();
        
      }

    render(){
        return (
            <div >
              <br/>
                <center>
                    <form onSubmit={this.onSubmit}>
                        <table>
                            <tr>

                                    <td><label htmlFor="mathematiques">Mathématiques </label></td> 
                                    <td><input 
                                        required
                                        type="text"  
                                        type="number"
                                        name="mathematiques" 
                                        value={ this.state.mathematiques}
                                        onChange={this.onChangeMathematiques}
                                        />
                                    </td> 
                                    <td><label htmlFor="mathematiques"> الرياضيات</label></td> 
                       
                            </tr>
                            <br/>
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
                            <br/>
                            <tr>
                                <td><label htmlFor="informatique">Informatique </label></td>
                                <td><input 
                                    required
                                    type="text" 
                                    name="informatique" 
                                    value={ this.state.informatique}
                                    onChange={this.onChangeInformatique}
                                  />
                                </td>
                                <td><label htmlFor="informatique"> الاعلامية</label></td>
                             
                            </tr>
                            <br/>
                            <tr>
                                <td><label htmlFor="sciences">Sciences de la vie et de la Terre </label></td>
                                <td><input 
                                  required   
                                  name="mathematiques" 
                                  value={ this.state.sciences}
                                  onChange={this.onChangeSciences}
                                  />
                                </td>
                                <td><label htmlFor="sciences"> علوم الحياة والارض</label></td>
                            </tr>
                            <br/>
                            <tr>
                                <td><label htmlFor="arabe">Arabe </label></td>
                                <td><input 
                                  required   
                                  name="arabe" 
                                  value={ this.state.arabe}
                                  onChange={this.onChangeArabe}
                                  />
                                </td>
                                <td><label htmlFor="arabe"> العربية</label></td>
                            </tr>
                            <br/>
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
                            <br/>
                            <tr>
                                <td><label htmlFor="sport">Sport </label></td>
                                <td><input 
                                  required   
                                  name="sport" 
                                  value={ this.state.sport}
                                  onChange={this.onChangeSport}
                                  />
                                </td>
                                <td><label htmlFor="sport"> التربية البدنية </label></td>
                            </tr>
                            <br/>
                            <tr>
                                <td><label htmlFor="option">Option </label></td>
                                <td><input 
                                  required   
                                  name="option" 
                                  value={ this.state.option}
                                  onChange={this.onChangeOption}
                                  />
                                </td>
                                <td><label htmlFor="option"> المادة الاختيارية</label></td>
                            </tr>
                            <br/>
                            <tr>
                                <td><label htmlFor="anglais">Anglais </label></td>
                                <td><input 
                                  required   
                                  name="anglais" 
                                  type="number"
                                  value={ this.state.anglais}
                                  onChange={this.onChangeAnglais}
                                  />
                                </td>
                                <td><label htmlFor="anglais"> الانجليزية</label></td>
                            </tr>
                            <br/>
                            <tr>
                                <td><label htmlFor="philosophie">Philosophie </label></td>
                                <td><input 
                                  required   
                                  name="philosophie" 
                                  value={ this.state.philosophie}
                                  onChange={this.onChangePhilosophie}
                                  />
                                </td>
                                <td><label htmlFor="philosophie"> الفلسفة</label></td>
                            </tr>
                          </table>
                        </form>
                        <br/>
                        <div>{Number(this.state.physique)+Number(this.state.mathematiques)
                        +Number(this.state.informatique)+Number(this.state.sciences)
                        +Number(this.state.anglais)+Number(this.state.sport)
                        +Number(this.state.philosophie)+Number(this.state.arabe)
                        +Number(this.state.option)+Number(this.state.français)}</div>
                    </center>
            </div>
          );
        }
    }

export default ScoreMaths;
