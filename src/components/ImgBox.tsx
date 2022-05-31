import { FC } from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  display: flex;
  max-width: 250px;
  max-height: 250px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 18px;
  &.logo {
    border-radius: 0;
    position: absolute;
    left: 40px;
    top: 20px;

    img {
      border-radius: 0;
    }
  }
`;

const Img = styled.img`
  margin: auto;
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 18px;
`;

interface ImgBoxProps {
  imgUrl: string;
  altAttr: string;
  className?: string;
}

const ImgBox: FC<ImgBoxProps> = ({ imgUrl, altAttr, className }) => {
  return (
    <ImgContainer className={className}>
      <Img src={imgUrl} alt={altAttr} />
    </ImgContainer>
  );
};

export default ImgBox;
