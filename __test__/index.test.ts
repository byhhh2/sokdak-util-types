import { PropsWithChildrenC, StateAndAction } from '../lib';
import { expectType } from 'tsd';
import { Dispatch, ReactNode, SetStateAction } from 'react';

interface Props {}
type Children = ReactNode;

let props: PropsWithChildrenC<Props, Children>;

test('TYPE : PropsWithChildrenC', () => {
  expectType<PropsWithChildrenC>(props);
});

let state: boolean;
let setState: Dispatch<SetStateAction<boolean>>;

test('', () => {
  expectType<StateAndAction<boolean, 'state'>>({ state, setState });
});
