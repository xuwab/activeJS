let demo = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*Hello,World!
/* 测试画一个八卦图
*/
#div1{
    border:1px solid red;
    width:200px;
    height: 200px;
}

/* 
/* 先画背景圆
*/
#div1{
border-radius:50%;
box-shadow:0 0 3px rgba(0,0,0,0.5);
border:none;
}
/* 
/* 加上背景颜色
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 
/* 添加两个小圆
*/
#div1::before{
        width:100px;
        height:100px;
        top: 0;
        transform:translateX(50%);
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
        border-radius:50%;
        position: absolute;
  }
  
  #div1::after{
        width:100px;
        height:100px;
        bottom: 0;
        transform:translateX(50%);
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
        border-radius:50%;
        position: absolute;
  }
`;

let index = 0;
let showString = '';
let scrollShow = ()=>{
    setTimeout(()=>{
        if(index < string.length){
            showString += string[index];
            if(string[index]==='\n'){
                showString += `<br>`;
            }else if(string[index]===' '){
                showString += `&nbsp`;
            }
            console.log(showString)
            demo.innerHTML = showString;
            style.innerHTML = string.substring(0,index+1);
            index++;
            window.scrollTo(0,9999);
            demo.scrollTo(0,9999);
            scrollShow();
        }
    },30);
}

scrollShow();

