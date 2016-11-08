import React, { Component } from 'react';

export class Documentation extends Component {
	
	render() {
		return (
			<div>
				<h1 className="bump-text">Documentation & Tasks</h1>
				<h2>Project tasks:</h2>
				<ol>
				  <li>*ALL* Get some coffee</li>
				  <li>*CSS* Improve the color scheme and prettify the page.</li>
				  <li>*CSS* Make table-head fixed and scrollbar so it only scrolls the table-body.</li>
				  <li>*CSS* Make page responsive.</li>
				  <li>*REACT/CSS* If device screen is large enough show sidebar as open at all times.</li>
				  <li>*REACT* Store table's data somewhere so it only needs to be loaded once.</li>
				  <li>*REACT* Make loading screen work without it depending on the route.</li>
				  <li>*REACT* Improve the routing (no random hash).</li>
				  <li>*REACT* Add percentage for the loading bar.</li>
				  <li>*THREEJS* Loading screen camera rework.</li>
				  <li>*THREEJS* Add some terrain to loading screen.</li>
				</ol>
				<h2>Optional tasks:</h2>
				<a href="http://learningthreejs.com/blog/2013/09/16/how-to-make-the-earth-in-webgl/">Make your own three.js project.</a>
				<h2>Documentation:</h2>
				<span>Three.js:</span>
				<a href="https://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene">Three.js</a>
				<span>React:</span>
				<a href="https://facebook.github.io/react/docs/thinking-in-react.html">Thinking in React</a>
				<span>Packages:</span>
				<a href="https://github.com/ReactTraining/react-router">React Router</a>
				<a href="https://github.com/malte-wessel/react-custom-scrollbars">React Custom Scrollbars</a>

			</div>
		);
	}
}
