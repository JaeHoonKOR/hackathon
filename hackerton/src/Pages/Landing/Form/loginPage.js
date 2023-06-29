import { styled } from "styled-components";
import MemberApi from "../../../Apis/memberApi";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onClickLogin = async (e) => {
    e.preventDefault();
    const email = e.target.elements.id.value;
    const password = e.target.elements.pw.value;
    try {
      await MemberApi.logIn({ email, password });
      navigate("/main");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Wrapper onSubmit={onClickLogin}>
      <S.Title>회원가입</S.Title>
      <S.ID type="text" placeholder="이메일" name="id"></S.ID>
      <S.PW type="password" placeholder="비밀번호" name="pw"></S.PW>

      <S.LogIn>완료</S.LogIn>
    </S.Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.form`
  width: 70%;
  height: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #407bf0;
  border-radius: 60px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  color: #407bf0;
  margin-top: 100px;
`;

const Form = styled.div`
  border: 1px solid red;
  flex-direction: column;
  align-items: center;
`;

const ID = styled.input`
  width: 300px;
  height: 25px;
  border-radius: 30px;
  padding: 5px;
  border: 1px solid #799edc;
  margin-top: 10px;
`;

const PW = styled.input`
  width: 300px;
  height: 25px;
  border-radius: 30px;
  padding: 5px;
  border: 1px solid #799edc;
  margin-top: 10px;
`;

const PWConfirm = styled.input`
  width: 300px;
  height: 25px;
  border-radius: 30px;
  padding: 5px;
  border: 1px solid #799edc;
  margin-top: 10px;
`;
const goBack = styled.div``;

const LogIn = styled.button`
  cursor: pointer;
  border: none;
  width: 100px;
  height: 35px;
  background-color: #799edc;
  border-radius: 15px;
  margin-top: 10px;
`;

const S = {
  Wrapper,
  Title,
  Form,
  ID,
  PW,
  PWConfirm,
  goBack,
  LogIn,
};
