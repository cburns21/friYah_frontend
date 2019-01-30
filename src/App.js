import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      results: [],
      girl: '',
      picture: '',
      reason: ''
    }
  }

  getRandomIntInclusive = (max) => {
    const min = 0
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  generateGirl = (e) => {
    const randomIndex = this.getRandomIntInclusive(this.state.results.length)
    const randomGirl = this.state.results[randomIndex]
    this.setState({
      girl: randomGirl.girl,
      picture: randomGirl.picture,
      reason: randomGirl.reason
    })
  }

  componentDidMount(){
    fetch('https://young-anchorage-78332.herokuapp.com/data')
    .then(response => response.json())
    
    .then(myJson => {
      this.setState({
        results: myJson.data.results
      })
    });
  }



  render() {
    return (
      <div className="form-group">
        <div className="form-group">
          <label for="questionOne">Your Burn Book contains:</label>
          <select className="form-control" id="questionOne">
            <option>Dirty Secrets</option>
            <option>Gossip</option>
            <option>A list of people you dislike</option>
            <option>A list of people you want to kiss</option>
            <option>Risquex pictures</option>
            <option>Your secret weed stash</option>
          </select>
        </div>
        <div className="form-group">
          <label for="questionTwo">Your extracurricular activity is:</label>
          <select className="form-control" id="questionTwo">
            <option>Yearbook</option>
            <option>Mathletes</option>
            <option>Lacrosse</option>
            <option>Cheerleading</option>
            <option>Getting high under the bleachers</option>
            <option>Spring Fling committee</option>
          </select>
        </div>
        <div className="form-group">
          <label for="questionThree">What is in your locker?</label>
          <select className="form-control" id="questionThree">
            <option>An old sandwich</option>
            <option>A mirror and lip gloss</option>
            <option>Textbooks</option>
            <option>Your other weed stash</option>
            <option>Art supplies</option>
            <option>Foot cream</option>
          </select>
        </div>
        <div className="form-group">
          <label for="questionFour">What did your last text message say?</label>
          <select className="form-control" id="questionFour">
            <option>"Aaron Samuels looks sexy with his hair pushed back"</option>
            <option>"That's soo fetch"</option>
            <option>"I have some major plastic sabotage planned"</option>
            <option>"Did you hear about Coach Carr?"</option>
            <option>"Wanna go to Taco Bell?"</option>
            <option>"I want to loose three pounds"</option>
          </select>
        </div>
        <div className="form-group">
          <label for="questionFive">What would you do for the Winter Talent Show?</label>
          <select className="form-control" id="questionfive">
            <option>Sing a song</option>
            <option>Do a rap</option>
            <option>A group dance</option>
            <option>Juggling</option>
            <option>A Shakespearean monologue</option>
            <option>Play a musical instrument</option>
          </select>
        </div>
        <div className="form-group">
          <label for="questionSix">What should the theme of the Spring Fling be?</label>
          <select className="form-control" id="questionSix">
            <option>Circus</option>
            <option>Great Gatsby</option>
            <option>Hollywood</option>
            <option>Arabian Nights</option>
            <option>Burning Man</option>
            <option>Parisian Nights</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    )
    
  }
}



export default App;






