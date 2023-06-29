import { styled } from "styled-components";

const Right = () => {
  return (
    <S.Wrapper>
      <S.Recommend>
        <S.PhotoWrapper>
          <S.Photo src="" />
        </S.PhotoWrapper>
        <S.ButtonWrapper>
          <S.Title>주식 추천</S.Title>
          <S.Description>주식이 어려운 주린이들을 위한</S.Description>
        </S.ButtonWrapper>
      </S.Recommend>
      <S.Rising></S.Rising>
    </S.Wrapper>
  );
};

export default Right;

const Wrapper = styled.div`
  width: 40%;
`;
const Recommend = styled.div`
  width: 80%;
  height: 180px;
  margin: 0 auto;
  padding-top: 50px;
  border: 1px solid #407bf0;
  border-radius: 60px;
  display: flex;
  background-color: #eef3fe;
`;
const PhotoWrapper = styled.div`
  width: 100px;
  height: 100px;
  outline: 1px solid #5a70e0;
  border-radius: 100px;
  margin: 20px 20px;
  background-color: white;
  overflow: hidden;
`;
const Photo = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 50px;
`;
const ButtonWrapper = styled.div`
  color: #3a76ef;
  text-align: center;
  margin-top: 30px;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
`;
const Description = styled.div`
  margin-top: 5px;
  font-size: 12px;
`;
const Rising = styled.div`
  width: 80%;
  height: 180px;
  margin: 0 auto;
  margin-top: 30px;
  padding-top: 50px;
  border: 1px solid #407bf0;
  border-radius: 60px;
  display: flex;
  background-color: #eef3fe;
`;

const S = {
  Wrapper,
  Recommend,
  PhotoWrapper,
  Photo,
  ButtonWrapper,
  Title,
  Description,
  Rising,
};
