var arr2 = [
	{
		'name':'热门',
		'data':[
			{
			'src':'images/remen.jpg',
			'title':'米家互联网洗烘一体机10kg',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/remen.jpg',
			'title':'米家互联网洗烘一体机10kg',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/remen.jpg',
			'title':'米家互联网洗烘一体机10kg',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/remen.jpg',
			'title':'米家互联网洗烘一体机10kg',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/remen.jpg',
			'title':'米家互联网洗烘一体机10kg',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/remen.jpg',
			'title':'米家互联网洗烘一体机10kg',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/remen.jpg',
			'title':'米家互联网洗烘一体机10kg',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/remen.jpg',
			'title':'米家互联网洗烘一体机10kg',
			'price':'2199元',
			'assess':'评价'
		}
		]
	},
	{
		'name':'电视影音',
		'data':[
				{
				'src':'images/电视影音.jpg',
				'title':'小米全面屏电视E55A',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/电视影音.jpg',
				'title':'小米全面屏电视E55A',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/电视影音.jpg',
				'title':'小米全面屏电视E55A',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/电视影音.jpg',
				'title':'小米全面屏电视E55A',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/电视影音.jpg',
				'title':'小米全面屏电视E55A',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/电视影音.jpg',
				'title':'小米全面屏电视E55A',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/电视影音.jpg',
				'title':'小米全面屏电视E55A',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/电视影音.jpg',
				'title':'小米全面屏电视E55A',
				'price':'2199元',
				'assess':'评价'
			}
			]
	},
	{
		'name':'电脑',
		'data':[
			{
			'src':'images/电脑.jpg',
			'title':'15.6 Pro i5 8G 1050MAX-Q 256G',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/电脑.jpg',
			'title':'15.6 Pro i5 8G 1050MAX-Q 256G',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/电脑.jpg',
			'title':'15.6 Pro i5 8G 1050MAX-Q 256G',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/电脑.jpg',
			'title':'15.6 Pro i5 8G 1050MAX-Q 256G',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/电脑.jpg',
			'title':'15.6 Pro i5 8G 1050MAX-Q 256G',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/电脑.jpg',
			'title':'15.6 Pro i5 8G 1050MAX-Q 256G',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/电脑.jpg',
			'title':'15.6 Pro i5 8G 1050MAX-Q 256G',
			'price':'2199元',
			'assess':'评价'
		},
		{
			'src':'images/电脑.jpg',
			'title':'15.6 Pro i5 8G 1050MAX-Q 256G',
			'price':'2199元',
			'assess':'评价'
		}
		]
	},
	{
		'name':'家居',
		'data':[
				{
				'src':'images/家居.jpg',
				'title':'米家恒温电水壶',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/家居.jpg',
				'title':'米家恒温电水壶',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/家居.jpg',
				'title':'米家恒温电水壶',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/家居.jpg',
				'title':'米家恒温电水壶',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/家居.jpg',
				'title':'米家恒温电水壶',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/家居.jpg',
				'title':'米家恒温电水壶',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/家居.jpg',
				'title':'米家恒温电水壶',
				'price':'2199元',
				'assess':'评价'
			},
			{
				'src':'images/家居.jpg',
				'title':'米家恒温电水壶',
				'price':'2199元',
				'assess':'评价'
			}
			]
	}
]

var jiadian = document.querySelectorAll('.more>ul>li')
for(var i = 0;i<jiadian.length;i++){
	var jia = jiadian[i]
	jia.index = i
	jia.onmouseenter = function(event){
		document.querySelector('.more .tab-active').classList.remove('tab-active')
		// console.log(event)
		event.target.classList.add('tab-active')
		var ij = event.target.index
		// console.log(ij)
		var data = arr2[ij].data
		var right = document.querySelectorAll('.tupian>a')
		for(var i=0;i<right.length;i++){
			var rig = right[i]
			// console.log(rig)
			rig.innerHTML = ''
			var img = document.createElement('img')
			img.src = data[i].src
			rig.appendChild(img)
		}
		var title = document.querySelectorAll('.name')
		for(var i =0;i<title.length;i++){
			var name = title[i]
			name.innerText = ''
			name.innerText=data[i].title
			// console.log(name)
		}
	}
}
// var yinying = document.querySelector('.more>ul>li')
// yinying.onmouseenter(function(event){
// 	console.log(event)
// 	// event.target.classList.add('yinying')
// })