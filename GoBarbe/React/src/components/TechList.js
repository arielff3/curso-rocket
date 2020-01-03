import React, { Component } from 'react'
import TechItem from './TechItem'

class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  }

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if(techs) {
      this.setState({techs: JSON.parse(techs)})
    }
  }

  // Excutado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if(this.state.techs !== prevState.techs ) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }
  // Executado quando o componente deixa de existir
  componentWillMount() {

  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: '' 
    });
  } 
  
  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => 
          <TechItem 
            key={tech} 
            handleDelete={() =>  this.handleDelete(tech)}
            tech={tech}/>)}
        </ul>
        <input 
        type="text" 
        onChange={this.handleInputChange} 
        value={this.state.newTech} />
        <button type="submit">Adicionar</button>
      </form>
     ); 
  }
}

export default TechList