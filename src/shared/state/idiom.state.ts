import { atom } from "recoil"

export enum Idiom {
  MERMAID = "mermaid",
  PLANTUML = "plantUML"
}

export const idiomState = atom<Idiom>({
  key: "idiomState",
  default: Idiom.MERMAID
})
