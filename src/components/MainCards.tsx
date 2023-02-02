import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export const MainCards = () => {
    return (
        <Box  p={4}>
        <Grid container spacing={2} >
            <Grid item lg={3} xs={12} sm={6} md={4} >
            <Card >
      <CardMedia
        sx={{ height: 140 }}
        image="./Recruitment.svg"
        title="Recruitment & Selection"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Recruitment & Selection 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Productivity is a hot-button issue for just about every business. If your organization isn’t productive, how can you realistically expect to grow?

But determining the best way to evaluate productivity and make positive changes is, by no means, simple. In fact, the factors that contribute to productivity are often varied and spread across disparate parts of a business and the world, for that matter.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </Grid>

            <Grid item lg={3} xs={12} sm={6} md={4} >
            <Card >
      <CardMedia
        sx={{ height: 140 }}
        image="./Benefits.svg"
        title="Compensation & Benefits"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Compensation & Benefits 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Productivity is a hot-button issue for just about every business. If your organization isn’t productive, how can you realistically expect to grow?

But determining the best way to evaluate productivity and make positive changes is, by no means, simple. In fact, the factors that contribute to productivity are often varied and spread across disparate parts of a business and the world, for that matter.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </Grid>




            <Grid item lg={3} xs={12} sm={6} md={4} >
            <Card >
      <CardMedia
        sx={{ height: 140 }}
        image="./Onboarding.svg"
        title="Onboarding"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Onboarding
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Productivity is a hot-button issue for just about every business. If your organization isn’t productive, how can you realistically expect to grow?
But determining the best way to evaluate productivity and make positive changes is, by no means, simple. In fact, the factors that contribute to productivity are often varied and spread across disparate parts of a business and the world, for that matter.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </Grid>


            <Grid item lg={3} xs={12} sm={6} md={4} >
            <Card >
      <CardMedia
        sx={{ height: 140 }}
        image="./Offboarding.svg"
        title="Offboarding"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Offboarding
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Productivity is a hot-button issue for just about every business. If your organization isn’t productive, how can you realistically expect to grow?
But determining the best way to evaluate productivity and make positive changes is, by no means, simple. In fact, the factors that contribute to productivity are often varied and spread across disparate parts of a business and the world, for that matter.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </Grid>



        </Grid>
        </Box>
    )
}