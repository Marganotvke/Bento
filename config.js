// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Russell',
	imageBackground: true,
	openInNewTab: false,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Good night,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '22.302711',
	defaultLongitude: '114.177216',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com',
		},
		{
			id: '3',
			name: 'Bahamut',
			icon: 'origami',
			link: 'https://www.gamer.com.tw/index2.php?ad=N',
		},
		{
			id: '4',
			name: 'LIHKG',
			icon: 'smile',
			link: 'https://lihkg.com/category/1?order=hot',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Whatsapp Web',
			icon: 'message-circle',
			link: 'https://web.whatsapp.com',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'cloud',
			id: '1',
			links: [
				{
					name: 'Gmail',
					svg: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm312-240L168-611v347h624v-347L480-432Zm0-85 312-179H168l312 179Zm-312-94v-85 432-347Z"/></svg>',
					link: 'https://mail.google.com/mail/',
				},
				{
					name: 'Google Docs',
					svg: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M336-240h288v-72H336v72Zm0-144h288v-72H336v72ZM263.72-96Q234-96 213-117.15T192-168v-624q0-29.7 21.15-50.85Q234.3-864 264-864h312l192 192v504q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72ZM528-624v-168H264v624h432v-456H528ZM264-792v189-189 624-624Z"/></svg>',
					link: 'https://docs.google.com/document/',
				},
				{
					name: 'Google Drive',
					svg: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M96-192v-144h768v144H96Zm72-36h72v-72h-72v72ZM96-624v-144h768v144H96Zm72-36h72v-72h-72v72ZM96-408v-144h768v144H96Zm72-36h72v-72h-72v72Z"/></svg>',
					link: 'https://drive.google.com/drive/my-drive',
				},
				{
					name: 'Spreadsheet',
					svg: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M216-144q-33 0-52.5-19.5T144-216v-528q0-33 19.5-52.5T216-816h528q33 0 52.5 19.5T816-744v528q0 33-19.5 52.5T744-144H216Zm228-228H216v156h228v-156Zm72 0v156h228v-156H516Zm-72-72v-156H216v156h228Zm72 0h228v-156H516v156ZM216-672h528v-72H216v72Z"/></svg>',
					link: 'https://docs.google.com/spreadsheets/',
				},
			],
		},
		{
			icon: 'cloud',
			id: '2',
			links: [
				{
					name: 'Google Slides',
					svg: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M144-192q-33 0-52.5-19.5T72-264v-432q0-33 19.5-52.5T144-768h96q33 0 52.5 19.5T312-696v432q0 33-19.5 52.5T240-192h-96Zm0-72h96v-432h-96v432Zm312 72q-33 0-52.5-19.5T384-264v-432q0-33 19.5-52.5T456-768h360q33 0 52.5 19.5T888-696v432q0 33-19.5 52.5T816-192H456Zm0-72h360v-432H456v432Zm-216 0v-432 432Zm216 0v-432 432Z"/></svg>',
					link: 'https://docs.google.com/presentation/',
				},
				{
					name: 'Google Map',
					svg: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="m600-144-240-72-153 51q-23 8-43-6t-20-40v-498q0-16 9.5-28.5T177-755l183-61 240 72 153-51q23-10 43 5t20 41v498q0 16-9 29t-24 17l-183 61Zm-36-86v-450l-168-50v450l168 50Zm72-2 108-36v-448l-108 36v448Zm-420-12 108-36v-448l-108 36v448Zm420-436v448-448Zm-312-48v448-448Z"/></svg>',
					link: 'https://www.google.com/maps/',
				},
				{
					name: 'Google Travel',
					svg: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M288-96v-96l120-84v-137L96-288v-120l312-215.04V-792q0-29.7 21.21-50.85 21.21-21.15 51-21.15T531-842.85q21 21.15 21 50.85v168.96L864-408v120L552-413v137l120 84v96l-192-57.6L288-96Z"/></svg>',
					link: 'https://www.google.com/travel/',
				},
				{
					name: 'Google Translate',
					svg: '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="m488-96 171-456h82L912-96h-79l-41-117H608L567-96h-79ZM169-216l-50-51 192-190q-36-38-67-79t-54-89h82q18 32 36 54.5t52 60.5q38-42 70-87.5t52-98.5H48v-72h276v-96h72v96h276v72H558q-21 69-61 127.5T409-457l91 90-28 74-112-112-191 189Zm463-63h136l-66-189-70 189Z"/></svg>',
					link: 'https://translate.google.com/',
				}
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
