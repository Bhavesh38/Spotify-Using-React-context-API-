import React, { useEffect } from 'react';

import styled from 'styled-components';
import { useStateProvider } from '../utils/StateProvider';
import axios from "axios";
import { SET_PLAYLISTS, SET_PLAYLIST_ID } from '../utils/Contants';
function Playlists() {

    const [{ token, playlists }, dispatch] = useStateProvider();
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
            const { items } = response.data;
            // console.log(response.data.items);
            const playlists = items.map(({ name, id }) => {
                return { name, id };
            });
            // console.log(playlists);
            dispatch({
                type: SET_PLAYLISTS, playlists
            })
        };

        getPlaylistData();
    }, [token, dispatch])


    //changing playlist

    const changeCurrentPlaylist = (selectedPlaylistId) => {
        dispatch({
            type: SET_PLAYLIST_ID, selectedPlaylistId
        });
    }
    return (
        <Container>
            <ul>
                {
                    playlists.map(({ name, id }) => {
                        return (
                            <li key={id} onClick={() => changeCurrentPlaylist(id)}>{name}</li>
                        )
                    })
                }

            </ul>
        </Container>
    )
}
const Container = styled.div`
height: 100%;
overflow: hidden;
ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        height: 55vh;
        max-height: 100%;
        overflow: auto;
        &::-webkit-scrollbar{
            width: 0.7rem;
            &-thumb{
                background-color: rgba(255,255,255,0.6);
            }
        }
        li {
            display: flex;
            gap: 1rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;
            &:hover{
                color:white;
            }
        }

    }

`
export default Playlists
