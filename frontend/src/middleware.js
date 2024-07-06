export function middleware(request) {
  const token = localStorage.getItem("token");

  alert("Middleware");

  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/login", request.url));
  }

  if (token && request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: "/((?!api|_next|static|public|favicon.ico).*)",
};
