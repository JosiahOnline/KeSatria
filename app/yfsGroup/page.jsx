"use client";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Grid,
  Backdrop,
  Modal,
  Typography,
} from "@mui/material";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "70%" },
  height: { xs: "80%", md: "70%" },
  bgcolor: "whitesmoke",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
export default function YFSGroup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box
        position="absolute"
        backgroundColor="whitesmoke"
        width="100%"
        padding="20px 50px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="10px">
        <Link href="/" sx={{ width: "100%" }}>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap="10px">
            <CardMedia
              sx={{
                height: "50px",
                width: "60px",
              }}
              component="img"
              image="/KesatriaHolding1.png"
              alt="Kesatria Holding Sdn Bhd Logo"
            />
            <Typography
              sx={{
                color: "#c9a868",
                fontWeight: "bold",
                transition: "all 0.5s ease",
                "&:hover": {
                  fontSize: "1.1rem",
                },
              }}>
              KESATRIA HOLDING
            </Typography>
          </Box>
        </Link>
        <Button
          onClick={handleOpen}
          sx={{
            color: "#c9a868",
            fontWeight: "bold",
            border: "2px solid #c9a868",
            borderRadius: "5px",
            padding: "5px 10px",
            transition: "all 0.5s ease",
            "&:hover": {
              backgroundColor: "#c9a868",
              color: "white",
            },
          }}>
          Contact Us
        </Button>
      </Box>
      <CardMedia
        component="img"
        image="/yfsHero.jpg"
        title="kestari-holding"
        loading="lazy"
        sx={{
          objectPosition: "top",
          height: "100vh",
        }}
      />
      <Box
        position="absolute"
        bottom="60px"
        color="white"
        fontWeight="bold"
        padding="0 50px">
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          alignContent="center">
          <Grid item xs={1.2}>
            <CardMedia
              sx={{
                height: "120px",
                width: "120px",
              }}
              component="img"
              image="/YFSLogo.png"
              alt="YFS Group Sdn Bhd Logo"
            />{" "}
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              Yun Fung Sang Group Sdn Bhd
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom width="50%">
          WHOSALE OF FERTILIZER OF AGROCHEMICAL PRODUCT
        </Typography>
        <Grid
          container
          justifyContent="flex-start"
          alignContent="center"
          spacing={1}
          sx={{ marginTop: { sx: "15px", md: "30px" } }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Vision:
            </Typography>
            <Typography variant="h6" gutterBottom sx={{paddingRight:{md:"50px"}}}>
              To be a premier company with focus on positive contribution to
              economic development and agricultural growth of the country.{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Mision:
            </Typography>
            <Typography variant="h6" gutterBottom sx={{paddingRight:{md:"50px"}}}>
              Supporting the development of agriculture through the wholesale of
              fertilizer and agrochemical products to support agricultural
              activities for crop production on a fee or contract basis.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              More Info
            </Typography>
            <Box
              sx={{
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  background: "white",
                  height: "140px",
                  padding: "20px 10px 20px 20px",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}>
                <Link href="/YFS COMPANY PROFILE.pdf">
                  <CardMedia
                    sx={{
                      height: "100px",
                      width: "80px",
                      borderRadius: "5px",
                      transition: "width 1s, height 1s",
                      "&:hover": {
                        height: "110px",
                        width: "90px",
                      },
                    }}
                    component="img"
                    image="/PDFDL.jpeg"
                    alt="Download Our Company PDF"
                  />
                </Link>
              </Box>
              <Box
                sx={{
                  background: "white",
                  padding: "20px 30px 20px 10px",
                  height: "140px",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}>
                <Link href="/YFS COMPANY PROFILE.pdf">
                  <Typography
                    variant="h6"
                    color="black"
                    sx={{
                      width: "80px",
                      lineHeight: "1.2rem",
                      textAlign: "left",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                    gutterBottom>
                    Download our company profile
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Address
            </Typography>
            <Typography id="transition-modal-description" gutterBottom>
              LOT 70 & 71, SIBUGA INDUSTRIAL CENTRE, JALAN LINTAS SIBUGA, 90000
              SANDAKAN, SABAH
            </Typography>
            <Box height="80%">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                id="gmap_canvas"
                src=" https://maps.google.com/maps?width=500&amp;height=450&amp;hl=en&amp;q=Jalan%20Lintas%20Sibuga,%20Sibuga%20Industrial%20Centre,%20Lot%2070%20Sandakan+(Yun%20Fung%20Sang%20Group%20Sdn%20Bhd)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </Box>
            <Button
              variant="solid"
              sx={{
                marginTop: "10px",
                transition: "all 0.5s ease",
                "&:hover": {
                  backgroundColor: "#000",
                },
                background: "green",
                color: "#ffffff",
                border: "1px solid white",
                borderRadius: "5px",
              }}
              size="lg"
              component="a"
              href="https://wa.me/60138160355?text=Hi,%20I%20want%20to%20know%20more%20about%20Kesatria%20Holding%20Sdn%20Bhd!"
              endIcon={<WhatsAppIcon />}>
              CONTACT US
            </Button>
            <Button
              variant="solid"
              sx={{
                marginTop: "10px",
                transition: "all 0.5s ease",
                "&:hover": {
                  backgroundColor: "#000",
                },
                background: "#221c35",
                color: "#ffffff",
                border: "1px solid white",
                borderRadius: "5px",
              }}
              size="lg"
              component="a"
              onClick={() =>
                (window.location = "mailto:marketing@yunfungsang.com")
              }
              endIcon={<EmailIcon />}>
              Email Us
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
