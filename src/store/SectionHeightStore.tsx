import { atom } from "recoil";

export const navigatorHeightStore = atom({
  default: 0,
  key: "navigatorHeightStore-Key",
});

export const homeHeightStore = atom<number>({
  default: 0,
  key: "homeHeightStore-Key",
});
