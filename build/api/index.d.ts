import CustomerList from './customerList';
import Representation from './representation';
declare class Nimvelo implements NimveloClient {
    VERSION: string;
    options: ClientOptions;
    authorization: string;
    authPromise: Promise<any>;
    customers: CustomerList;
    stream: any;
    presenceWatcher: any;
    constructor(options?: Partial<ClientOptions>);
    private static _getAuthHeader;
    private _authenticate;
    _pathForType(type: string, id?: string): string;
    _paramsForType(type: string): RepresentationTypeParams;
    _objectFromItem(item: ApiItem, parent: RepresentationBase): Representation;
    _buildObjects(items: ApiItem | ApiItem[], parent: RepresentationBase): Representation | Representation[];
    _request(method: string, url: string, params?: {}, callback?: Callback): Promise<ApiItem>;
    _buildUrl(type: string, object: RepresentationBase, ...args: any[]): string;
    _buildUrlSection(type: string, object: RepresentationBase, url?: string): string;
    _paramsToQueryString(params: QueryParams | string): string;
    _formatGetResponse(response: ApiItem | ApiList<ApiItem>, parent: RepresentationBase): Representation | Representation[] | {
        meta: FormattedApiList<ApiItem>;
        items: Representation | Representation[];
    };
    _getResource(type: string, object: RepresentationBase, ...args: any[]): Promise<Representation | Representation[] | {
        meta: FormattedApiList<ApiItem>;
        items: Representation | Representation[];
    }>;
    _saveRepresentation(object: Representation, callback: Callback): Promise<ApiItem>;
    _deleteRepresentation(object: Representation, callback: Callback): Promise<ApiItem>;
}
export default Nimvelo;