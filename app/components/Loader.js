import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Line } from 'rc-progress';
const THREE = require('three'); // Did not work with import.
const ColladaLoader = require('three-collada-loader');

export default class Loader extends Component {

	constructor() {
		super();
		this.nextFrame = null;

		this.windowResize = this.windowResize.bind(this);
	}

	windowResize(){
		const elem = ReactDOM.findDOMNode(this.refs.box);
		this.camera = new THREE.PerspectiveCamera(75, elem.offsetWidth/elem.offsetHeight, 1, 1000);
		this.camera.position.z = 1000;
		this.renderer.setSize(elem.offsetWidth, elem.offsetHeight);
	}

	animate(){
		this.nextFrame = requestAnimationFrame(this.animate.bind(this));
		this.model.rotation.z -= 0.01;
		this.renderer.render(this.scene, this.camera);
	}

	init(elem){
		this.scene     = new THREE.Scene();
		this.scene.fog = new THREE.Fog(0xffffff, .5, 12);
		this.camera    = new THREE.PerspectiveCamera(75, elem.offsetWidth/elem.offsetHeight, .1, 1000);
		this.renderer  = new THREE.WebGLRenderer({alpha: true, antialias: true});
		this.lightOne  = new THREE.DirectionalLight( 0xffffff, 1.1, -400);
		this.lightTwo  = new THREE.DirectionalLight( 0xffffff, 1.1, -400);
		this.loader    = new ColladaLoader();
		
    this.scene.fog.color.setHSL( 0.51, 0.6, 0.6 );
		this.camera.position.set(8,1,4);
		this.camera.up = new THREE.Vector3(0,0,1);
		this.camera.lookAt(new THREE.Vector3(0,0,0));
		this.lightOne.position.set(.3, .5, .3);
		this.lightTwo.position.set(-.3, -.5, -.3);

		this.loader.load('../models/bus.dae', (collada) => {
			this.model = collada.scene;
			this.scene.add(this.lightOne, this.lightTwo, this.model);
			this.renderer.setSize(elem.offsetWidth, elem.offsetHeight);
			elem.appendChild(this.renderer.domElement);
			this.animate.call(this);
		});
		
		// this.geometry = new THREE.BoxGeometry(300, 300, 300);
		// this.material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
		// this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
		// this.mesh     = new THREE.Mesh(this.geometry, this.material);

		// this.camera.position.z = 10;
		// this.scene.add(this.mesh);
		// this.renderer.setSize(elem.offsetWidth, elem.offsetHeight);

		// elem.appendChild(this.renderer.domElement);
		// this.animate.call(this);
	}

	stop(){
		if (this.nextFrame) cancelAnimationFrame(this.nextFrame);
	}

	componentDidMount(){
		this.init(ReactDOM.findDOMNode(this.refs.box));
		window.addEventListener('resize', this.windowResize);
	}

	componentWillUnmount(){
		this.stop.call(this);
		window.removeEventListener('resize', this.windowResize);
	}

	render() {
		const { percentage } = this.props;
		return (
			<div className="loader">
				<div className="loader-background" />
				<div className="loader-content">
					<div ref='box' className="three"/>
					<div className="loading-bar">
						<Line percent={ percentage.toString() } strokeWidth="1" strokeColor="#aaa" />
					</div>
				</div>
			</div>
		);
	}
}

React.propTypes = {
	percentage: React.PropTypes.number,
}