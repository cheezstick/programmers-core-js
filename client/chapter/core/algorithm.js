const data = [
  { name: 'cake', hp: 30 },
  { name: 'burger', hp: 100 },
  { name: 'WaddleDee', hp: 0 },
  { name: 'tomato', hp: 400 },
  { name: 'candy', hp: 50 },
  { name: 'poison', hp: -30 },
  { name: 'bomb', hp: -400 },
];


function eatKirby(data){
  let foodCount = 0;
  let waddleCount = 0;
  let hp = 10;

  data.forEach(({name,hp:foodHp})=>{
    
    if(name === 'WaddleDee'){
      waddleCount++;
      return;
    }

    const afterEat = hp + foodHp;

    
    if(afterEat <= 0){
      // console.log('죽음');
      return;
    }

    foodCount++;


    if(afterEat >= 400){
      hp = 400;
    }else{
      hp = afterEat
    }



  })
  



  return [foodCount,hp,waddleCount]
}


eatKirby(data)




function calcCount(str){

  let result = 0;
  let num = '';

  const operation = {
    a : (val) => val,
    s : (val) => -val
  }
  
  for(let char of str){
    if(operation[char]){

      result += operation[char](Number(num))
      num = '';
      
    }else{
      num += char
    }
  }


  return result

}



calcCount("10000a4000s3000a");


function _calcCount(str){
  const matches = str.match(/\d+(a|s)/g);
  let result = 0;
  matches.forEach((item)=>{
    
    const value = +item.slice(0,-1) 
    const flag = item[item.length-1];
    
    result += flag === 'a' ? value : -value;
  })
  return result;
}


_calcCount("10000a4000s3000a");


















