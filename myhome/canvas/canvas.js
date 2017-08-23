/**
 * Created by Administrator on 2017/3/28.
 */
window.onload=function () {
    class Canvas{
        constructor(paint){
            this.paint=paint;
            this.lineWidth=3;
            this.fillColor='red';
            this.strokeColor='blue';
            this.way='fill';
            this.arrColor=['red','yellow'];
            this.n=3;
            this.radiaR=30;
            this.clear=10;
        }
        //直线
        paintLine(x,y,x1,y1){
            this.paint.beginPath();
            this.paint.lineWidth=this.lineWidth;
            this.paint.strokeStyle=this.strokeColor;
            this.paint.moveTo(x,y);
            this.paint.lineTo(x1,y1);
            this.paint.closePath();
            this.paint.stroke();
        }
        //填充和轮廓矩形
        paintRect(x,y,x1,y1){
            this.paint.beginPath();
            if(this.way=='fill'){
                this.paint.fillStyle=this.fillColor;
                this.paint.fillRect(x,y,x1-x,y1-y);
                this.paint.fill();
            }else {
                this.paint.strokeStyle=this.strokeColor;
                this.paint.lineWidth=this.lineWidth;
                this.paint.strokeRect(x,y,x1-x,y1-y);
                this.paint.stroke();
            }
            this.paint.closePath();
        }
        //渐变矩形
        paintLinearRect(x,y,x1,y1){
            this.paint.beginPath();
            let linear=this.paint.createLinearGradient(x,y,x1,y1);
            linear.addColorStop(0,this.arrColor[0]);
            linear.addColorStop(1,this.arrColor[1]);
            if(this.way=='fill'){
                this.paint.fillStyle=linear;
                this.paint.fillRect(x,y,x1-x,y1-y);
                this.paint.fill();
            }else {
                this.paint.lineWidth=this.lineWidth;
                this.paint.strokeStyle=linear;
                this.paint.strokeRect(x,y,x1-x,y1-y);
            }
            this.paint.closePath();
        }
        //填充和轮廓圆
        paintCircle(x,y,x1,y1){
            this.paint.beginPath();
            let r=Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2));
            this.paint.arc(x,y,r,0,Math.PI*2);
            this.paint.closePath();
            if(this.way=='fill'){
                this.paint.fillStyle=this.fillColor;
                this.paint.fill();
            }else {
                this.paint.strokeStyle=this.strokeColor;
                this.paint.lineWidth=this.lineWidth;
                this.paint.stroke();
            }
        }
        //渐变圆
        paintRadialCircle(x,y,x1,y1){
            this.paint.beginPath();
            let r=Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2));
            let radial=this.paint.createRadialGradient(x,y,0,x,y,r);
            radial.addColorStop(0,this.arrColor[0]);
            radial.addColorStop(1,this.arrColor[1]);
            this.paint.fillStyle=radial;
            this.paint.arc(x,y,r,0,Math.PI*2);
            this.paint.closePath();
            this.paint.fill();
        }
        //填充和轮廓的圆角矩形
        paintCircleRect(x,y,x1,y1){
            this.paint.beginPath();
            let r=this.radiaR;
            this.paint.moveTo(x+r,y);
            this.paint.arcTo(x1,y,x1,y+r,r);
            this.paint.arcTo(x1,y1,x1-r,y1,r);
            this.paint.arcTo(x,y1,x,y1-r,r);
            this.paint.arcTo(x,y,x1,y,r);
            this.paint.closePath();
            if(this.way=='fill'){
                this.paint.fillStyle=this.fillColor;
                this.paint.fill();
            }else {
                this.paint.strokeStyle=this.strokeColor;
                this.paint.lineWidth=this.lineWidth;
                this.paint.stroke();
            }
        }
        //渐变的圆角矩形
        paintLinearCircleRect(x,y,x1,y1){
            this.paint.beginPath();
            let r=this.radiaR;
            this.paint.moveTo(x+r,y);
            this.paint.arcTo(x1,y,x1,y+r,r);
            this.paint.arcTo(x1,y1,x1-r,y1,r);
            this.paint.arcTo(x,y1,x,y1-r,r);
            this.paint.arcTo(x,y,x1,y,r);
            let linear=this.paint.createLinearGradient(x,y,x1,y1);
            linear.addColorStop(0,this.arrColor[0]);
            linear.addColorStop(1,this.arrColor[1]);
            this.paint.fillStyle=linear;
            this.paint.closePath();
            this.paint.fill();
        }
        //多边形
        paintPloy(x,y,x1,y1){
            this.paint.beginPath();
            let ran=360/this.n;
            let r=Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2));
            for(let i=0;i<this.n;i++){
                this.paint.lineTo(x+Math.sin((i*ran+45)*Math.PI/180)*r,y+Math.cos((i*ran+45)*Math.PI/180)*r);
            }
            this.paint.closePath();
            if(this.way=='fill'){
                this.paint.fillStyle=this.fillColor;
                this.paint.fill();
            }else {
                this.paint.strokeStyle=this.strokeColor;
                this.paint.lineWidth=this.lineWidth;
                this.paint.stroke();
            }
        }
        //渐变多边形
        paintLinearPloy(x,y,x1,y1){
            this.paint.beginPath();
            let n=this.n;
            let ran=360/n;
            let r=Math.sqrt(Math.pow(x1-x,2)+Math.pow(y1-y,2));
            for(let i=0;i<n;i++){
                this.paint.lineTo(x+Math.sin((i*ran+45)*Math.PI/180)*r,y+Math.cos((i*ran+45)*Math.PI/180)*r);
            }
            let linear=this.paint.createLinearGradient(x,y,x1,y1);
            linear.addColorStop(0,this.arrColor[0]);
            linear.addColorStop(1,this.arrColor[1]);
            this.paint.fillStyle=linear;
            this.paint.closePath();
            this.paint.fill();
        }
        //擦擦
        paintDel(x,y,x1,y1){
            this.paint.beginPath();
            this.paint.clearRect(x1-5,y1-5,this.clear,this.clear);
            this.paint.closePath();
        }

    }


    //测试
    // let canvas=document.querySelector('canvas');
    // let paint=canvas.getContext('2d');
    // let obj=new Canvas(paint);
    // canvas.onmousedown=function (e) {
    //     let ox = e.offsetX;
    //     let oy = e.offsetY;
    //     canvas.onmousemove = function (e) {
    //         let newox = e.offsetX;
    //         let newoy = e.offsetY;
    //         obj.paintLinearPloy(ox,oy,newox,newoy);
    //     }
    //     canvas.onmouseup=function () {
    //         canvas.onmousemove=null;
    //     }
    // }

    //新建画布
    let newcanvas;
    let arr=[];
    // console.log(typediv);
    let obj;
    let paint;
    //保存当前画的时候在干嘛
    let currentpaint='line';
    //获取新建画布的对象，给其加点击事件
    let newcan=document.querySelector('.new');
    // console.log(newcan);
    newcan.onclick=function () {
        //判断是否有画布
        let canvas=document.querySelectorAll('canvas');
//        console.log(canvas);
        if(canvas.length){
            //有画布，弹出对话框，是否保存
            let result=window.confirm('是否保存当前画布？');
            //保存的话
            if(result){
                //将画布保存成图片格式
                let data=canvas[0].toDataURL('image/png');
                //下载下来
                location.href=data.replace('data:image/png','data:stream/octet');
            }
            //将画布移除页面
            document.body.removeChild(canvas[0]);
        }
        //不管保存与否都要新建画布
        newcanvas=document.createElement('canvas');
        arr=[];
        // console.log(newcanvas);
        //新画布的边框
        newcanvas.style.border='1px solid #ccc';
        newcanvas.style.marginLeft='64px';
        //宽高
        newcanvas.width=800;
        newcanvas.height=400;
        //获取画笔
        paint=newcanvas.getContext('2d');
        //实例化一个canvas对象
        obj=new Canvas(paint);
        //鼠标点击事件
        newcanvas.onmousedown=function (e) {
            e.preventDefault();
            let ox = e.offsetX;
            let oy = e.offsetY;
            newcanvas.onmousemove = function (e) {
                let newox = e.offsetX;
                let newoy = e.offsetY;
                //如果不是擦除函数就清空画布
                if(currentpaint!='del'){
                    paint.clearRect(0,0,newcanvas.width,newcanvas.height);
                    if(arr.length>0) {
                        paint.putImageData(arr[arr.length - 1], 0, 0);
                    }
                    switch (currentpaint){
                        case 'line':
                            obj.paintLine(ox,oy,newox,newoy);
                            break;
                        case 'rect':
                            obj.paintRect(ox,oy,newox,newoy);
                            break;
                        case 'linearRect':
                            obj.paintLinearRect(ox,oy,newox,newoy);
                            break;
                        case 'circle':
                            obj.paintCircle(ox,oy,newox,newoy);
                            break;
                        case 'radialCircle':
                            obj.paintRadialCircle(ox,oy,newox,newoy);
                            break;
                        case 'circleRect':
                            obj.paintCircleRect(ox,oy,newox,newoy);
                            break;
                        case 'linearCircleRect':
                            obj.paintLinearCircleRect(ox,oy,newox,newoy);
                            break;
                        case 'ploy':
                            obj.paintPloy(ox,oy,newox,newoy);
                            break;
                    }
                }else {
                    obj.paintDel(ox,oy,newox,newoy);
                }
            };
            newcanvas.onmouseup=function () {
                //保存上一次画布所有的像素点信息
                arr.push(paint.getImageData(0,0,newcanvas.width,newcanvas.height));
                newcanvas.onmousemove=null;
            };
        }
        //将新画布加入页面
        document.body.appendChild(newcanvas);
        //画的功能
        let draw=document.querySelectorAll('.head div:nth-child(2) div[type]');
        draw.forEach((val,index,arr)=>{
            //每个div都给个点击事件
            val.onclick=function () {
                //移除所有的选中状态
                arr.forEach((obj)=>{
                    obj.classList.remove('active');
                })
                // for(let i=0;i<draw.length;i++){
                //     draw[i].classList.remove('active');
                // }
                val.classList.add('active');
                currentpaint=val.getAttribute('type');
            }
        });
        //填充色和轮廓色
        let color=document.querySelectorAll('.head > div:nth-child(3) input');
        color.forEach((val,index,arr)=>{
            val.onchange=function () {//！！！这里是颜色改变就获取值
                if(index==0){
                    console.log(val.value);
                    obj.fillColor=val.value;
                }
                if(index==1){
                    obj.strokeColor=val.value;
                }
            }
        })
        //填充和轮廓
        let way=document.querySelectorAll('.head > div:nth-child(5) div');
        // console.log(way);
        way.forEach((val,index,arr)=>{
            val.onclick=function () {
                //移除所有的选中状态
                arr.forEach((obj)=>{
                    obj.classList.remove('active');
                })
                val.classList.add('active');
                // console.log(val.getAttribute('type'));
                obj.way=val.getAttribute('type');
            }
        });
        //渐变色
        let wearcolor=document.querySelectorAll('.head > div:nth-child(4) input');
        wearcolor.forEach((val,index,arr)=>{
            val.onchange=function () {
                if(index==0){
                    obj.arrColor[0]=val.value;
                }else if(index==1){
                    obj.arrColor[1]=val.value;
                }
            }
        })
        //其他 线宽，圆角矩形半径，多边形的边数，擦除宽度
        let other=document.querySelectorAll('.head > div:last-child input');
        other.forEach((val,index,arr)=>{
            console.log(val.className);
            val.onchange=function () {
                obj[val.className]=parseInt(val.value);
            }
        })
        //撤销
        let repeal=document.querySelector('.repeal');
        repeal.onclick=function () {
            // repeal.classList.add('active');
            arr.pop();
            if(arr.length<1){
                alert('我们已经帮您清空画布了~请继续作画吧！');
                paint.clearRect(0,0,newcanvas.width,newcanvas.height);
            }else {
                paint.putImageData(arr[arr.length-1],0,0);
            }
        }

    }
    //实现保存功能
    let save=document.querySelector('.save');
    save.onclick=function () {
        //判断是否有画布
        canvas=document.querySelectorAll('canvas');
        if(canvas.length){
            //将画布保存成图片格式
            let data=canvas[0].toDataURL('image/png');
            //下载下来
            location.href=data.replace('data:image/png','data:stream/octet');
        }
    }


    // let wearcolor=document.querySelectorAll('.head > div:nth-child(4) input');
    // console.log(1);
    // console.log(wearcolor);

}
