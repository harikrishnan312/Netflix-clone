import React, { useState, useEffect } from 'react'
import './rowPost.css'
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../Constants/Constants'
import Youtube from 'react-youtube';
function RowPost(props) {

    const [movie, setMovie] = useState([]);
    const [urlId, setUrlId] = useState('')
    const [show, setShow] = useState(true)

    useEffect(() => {
        axios.get(props.url).then(response => {
            // console.log(response.data.results);
            setMovie(response.data.results)
        }).catch(err => {
            alert('Network Error')
        })
    }, [props.url])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }

    const handleMovie = (id) => {
        setShow(true);
        console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.log('Array empty');
            }

        })
    }

    const handleShow = (() => {
        setShow(false);
    })
    return (
        <div className='row'>
            <h2>{props.title}</h2>

            <div className='posters'>
                {movie.map((obj) => {
                    return (<img onClick={() => { handleMovie(obj.id) }} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
                    )
                })}

            </div>
            <div>
                {(urlId && show) ? <i onClick={handleShow}
                    className="fas fa-times" style={{ float: 'right', padding: '15px', cursor: 'pointer' }}> </i> : null}
                {(show && urlId) && <Youtube videoId={urlId.key} opts={opts} />}

            </div>
        </div>
    )
}

export default RowPost