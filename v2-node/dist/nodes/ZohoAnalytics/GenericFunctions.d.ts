import { ILoadOptionsFunctions, INodePropertyOptions, IExecuteFunctions } from 'n8n-workflow';
export declare function zohoApiRequest(this: ILoadOptionsFunctions | IExecuteFunctions | any, method: string, endpoint: string, qs?: any, body?: any, orgId?: string, isFormData?: boolean): Promise<any>;
export declare function getOrganisations(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
export declare function getWorkspaces(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
export declare function getViews(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
export declare function getColumns(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
