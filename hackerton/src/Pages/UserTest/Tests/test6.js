import { useEffect, useState } from "react";
import { styled } from "styled-components";
import QuestionApi from "../../../Apis/question";
import { useRecoilValue } from "recoil";
import { arrayState } from "../../Atom/atom";

const Test6 = () => {
  const array = useRecoilValue(arrayState);

  return (
    <S.Wrapper>
      <div>{array}</div>
    </S.Wrapper>
  );
};

export default Test6;

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
const S = {
  Wrapper,
  Title,
  Container,
};
