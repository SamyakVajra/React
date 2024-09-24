import { Bookmark, BookmarkBorder, CheckBox } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  ListItem,
  Radio,
  RadioGroup,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const Products = () => {
  return (
    <>
      <Grid container>
        <Grid item lg={3} md={4} xs={12} sm={6} paddingLeft={1}>
          <Typography variant="h4">Deals</Typography>
          <ListItem>
            <Link
              href="#"
              underline="hover"
              color={"success"}
              fontWeight={"bold"}
              fontSize={"20px"}
            >
              Daily Deals
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#"
              underline="hover"
              color={"secondary"}
              fontWeight={"bold"}
              fontSize={"20px"}
            >
              Most popular
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#"
              underline="hover"
              color={"warning"}
              fontWeight={"bold"}
              fontSize={"20px"}
            >
              Flash sales
            </Link>
          </ListItem>
          <Typography variant="h5" mt={2} sx={{ textDecoration: "underline" }}>
            Categories
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  icon={<BookmarkBorder />}
                  checkedIcon={<Bookmark />}
                />
              }
              label="All"
            />

            <FormControlLabel control={<Checkbox />} label="Mobiles" />
            <FormControlLabel control={<Checkbox />} label="Laptops" />
            <FormControlLabel control={<Checkbox />} label="Monitor" />
            <FormControlLabel control={<Checkbox />} label="Accessories" />
          </FormGroup>

          <Typography variant="h4" mt={2} sx={{ textDecoration: "underline" }}>
            Prices
          </Typography>

          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="0"
              name="radio-buttons-group"
            >
              <FormControlLabel value="0" control={<Radio />} label="All" />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="upto $50"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="$50-$100"
              />
            </RadioGroup>
          </FormControl>

          <Typography variant="h5" mt={2} sx={{ textDecoration: "underline" }}>
            Rating
          </Typography>
          <ListItem>
            <Rating value="1" readOnly></Rating>
          </ListItem>
          <ListItem>
            <Rating value="2" readOnly></Rating>
          </ListItem>
          <ListItem>
            <Rating value="3" readOnly></Rating>
          </ListItem>
          <ListItem>
            <Rating value="4" readOnly></Rating>
          </ListItem>
          <ListItem>
            <Rating value="5" readOnly></Rating>
          </ListItem>
        </Grid>

        <Grid item lg={9} md={8} xs={12} sm={6} bgcolor={"#ffcccc"} container>
          <Grid item lg={12} md={12} xs={12}>
            <Typography
              variant="h5"
              mt={2}
              sx={{ textDecoration: "underline" }}
              paddingLeft={"45%"}
            >
              Collection
            </Typography>
          </Grid>
          <Grid item lg={3} md={4} xs={11} margin={"auto"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} xs={11} margin={"auto"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} xs={11} margin={"auto"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} xs={11} margin={"auto"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} xs={11} margin={"auto"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} xs={11} margin={"auto"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} xs={11} margin={"auto"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} xs={11} margin={"auto"}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
