
  import { apiCall } from "../../../apiConfig/apiCall";
    
  export const submitRequest = () => {
    return apiCall({
      url: '/pac-user-tac-list/00000000-0000-0000-0000-000000000000',
      method: "get"
    });
  };


export interface QueryResultItem {
 
    tacCode: string;
 
    tacDescription: string;
 
    tacDisplayOrder: number;
 
    tacIsActive: boolean;
 
    tacLookupEnumName: string;
 
    tacName: string;
 
    pacName: string;  
}


export interface QueryRequest {
    
    pageNumber: number;
    ItemCountPerPage: number;
    OrderByColumnName: string;
    OrderByDescending: boolean;
    ForceErrorMessage: string;
}


export interface QueryResult {
    pageNumber: number;
    items: QueryResultItem[];
    itemCountPerPage: number;
    orderByColumnName: string;
    orderByDescending: boolean;
    success: boolean;
    recordsTotal: number;
    recordsFiltered: number;
    message: string;
    appVersion: string;
    request: string;
}
 





export interface InitRequest {
    
}

export interface InitResult {
    
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];
}

export interface InitValidationError {
    property: string;
    message: string;

}

export class InitRequestInstance implements InitRequest {
    

    constructor() {
        
    }
}


export class InitResultInstance implements InitResult {
    
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
        
        this.success = false;
        this.message = '';
        this.validationErrors =  [];
    }
}



export class InitValidationErrorInstance implements InitValidationError {
    property: string;
    message: string;

    constructor() { 
        this.property = '';
        this.message = ''; 
    }
}

 

export class QueryResultItemInstance implements QueryResultItem {
 
    tacCode: string;
 
    tacDescription: string;
 
    tacDisplayOrder: number;
 
    tacIsActive: boolean;
 
    tacLookupEnumName: string;
 
    tacName: string;
 
    pacName: string;

    constructor() {
 
        this.tacCode = '00000000-0000-0000-0000-000000000000';
 
        this.tacDescription = '';
 
        this.tacDisplayOrder = 0;
 
        this.tacIsActive = false;
 
        this.tacLookupEnumName = '';
 
        this.tacName = '';
 
        this.pacName = '';  
    }
}


export class QueryRequestInstance implements QueryRequest {
    
    pageNumber: number;
    ItemCountPerPage: number;
    OrderByColumnName: string;
    OrderByDescending: boolean;
    ForceErrorMessage: string;

    constructor() {
        
        this.pageNumber = 1;
        this.ItemCountPerPage = 10;
        this.OrderByColumnName = '';
        this.OrderByDescending = false;;
        this.ForceErrorMessage = '';
    }
}


export class QueryResultInstance implements QueryResult {
    pageNumber: number;
    items: QueryResultItem[];
    itemCountPerPage: number;
    orderByColumnName: string;
    orderByDescending: boolean;
    success: boolean;
    recordsTotal: number;
    recordsFiltered: number;
    message: string;
    appVersion: string;
    request: string;

    constructor() {
        this.pageNumber = 1;
        this.items = [];
        this.itemCountPerPage = 10;
        this.orderByColumnName = '';
        this.orderByDescending = false;
        this.success = false;
        this.recordsTotal = 0;
        this.recordsFiltered = 0;
        this.message = '';
        this.appVersion = '';
        this.request = '';
    }
}


export class QueryResultTestInstance implements QueryResult {
    pageNumber: number;
    items: QueryResultItem[];
    itemCountPerPage: number;
    orderByColumnName: string;
    orderByDescending: boolean;
    success: boolean;
    recordsTotal: number;
    recordsFiltered: number;
    message: string;
    appVersion: string;
    request: string;

    constructor() {
        this.pageNumber = 1;
        this.items = [];
        this.itemCountPerPage = 10;
        this.orderByColumnName = '';
        this.orderByDescending = false;
        this.success = false;
        this.recordsTotal = 0;
        this.recordsFiltered = 0;
        this.message = '';
        this.appVersion = '';
        this.request = '';
        
        this.items.push(new QueryResultItemInstance())
    }
}
