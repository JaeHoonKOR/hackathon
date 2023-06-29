import { Axios } from "./@core";

const PATH = "/api";

const MemberApi = {
  logIn({ email, password }) {
    return Axios.post(PATH + "/auth/login", {
      email: email,
      password: password,
    });
  },

  logOut() {
    return Axios.get(PATH + "/logout");
  },

  signUp({ email, password, name }) {
    return Axios.post(PATH + "/member/signup", {
      email: email,
      password: password,
      name: name,
    });
  },
};
export default MemberApi;
