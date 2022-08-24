import React, { useEffect } from 'react'
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Avatar from '@mui/material/Avatar';
import { useStateProvider } from '../utils/StateProvider';
function Navbar({ navBackground }) {
    const [{ userInfo }] = useStateProvider();
    // let greeting = "";
    // useEffect(() => {
    //     const hour = new Date().getHours();
    //     // console.log(date);
    //     if (hour >= 5 && hour < 12) {
    //         greeting = "Good Morning ";
    //     } else if (hour >= 12 && hour < 17) {
    //         greeting = "Good AfterNoon";
    //     } else {
    //         greeting = "Good Evening"
    //     }
    //     // alert(greeting);
    // }, [userInfo, dispatch])
    return (
        <Container navBackground={navBackground}>
            {/* <p>{greeting}</p> */}
            <div className="search_bar">
                <FaSearch />
                <input type="text" placeholder='Artists, songs or podcasts' />
            </div>
            <div className="avatar">
                <a href='#'>
                    {/* <img /> */}
                    <Avatar src={userInfo?.imageUrl} className="avatar_image" />
                    {/* <Avatar /> */}
                    {/* <CgProfile src={userInfo.imageUrl} /> */}
                    <span>{userInfo?.userName}</span>
                </a>
            </div>
        </Container>
    )
}
const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding: 2rem;
position: sticky;
top: 0;
transition: 0.3s ease-in-out;
background-color: ${({ navBackground }) => navBackground ? "rgba(0, 0, 0, 0.7)" : "none"};
.search_bar{
    background-color: white;
    width:60%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items:center;
    gap: 0.5rem;
    input{
        border:none;
        height: 2rem;
        width: 100%;
        &:focus {
            outline:none;
        }

    }
    
}

.avatar{
    background-color:black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display:flex;
    justify-content:center;
    align-items:center;
    a{
        display:flex;
        justify-content:center;
        align-items:center;
        gap: 0.5rem;
        color:white;
        font-weight:bold;
        text-decoration:none;

        .avatar_image{
            font-size: 1.3rem;
            background-color: #282828;
            ${'' /* padding: 0.2rem; */}
            ${'' /* border-radius:1rem; */}
            color: #c7c5c5
        }
    }
}
`
export default Navbar
