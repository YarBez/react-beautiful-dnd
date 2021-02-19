// @flow
import { useMemo } from 'use-memo-one';

let count = 0;

export function reset() {
  count = 0;
}

export const useInstanceCount = () => {
  return useMemo(() => `${count++}`, []);
};
