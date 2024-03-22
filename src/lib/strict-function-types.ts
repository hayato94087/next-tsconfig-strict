// 関数に対してより範囲の広い引数の型の代入
let func1: (n: number) => any; 
func1 = (n: number | null) => {}; 
func1 = (n: number | null | undefined) => {};

// 関数に対してより範囲の狭い引数の型の代入
let func2: (n: number | null | undefined) => any;
func2 = (n: number | null) => {};
func2 = (n: number) => {};

// メソッドに対してより範囲の狭い引数の型の代入
type MethodType = {
  func3(n: number | null | undefined): any;
};
const m1: MethodType = {
  func3: (n: number | null) => {}
};
const m2: MethodType = {
  func3: (n: number) => {}
};