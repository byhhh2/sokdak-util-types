import { Expect } from '../lib';
import { expectType } from 'tsd';

const e: Expect<true> = true;

test('TEST: Expect', () => {
  expectType<boolean>(e);
});
