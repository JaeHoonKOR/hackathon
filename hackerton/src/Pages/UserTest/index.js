import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Intro from "./Intro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FirstTest from "./Tests/firstTest";
import SecondTest from "./Tests/secondTest";
import ThirdTest from "./Tests/thirdTest";
import FourthTest from "./Tests/fourthTest";

const TestPage = () => {
  const { page } = useParams();
  console.log(page);

  const navigate = useNavigate();

  const onClickNext = () => {
    console.log("!");
    navigate(`/test/${Number(page) + 1}`);
  };
  return (
    <S.Wrapper>
      {page == 0 && <Intro />}
      {page == 1 && <FirstTest />}
      {page == 2 && <SecondTest />}
      {page == 3 && <ThirdTest />}
      {page == 4 && <FourthTest />}
      {page != 0 && (
        <S.NextPageBtn onClick={onClickNext}>
          <S.BtnWord>다음 단계로 이동</S.BtnWord>
          <FontAwesomeIcon icon={faArrowRight} />
        </S.NextPageBtn>
      )}
    </S.Wrapper>
  );
};

export default TestPage;

const Wrapper = styled.div`
  width: 70%;
  height: 450px;
  margin: 0 auto;
  padding-top: 50px;
  border: 1px solid #407bf0;
  border-radius: 60px;
  justify-content: center;
`;

const NextPageBtn = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  border-radius: 30px;
  padding: 15px;
  border: none;
  margin-top: 20px;
  justify-content: space-between;
  background-color: #5a70e0;
  color: white;
  margin-bottom: 10px;
`;

const BtnWord = styled.div`
  margin: 0 auto;
`;

const S = {
  Wrapper,
  NextPageBtn,
  BtnWord,
};
