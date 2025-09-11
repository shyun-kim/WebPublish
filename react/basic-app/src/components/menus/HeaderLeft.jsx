import { Menu } from "../commons/Menu.jsx";
import { useEffect } from "react";
import { fetchData } from "../../util/commonData";

export function HeaderLeft() {
    const [menus,setMenus] = userState([]);

    useEffect(() => {
        const fetch = async() => {
            const data = await fetchData("data/menus.json");
            setMenus(data.HeaderLeft);
        }
        fetch();
    }, []);
}