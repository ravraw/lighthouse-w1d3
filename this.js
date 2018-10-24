var person = {
  firstName: "Bob",
  lastName: "Smith",
  // fullName: function() {
  //   return this.firstName + " " + this.lastName;
  // }
  fullName: () => `${this} - ${this.firstName}${this.lastName}`
};

// Nice, now I can just say:
console.log("Hello, " + person.fullName());
// And it's much "cleaner" every time I need their full name!

console.log(this);
console.dir(person);

// function f() {
//   return this.a;
// }
// f.a = "something";
// console.log(f);

// var g = f.bind({ a: "azerty" });
// console.log(g()); // azerty

// var h = g.bind({ a: "yoo" }); // bind only works once!
// console.log(h()); // azerty

// var o = { a: 37, f: f, g: g, h: h };
// console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty
