import React from "react";
import "./style.css";
import Jumbotron from "../Jumbotron";
import Title from '../Title';
import Description from '../Description';
import Row from '../Row';
import Col from '../Col';
import PicturesCard from '../PicturesCard';
// import Score from '../Score';
import pictures from '../../../src/pictures.json';

class Container extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    pictures,
    guessedCharacters: [],
    message: ""
  };

  handleOnClick = () => {
    const shuffledArray = this.randomizeArray(pictures);
    this.setState({cards: shuffledArray});
  }

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
          {/* <Score type="Score" score={this.state.guessedCharacters.length}>Score: </Score> */}
          {/* <TopScore type="TopScore" score={this.state.topScore}> Top Score: </TopScore> */}
        </Jumbotron>
        <Row>
          <Col
          key={pictures.id}>
          {
            this.state.pictures.map(character => (
                <PicturesCard
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  handleOnClick={this.handleOnClick}
                />
            ))
          }
          </Col>
        </Row>
      </div>
    );
  }
}
export default Container;
