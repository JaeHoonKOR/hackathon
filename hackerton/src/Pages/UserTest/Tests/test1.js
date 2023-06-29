import { useEffect, useState } from "react";
import { styled } from "styled-components";
import QuestionApi from "../../../Apis/question";

const Test = ({ setArray }) => {
  const [data, setData] = useState();
  const [clickedBtns, setClickedBtns] = useState(Array(8).fill(false));
  useEffect(() => {
    QuestionApi.question(1, 4)
      .then((response) => {
        const result = response.data.result;
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const clickBtn1 = (idx) => {
    const updatedClickedBtns = [...clickedBtns];
    updatedClickedBtns[idx] = !clickedBtns[idx];
    setClickedBtns(updatedClickedBtns);

    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[idx] = 0;
      return newArray;
    });
  };

  const clickBtn2 = (idx) => {
    const updatedClickedBtns = [...clickedBtns];
    updatedClickedBtns[idx + 4] = !clickedBtns[idx + 4];
    setClickedBtns(updatedClickedBtns);

    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[idx] = 1;
      return newArray;
    });
  };

  return (
    <S.Wrapper>
      {data && (
        <>
          <S.Title> 나는 어떤 성향일까? 🧐</S.Title>
          <S.Container>
            <S.QuestionWrapper>
              {data[0]?.question.slice(0, 7)}
              <BoldText>{data[0]?.question.slice(8, 55)}</BoldText>
              {data[0]?.question.slice(55)}
            </S.QuestionWrapper>
            <S.BtnWrapper>
              <S.AnswerBtn1
                clicked={clickedBtns[0]}
                onClick={() => clickBtn1(0)}
              >
                {data[0]?.answer1}
              </S.AnswerBtn1>
              <S.AnswerBtn2
                clicked={clickedBtns[4]}
                onClick={() => clickBtn2(0)}
              >
                {data[0]?.answer2}
              </S.AnswerBtn2>
            </S.BtnWrapper>
          </S.Container>
          <S.Container>
            <S.QuestionWrapper>
              {data[1]?.question.slice(0, 13)}
              <BoldText>{data[1]?.question.slice(8, 36)}</BoldText>
              {data[1]?.question.slice(36)}
            </S.QuestionWrapper>
            <S.BtnWrapper>
              <S.AnswerBtn1
                clicked={clickedBtns[1]}
                onClick={() => clickBtn1(1)}
              >
                {data[1]?.answer1}
              </S.AnswerBtn1>
              <S.AnswerBtn2
                clicked={clickedBtns[5]}
                onClick={() => clickBtn2(1)}
              >
                {data[1]?.answer2}
              </S.AnswerBtn2>
            </S.BtnWrapper>
          </S.Container>

          <S.Container>
            <S.QuestionWrapper>
              {data[2]?.question.slice(0, 56)}
              <BoldText>{data[2]?.question.slice(56, 66)}</BoldText>
              {data[2]?.question.slice(66, 78)}
              <BoldText>{data[2]?.question.slice(78, 93)}</BoldText>
              {data[2]?.question.slice(93)}
            </S.QuestionWrapper>
            <S.BtnWrapper>
              <S.AnswerBtn1
                clicked={clickedBtns[2]}
                onClick={() => clickBtn1(2)}
              >
                {data[2]?.answer1}
              </S.AnswerBtn1>
              <S.AnswerBtn2
                clicked={clickedBtns[6]}
                onClick={() => clickBtn2(2)}
              >
                {data[2]?.answer2}
              </S.AnswerBtn2>
            </S.BtnWrapper>
          </S.Container>

          <S.Container>
            <S.QuestionWrapper>
              {data[3]?.question.slice(0, 16)}
              <BoldText>{data[3]?.question.slice(16, 36)}</BoldText>
              {data[3]?.question.slice(36)}
            </S.QuestionWrapper>
            <S.BtnWrapperLong>
              <S.AnswerBtn1Long
                clicked={clickedBtns[3]}
                onClick={() => clickBtn1(3)}
              >
                {data[3]?.answer1}
              </S.AnswerBtn1Long>
              <S.AnswerBtn2Long
                clicked={clickedBtns[7]}
                onClick={() => clickBtn2(3)}
              >
                {data[3]?.answer2}
              </S.AnswerBtn2Long>
            </S.BtnWrapperLong>
          </S.Container>
        </>
      )}
    </S.Wrapper>
  );
};

export default Test;

const BoldText = styled.span`
  font-weight: 800;
`;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  color: #407bf0;
`;
const Title = styled.div`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 20px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 30px;
`;
const QuestionWrapper = styled.div`
  width: 40%;
  color: #407bf0;

  font-size: 14px;
`;
const BtnWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  font-size: 8px;
  :hover {
    background-color: #407bf0;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const AnswerBtn1 = styled.button`
  width: 400px;
  height: 30px;
  font-size: 12px;
  margin: auto 10px;
  margin-right: 20px;
  border: 1px solid #799edc;
  border-radius: 30px;
  text-align: center;
  background-color: white;
  cursor: pointer;
  color: ${(props) => (props.clicked ? " white" : "#407bf0")};
  background-color: ${(props) => (props.clicked ? " #407bf0" : "white")};
`;
const AnswerBtn2 = styled.button`
  width: 400px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  margin-right: 30px;
  margin: auto 10px;
  border: 1px solid #799edc;
  border-radius: 30px;
  color: #407bf0;
  background-color: white;
  cursor: pointer;
  color: ${(props) => (props.clicked ? " white" : "#407bf0")};
  background-color: ${(props) => (props.clicked ? " #407bf0" : "white")};
`;
const BtnWrapperLong = styled.div`
  width: 50%;
  :hover {
    background-color: #407bf0;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
const AnswerBtn1Long = styled.button`
  width: 400px;
  height: 30px;
  font-size: 12px;
  margin: auto 10px;
  margin-right: 20px;
  border: 1px solid #799edc;
  border-radius: 30px;
  text-align: center;
  color: #407bf0;
  background-color: white;
  cursor: pointer;
  color: ${(props) => (props.clicked ? " white" : "#407bf0")};
  background-color: ${(props) => (props.clicked ? " #407bf0" : "white")};
`;
const AnswerBtn2Long = styled.button`
  width: 400px;
  margin-right: 30px;
  margin-top: 20px;
  text-align: center;
  margin: 10px 10px;
  border: 1px solid #799edc;
  border-radius: 30px;
  padding: 15px;
  color: #407bf0;
  background-color: white;
  cursor: pointer;
  color: ${(props) => (props.clicked ? " white" : "#407bf0")};
  background-color: ${(props) => (props.clicked ? " #407bf0" : "white")};
`;
const S = {
  Wrapper,
  Title,
  Container,
  QuestionWrapper,
  BtnWrapper,
  AnswerBtn1,
  AnswerBtn2,
  BtnWrapperLong,
  AnswerBtn1Long,
  AnswerBtn2Long,
};
