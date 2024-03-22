function fn(x: string) {
  x.toUpperCase();
}
const x1 = fn.call(undefined, "hello");   // 引数の型がstringで問題はない
const x2 = fn.call(undefined, true);      // 引数の型がstringでなく、booleanのため型エラーがある
const x3 = fn.call(undefined, 123456789); // 引数の型がstringでなく、numberのため型エラーがある