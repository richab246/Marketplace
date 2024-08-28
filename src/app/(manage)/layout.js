import SideOne from "@/components/SideOne";

const Layout = ({children}) => {
    return (
     <div className="w-full flex bg-transparent h-[calc(100vh-75px)] sm:overflow-hidden">
        <SideOne />
        <main className="flex justify-center items-center w-full">
          {children}
        </main>
     </div>
  )
}

export default Layout;
 