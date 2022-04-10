import { useEffect, useCallback, useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from "../css/Detail.module.css";

function Detail() {
    const { id } = useParams();
    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setInfos(json.data.movie)
        console.log(json.data.movie)
        setLoading(false)
    }, [id])
    useEffect(() => {
        getMovie()
    }, [getMovie])

    const [loading, setLoading] = useState(true);
    const [infos, setInfos] = useState("");

    return (

        <div className={style.detail}>

            <div className={style.home}>
                <Link to={`/`}>Home</Link>
            </div>

            {loading ? <h1>loading...</h1> :
                <div>
                    <img src={infos.background_image} alt={infos.title} />
                    <div className={style.info__header}>
                        <h3 className={style.detail__title}>
                            {infos.title}
                        </h3>
                        <h3 className={style.detail__year}>
                            {infos.year}
                        </h3>
                    </div>
                    <div>
                        <h3>Genres</h3>
                        <ul className={style.detail__genres}>
                            {infos.genres.map((g) => <li key={g}>{g}</li>)}
                        </ul>
                    </div>
                    <h3>Summary</h3>
                    <p className={style.description}>
                        {`"${infos.description_full}"`}
                    </p>
                </div>
            }
        </div >

    )


}
export default Detail;