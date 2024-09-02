import {withAuth} from "@kinde-oss/kinde-auth-nextjs/middleware";
export default withAuth(
  async function middleware(req) {
    
  },
  {
    loginPage: "/api/auth/login",
  }
);

export const config = {
  matcher: ["/dashboard", "/billing", "/usage", "/bookmarks"]
};