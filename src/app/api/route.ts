export async function GET(request: Request) {
  console.log("GET request", request);
  return Response.json({ message: "hello GET API" });
}
