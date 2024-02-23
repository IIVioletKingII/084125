


// import HomePage from '../pages/home.f7';
import HeroPage from '../pages/newHero.f7';
// import AboutPage from '../pages/about.f7';
// import PicturesPage from '../pages/pictures.f7';
// import ResumePage from '../pages/resume.f7';
import PictureEditor from '../pages/pictureEditor.f7';

import SettingsPage from '../pages/settings.f7';

import NotFoundPage from '../pages/404.f7';

let routes = [
	{
		path: '/',
		component: HeroPage, // HomePage,
	},
	{
		path: '/picture-editor/',
		component: PictureEditor
	},
	{
		path: '/settings/',
		component: SettingsPage,
		options: {

		}
	},
	{
		path: '(.*)',
		component: NotFoundPage,
	},
];

export default routes;