const globalFetchParams = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    // *default, no-cache, reload, force-cache, only-if-cached
    cache: 'no-cache', 
    redirect: 'follow', // manual, *follow, error
}

/*
 Encapsulation function for fetch, creates an intermediate layer for communication with the server
 Allow owerwrite default parameters (globalFetchParams)
 */
export const authorizedFetch = (path, params) => {
    const newParams = {...globalFetchParams, ...params} 
    const overridenPath = '/api/gql'
    return (
        fetch(overridenPath, newParams) 
    )
}
