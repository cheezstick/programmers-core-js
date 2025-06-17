/* ---------------- */
/* Condition        */
/* ---------------- */



// const result = prompt(`자바스크립트의 '공식' 이름은 무엇일까요?`,'');

// if(result === 'ECMAScript'){
//   console.log('정답입니다!');
  
// }else{
//   console.log('오답입니다!');
  
// }









// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No
// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

function watchingMovie(){
  // 영화 봤니?
  let didWatchMovie = confirm('너 진격의거인 영화 봤어?');


  if(didWatchMovie){
    console.log('그 영화 재밌더라~ 역시 👍');
    
  }else{
    // ...영화 보러 갈래??
    let goingToWatchMovie = confirm('영화 보러 갈래?');

    if(goingToWatchMovie){
      // 보러 갈래
      let withWho = prompt('누구랑 볼거니??');
      if (withWho === '너') {
        console.log('그래 좋아 같이 보자~~!');
        
      }else if(withWho === '가족'){
        console.log('재밌게봐!');

      }else{
        console.log('나 말고 누구야??');
      }

    }else{
      // 안 갈래
      console.log('나도 사실 별로야');
    }
  }

}



// 영화 볼거니?



let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';



// 멀티 조건부 연산자 식


const message = didWatchMovie.includes('yes') ? '영화 재밌더라 한번 봐바' : 
                goingToWatchMovie.includes('yes') ? '언제 볼까? 재밌겠다!!':
                '그래...'


console.log( message );
                


// 조건부 렌더링 


function render(node,isActive){

  
  /* if문  */
  // let msg; 
  
  // if(isActive){
  //   msg = '안녕';
  // }else{
  //   msg = '잘가~'
  // }
  //   const template = `
  //   <div>${msg}</div>
  // `


  /* 삼항식  */

  const template = `
    <div>${isActive ? '안녕' : '잘가~'}</div>
  `

  node.insertAdjacentHTML('beforeend',template);

}






















// 조건부 연산자

