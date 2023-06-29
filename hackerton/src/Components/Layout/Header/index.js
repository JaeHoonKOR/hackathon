import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Logos>
        <S.Logo src="/Assets/zbti.jpg" alt="로고 이미지"></S.Logo>
        <S.TextLogo src="/Assets/zbtiText.jpg" alt="로고 이미지"></S.TextLogo>
      </S.Logos>

      {/* <S.MyPage to="form/login">  </S.MyPage> */}
    </S.Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 100px;
`;

const Logos = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 100px;
`;

const TextLogo = styled.img`
  width: 80px;
  height: 20px;
  margin: auto 0;
`;

const MyPage = styled(Link)`
  width: 60px;
  border: 1px solid blue;
`;

const S = {
  Wrapper,
  Logos,
  Logo,
  TextLogo,
  MyPage,
};
