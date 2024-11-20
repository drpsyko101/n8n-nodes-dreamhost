import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { AnnouncementList } from './DreamhostAnnouncementList';
import { Dns } from './DreamhostDNS';

export class Dreamhost implements INodeType {
	description: INodeTypeDescription = {
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Announcement List',
						value: 'announcementList',
					},
					{
						name: 'DNS Management',
						value: 'dns',
					},
				],
				routing: {
					request: {
						method: 'GET',
						url: '/',
						qs: {
							format: 'json',
						},
					},
				},
				default: 'announcementList',
			},
			...AnnouncementList,
			...Dns,
		],
		displayName: 'Dreamhost',
		name: 'dreamhost',
		icon: 'file:Dreamhost.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from Dreamhost API',
		defaults: {
			name: 'Dreamhost',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'dreamhostApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.dreamhost.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
	};
}
