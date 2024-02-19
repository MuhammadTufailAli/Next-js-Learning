import { Roboto_Flex } from 'next/font/google';
// import './globals.css'
import Navbar from './Components/Navbar/Navbar.jsx';
import SessionProvider from './Components/SessionProvider.jsx';

const roboto = Roboto_Flex({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children, Component, pageProps }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        {/* Nav bar */}
        <nav {...pageProps}>
          <Navbar />
        </nav>

        <div>{children}</div>
        {/* Ya footer ha */}
        <footer>
          <p>THis is footer</p>
        </footer>
      </body>
    </html>
  );
}