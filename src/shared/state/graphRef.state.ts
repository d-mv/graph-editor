import { MaybeNull } from "../types";
import { atom } from "recoil";

export const graphRefState = atom<MaybeNull<HTMLDivElement>>({
	key: "graph/ref",
	default: null,
});

export const graphErrorMessageState = atom<string>({
	key: "graph/errorMEssage",
	default: "",
});
