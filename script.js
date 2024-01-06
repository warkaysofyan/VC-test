const options = {
	height: 600,
	width: 600,
	backgroundColor: 'rgb(171, 142, 142)',
}
let canvas = new fabric.Canvas('cvs', options)
let circle = new fabric.Circle({
	radius: 10,
	fill: '#43D9AD',
	originX: 'center',
	originY: 'center',
	top: options.height / 2,
	left: options.width / 2,
})

let background = new fabric.Rect({
	height: options.height,
	width: options.width,
	fill: 'rgba(171, 142, 0,0)',
})
let commanOptionsBetweenLines = {
	strokeWidth: 5,
	selectable: false,
	evented: false,
	originX: 'left',
	originY: 'top',
	left: 300,
	top: 300,
	//angle: -135,
}

let getDate = () => {
	let dates = new Date()
	return [dates.getSeconds(), dates.getMinutes(), dates.getHours()]
}

let line = new fabric.Line([300, 300, 450, 450], {
	stroke: 'green',
	...commanOptionsBetweenLines,
	angle: -135 + (354 / 59) * getDate()[0],
})
let line1 = new fabric.Line([300, 300, 425, 425], {
	stroke: 'red',
	...commanOptionsBetweenLines,
	angle: -135 + (354 / 59) * getDate()[1],
})
let line2 = new fabric.Line([300, 300, 400, 400], {
	stroke: 'blue',
	...commanOptionsBetweenLines,
	angle: -135 + (354 / 11) * getDate()[2],
})

function animate() {
	let X = 1000
	line.set({ angle: line.angle + (X * 90) / 15000 })
	canvas.renderAll()
}

function setClock() {
	//line.set({ angle: line.angle + (354 / 59) * getDate()[0] })
	line.set({ angle: line.angle + (1000 * 90) / 15000 })

	//line1.set({ angle: line1.angle + (354 / 59) * getDate()[1] })
	line1.set({ angle: line1.angle + (1000 * 90) / 15000 / 59 })

	//line2.set({ angle: line2.angle + (354 / 11) * getDate()[2] })
	line2.set({ angle: line2.angle + (1000 * 90) / 15000 / 60 / 12 })

	canvas.renderAll()
	console.log(getDate()[2])
}

window.addEventListener('load', () => {
	let X = 1000
	setClock()
	//let iter = setInterval(animate, X)
	setInterval(setClock, 1000)
})
let data =
	'https://w7.pngwing.com/pngs/449/884/png-transparent-clock-face-digital-clock-time-clock-angle-white-monochrome-thumbnail.png'

fabric.Image.fromURL(data, function (img) {
	canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
		scaleX: canvas.width / img.width,
		scaleY: canvas.height / img.height,
	})
	canvas.renderAll()
})

let group = new fabric.Group([background, circle, line, line1, line2], {
	height: canvas.height,
	width: canvas.width,
	selectable: false,
})

canvas.add(group)
