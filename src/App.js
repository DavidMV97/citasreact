import React , {Component} from 'react'; 
import Header from './components/Header'; 
import AgregarCita from './components/AgregarCita';
import ListaCitas from './components/ListaCitas'; 
class  App extends Component {

	state = {
		citas: []
	}


  crearcita = (nuevaCita) => {
	const citas = [...this.state.citas, nuevaCita]; 
	
	this.setState({
		citas
	});
  }
  render(){
    return (
      <div className="container">
        <Header 
          titulo='Administrador de pacientes de veterinaria '
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita 
              crearcita={this.crearcita}
            />
          </div>
		  <div className="col-md-6">
			  <ListaCitas 
			  	citas={this.state.citas}
			  />
		  </div>
        </div>
      </div>
    );
  }
}

export default App;
