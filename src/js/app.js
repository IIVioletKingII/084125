import $ from 'dom7';
import Framework7 from 'framework7/bundle';

// Import F7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.scss';

import Cropper from 'cropperjs';
window.Cropper = Cropper;

// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7';


var app = new Framework7({
	name: 'Sam-DePoule', // App name
	theme: 'auto', // Automatic theme detection
	el: '#app', // App root element
	component: App, // App main component

	darkMode: 'auto',
	// App store
	store: store,
	// App routes
	routes: routes,

	autoDarkMode: true,
	// darkModeChange: true,

	view: {
		browserHistory: true,
		browserHistorySeparator: "#app", // #app
	},

	serviceWorker: process.env.NODE_ENV === 'production' ? {
		path: '/service-worker.js',
	} : {},
});