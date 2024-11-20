import { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class DreamhostApi implements ICredentialType {
	name = 'dreamhostApi';
	displayName = 'Dreamhost API';
	documentationUrl = 'https://help.dreamhost.com/hc/en-us/articles/217555677-API-metacommands';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				key: '={{ $credentials.apiKey }}',
			},
		},
	};
}
