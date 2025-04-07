function corsHeaders(): Headers {
  const headers = new Headers();

  headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  headers.append("Access-Control-Allow-Credentials", "true");
  headers.append("Content-Type", "application/json");

  return headers;
}

export default corsHeaders;
