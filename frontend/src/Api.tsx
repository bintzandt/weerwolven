export async function fetchAPI(url: string) {
    const backend = 'http://localhost:3000'
    const response = await fetch(backend + url);
    const result = await response.json();
    return result
}