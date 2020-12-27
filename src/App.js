import React , {Component} from 'react'; 
import Header from './components/Header'; 
import AgregarCita from './components/AgregarCita';

class  App extends Component {

  crearcita = () => {
    console.log('desde app')
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
        </div>
      </div>
    );
  }
}

export default App;
