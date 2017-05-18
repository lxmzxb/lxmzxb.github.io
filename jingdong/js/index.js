// function move_function(container, con,  pre ,next){

//     function mi_move(){
//     // 移走当前图片
//     con[mi_num1].classList.add("leftOut");

//     mi_num1++;

//     if(mi_num1==con.length){
//       mi_num1=0;
//     }

//     con[mi_num1].classList.add("leftIn")//后一张
//     con[mi_num1].style.zIndex=miindex++;

//   }

//    Array.from(con).forEach(function(ele,index){
//     ele.addEventListener("animationend",function(){
//       ele.className="inner_c";
//       flag=true;
//     })
//   })

//   next.onclick=function(){
    

//     if(flag){
//       flag=false;
//       con[mi_num1].classList.add("rightOut");

      
//       mi_num1--;
//       if(mi_num1==-1){
//         mi_num1=con.length-1;
//       }
//       con[mi_num1].classList.add("rightIn");
//       con[mi_num1].style.zIndex=miindex++;

      
//     }
//   }

//   pre.onclick=function(){
//     if(flag){
//       flag=false;
//       mi_move();
//     }

//   } 
// }
//   var mi_box2=document.querySelector(".b_logo_box");//当前得外面大盒子
//   var inn2=document.querySelector(".b_logo_box .b_logo ")//li大盒子
//   var mipre2=mi_box2.querySelector(".live .prebtn_b ");
//   var minext2=mi_box2.querySelector(".live .nextbtn_b ");
//   var neirong2=inn2.querySelectorAll(".b_logo li");

//   move_function(mi_box2,neirong2, mipre2,minext2)