
import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Lahore Travel Tour",
  description: "Explore the rich culture and history of Lahore with our comprehensive travel guide. Discover top attractions, local cuisine, and hidden gems in this vibrant city. Plan your unforgettable trip to Lahore today!",
};

export default function RootLayout({ children }) {
  return (
    <html  data-arp="">
      <body
       
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
