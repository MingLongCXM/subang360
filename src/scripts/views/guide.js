require('../lib/swiper-3.3.1.min.js')
var guideTpl = require('../tpl/guide.string')

SPA.defineView('index',{		//defineView方法定义视图
	html:guideTpl,
	bindEvents:{
		beforeShow:function(){
			var mySwiper = new Swiper('#guide-swiper',{
				loop:false
			});
		}
	}
	
	
});
