import { Axios } from "./@core";

const PATH = "/api";

const QuestionApi = {
  question(startIdx, endIdx) {
    return Axios.get(PATH + "/questionnaire", {
      params: {
        startIdx,
        endIdx,
      },
    });
  },
};
export default QuestionApi;
