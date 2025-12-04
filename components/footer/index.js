import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

function Footer()
{
    return(
        <footer className={styles.footer}>
            Made by &nbsp;
            <Link href="https://www.linkedin.com/in/adem-hilmi-bozkurt-432a89250/" target='_blank'>
                Adem Hilmi Bozkurt
            </Link>
        </footer>
    );
}

export default Footer;