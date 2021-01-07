import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import ListaCitas from './components/ListaCitas';
class App extends Component {

	state = {
		citas: []
	}

	componentDidMount(){
		const citasLS = localStorage.getItem('citas'); 
		if (citasLS) {
			this.setState({
				citas: JSON.parse(citasLS)
			})
		}
	}

	componentDidUpdate(){
		//console.log('Algo Cambio ...') ; 
		localStorage.setItem(
			'citas',
			JSON.stringify(this.state.citas)
		)
	}



	// componentWillMount() {
	// 	console.log('Yo me ejecuto antes') ; 
	// }

	// componentWillUnmount(){
	// 	console.log('Yo hasta que cierra ') ; 
	// }
	

	crearcita = (nuevaCita) => {
		const citas = [...this.state.citas, nuevaCita];

		this.setState({
			citas
		});
	}

	borrarCita = id => {
		//obtener copia del state  
		const citasActuales = [...this.state.citas]; 
		// console.log('Antes...') ;
		// console.log(citasActuales);  

		//Borrar el elemeento del state 
		const citas = citasActuales.filter(cita => cita.id !== id ); 
		// console.log('Despues ...') ;
		// console.log(citas) ; 
		
		
		//Actualizar el state
		this.setState({
			citas
		})

	}

	render() {
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
							borrarCita={this.borrarCita}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
