import Providers from "../Provider";
import LeftSidebar from "./components/leftSidebar";
import "./global.css";

    export default function RootLayout({ children }: { children: React.ReactNode }) {
        return (
        <html lang="en">
            <body className={`antialiased flex gap-1 h-screen w-screen`}>
            <LeftSidebar />
            <div className='w-full'>
            <Providers>{children}</Providers>
            </div>
            </body>
        </html>
        );
    }
    