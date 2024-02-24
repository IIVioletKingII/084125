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

	view: {
		browserHistory: true,
		browserHistorySeparator: "#", // #app
	},
	on: {
		init: function () {
			onAfterInit(this);
		}
	},
});

function onAfterInit($f7) {

	// let hash = window.location.hash;
	// console.log('hash', hash, $f7.views);
	// if (hash.length > 0 && hash.startsWith('#')) {
	// 	let page = hash.substring(0);

	// }
	// $f7.views.main.router.navigate('/');
	$f7.mainView = $f7.views.create('.view-main', {
		url: '/',
		props: {
			test: 'testing'
		}
	});
	$f7.mainView.router.navigate('/#/');

	$f7.$(document).on('page:afterin', () => {
		let $store = $f7.store;
		// console.log('test', $store.state.firstLoad);
		$store.dispatch('onLoad', '/');
	});

	console.log('%cHeyyy what are you doing here??', 'color: cyan;');
}


window.removeCookie = (cookie) => {
	// console.log('removie cookie', cookie, 'from', document.cookie);
	document.cookie = `${cookie}=; expires=${new Date().toUTCString()}`
}

window.setCookie = (key, value, expireDays) => {

	let time = new Date(new Date().getTime() + expireDays * 24 * 60 * 60 * 1000);
	// console.log('set cookie', { key: key, value: value, time: time.toString() });
	document.cookie = `${key}=${value}; expires=${time.toUTCString()}; path=/`;
}

window.splitCookies = (cookies) => {
	cookies = cookies.split(/; ?/)
	let cookieOb = {};
	for (const cookie of cookies) {
		let params = cookie.split('=');
		if (params.length == 2)
			cookieOb[params[0]] = params[1]
	}
	return cookieOb;
}