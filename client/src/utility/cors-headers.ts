function corsHeaders() {
    const headers = new Headers();

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');
    
    return headers
}

export default corsHeaders