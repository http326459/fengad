
//蒙版 
function modal_hy(){
	var modal=document.createElement('div');
	modal.id="b_modal";
	modal.className="modal";
	document.body.appendChild(modal);
}
//登录框
function dlkjyle(){
	//蒙版层
	modal_hy();
	
	var modal=document.getElementById('b_modal');
	
	//支付框架
	var bof=document.createElement('div');
	bof.id = "box";
	bof.className = "box";
	var html='<h3><span><img src="images/tankuang.png"></span>温馨提示</h3>'+
    '<a href="#" id="close"><img src="images/cha.png"></a>'+
    '<div class="bot"><p>由于保险属于第三方销售，如有疑问请联系第<br>三方客服。客服电话 </p>'+
    '<p><img src="images/daixuankuang.png" id="gouxuan">我同意<a href="#" id="xieyi">《车保汇用户支付协议》</a></p>'+
    '<button type="button" class="btn" id="">去支付</button></div>';
	bof.innerHTML=html;
	document.body.appendChild(bof);
	
	//选取
	var box=document.getElementById('box');
	var close=document.getElementById('close');
	var xieyi=document.getElementById('xieyi');
	var xieyi=document.getElementById('xieyi');
	var gouxuan = document.getElementById("gouxuan");
	var onoff = true;
	gouxuan.onclick = function(){
		if(onoff){
			gouxuan.setAttribute('src','images/xuanzhong.png');
			onoff = false;
		}else{
			gouxuan.setAttribute('src','images/daixuankuang.png');
			onoff = true;
		}
		
	}
	/*var title=document.getElementsByTagName('h3')[0];
	but.onclick=function(){
			oDiv1.style.display="block";
			box.style.display="block";
	}

	var se=document.getElementById('close');
	se.onclick=function(){
		oDiv1.style.display="none";
		box.style.display="none";	
	}*/
	modal.style.display="block";
	box.style.display="block";
	close.onclick=function(){
		document.body.removeChild(modal);
		
		document.body.removeChild(bof);		
	}
	xieyi.onclick = function(){
		document.body.removeChild(modal);		
		document.body.removeChild(bof);	
		yyckd();
	}
}


function yyckd(){
	//蒙版层
	modal_hy();
	
	var modal=document.getElementById('b_modal');
	
	// 协议框架
	var boxt=document.createElement('div');
	boxt.id = "box";
	boxt.className = "box";
	var html='<h3><span><img src="images/tankuang.png"></span>温馨提示</h3>'+
    '<div class="bty"><p>由于保险属于第三方销售，如有疑问请联系第三方客服客服电话 023-36498745由于保险属于第三方销售，如有疑问请联系第三方客服客服电话 023-36498745由于保险属于第三方销售，如有疑问请联系第三方客服客服电话 023-36498745由于保险属于第三方销售，如有疑问请联系第三方客服客服电话 023-36498745</p>'+
    '<p>由于保险属于第三方销售，如有疑问请联系第三方客服客服电话 023-36498745由于保险属于第三方销售，如有疑问请联系第三方客服客服电话 023-36498745由于保险属于第三方销售，如有疑问请联系第三方客服客服电话 023-36498745由于保险属于第三方销售，如有疑问请联系第三方客服客服电话 023-36498745</p>'+
    '<p>由于保险属于第三方销售，如有疑问请联系第三方客服客服电话 023-36498745由于保险属于第三方销售，如有疑问请联系第三方客服客服电话 023-36498745由于保险属于第三方销售，如有疑问请联系第三方客服客服电话 023-36498745由于保险属于第三方销售，如有疑问请联系第三方客服客服电话 023-36498745</p>'+
    '<button type="button" class="btn" id="btn">确定</button></div>';
	boxt.innerHTML=html;
	document.body.appendChild(boxt);
	
	//选取
	var boyx=document.getElementById('box');
	var close=document.getElementById('btn');
	var title=document.getElementsByTagName('h3')[0];
	/*but.onclick=function(){
			oDiv1.style.display="block";
			box.style.display="block";
	}

	var se=document.getElementById('close');
	se.onclick=function(){
		oDiv1.style.display="none";
		box.style.display="none";	
	}*/
	modal.style.display="block";
	boyx.style.display="block";
	
	close.onclick=function(){
		document.body.removeChild(modal);
		
		document.body.removeChild(boxt);
	}
}