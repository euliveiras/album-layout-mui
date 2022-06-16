import { AppBar, Toolbar, Typography } from "@material-ui/core";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

export default function Header(){
    return(
        <>
            <AppBar>
                <Toolbar>
                    <PhotoCameraIcon/>
                    <Typography variant="h6">Album layout</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}