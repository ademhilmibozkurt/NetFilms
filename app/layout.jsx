import '@/styles/reset.css'; // reset all css styles first
import '@/styles/global.css'; // implement global css to all pages

import {Inter} from '@next/font/google0';
import Header from '@/components/header';
import Footer from '@/components/footer';

const interFontFamily = Inter({subsets:['latin']});

export default function RootLayout({children})
{
    return(
        <html lang="tr" className={interFontFamily.className}>
            <!-- use container style -->
            <body className='container'>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </body>
        </html>
    );
}