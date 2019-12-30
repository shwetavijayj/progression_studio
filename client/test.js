const tempArr = [10, 20, 30, 40, 50, 60, 70];

// console.log(tempArr.join(':'));
// let myStr = 'how are you doing today?';
// console.log(myStr.split('o'));
// console.log(myStr.valueOf());
// console.log(myStr.repeat(2));
let x = tempArr.reduce((x, y) => {
  return (x = x + y);
});

// console.log('x', x);
// (function() {
//   var a = (b = 3);
// })();

// console.log('a defined? ' + (typeof a !== 'undefined'));
// console.log('b defined? ' + (typeof b !== 'undefined'));
// var myObject = {
//   foo: 'bar',
//   func: function() {
//     var self = this;
//     console.log('outer func:  this.foo = ' + this.foo);
//     console.log('outer func:  self.foo = ' + self.foo);
//     (function() {
//       console.log('inner func:  this.foo = ' + this.foo);
//       console.log('inner func:  self.foo = ' + self.foo);
//     })();
//   }
// };
// myObject.func();

// function foo1() {
//   return {
//     bar: 'hello'
//   }
// }

// function foo2() {
//   return;
//   {
//     bar: 'hello';
//   }
// }
// console.log('foo1 returns:');
// console.log(foo1());
// console.log('foo2 returns:');
// console.log(foo2());

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

// (function() {
//   console.log(1);
//   setTimeout(function() {
//     console.log(2);
//   }, 1000);
//   setTimeout(function() {
//     console.log(3);
//   }, 0);
//   console.log(4);
// })();

// var arr1 = 'john'.split('');
// console.log('john'.split(''));
// var arr2 = arr1.reverse();
// var arr3 = 'jones'.split('');
// arr2.push(arr3);
// console.log('array 1: length=' + arr1.length + ' last=' + arr1.slice(-1));
// console.log('array 2: length=' + arr2.length + ' last=' + arr2.slice(-1));
// console.log(1 + '2' + '2');
// console.log(1 + +'5' + '2');
// console.log(1 + -'1' + '2');
// console.log(+'1' + '1' + '2');
// console.log('A' - 'B' + '2');
// console.log('A' - 'B' + 2);

for (var i = 0; i < 5; i++) {
  (function(x) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  })(i);
}

var username = ['Sam', 'Adarsh', 'Rohit', 'Rajat'];
for (let i in username) {
  console.log(username[i]);
}

// console.log('0 || 1 = ' + (0 || 1));
// console.log('1 || 2 = ' + (1 || 2));
// console.log('0 && 1 = ' + (0 && 1));
// console.log('1 && 2 = ' + (1 && 2));
// var a = {},
//   b = {
//     key: 'b'
//   },
//   c = {
//     key: 'c'
//   };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);
