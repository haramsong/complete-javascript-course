/*
This is more of a thinking challenge than a coding challenge 🤓
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
*/

// 1
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// 2
/*
실행 초기에 IIFE 함수가 실행된다. 실행이 끝나면 header 변수에 접근할 수 없고 addEventListener에
header.style.color = 'blue'로 만드는 콜백 함수가 연결되어 있고, 'click' 이벤트를 기다리고 있다.
header 변수가 variable environment에 없어도 실행이 가능한 이유가 클로저에 있기 때문이다.
이벤트 콜백 함수가 header를 참조할 수 있는 이유는?
→ "해당 콜백 함수가 선언될 때의 스코프를 클로저로 기억하고 있기 때문"

- JavaScript에서 함수는 자신이 선언된 시점의 렉시컬 스코프(Lexical Scope) 를 기억한다.

- addEventListener에 등록된 익명 함수는 header가 선언된 스코프 안에서 만들어졌기 때문에, header에 접근할 수 있다.

즉, 이벤트가 실행되는 시점에는 이미 IIFE는 실행이 끝났고 함수 스코프는 사라진 것처럼 보여도, 
내부에서 선언한 함수가 header를 참조하고 있기 때문에 GC(가비지 컬렉터)가 header를 해제하지 않는다.
*/