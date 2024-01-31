//import { Inter } from "next/font/google";
//import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });



export default function Layout({ children }) {
    return (
        <div>
            <h1>Navbar</h1>

            {children}
            <h1>Footer</h1>
        </div>
    );
}
