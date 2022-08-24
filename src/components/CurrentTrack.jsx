import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useStateProvider } from '../utils/StateProvider';
import { SET_PLAYING } from '../utils/Contants';

function CurrentTrack() {
    const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
    useEffect(() => {
        // console.log(currentlyPlaying);
        const getCurrentTrack = async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
            // console.log();
            if (data !== "") {
                const { item } = data;
                const currentlyPlaying = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map((artist) => artist.name),
                    image: item.album.images[2].url
                };
                dispatch({
                    type: SET_PLAYING, currentlyPlaying
                });
            } else {
                dispatch({
                    type: SET_PLAYING, currentlyPlaying: null
                });
            }

        }

        getCurrentTrack();
    }, [token, dispatch])
    return (
        <Container>
            {
                currentlyPlaying && (
                    <div className='track'>
                        <div className='track_image'>
                            <img src={currentlyPlaying.image} />
                        </div>
                        <div className='track_info'>
                            <h4>{currentlyPlaying.name}</h4>
                            <h6>{currentlyPlaying.artists.join(", ")}</h6>
                        </div>
                    </div>
                )
            }
        </Container>
    )
}

const Container = styled.div`

.track{
    display:flex;
    align-items:center;
    gap:1rem;
    &_info{
        display:flex;
        flex-direction:column;
        gap:0.3rem;
        h4{
            color:white;
        }
        h6{
            color: white;
        }
    }

}

`

export default CurrentTrack
