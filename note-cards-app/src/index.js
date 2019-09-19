import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NoteCard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			front: this.props.front,
			back: this.props.back,
			display_front: true,
		}
	}

	noteCardClick(){
		this.setState({
			display_front: !this.state.display_front,
		});
	}

	render(){
		let front_or_back   = (this.state.display_front === true) ? 'Front' : 'Back';
		let current_display = (this.state.display_front === true) ? this.state.front : this.state.back;

		return(
			<div 
			  onClick = {()=>{this.noteCardClick()}}
			  className="notecard_class">
			  {front_or_back + " of NoteCard is displayed"}<br/>
			  {current_display}
			</div>
		)
	}  
}

class CardDeck extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			notecards: [],
		}
	}

	makeNewCard(front, back){
		console.log("front: " + front + " \nback: " + back);
		return (
			<NoteCard
				front={front}
				back ={back}
			/>
		);
	}

	addCardClick(){
		let card_front = document.getElementById('card_front').value;
		let card_back  = document.getElementById('card_back').value;
		let cardx = this.makeNewCard(card_front, card_back);
		this.setState({
			notecards: [...this.state.notecards, cardx]
		});
	}

	render(){
		return(
			<div className="deck_class">
		      <div className="new_card_controls">
		      	<label>New Card Front: 
		      		<input type="text" id="card_front" />
		      		<br/>
		      	</label>
		      	<label>New Card Back: 
		      		<textarea rows="5" columns="50" id="card_back"/>
		      		<br/>
		      	</label>
		      	<button className="standard_button" onClick={()=>{this.addCardClick(); }}>
		      	  Add to the Card Deck
		      	</button>
		      </div>
		      <div className="displayed_card">
		      {this.state.notecards}
			  </div>
			</div>
		)
	}

}





ReactDOM.render(
	//<NoteCard front='hello-front' back='goodbye-back' />,
	<CardDeck />,
	document.getElementById('root')
);


