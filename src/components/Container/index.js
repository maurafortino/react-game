import React from "react";
import "./style.css";
import Jumbotron from "../Jumbotron";
import Title from '../Title';
import Description from '../Description';
import Row from '../Row';
import Col from '../Col';
import PicturesCard from '../PicturesCard';
import Score from '../Score';
import pictures from '../../../src/pictures.json';

class Container extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    characters: pictures,
    guessedCharacters: [],
    message: ""
  };

  handleOnClick = event => {
    const name = event.target.attributes.getNamedItem("name").value;
    this.randomizeCharacters()
    this.checkGuess(name, this.handleTopScore)
  }

  randomizeCharacters = () => {
    this.setState(this.state.characters = this.randomizeArray(this.state.characters))
  }

  randomizeArray = (a) => {
    let b, c, d;
    for (d = a.length - 1; d > 0; d--) {
      b = Math.floor(Math.random() * (d + 1));
      c = a[d];
      a[d] = a[b];
      a[b] = c;
    }
    return a;
  }

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.guessedCharacters.includes(name)) {
      newState.message = "You already guessed this character 😕"
      newState.guessedCharacters = []
      this.setState(this.state = newState)
    } else {
      newState.guessedCharacters.push(name)
      newState.message = `Alright! Keep it going!`
      this.setState(this.state = newState)
    }
    cb(newState, this.alertWinner)
  }

  handleTopScore = (newState, cb) => {
    if (newState.guessedCharacters.length > newState.topScore) {
      newState.topScore++
      this.setState(this.state = newState)
    }
    cb(newState)
  }

  handleWinner = (newState) => {
    if (newState.guessedCharacters.length === 12) {
      newState.message = "You win! Way to go!";
      newState.guessedCharacters = [];
      this.setState(this.state = newState)
    }
  }

  render() {
    return (
      <div className="container">
        <Jumbotron>
          <Title>Click an image</Title>
          <Description>Once you click an image, the images will shuffle. Click on all the images without clicking on the same one twice. For each unique image you click, you get a point. If you click on the same image twice, you lose.</Description>
          {/* <Score type="Score" score={this.state.guessedCharacters.length}>Score: </Score> */}
          {/* <TopScore type="TopScore" score={this.state.topScore}> Top Score: </TopScore> */}
        </Jumbotron>
        <Row>
          {
            this.state.characters.map(character => (
              <Col>
                <PicturesCard
                  key={character.id}
                  name={character.name}
                  image={character.image}
                />
              </Col>
            ))
          }
        </Row>
      </div>
    );
  }
}
export default Container;
