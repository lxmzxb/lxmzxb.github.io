/**
 * Created by Administrator on 2017/4/4.
 */
$(function () {
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
    //新建画布
    let newcanvas;
    let arr=[];
    // console.log(typediv);
    let obj;
    let paint;
    //保存当前画的时候在干嘛
    let currentpaint='line';
    //获取新建画布的对象，给其加点击事件
    $('.new').on('click',function () {
        //判断是否有画布
        let canvas=$('canvas');
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
            canvas[0].remove();
        }
        //不管保存与否都要新建画布
        newcanvas=$('<canvas height="400" width="800"></canvas>');
        // console.log(newcanvas[0]);
        arr=[];
        // console.log(newcanvas);
        //新画布的边框、宽高;
        newcanvas.css({border:'1px solid #ccc',marginLeft:64});
        //将新画布加入页面
        $(document.body).append(newcanvas);
        //获取画笔
        paint=newcanvas[0].getContext('2d');
        //实例化一个canvas对象
        obj=new Canvas(paint);
        //鼠标点击事件
        newcanvas.on('mousedown',function (event) {
            console.log(2);
            event.preventDefault();
            let ox = event.offsetX;
            let oy = event.offsetY;
            newcanvas.on('mousemove',function (event) {
                event.preventDefault();
                let newox = event.offsetX;
                let newoy = event.offsetY;
                //如果不是擦除函数就清空画布
                if(currentpaint!='del'){
                    paint.clearRect(0,0,newcanvas[0].width,newcanvas[0].height);
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
            });
            newcanvas.mouseup(function () {
                //保存上一次画布所有的像素点信息
                console.log(1);
                arr.push(paint.getImageData(0,0,newcanvas[0].width,newcanvas[0].height));
                console.log(arr);
                newcanvas.off('mousemove');
                newcanvas.off('mouseup');
            });
        });
        //画的功能
        let draw=$('.head div:nth-child(2) div[type]');
        draw.each((index,val)=>{
            //每个div都给个点击事件
            $(val).click(function () {
                //移除所有的选中状态
                draw.each((index,value)=>{
                    $(value).removeClass('active')
                });
                val.classList.add('active');
                currentpaint=val.getAttribute('type');
            })
        });
        //填充色和轮廓色
        let color=$('.head > div:nth-child(3) input');
        color.each((index,val)=>{
            $(val).change(function () {//！！！这里是颜色改变就获取值
                if(index==0){
                    obj.fillColor=val.value;
                }
                if(index==1){
                    obj.strokeColor=val.value;
                }
            })
        });
        //填充和轮廓
        let way=$('.head > div:nth-child(5) div');
        // console.log(way);
        way.each((index,val)=>{
            $(val).click(function () {
                //移除所有的选中状态
                way.each((index,value)=>{
                    $(value).removeClass('active')
                });
                val.classList.add('active');
                // console.log(val.getAttribute('type'));
                obj.way=val.getAttribute('type');
            });
        });
        //渐变色
        let wearcolor=$('.head > div:nth-child(4) input');
        wearcolor.each((index,val)=>{
            $(val).change(function () {
                if(index==0){
                    obj.arrColor[0]=val.value;
                }else if(index==1){
                    obj.arrColor[1]=val.value;
                }
            })
        });
        //其他 线宽，圆角矩形半径，多边形的边数，擦除宽度
        let other=$('.head > div:last-child input');
        other.each((index,val)=>{
            $(val).change(function () {
                obj[val.className]=parseInt(val.value);
            })
        });
        //撤销
        $('.repeal').click(function (e) {
            // repeal.classList.add('active');
            // console.log(e.target,arr);
            arr.pop();
            if(arr.length<1){
                alert('我们已经帮您清空画布了~请继续作画吧！');
                paint.clearRect(0,0,newcanvas[0].width,newcanvas[0].height);
            }else {
                paint.putImageData(arr[arr.length-1],0,0);
            }
        })
    });
    //实现保存功能
    $('.save').click(function () {
        //判断是否有画布
        if($('canvas').length){
            //将画布保存成图片格式
            let data=$('canvas')[0].toDataURL('image/png');
            //下载下来
            location.href=data.replace('data:image/png','data:stream/octet');
        }
    })

});
