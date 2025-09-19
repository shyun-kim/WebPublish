import React from 'react'
import { TbStarFilled } from "react-icons/tb";
import { TbStarHalfFilled } from "react-icons/tb";
import { TbStar } from "react-icons/tb";


export function StarRating({totalRate,style}) {
    totalRate = parseInt(totalRate);
    const stars = [...Array(5)];
    const color = (style === "star-coral") ? "coral" : "black";

    //totalRate의 값의 범위를 정확히 정의: 1~5
    let fillStars=0, halfStar=0, emptyStar =0;
    if(totalRate > 0 && totalRate <=5 ) {
        const fillStars = Math.floor(totalRate); //채워진 별 갯수
        const halfStar = (totalRate%1) !== 0; //반별 여부(소수점) 여부 체크
        const emptyStar = 5 - fillStars - (halfStar?1 :0); //빈별개수
    }
        return (
            <div className='star-rating'>
                {/* fillStars: 채워진 별 추가 */}
                {[...Array(fillStars)].map((_, i)=>
                    <span   key={i}
                            className={style.concat(" ",color)}>
                            <TbStarFilled />
                    </span>
                )} 

                {/* halfStars: 채워진 별 추가 */}
                { halfStar && 
                    <span   key={halfStar}
                            className={style.concat(" ",color)}>
                            <TbStarHalfFilled />
                    </span>
                }

                {/* halfStars: 빈 별 추가 */}
                { [...Array(emptyStar)] &&[...Array(emptyStar)].map((_, i) =>
                    <span   key={stars}
                            className={style.concat(" ",color)}>
                            <TbStar />
                    </span>
                )}

                {/* 별점 표시 */}
                {style === "star-coral" &&
                    <>
                    <span className={style.concat("number")}>{totalRate}</span>
                    </>
                }

            </div>
    )
}
