let apiToken;

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
                    throw new Error({...data, status: response.status});
                });
            }
        });
    },
    setAPIToken: (accessToken) => {
        apiToken = accessToken;
        console.log("setAPIToken:" + apiToken);
    },
    clearAPIToken: () => {
        apiToken = undefined;
    }
};

function getApiTokenHeader() {
    return apiToken ? {Authorization: apiToken} : {};
};

export default DomainCommon;