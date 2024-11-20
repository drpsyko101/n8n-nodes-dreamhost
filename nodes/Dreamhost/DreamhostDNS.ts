import { INodeProperties } from 'n8n-workflow';

const DnsFields: INodeProperties[] = [
	{
		displayName: 'Record',
		description: 'The domain name you are adding the record to',
		name: 'dnsNewRecord',
		required: true,
		type: 'string',
		default: '',
		placeholder: 'example.com',
		displayOptions: {
			show: {
				resource: ['dns'],
				operation: ['addRecord', 'removeRecord'],
			},
		},
		routing: {
			request: {
				qs: {
					record: '={{ $value }}',
				},
			},
		},
	},
	{
		displayName: 'Type',
		description: 'DNS record type',
		name: 'dnsNewRecordType',
		required: true,
		type: 'options',
		options: [
			{
				name: 'A',
				value: 'A',
			},
			{
				name: 'AAAA',
				value: 'AAAA',
			},
			{
				name: 'CNAME',
				value: 'CNAME',
			},
			{
				name: 'NAPTR',
				value: 'NAPTR',
			},
			{
				name: 'NS',
				value: 'NS',
			},
			{
				name: 'SRV',
				value: 'SRV',
			},
			{
				name: 'TXT',
				value: 'TXT',
			},
		],
		default: 'A',
		displayOptions: {
			show: {
				resource: ['dns'],
				operation: ['addRecord', 'removeRecord'],
			},
		},
		routing: {
			request: {
				qs: {
					type: '={{ $value }}',
				},
			},
		},
	},
	{
		displayName: 'Value',
		description: "The DNS record's value",
		name: 'dnsNewRecordValue',
		required: true,
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['dns'],
				operation: ['addRecord', 'removeRecord'],
			},
		},
		routing: {
			request: {
				qs: {
					value: '={{ $value }}',
				},
			},
		},
	},
	{
		displayName: 'Comment',
		description: 'Optional comment for the new record',
		name: 'dnsNewRecordComment',
		type: 'string',
		default: '',
		placeholder: 'Create a comment for this record',
		displayOptions: {
			show: {
				resource: ['dns'],
				operation: ['addRecord'],
			},
		},
		routing: {
			request: {
				qs: {
					comment: '={{ $value }}',
				},
			},
		},
	},
];

export const Dns: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['dns'],
			},
		},
		options: [
			{
				name: 'List All DNS Records',
				value: 'listRecords',
				action: 'List all DNS records',
				description: 'List all DNS records in your account',
				routing: {
					request: {
						qs: {
							cmd: 'dns-list_records',
						},
					},
				},
			},
			{
				name: 'Add A New DNS Record',
				value: 'addRecord',
				action: 'Add a new DNS record',
				description: 'Add a new DNS record to a domain (excluding dreamhosters.com subdomains)',
				routing: {
					request: {
						qs: {
							cmd: 'dns-add_record',
						},
					},
				},
			},
			{
				name: 'Remove A DNS Record',
				value: 'removeRecord',
				action: 'Remove a DNS record',
				description: 'Remove a DNS record from a domain',
				routing: {
					request: {
						qs: {
							cmd: 'dns-remove_record',
						},
					},
				},
			},
		],
		default: 'listRecords',
	},
	...DnsFields,
];
