import { NavLink } from 'react-router-dom'
import styles from './menu.module.css'

export default function Menu({ pages }) {

    return (
        <header>
            <nav className={styles.navegacao}>
                <ul className={styles.navegacao__list}>
                    {
                        pages.map(page => {
                            return (
                                <li key={page.name}>
                                    <NavLink
                                        to={page.location} end
                                        className={({ isActive }) => isActive ? styles.li_destacado : ""}
                                    >{page.name}</NavLink>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}
