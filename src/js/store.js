
import { createStore } from 'framework7';

const store = createStore({
	state: {
		resumeSections: [
			{
				sectionTitle: 'Education',
				sections: 2,
				tiles: [
					{
						icon: 'fa-solid fa-graduation-cap',
						title: 'Hazen High School',
						subtitles: [
							'Renton • September 2020 - June 2023',
							'GPA: 3.9',
						],
						detailsListColumns: 2,
						detailsList: [
							'AP Physics',
							'AP Computer Science',
							'Program Solving',
							'Trigonometry',
							'Networking I-III',
							"University of Washington's CSE163 Data Science",
							'Programming lead in the Robotics Team',
						]
					},
					{
						icon: 'fa-solid fa-school',
						title: 'Bellevue College',
						subtitles: [
							'Bellevue • September 2021 - Present',
							'GPA: 3.9',
						],
						detailsListColumns: 2,
						detailsList: [
							'MATH 151-153/254 Calculus I - IV',
							'MATH 208 Linear Algebra',
							'PHYS 121 Calculus Physics',
							'MUSC 110-112 First Year Theory'
						]
					},
				],
			},


			{
				sectionTitle: 'Work Experience',
				sections: 2,
				tiles: [
					{
						icon: 'fa-brands fa-android',
						title: 'Programming Lead',
						subtitles: [
							'Hazen Robotics',
							'Renton • August 2022 - June 2023'
						],
						detailsListColumns: 1,
						detailsList: [
							'Teaching new members how to program and work in an organized fashion',
							"Organize team members' projects/assignments based on skills and time commitment",
							'Mentoring elementary/middle school robotics team (FIRST Lego League) ',
						]
					},
					{
						icon: 'fa-solid fa-chalkboard-user',
						title: 'Web Developer',
						subtitles: [
							'HD Fowler Co.',
							'Bellevue, Washington, United States • June 2022 - Present',
						],
						detailsListColumns: 1,
						detailsList: [
							'Worked with back-end developers to connect data to users, with a device friendly interface, via the web'
						]
					}
				]
			},


			{
				sectionTitle: 'Volunteer Experience',
				sections: 2,
				tiles: [
					{
						icon: 'fa-solid fa-sliders',
						title: 'Audio Engineer',
						subtitles: [
							'New Life Church',
						],
						detailsListColumns: 2,
						detailsList: [
							'Volunteer with whatever help may be needed. I.e. Camera, Lighting (Vista 3, GrandMA 3), Video Slides (ProPresenter), Audio (A&H), etc.',
							'Volunteer 3-4 times per week with Sunday Services and rehearsals, Youth Group, and other events like funerals, weddings, school events, etc.',
						]
					},
					{
						icon: 'fa-solid fa-gear',
						title: `FIRST <a href="https://www.firstinspires.org/robotics/ftc" class="link external" target="_blank" rel="noopener noreferrer">FTC</a> Mentor`,
						subtitles: [
							'Dimmit Middle School Robotics',
						],
						detailsListColumns: 1,
						detailsList: [
							'Volunteer with the middle school, teaching the students the basics of FTC and preparing them for advanced teams in High School.'
						]
					}
				]
			},


			{
				sectionTitle: 'Awards and Achievements',
				sections: 1,
				tiles: [
					{
						icon: 'fa-solid fa-id-badge',
						title: '',
						subtitles: [],
						detailsListColumns: 2,
						detailsList: [
							'High School Lettered in Robotics and Band',
							'Eagle Scout, May 2021',
							"Superintendent's Gold Certificate of Merit, May 2023",
							"President's Education Award, May 2023",
							'Oliver M. Hazen Award, May 2023',
							'Hibbard Memorial Award for Musical Excellence, June 2023',

						]
					}
				]
			},


			{
				sectionTitle: 'Activities and Interests',
				sections: 1,
				tiles: [
					{
						icon: 'fa-solid fa-brain',
						title: '',
						subtitles: [],
						detailsListColumns: 2,
						detailsList: [
							'Computer Programming',
							'Band (Marching Percussion)',
							'Choir',
							'Robotics Mentor (FIRST Tech Challenge)',
							'Bellevue Youth Symphony Orchestra (Bassoon)',
							'Church Worship Band (Piano)',
							'Audio Engineering',
						]
					}
				]
			},
		]
	},
	getters: {
	},
	actions: {
		addProduct({ state }, product) {
			state.products = [...state.products, product];
		},
	},
})
export default store;
