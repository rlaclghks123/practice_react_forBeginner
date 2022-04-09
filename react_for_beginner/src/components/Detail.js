import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
function Detail() {
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setInfos(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    const [loading, setLoading] = useState(true);
    const [infos, setInfos] = useState("");

    return (
        <div>
            <div><h3><Link to={`/`}>Home</Link></h3></div>
            {loading ? <h1>loading...</h1> :
                <div>
                    <img src={infos.background_image} alt={infos.title} />
                    <h3>{infos.title}</h3>
                    <span>rating :{infos.rating}</span>
                    <div>
                        <h3>Genres</h3>
                        <ul>
                            {infos.genres.map((g) => <li key={g}>{g}</li>)}
                        </ul>
                    </div>
                    <div>
                    </div>
                    <h1>Summary</h1>
                    <p>{infos.description_full}</p>
                </div>
            }
        </div >
    )


}
export default Detail;