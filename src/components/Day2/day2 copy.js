import React from 'react';

const arr = [11,22,33,44,55]
const Day2 = () => {
   const handleChangedata = (val) =>{
      if(val) for(var k=0; k<2; k++) arr.map((v,i) => console.log('Type One',v,i));
      else console.log('Nothing Is Their');

      console.log('-------------------------------');

      if(val){
        for(var j=0; j<2;j++){
            arr.map((value,index) => {
               return console.log('Type Two',value,index);
            });
        }
      }
      else {
        console.log('Nothing Is Their');
      }
    }
   return(
    <div>
        <button onClick={() => handleChangedata(false)}>click</button>
    </div>
   ) 
}
export default Day2;
