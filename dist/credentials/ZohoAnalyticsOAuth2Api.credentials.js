"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZohoAnalyticsOAuth2Api = void 0;
class ZohoAnalyticsOAuth2Api {
    constructor() {
        this.name = 'zohoAnalyticsOAuth2Api';
        this.extends = ['oAuth2Api'];
        this.displayName = 'Zoho Analytics OAuth2 API';
        this.documentationUrl = 'https://www.zoho.com/analytics/api/#oauth';
        this.properties = [
            {
                displayName: 'Grant Type',
                name: 'grantType',
                type: 'hidden',
                default: 'authorizationCode',
            },
            {
                displayName: 'Authorization URL',
                name: 'authUrl',
                type: 'hidden',
                default: '={{$self["url"]}}/oauth/v2/auth',
                required: true,
            },
            {
                displayName: 'Access Token URL',
                name: 'accessTokenUrl',
                type: 'hidden',
                default: '={{$self["url"]}}/oauth/v2/token',
                required: true,
            },
            {
                displayName: 'Scope',
                name: 'scope',
                type: 'hidden',
                default: 'ZohoAnalytics.fullaccess.all',
            },
            {
                displayName: 'Auth URI Query Parameters',
                name: 'authQueryParameters',
                type: 'hidden',
                default: 'access_type=offline',
            },
            {
                displayName: 'Authentication',
                name: 'authentication',
                type: 'hidden',
                default: 'body',
            },
            {
                displayName: 'Environment',
                name: 'environment',
                type: 'options',
                options: [
                    {
                        name: 'Australia (com.au)',
                        value: 'com.au',
                    },
                    {
                        name: 'China (com.cn)',
                        value: 'com.cn',
                    },
                    {
                        name: 'Europe (eu)',
                        value: 'eu',
                    },
                    {
                        name: 'India (in)',
                        value: 'in',
                    },
                    {
                        name: 'Japan (jp)',
                        value: 'jp',
                    },
                    {
                        name: 'United States (com)',
                        value: 'com',
                    },
                ],
                default: 'eu',
            },
            {
                displayName: 'URL',
                name: 'url',
                type: 'hidden',
                default: '=https://accounts.zoho.{{$self["environment"]}}',
            },
        ];
    }
}
exports.ZohoAnalyticsOAuth2Api = ZohoAnalyticsOAuth2Api;
//# sourceMappingURL=ZohoAnalyticsOAuth2Api.credentials.js.map