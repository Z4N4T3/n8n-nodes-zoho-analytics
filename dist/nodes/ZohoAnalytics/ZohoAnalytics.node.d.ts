import { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { getOrganisations, getWorkspaces, getViews, getColumns } from './GenericFunctions';
export declare class ZohoAnalytics implements INodeType {
    description: INodeTypeDescription;
    methods: {
        loadOptions: {
            getOrganisations: typeof getOrganisations;
            getWorkspaces: typeof getWorkspaces;
            getViews: typeof getViews;
            getColumns: typeof getColumns;
        };
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
