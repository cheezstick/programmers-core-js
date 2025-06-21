import { isString } from "./type.js";






const {localStorage:storage} = window;


// const obj = {
//   name : 'tiger',
//   age: 30,
//   do(){return 'nice';}
// }


// storage.setItem('user',JSON.stringify(obj));
// console.log(JSON.parse(storage.getItem('user')));



export function setStorage(k,v) {
  return new Promise((resolve,reject) => {
    if(isString(k)){
      storage.setItem(k,JSON.stringify(v));
      resolve()
    }
    else {
      reject({message:'setStorage 함수의 첫 번째 인수는 문자 타입 이어야 합니다.'})
    }
  })
}


// setStorage('user'.obj)
//   .then(()=>{})





export function getStorage(k) {
  return new Promise((resolve,reject) => {
    if(isString(k)){
      resolve(JSON.parse(storage.getItem(k)));
    }
    else {
      reject({message:'getStorage 함수의 인수는 문자 타입 이어야 합니다.'})
    }
  })
}

// const {name, age} = await getStorage('user');

// console.log(name,age);

// getStorage()
//   .then((res)=>{
//     console.log(res)
//   })




export function deleteStorage(k) {
  return new Promise((resolve,reject) => {
      !k ? storage.clear() : storage.removeItem(k);
        resolve();
      })
}

// deleteStorage('user')


