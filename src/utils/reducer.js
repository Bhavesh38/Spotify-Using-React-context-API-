import { SET_PLAYER_STATE, SET_PLAYING, SET_PLAYLIST, SET_PLAYLISTS, SET_PLAYLIST_ID, SET_TOKEN, SET_USER } from "./Contants";

export const initialState = {
    token: null,
    playlists: [],
    userInfo: null,
    selectedPlaylistId: "49yVj8uZgg8E7kuk10E8el",
    selectedPlaylist: null,
    currentlyPlaying: null,
    playerState: false
}


const reducer = (state, action) => {

    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists
            }
        case SET_USER:
            return {
                ...state,
                userInfo: action.userInfo
            }
        case SET_PLAYLIST:
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist
            }
        case SET_PLAYING:
            return {
                ...state,
                currentlyPlaying: action.currentlyPlaying,

            }
        case SET_PLAYER_STATE:
            return {
                ...state,
                playerState: action.playerState,
            }
        case SET_PLAYLIST_ID:
            return {
                ...state,
                selectedPlaylistId: action.selectedPlaylistId
            }
        default:
            return state;
    }
}

export default reducer;