import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <S.Wrapper>
      <S.Left>
        <S.Title>ZBTI 테스트</S.Title>
        <S.Description>
          나의 투자 성향을 파악하고<br></br>
          투자 성향에 따른 주식 상품 추천<br></br>
          나와 같은 성향의 유명 투자자 찾기.
        </S.Description>
        <S.TestBtn to="test">내 ZBTI 테스트 하러 가기</S.TestBtn>
      </S.Left>
      <S.Right></S.Right>
      <div></div>
    </S.Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Left = styled.div`
  border: 1px solid green;
  margin-top: 10px;
`;

const Title = styled.div`
  border: 1px solid green;
  margin-top: 10px;
`;

const Description = styled.div`
  border: 1px solid rebeccapurple;
  margin-top: 10px;
`;
const TestBtn = styled(Link)`
  margin-top: 10px;
`;
const LoginBtn = styled.div`
  border: 1px sold #5a70e0;
  margin-top: 10px;
`;
const Right = styled.div`
  border: 1px solid black;
  margin-top: 10px;
`;

const Photo = styled.div`
  margin-top: 10px;
`;

const S = {
  Wrapper,
  Left,
  Title,
  Description,
  TestBtn,
  LoginBtn,
  Right,
  Photo,
};
