
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import ThemeWrapper from "@/components/ThemeWrapper";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export const metadata = {
    title: "Marketplace",
    description: "Discover & expore AI"
}

const RootLayout = async ({children}) => {

  const {isAuthenticated, getUser} = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

  return (  <html lang='en'>
     <ThemeWrapper>
            <Nav isAuthenticated={isUserAuthenticated} user={user}/>
            {children}
     </ThemeWrapper>
    </html>
  )
}

export default RootLayout;
 