import { atom, atomFamily, DefaultValue, selector } from "recoil";
import { HeaderNavigatorMenu } from "../types";

const selectNavigatorMenu = atom<HeaderNavigatorMenu>({
  default: "Home",
  key: "selectNavigatorMenu-3d9c",
});

const navigatorMenuStoreBase = atomFamily({
  default: "Home",
  key: "navigatorMenuStoreBase-4460",
});

export const navigatorMenu = selector({
  get: ({ get }) => {
    const selectNavigatorMenuName = get(selectNavigatorMenu);

    return get(navigatorMenuStoreBase(selectNavigatorMenuName));
  },
  key: "businessTypeChipIdx-54ce",
  set: ({ set, get }, newValue) => {
    const selectNavigatorMenuName = get(selectNavigatorMenu);
    const nextState = newValue instanceof DefaultValue ? "" : newValue;

    set(navigatorMenuStoreBase(selectNavigatorMenuName), nextState);
  },
});
