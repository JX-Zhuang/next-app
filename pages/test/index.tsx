import Image from 'next/image'
import { useState } from 'react'
import a from '../../src';
interface ITest{
  a:string;
}
const test:ITest = {
  b:123
};
console.log(test.a);
export default function Test() {
  const [count, setCount] = useState(0);
  const handlerClick = () => {
    setCount(count => count + 1);
  };
  return (
    <div>
      <div>count:{count}</div>
      <button onClick={handlerClick}>click</button>
    </div>
  )
}
