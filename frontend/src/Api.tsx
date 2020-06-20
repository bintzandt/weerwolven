const backend = 'http://localhost:3000'

export async function fetchAPI(url: string) {
    const response = await fetch(backend + url);
    const result = await response.json();
    return result
}

export async function postAPI(url: string, json: object) {
    const response = await fetch(backend + url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(json),
    });
    const result = await response.json();
    return result
}