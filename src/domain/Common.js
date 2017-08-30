let apiToken;
let localStorage = window.localStorage;

function HttpException(ex) {
    this.message = ex.message;
    this.status = ex.status;
    this.stack = ex.stack;
}

const DomainCommon = {
    fetch: (url, method, jsonBody) => {
        let options = method ? {method} : {};
        options = jsonBody ? {...options, body: JSON.stringify(jsonBody)} : options;

        // set apiTokenHeader if available
        options.headers = Object.assign({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }, getApiTokenHeader());

        return fetch(url, options).then((response) => {
            if (response.ok)
                return response.json();
            else {
                return response.json().then(function (data) {
                    throw new HttpException({...data, status: response.status});
                });
            }
        });
    },
    setAPIToken: (accessToken) => {
        apiToken = accessToken;
        localStorage.setItem('accessToken', accessToken);
    },
    clearAPIToken: () => {
        apiToken = undefined;
        localStorage.removeItem("accessToken");
    }
};

function getApiTokenHeader() {
    apiToken = localStorage.getItem('accessToken');
    return apiToken ? {Authorization: apiToken} : {};
};

export default DomainCommon;