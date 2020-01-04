import React from 'react';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import PicturesCard from './components/PicturesCard';
import pictures from './pictures.json';
import Description from './components/Description';

function App() {
  return (
    <Wrapper>
      <Title>Click an image</Title>
      <Description>Once you click an image, the images will shuffle. Click on all the images without clicking on the same one twice. For each unique image you click, you get a point. If you click on the same image twice, you lose.</Description>
      {
        pictures.map(picture => (
          <PicturesCard
          key={picture.id}
          name={picture.name}
          image={picture.image}
        />
        ))
      }
    </Wrapper>
  );
}

export default App;