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
	fill: 'rgb(171, 142, 0)',
})

let line = new fabric.Line([300, 300, 500, 500], {
	stroke: 'linear-gradient(90deg, rgba(0,0,0,1) 54%, rgba(51,144,63,1) 54%)',
	strokeWidth: 5,
	selectable: false,
	evented: false,
	originX: 'left',
	originY: 'top',
	left: 300,
	top: 300,
	angle: -135,
})
let getSecs = () => {
	let dates = new Date()
	return dates.getSeconds()
}

function animate() {
	let X = 1000
	line.set({ angle: line.angle + (X * 90) / 15000 })
	canvas.renderAll()
}

document.onload = () => {
	let X = 1000
	line.set({ angle: line.angle + (354 / 59) * getSecs() })
	let iter = setInterval(animate, X)
}
window.addEventListener('load', () => {
	let X = 1000
	line.set({ angle: line.angle + (354 / 59) * getSecs() })
	let iter = setInterval(animate, X)
})

let X = 0
let Y = 0

let group = new fabric.Group([background, circle, line], {
	height: canvas.height,
	width: canvas.width,
	selectable: false,
})

canvas.add(group)
//console.log(group._objects)
