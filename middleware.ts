import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login"
  }
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/jobs/:path*",
    "/application/:path*",
    "/interview/:path*",
    "/report/:path*",
    "/roadmap/:path*"
  ]
};
