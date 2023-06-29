import { atom } from "recoil";

export const arrayState = atom({
  key: "arrayState",
  default: Array(24).fill(0), // 0으로 초기화된 24개의 칸을 가진 배열
});
