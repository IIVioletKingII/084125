
import HeroPage from '../pages/newHero.f7';
import ConnectFourGame from '../pages/connectFour.f7';
import PictureEditor from '../pages/pictureEditor.f7';

import NotFoundPage from '../pages/404.f7';

const routes = [
	{
		path: '/',
		component: HeroPage, // HomePage,
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
		path: '(.*)',
		component: NotFoundPage,
	},
];

export default routes;