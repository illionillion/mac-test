"use strict"
let text = 'hello world';

(async ()=>{
    for (let i = 0; i < text.length; i++) {
        await new Promise((res,rej)=>{
            setTimeout(() => {
                res();
            }, 1000);
        })    
        console.log(text[i]);
    }
})()