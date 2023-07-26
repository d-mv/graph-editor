import { atom } from "recoil";

export const isInitState = atom<boolean>({ key: "isInit", default: false });
