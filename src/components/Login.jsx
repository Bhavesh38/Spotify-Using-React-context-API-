import React from 'react'
import styled from "styled-components";
function Login() {

    const handleClick = () => {
        const clientId = "90968711e244450f853cdda0b8bf6c9e";
        const redirectUrl = "https://Bhavesh38.github.io/Spotify-Using-React-context-API-";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            'user-read-email',
            "user-read-private",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-position",
            "user-top-read"
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    }
    return (
        <Container>
            <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt="" />
            <button onClick={handleClick}>LOGIN</button>

            <footer>
                <p>Made with ❤ By <span>Bhavesh kumar</span></p>
            </footer>
        </Container>
    )
}

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height: 100vh;
width: 100vw;
background-color:black;
${'' /* color:white; */}
gap:5rem;
img {
    height:20vh;
    ${'' /* width:98vw; */}
}
button{
    padding: 1rem 5rem;
    border-radius: 5rem;
    color:white;
    background-color: #1db954;
    cursor:pointer;
    border:none;
    font-size:1.4rem;
}
button:hover{
    background-color:#1dd954;
}
@media screen and (max-width:700px){
    img{
        width:98%;
    }
}

footer{
    color:white;
    bottom:20px;
    position:absolute;
    background-color:#1db954;
    padding:0.5rem;
    border-radius:20px;
    span{
        cursor:pointer;
    }
}

`

export default Login
