

// call back

import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./type.js";
import { xhrPromise } from "./xhr.js";
import { insertLast } from "../dom/insert.js";

function delay(callback,timeout=1000){
  setTimeout(callback,timeout);
}


const first = getNode('.first');
const second = getNode('.second');



// delay(()=>{
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       first.style.top = 0;
//       second.style.top = 0;
//     })
//   })
// })











/*

Promise를 사용하는 이유?

- 콜백의 한계 (콜백 지옥)
- 가독성을 위해
- 비동기 작업을 순차적으로 처리 🔥


*/









// promise

// object mixin

const defaultOptions = {
   shouldRejected:false,
   data:'성공',
   errorMessage :'알 수 없는 오류',
   timeout:1000,
}

export function delayP(options) {

  let config = {...defaultOptions};

  if(isNumber(options)) {
    config.timeout = options;
  }

  if(isObject(options)){
    config = {...defaultOptions,...options};
  }

  const {shouldRejected, timeout, errorMessage:err, data} = config;

  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(!shouldRejected) {
        resolve(data);
      } else {
        reject({message:err});
      }
    },timeout)
  })

}


// delayP({
//   data : '성공!',
//   shouldRejected : false,
//   timeout : 1000,
//   errorMessage: '오류 발생!!!'
// })



// delayP()
//   .then(()=>{
//     first.style.top = '-100px';
//     second.style.top = '100px';

//     return delayP();
//   })
//   .then(()=>{
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(360deg)';

//     return delayP();
//   })
//   .then(()=>{
//     first.style.top = 0;
//     second.style.top = 0;

//   })

















// async await

// async : 무 조 건 promis object를 리턴하는 함수
// await : 코드 실행 흐름 제어
//         result의 값을 꺼낼 수 있다.

async function f(){
  return 10;
}

const a = f();

//IIAFE

(async ()=> {
  console.log(await a);
})








async function delayA() {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('성공')
    },2000)
  })
}

// const result = await delayA();
//console.log(result);







async function 라면끓이기(){
  const a = await delayP({data:'물'})
  console.log(a);

  const b = await delayP({data:'불켜기'})
  console.log(b);

  const c = await delayP({data:'스프'})
  console.log(c);

  const d = await delayP({data:'면'})
  console.log(d);

  const e = await delayP({data:'계란'})
  console.log(e);

}

// 라면끓이기();




async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/25');

  const src = data.sprites.other.showdown['front_default'];
  insertLast(document.body,`<img src="${src}" alt="" />`)
}

getData();





















