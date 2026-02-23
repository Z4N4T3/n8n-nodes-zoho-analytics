import { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
export declare class ZohoAnalytics implements INodeType {
    description: INodeTypeDescription;
    methods: {
        loadOptions: {
            getOrganisations: any;
            getWorkspaces: any;
            getViews: any;
            getColumns: any;
        };
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
