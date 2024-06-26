import { Toaster } from "react-hot-toast";
import "./globals.css";
import AuthState from "../actions/apis"
import NavBar from "@/components/navBar";

export const metadata = {
  title: "Loan Web App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
        <AuthState>
            <NavBar />
            <Toaster position="top-right" />
            {children}
          </AuthState>
        </main>
      </body>
    </html>
  );
}
