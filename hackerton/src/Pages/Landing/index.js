import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <>LandingPage</>
      <div>
        <Link to="test">테스트 하러가기</Link>
      </div>
      <div>
        <Link to="form/login">로그인</Link>
      </div>
      <div>
        <Link to="form/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default LandingPage;
