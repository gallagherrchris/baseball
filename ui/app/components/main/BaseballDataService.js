const HTTP = Symbol();

class BaseballDataService{
    constructor($http){
		this[HTTP] = $http;
    }

    getTables(){
        return this[HTTP].get('http://localhost:8004/tables');
    }

    getTableMetadata(table){
        return this[HTTP].get('http://localhost:8004/metadata');

		
    }

    getExportData(){
        return this[HTTP].get('/getExportData');
    }
}

export default BaseballDataService;