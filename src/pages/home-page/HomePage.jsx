import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../../hooks/localStorage"
import { useEffect } from "react"
import { Grid } from "@mui/material"
import { PostForm } from "../../components/PostForm"
import { Feed } from "../../components/Feed"

export const HomePage = () => {
    const [credentials] = useLocalStorage('credential')
    const navigate = useNavigate()
    useEffect(() => {
        !credentials && navigate('/login')
    }, [credentials])
    return <div>
        <div style = {{ maxWidth: 1080, margin: 'auto'}}>
            <Grid container spacing={1}>
                <Grid item md={3} lg={3}>
                </Grid>
                <Grid item md={3} lg={9}>
                    <h4>Feeds</h4>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
               <Grid item md= {3} lg={3}>
                <PostForm/>
               </Grid>
               <Grid item md={3} lg={9}>
                <Feed/>
               </Grid>
            </Grid>
        </div>
    </div>
}