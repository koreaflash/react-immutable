import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { Record } from 'immutable';
//import { Map } from 'immutable';
//import { List } from 'immutable';

/*
//Record 사용해 보기---------------------------------------------------------------
const Person = Record({
  name: '홍길동',
  age: 1
});

let person = Person();
console.log("[person]", person);
console.log("[person]", person.name, person.age);

person = person.set('name', '이승호');
console.log("[person]", person.name, person.age);

person = Person({
  name: '규리',
  age: 12
})
console.log("[person]", person.name, person.age);

const nested = Record({
  foo: Record({
    bar: true
  })()
})();

console.log("[nested]", nested.foo.bar);

const nextNested = nested.setIn(['foo', 'bar'], false);
console.log("[nested]", nextNested.foo.bar);
*/
//----------------------------------------------------------------------------------
/*
//immutable 사용해보기 --------------------------------------------------------------

//오브젝트는 Map() 사용
const obj = Map({
  foo: 1,
  inner: Map({
    bar: 10
  })
});

//일반 자바스크립트로 변경할 때는 toJS()
console.log("[obj]", obj.toJS());

//배열은 List()
const arr = List([
  Map({ foo: 1 }),
  Map({ bar: 2 })
]);

//설정시에는 set()
let nextObj = obj.set('foo', 5);
console.log("[nextObj]", nextObj.toJS());

//읽을 때는 get()
console.log("[obj]", obj.get('foo'));
console.log("[arr]", arr.get(0).toJS());

//읽고 난 후 설정시에는 update()
nextObj = nextObj.update('foo', value => value + 1);
console.log("[nextObj]", nextObj.toJS());

//내부에 있는 걸 set/get 할 때는 In을 붙인다.
nextObj = obj.setIn(['inner', 'bar'], 1000);
console.log("[nextObj]", nextObj.getIn(['inner', 'bar']));
let nextArr = arr.setIn([0, 'foo'], 3423422);
console.log("[nextArr]", nextArr.getIn([0, 'foo']));

//List 내장 함수는 배열과 비슷하다
nextArr = arr.push(Map({ qaz: 3 }));
console.log("[nextArr]", nextArr.toJS());
nextArr = arr.filter(item => item.get('foo') === 1);
console.log("[nextArr]", nextArr.toJS());

//지울 때는 delete()
nextObj = nextObj.delete('foo');
console.log("[nextObj]", nextObj.toJS());
*/
//------------------------------------------------------------------------------

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
