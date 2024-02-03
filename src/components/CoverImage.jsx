import styled from 'styled-components';
import image from '../assets/images/Image.png';
import vetor from '../assets/images/vectorHero.svg';

const Block = styled.div`
  position: relative;
`;

const Image = styled.img`
  height: 780px;
  aspect-ratio: auto;

  @media (max-width: 1440px) {
    height: 680px;
  }

  @media (max-width: 1280px) {
    height: 504px;
  }

  @media (max-width: 1024px) {
    width: calc(100% + 5vw);
    height: auto;
  }
`;

const Vetor = styled.img`
  height: 157px;
  aspect-ratio: auto;
  position: absolute;
  left: -15px;
  top: calc(50% - 77.5px);
`;

function CoverImage() {
  return (
    <Block>
      <Image src={image} />
      <Vetor src={vetor} />
    </Block>
  );
}

export default CoverImage;
