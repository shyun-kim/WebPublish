import { useEffect, useState } from "react";
import { fetchKobisAPI, searchMoviePoster } from "../util/commonData.js";

export function Boxoffice() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchKobis = async () => {
            const kobis = await fetchKobisAPI("20250910")
            const mlist = kobis.boxOfficeResult.dailyBoxOfficeList;


            for(const movie of mlist) {
                const poster = await searchMoviePoster(movie.movieNm, movie.openDt);
                const posterObj = {
                    "img": poster,
                    "rank": movie.rank,
                    "title":movie.movieNm
                }
                setList(prev => [...prev, posterObj]); //0 -prev(현재의 list): []
            }

        }

        fetchKobis();

    }, [])

    console.log(list
        
    );
    
    return (
        <>
        </>
    );
}