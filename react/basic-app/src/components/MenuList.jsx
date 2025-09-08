import { Menu } from "./Menu.jsx"

/**
 * 메뉴 리스트
 */
export function MenuList({menus}) {
    return (
        <ul className = "menu-List">
            { menus.map((menu) => 
            <li>
                <Menu   title={menu.title}
                        color={menu.color}
                        bg={menu.bg}
                        href={menu.href}
                />
            </li>
            )}
        </ul>
    );
}