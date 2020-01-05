import React from "react";
import "./style.css";
import Jumbotron from "../Jumbotron";
import Title from '../Title';
import Description from '../Description';
import Row from '../Row';
import Col from '../Col';
import PicturesCard from '../PicturesCard';
import Score from '../Score';
import Message from '../Message';
import pictures from '../../../src/pictures.json';

class Container extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    pictures,
    guessedCharacters: [],
    message: ""
  };

  handleOnClick = name => {
    const shuffledArray = this.randomizeArray(pictures);
    this.setState({ cards: shuffledArray });
    if (!this.state.guessedCharacters.includes(name)) {
      this.setState({
        guessedCharacters: this.state.guessedCharacters.concat([name]),
        score: this.state.score + 1,
        message: "Alright keep it going!"
      });
    } else {
      this.setState({ 
        score: 0,
        guessedCharacters: [],
        message: "Character already guessed. The game is over, but you can still try again." 
      });
    };
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  };

  randomizeArray = (picturesArr) => {
    let currentIndex = picturesArr.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = picturesArr[currentIndex];
      picturesArr[currentIndex] = picturesArr[randomIndex];
      picturesArr[randomIndex] = temporaryValue;
    }

    return picturesArr;
  };

  render() {
    return (
      <div className="container">
        <Jumbotron>
          <Title>Click an image</Title>
          <Description>Once you click an image, the images will shuffle. Click on all the images without clicking on the same one twice. For each unique image you click, you get a point. If you click on the same image twice, you lose.</Description>
          <Score score={this.state.guessedCharacters.length} highScore={this.state.highScore} />
          <Message message={this.state.message} />

        </Jumbotron>
        <Row>
          {
            this.state.pictures.map(character => (
              <Col
                key={pictures.id}>
                <PicturesCard
                  key={character.name}
                  name={character.name}
                  image={character.image}
                  handleOnClick={this.handleOnClick}
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
