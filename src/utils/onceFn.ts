export default function onceFn<ArgsT extends any[], ReturnT>(
  fn: (...args: ArgsT) => ReturnT
) {
  let called = false;
  return function (...args: ArgsT) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}
