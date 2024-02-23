


import HomePage from '../pages/home.f7';
import HeroPage from '../pages/newHero.f7';
// import AboutPage from '../pages/about.f7';
import PicturesPage from '../pages/pictures.f7';
import ResumePage from '../pages/resume.f7';
import PictureEditor from '../pages/pictureEditor.f7';
import ConnectFourGame from '../pages/connectFour.f7';

import SettingsPage from '../pages/settings.f7';

import NotFoundPage from '../pages/404.f7';

var routes = [
	{
		path: '/',
		component: HeroPage,//HomePage,
		// tabs: [
		// 	{
		// 		path: '',
		// 		id: 'hero',
		// 		component: HeroPage
		// 	},
		// 	{
		// 		path: 'about/',
		// 		id: 'about',
		// 		component: AboutPage
		// 	},
		// 	{
		// 		path: 'pictures/',
		// 		id: 'pictures',
		// 		component: PicturesPage,
		// 		routes: [
		// 			{
		// 				path: '/:pictureId/'
		// 			}
		// 		]
		// 	},
		// 	{
		// 		path: 'resume/',
		// 		id: 'resume',
		// 		component: ResumePage
		// 	},
		// ],
	},
	{
		path: '/picture-editor/',
		component: PictureEditor
	},
	{
		path: '/connect-four/',
		component: ConnectFourGame
	},
	{
		path: '/settings/',
		component: SettingsPage,
		options: {

		}
	},

	// {
	// 	path: '/dynamic-route/blog/:blogId/post/:postId/',
	// 	component: DynamicRoutePage,
	// },
	// {
	// 	path: '/request-and-load/user/:userId/',
	// 	async: function ({ router, to, resolve }) {
	// 		// App instance
	// 		var app = router.app;

	// 		// Show Preloader
	// 		app.preloader.show();

	// 		// User ID from request
	// 		var userId = to.params.userId;

	// 		// Simulate Ajax Request
	// 		setTimeout(function () {
	// 			// We got user data from request
	// 			var user = {
	// 				firstName: 'Vladimir',
	// 				lastName: 'Kharlampidi',
	// 				about: 'Hello, i am creator of Framework7! Hope you like it!',
	// 				links: [
	// 					{
	// 						title: 'Framework7 Website',
	// 						url: 'http://framework7.io',
	// 					},
	// 					{
	// 						title: 'Framework7 Forum',
	// 						url: 'http://forum.framework7.io',
	// 					},
	// 				]
	// 			};
	// 			// Hide Preloader
	// 			app.preloader.hide();

	// 			// Resolve route to load page
	// 			resolve(
	// 				{
	// 					component: RequestAndLoad,
	// 				},
	// 				{
	// 					props: {
	// 						user: user,
	// 					}
	// 				}
	// 			);
	// 		}, 1000);
	// 	},
	// },
	{
		path: '(.*)',
		component: NotFoundPage,
	},
];

export default routes;