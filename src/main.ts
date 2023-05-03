class Foo {
  // Error: Parameter 'x' implicitly has an 'any' type.
  foo(x) {
    console.log(x)
  }
}

// Warning: 'Bar' is defined but never used.
class Bar extends Foo {
  // Error: This member must have an 'override' modifier because it overrides a member in the base class 'Foo'.
  foo(x: string) {
    console.log(x)
  }
}
