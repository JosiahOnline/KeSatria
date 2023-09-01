"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Fade,
  Grid,
  Backdrop,
  Modal,
  Typography,
  ImageList,
  ImageListItem,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "86%", md: "70%" },
  height: { xs: "80%", md: "70%" },
  bgcolor: "whitesmoke",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: {xs:3, md:4},
};
export default function YFSGroup() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [boxOpacity, setBoxOpacity] = useState(0.8);
  const [fontColor, setFontColor] = useState("#3B4A41");
  const [fontOpacity, setFontOpacity] = useState(1);
  const [showImage, setShowImage] = useState("visible");
  const handleMouseEnter = () => {
    setBoxOpacity(0);
    setFontColor("white");
    setFontOpacity(0);
    setShowImage("hidden");
  };
  const handleMouseLeave = () => {
    setBoxOpacity(0.8);
    setFontColor("#3B4A41");
    setFontOpacity(1);
    setShowImage("visible");
  };
  return (
    <Box>
      <Box
        position="absolute"
        zIndex="1"
        backgroundColor="black"
        width="100%"
        sx={{
          borderBottom: "1px solid #c9a868",
          padding: { xs: "15px", md: "20px 50px" },
        }}
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
                height: { xs: "30px", md: "50px" },
                width: { xs: "30px", md: "60px" },
              }}
              component="img"
              image="/KesatriaHolding1.png"
              alt="Kesatria Holding Sdn Bhd Logo"
            />
            <Typography
              sx={{
                fontSize:{xs:"0.9rem", md:"1.1rem"},
                color: "white",
                fontWeight: "bold",
                transition: "all 0.5s ease",
                "&:hover": {
                  fontSize: "1.2rem",
                },
              }}>
              KESATRIA HOLDING
            </Typography>
          </Box>
        </Link>
        <Button
          onClick={handleOpen}
          sx={{
            color: "white",
            fontWeight: "bold",
            border: "1px solid white",
            borderRadius: "5px",
            fontSize: { xs: "0.7rem", md: "1rem" },
            padding: "5px 10px",
            transition: "all 0.5s ease",
            "&:hover": {
              backgroundColor: "#c9a868",
              borderColor: "#c9a868",
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
        sx={{
          top: "0",
          height: "100vh",
          width: "100%",
          backgroundColor: `rgba(255, 255, 255, ${boxOpacity})`,
          transition: "background-color 1s",
        }}
      />
      <Box
        position="absolute"
        sx={{
          top: { xs: "15%", md: "15%" },
          padding: { xs: "0 20px", md: "0 50px" },
        }}>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          alignContent="center">
          <Grid item xs={3} md={1}>
            {/* <Avatar
              alt="YFS Group Sdn Bhd"
              src="/YFSLogo.png"
              sx={{
                height: { xs: "50px", md: "100px" },
                width: { xs: "50px", md: "100px" },
              }}  
            /> */}
            <CardMedia
              sx={{
                height: { xs: "65px", md: "100px" },
                width: { xs: "65px", md: "100px" },
              }}
              component="img"
              image="/YFSLogo.png"
              alt="YFS Group Sdn Bhd Logo"
            />{" "}
          </Grid>
          <Grid item xs={9} md={11}>
            <Typography
              fontWeight="bold"
              sx={{
                position: { md: "absolute" },
                top: { md: "2%" },
                // width: "100%",
                left: { md: "11%" },
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: { xs: "2rem", md: "3rem" },
                color: fontColor,
                transition: "font-color 0.5s",
                textShadow:
                  "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}>
              Yun Fung Sang Group Sdn Bhd
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              fontWeight="bold"
              sx={{
                position: { md: "absolute" },
                top: { md: "10%" },
                width: "100%",
                left: { md: "11%" },
                paddingTop: { xs: "10px", md: "0" },
                textAlign: { xs: "left", md: "left" },
                fontSize: { xs: "0.85rem", md: "1.2rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
                paddingLeft: { md: "5px" },
                color: fontColor,
                transition: "font-color 0.5s",
                textShadow:
                  "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}
              gutterBottom>
              WHOSALE OF FERTILIZER OF AGROCHEMICAL PRODUCT
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignContent="center"
          spacing={1}
          sx={{
            marginTop: { sx: "15px", md: "30px" },
            paddingLeft: { md: "15px" },
          }}>
          <Grid item xs={12} md={7}>
            <Typography
              fontWeight="bold"
              sx={{
                opacity: fontOpacity,
                color: "#3B4A41",
                transition: "opacity 1s",
                marginTop: { xs: "15px", md: "0" },
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
              }}>
              Vision:
            </Typography>
            <Typography
              sx={{
                opacity: fontOpacity,
                color: "#3B4A41",
                transition: "opacity 1s",
                marginTop: { xs: "10px", md: "0" },
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
              }}>
              To be a premier company with focus on positive contribution to
              economic development and agricultural growth of the country.{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5}>
            <Typography
              fontWeight="bold"
              sx={{
                opacity: fontOpacity,
                color: "#3B4A41",
                transition: "opacity 1s",
                marginTop: { xs: "10px", md: "15px" },
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
              }}>
              Mision:
            </Typography>
            <Typography
              sx={{
                opacity: fontOpacity,
                color: "#3B4A41",
                transition: "opacity 1s",
                marginTop: { xs: "10px", md: "0" },
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
              }}>
              Supporting the development of agriculture through the wholesale of
              fertilizer and agrochemical products to support agricultural
              activities for crop production on a fee or contract basis.
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography
              fontWeight="bold"
              sx={{
                marginTop: "15px",
                opacity: fontOpacity,
                color: "#3B4A41",
                transition: "opacity 1s",
                marginTop: { xs: "10px", md: "15px" },
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
              }}
              gutterBottom>
              More Info
            </Typography>
            <Box
              sx={{
                borderRadius: "5px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  background: "white",
                  height: { md: "140px" },
                  padding: { xs: "10px", md: "20px 10px 20px 20px" },
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}>
                <Link href="/YFS COMPANY PROFILE.pdf">
                  <CardMedia
                    sx={{
                      height: { xs: "65px", md: "100px" },
                      width: { xs: "50px", md: "80px" },
                      borderRadius: "5px",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
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
                  height: { md: "140px" },
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}>
                <Link href="/YFS COMPANY PROFILE.pdf">
                  <Typography
                    variant="h6"
                    color="black"
                    sx={{
                      width: { xs: "200px", md: "80px" },
                      fontSize: { xs: "1rem", md: "1.3rem" },
                      lineHeight: { xs: "1.2rem", md: "1.5rem" },
                      textAlign: "left",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                    gutterBottom
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    Download our company profile
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          top: { md: "120px" },
          right: { md: "0" },
          position: { xs: "relative", md: "absolute" },
          padding: { xs: "0", md: "0 50px" },
          gap: { md: "10px" },
        }}
        display="flex"
        flexDirection="column">
        <CardMedia
          sx={{
            visibility: showImage,
            transition: "visibility 0.3s linear",
            borderRadius: { xs: "0", md: "5px" },
            aspectRatio: "16/9",
            width: { md: "350px" },
          }}
          component="img"
          image="/YFS1.png"
          alt="YFS Group"
        />
        <CardMedia
          sx={{
            visibility: showImage,
            transition: "visibility 0.2s linear",
            borderRadius: { xs: "0", md: "5px" },
            borderRadius: "5px",
            aspectRatio: "16/9",
            width: { md: "350px" },
          }}
          component="img"
          image="/YFS2.png"
          alt="YFS Group"
        />
        <CardMedia
          sx={{
            visibility: showImage,
            transition: "visibility 0.2s linear",
            borderRadius: { xs: "0", md: "5px" },
            borderRadius: "5px",
            aspectRatio: "16/9",
            width: { md: "350px" },
          }}
          component="img"
          image="/YFS3.png"
          alt="YFS Group"
        />
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
            <Typography
              id="transition-modal-title"
              sx={{
                color: "black",
                fontWeight:"bold",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                lineHeight: { xs: "1rem", md: "2rem" },
              }}>
              Address
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{
                color: "black",
                fontSize: { xs: "0.9rem", md: "1.1rem" },
                lineHeight: { xs: "1rem", md: "2rem" },
              }}
              gutterBottom>
              LOT 70 & 71, SIBUGA INDUSTRIAL CENTRE, JALAN LINTAS SIBUGA, 90000
              SANDAKAN, SABAH
            </Typography>
            <Box sx={{ height: { xs: "70%", md: "80%" } }}>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                id="gmap_canvas"
                src=" https://maps.google.com/maps?width=500&amp;height=450&amp;hl=en&amp;q=Jalan%20Lintas%20Sibuga,%20Sibuga%20Industrial%20Centre,%20Lot%2070%20Sandakan+(Yun%20Fung%20Sang%20Group%20Sdn%20Bhd)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </Box>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              >
              <Grid item xs={12} md={6}>
                <Button
                  variant="solid"
                  fullWidth
                  sx={{
                    fontSize: { xs: "0.8rem", md: "1rem" },
                    lineHeight: { xs: "1rem", md: "1rem" },
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
                  component="a"
                  href="https://wa.me/60138160355?text=Hi,%20I%20want%20to%20know%20more%20about%20YFS%20Group!"
                  endIcon={<WhatsAppIcon />}>
                  CONTACT US
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant="solid"
                  fullWidth
                  sx={{
                    fontSize: { xs: "0.8rem", md: "1rem" },
                    lineHeight: { xs: "1rem", md: "1rem" },
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
                  component="a"
                  onClick={() =>
                    (window.location = "mailto:marketing@yunfungsang.com")
                  }
                  endIcon={<EmailIcon />}>
                  Email Us
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
