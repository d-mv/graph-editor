import { atom } from 'recoil';
import { MaybeNull } from '../../types';

export const graphRefState = atom<MaybeNull<HTMLDivElement>>({ key: 'graph/ref', default: null });

export const graphErrorMessageState = atom<string>({ key: 'graph/errorMEssage', default: '' });
