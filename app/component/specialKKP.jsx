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
  p: { xs: 3, md: 4 },
};

export default function Subsidiaries({
  Logo,
  Alt,
  company,
  description,
  vision,
  mission,
  pdfDownload,
  bgHero,
  image1,
  image2,
  image3,
  address,
  contact,
  email,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box
        position="fixed"
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
              image="/Logo/KesatriaHolding1.png"
              alt="Kesatria Holding Sdn Bhd Logo"
            />
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", md: "1.1rem" },
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
        image={bgHero}
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
          backgroundColor: `rgba(0, 0, 0, 0.3)`,
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
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          alignContent="flex-start">
          <Grid item xs={12} md={3}>
            <CardMedia
              component="img"
              image={Logo}
              alt={Alt}
              sx={{
                objectFit: "cover",
                height: { xs: "100px", md: "100px" },
                backgroundPosition: "left",
                marginLeft: { xs: "-13%", md: "-10%" },
                marginBottom: "15px",
              }}
            />
            <Typography
              fontWeight="bold"
              sx={{
                position: { md: "absolute" },
                top: { md: "2%" },
                // width: "100%",
                left: { md: "22.5%" },
                fontSize: { xs: "1.8rem", md: "3rem" },
                lineHeight: { xs: "2rem", md: "3rem" },
                color: "white",
                transition: "font-color 0.5s",
                textShadow:
                  "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}>
              {company}
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              fontWeight="bold"
              sx={{
                position: { md: "absolute" },
                top: { md: "10%" },
                width: "100%",
                left: { md: "22.5%" },
                paddingTop: { xs: "10px", md: "0" },
                textAlign: { xs: "left", md: "left" },
                fontSize: { xs: "0.85rem", md: "1.2rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
                paddingLeft: { md: "5px" },
                color: "white",
                transition: "font-color 0.5s",
                textShadow:
                  "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}
              gutterBottom>
              {description}
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
            marginTop: { sx: "15px", md: "15px" },
            paddingLeft: { md: "15px" },
          }}>
          <Grid item xs={12} md={7}>
            <Typography
              fontWeight="bold"
              sx={{
                // opacity: fontOpacity,
                // color: "#3B4A41",
                color: "white",
                transition: "opacity 1s",
                marginTop: { xs: "15px", md: "0" },
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
                textShadow:
                  "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}>
              Vision:
            </Typography>
            <Typography
              sx={{
                // opacity: fontOpacity,
                color: "white",
                transition: "opacity 1s",
                marginTop: { xs: "10px", md: "0" },
                marginBottom: { xs: "15px", md: "0" },
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
                textShadow:
                  "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}>
              {vision}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5}>
            <Typography
              fontWeight="bold"
              sx={{
                // opacity: fontOpacity,
                color: "white",
                transition: "opacity 1s",
                marginTop: { xs: "10px", md: "15px" },
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
                textShadow:
                  "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}>
              Mision:
            </Typography>
            <Typography
              sx={{
                // opacity: fontOpacity,
                color: "white",
                transition: "opacity 1s",
                marginTop: { xs: "10px", md: "0" },
                marginBottom: { xs: "15px", md: "0" },
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
                textShadow:
                  "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}>
              {mission}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontWeight="bold"
              sx={{
                // opacity: fontOpacity,
                color: "white",
                transition: "opacity 1s",
                marginTop: { xs: "10px", md: "15px" },
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
                textShadow:
                  "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}
              gutterBottom>
              More Info
            </Typography>
            <Box
              sx={{
                width: { xs: "100%", md: "20%" },
                marginTop: { xs: "15px", md: "0" },
              }}
              backgroundColor="whitesmoke"
              borderRadius="5px">
              <Box
                sx={{
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}>
                <Box
                  sx={{
                    height: { md: "140px" },
                    padding: { xs: "10px", md: "20px 10px 20px 20px" },
                  }}>
                  <Link href={pdfDownload}>
                    <CardMedia
                      sx={{
                        height: { xs: "65px", md: "100px" },
                        width: { xs: "50px", md: "80px" },
                        borderRadius: "5px",
                      }}
                      // onMouseEnter={handleMouseEnter}
                      // onMouseLeave={handleMouseLeave}
                      component="img"
                      image="/PDFDL.jpeg"
                      alt="Download Our Company PDF"
                    />
                  </Link>
                </Box>
                <Box
                  sx={{
                    padding: "20px 30px 20px 10px",
                    height: { md: "140px" },
                  }}>
                  <Link href={pdfDownload}>
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
                      // onMouseEnter={handleMouseEnter}
                      // onMouseLeave={handleMouseLeave}
                    >
                      Download our company profile
                    </Typography>
                  </Link>
                </Box>
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
            // visibility: showImage,
            transition: "visibility 0.3s linear",
            borderRadius: { xs: "0", md: "5px" },
            aspectRatio: "16/9",
            width: { md: "350px" },
          }}
          component="img"
          image={image1}
          alt={Alt}
        />
        <CardMedia
          sx={{
            // visibility: showImage,
            transition: "visibility 0.2s linear",
            borderRadius: { xs: "0", md: "5px" },
            borderRadius: "5px",
            aspectRatio: "16/9",
            width: { md: "350px" },
          }}
          component="img"
          image={image2}
          alt={Alt}
        />
        <CardMedia
          sx={{
            // visibility: showImage,
            transition: "visibility 0.2s linear",
            borderRadius: { xs: "0", md: "5px" },
            borderRadius: "5px",
            aspectRatio: "16/9",
            width: { md: "350px" },
          }}
          component="img"
          image={image3}
          alt={Alt}
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
                fontWeight: "bold",
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
              {address}
            </Typography>
            <Box sx={{ height: { xs: "70%", md: "80%" } }}>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=500&amp;height=450&amp;hl=en&amp;q=Jalan%20Lintas%20Sibuga,%20Sibuga%20Industrial%20Centre,%20Lot%2070%20Sandakan+(Yun%20Fung%20Sang%20Group%20Sdn%20Bhd)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </Box>
            <Grid container justifyContent="center" alignItems="center">
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
                  href={contact}
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
                  onClick={() => (window.location = { email })}
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
