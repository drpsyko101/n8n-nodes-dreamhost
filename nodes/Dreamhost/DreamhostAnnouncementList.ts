import { INodeProperties } from 'n8n-workflow';

const AnnouncementListFields: INodeProperties[] = [
	{
		displayName: 'List Name',
		description:
			'This would be the List Name that appears on the Announce Lists page in your panel. For example, if the List Name in your panel shows testlist@example.com, this would be testlist.',
		name: 'listSubscriberName',
		required: true,
		type: 'string',
		default: '',
		placeholder: 'my-subscriber-list',
		displayOptions: {
			show: {
				resource: ['announcementList'],
				operation: ['listSubscribers', 'addSubscribers', 'postAnnouncement'],
			},
		},
		routing: {
			request: {
				qs: {
					listname: '={{ $value }}',
				},
			},
		},
	},
	{
		displayName: 'Domain',
		description:
			'This would be the Domain that appears on the Announce Lists page in your panel. For example, if the List Name in your panel shows testlist@example.com, this would be example.com.',
		name: 'listSubscriberDomain',
		required: true,
		type: 'string',
		default: '',
		placeholder: 'example.com',
		displayOptions: {
			show: {
				resource: ['announcementList'],
				operation: ['listSubscribers', 'addSubscribers', 'postAnnouncement'],
			},
		},
		routing: {
			request: {
				qs: {
					domain: '={{ $value }}',
				},
			},
		},
	},
	{
		displayName: 'Email',
		description: 'The email you want to subscribe',
		name: 'listSubscriberEmail',
		required: true,
		type: 'string',
		default: '',
		placeholder: 'email@example.com',
		displayOptions: {
			show: {
				resource: ['announcementList'],
				operation: ['addSubscriber', 'removeSubscriber'],
			},
		},
		routing: {
			request: {
				qs: {
					email: '={{ $value }}',
				},
			},
		},
	},
	{
		displayName: 'Name',
		description: 'The name you want to subscribe',
		name: 'listSubscriberName',
		type: 'string',
		default: '',
		placeholder: 'John Doe',
		displayOptions: {
			show: {
				resource: ['announcementList'],
				operation: ['addSubscriber'],
			},
		},
		routing: {
			request: {
				qs: {
					name: '={{ $value }}',
				},
			},
		},
	},
	{
		displayName: 'Subject',
		description: 'The subject of the message',
		name: 'postAnnouncementSubject',
		type: 'string',
		default: '',
		placeholder: 'The latest newsletter',
		displayOptions: {
			show: {
				resource: ['announcementList'],
				operation: ['postAnnouncement'],
			},
		},
		routing: {
			request: {
				qs: {
					subject: '={{ $value }}',
				},
			},
		},
	},
	{
		displayName: 'Message',
		description:
			'The text of the message to send. If html is set as the type, you can type the HTML code directly here.',
		name: 'postAnnouncementMessage',
		type: 'string',
		required: true,
		default: '',
		placeholder: '<h1>Header</h1><p>Paragraph</p>',
		displayOptions: {
			show: {
				resource: ['announcementList'],
				operation: ['postAnnouncement'],
			},
		},
		routing: {
			request: {
				qs: {
					name: '={{ $value }}',
				},
			},
		},
	},
	{
		displayName: 'From Name',
		description:
			'This is the From Name field that appears on the page where you edit the Announcement List. For example, navigate to the Announce Lists page, then click the Edit button to the right. The second field is titled From Name. Copy the full list name from this field.',
		name: 'postAnnouncementFromName',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'My Newsletter <newsletter@example.com>',
		displayOptions: {
			show: {
				resource: ['announcementList'],
				operation: ['postAnnouncement'],
			},
		},
		routing: {
			request: {
				qs: {
					name: '={{ $value }}',
				},
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['announcementList'],
				operation: ['postAnnouncement'],
			},
		},
		options: [
			{
				displayName: 'Schedule Message',
				description: 'The scheduled time to send the message',
				name: 'postAnnouncementStamp',
				type: 'dateTime',
				default: '',
				routing: {
					request: {
						qs: {
							stamp: '={{ new Date($value).toISOString().substr(0,19).replace("T", " ") }}',
						},
					},
				},
			},
			{
				displayName: 'Encoding',
				description: 'The character set in which the message is encoded',
				name: 'postAnnouncementCharset',
				type: 'string',
				default: '',
				placeholder: 'utf-8',
				routing: {
					request: {
						qs: {
							charset: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Type',
				description: 'Format of the message',
				name: 'postAnnouncementType',
				type: 'options',
				default: 'text',
				options: [
					{
						name: 'Text',
						value: 'text',
					},
					{
						name: 'HTML',
						value: 'html',
					},
				],
				routing: {
					request: {
						qs: {
							type: '={{ $value }}',
						},
					},
				},
			},
			{
				displayName: 'Allow Duplicate',
				description: 'Whether if you allow duplicate messages to be sent or not',
				name: 'postAnnouncementDuplicate',
				type: 'boolean',
				default: false,
				routing: {
					request: {
						qs: {
							duplicate_ok: '={{ $value ? "1" : "0" }}',
						},
					},
				},
			},
		],
	},
];

export const AnnouncementList: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['announcementList'],
			},
		},
		options: [
			{
				name: 'Add A Subscriber',
				value: 'addSubscriber',
				action: 'Add a subscriber',
				description:
					'Sends an opt-in email to an email address to ask them to subscribe to the Announcement List',
				routing: {
					request: {
						qs: {
							cmd: 'announcement_list-add_subscriber',
						},
					},
				},
			},
			{
				name: 'List Announcement List',
				value: 'listAnnouncementList',
				action: 'List announcement list',
				description: 'List announcement list you have on your account',
				routing: {
					request: {
						qs: {
							cmd: 'announcement_list-list_lists',
						},
					},
				},
			},
			{
				name: 'List Subscribers',
				value: 'listSubscribers',
				action: 'List subscribers',
				description: 'List all subscribers from an announcement list',
				routing: {
					request: {
						qs: {
							cmd: 'announcement_list-list_subscribers',
						},
					},
				},
			},
			{
				name: 'Post Announcement',
				value: 'postAnnouncement',
				action: 'Post announcement',
				description: 'Post an announcement to an Announcement List',
				routing: {
					request: {
						qs: {
							cmd: 'announcement_list-post_announcement',
						},
					},
				},
			},
			{
				name: 'Remove A Subscriber',
				value: 'removeSubscriber',
				action: 'Remove a subscriber',
				description: 'Immediately removes an email address from an Announcement List',
				routing: {
					request: {
						qs: {
							cmd: 'announcement_list-add_subscriber',
						},
					},
				},
			},
		],
		default: 'listAnnouncementList',
	},
	...AnnouncementListFields,
];
