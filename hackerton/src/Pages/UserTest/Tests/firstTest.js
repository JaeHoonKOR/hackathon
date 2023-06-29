import { styled } from "styled-components";

const FirstTest = () => {
  return (
    <S.Wrapper>
      <S.Title>📈투자 할 때, 나는 XXX한 편이다 🙋🏻‍♂️</S.Title>

      <S.BtnWrapper>
        <S.AnswerBtn>~~한 편이다</S.AnswerBtn>
        <S.AnswerBtn>~~하지 않은 편이다.</S.AnswerBtn>
      </S.BtnWrapper>

      <S.BtnWrapper>
        <S.AnswerBtn>~~한 편이다</S.AnswerBtn>
        <S.AnswerBtn>~~하지 않은 편이다.</S.AnswerBtn>
      </S.BtnWrapper>

      <S.BtnWrapper>
        <S.AnswerBtn>~~한 편이다</S.AnswerBtn>
        <S.AnswerBtn>~~하지 않은 편이다.</S.AnswerBtn>
      </S.BtnWrapper>

      <S.BtnWrapper>
        <S.AnswerBtn>~~한 편이다</S.AnswerBtn>
        <S.AnswerBtn>~~하지 않은 편이다.</S.AnswerBtn>
      </S.BtnWrapper>
    </S.Wrapper>
  );
};

export default FirstTest;

const Wrapper = styled.div`
  text-align: center;
  color: #407bf0;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  :hover {
    background-color: #407bf0;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
const AnswerBtn = styled.button`
  width: 300px;
  margin-right: 30px;
  margin-top: 20px;
  border: 1px solid #799edc;
  border-radius: 30px;
  padding: 15px;
  color: #407bf0;
  background-color: white;
  cursor: pointer;
`;

const S = {
  Wrapper,
  Title,
  BtnWrapper,
  AnswerBtn,
};
