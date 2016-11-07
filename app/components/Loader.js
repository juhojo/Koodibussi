import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Line } from 'rc-progress';
const THREE = require('three'); //Ei toimi suoraan importilla, ei löytyny netistä suoraan, millä nimellä se pitäis importtaa

export default class Loader extends Component {

	constructor() {
		super();
		this.nextFrame = null;
	}

	windowResize(){
		const elem=ReactDOM.findDOMNode(this.refs.box);
		this.camera = new THREE.PerspectiveCamera(75, elem.offsetWidth/elem.offsetHeight, 1, 10000);
		this.camera.position.z = 1000;
		this.renderer.setSize(elem.offsetWidth, elem.offsetHeight);
	}

	animate(){
		this.nextFrame = requestAnimationFrame(this.animate.bind(this));
		this.mesh.rotation.x += 0.01;
		this.mesh.rotation.y += 0.02;
		this.renderer.render(this.scene, this.camera);
	}

	init(elem){
		this.scene    = new THREE.Scene();
		this.camera   = new THREE.PerspectiveCamera(50, elem.offsetWidth/elem.offsetHeight, 1, 10000);
		this.geometry = new THREE.BoxGeometry(300, 300, 300);
		this.material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
		this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
		this.mesh     = new THREE.Mesh(this.geometry, this.material);

		this.camera.position.z = 1000;
		this.scene.add(this.mesh);
		this.renderer.setSize(elem.offsetWidth, elem.offsetHeight);

		elem.appendChild(this.renderer.domElement);
		this.animate.call(this);
	}

	stop(){
		if(this.nextFrame) cancelAnimationFrame(this.nextFrame);
	}

	componentDidMount(){
		this.init(ReactDOM.findDOMNode(this.refs.box));
		window.addEventListener('resize', this.windowResize.bind(this));
	}

	componentWillUnmount(){
		this.stop.call(this);
		window.removeEventListener('resize', this.windowResize.bind(this));
	}

	render() {
		const { percentage } = this.props;
		return (
			<div className="loader">
				<div className="loader-background" />
				<div className="loader-content">
					<div ref='box' className="three"/>
					<div className="loading-bar">
						<Line percent={ percentage.toString() } strokeWidth="1" strokeColor="#fff" />
					</div>
				</div>
			</div>
		);
	}
}

React.propTypes = {
	percentage: React.PropTypes.number,
}