


// import HomePage from '../pages/home.f7';
import HeroPage from '../pages/newHero.f7';
// import AboutPage from '../pages/about.f7';
// import PicturesPage from '../pages/pictures.f7';
// import ResumePage from '../pages/resume.f7';
import PictureEditor from '../pages/pictureEditor.f7';
import ConnectFourGame from '../pages/connectFour.f7';

import SettingsPage from '../pages/settings.f7';

import NotFoundPage from '../pages/404.f7';

var routes = [
	{
		path: '/',
		component: HeroPage, // HomePage,
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
		component: SettingsPage
	},
	{
		path: '(.*)',
		component: NotFoundPage,
	},
];

export default routes;