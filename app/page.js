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

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box
        // Gold Color #c9a868
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
        <Link href="/">
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap="10px">
            <CardMedia
              sx={{
                height: { xs: "30px", md: "50px" },
                width: { xs: "30px", md: "50px" },
              }}
              component="img"
              image="/Logo/KesatriaHolding1.png"
              alt="Kesatria Holding Sdn Bhd Logo"
            />
            <Typography
              sx={{
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1.1rem" },
                color: "white",
                fontWeight: "bold",
                transition: "all 0.5s ease",
                "&:hover": {
                  fontSize: { md: "1.2rem" },
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
            fontSize: { xs: "0.65rem", sm: "0.7rem", md: "1rem" },
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
        image="/kestariHero-min.png"
        title="kestari-holding"
        loading="lazy"
        sx={{
          objectPosition: "top",
          height: "100vh",
        }}
      />
      <Box
        position="absolute"
        color="white"
        fontWeight="bold"
        sx={{
          bottom: { xs: "0", md: "60px" },
          padding: { xs: "20px", md: "0 50px" },
        }}>
        <Typography
          fontWeight="bold"
          sx={{
            color: "white",
            marginTop: { xs: "50px" },
            fontSize: { xs: "3rem", md: "4rem" },
            lineHeight: { xs: "3rem", sm: "3rem", md: "4rem" },
            paddingLeft: { xs: "10px", sm: "10px", md: "20px" },
            textShadow:
              "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
          }}
          gutterBottom>
          KESATRIA HOLDING
        </Typography>
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: { xs: "20px", md: "20px" },
            borderRadius: "5px",
          }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
              lineHeight: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
            }}>
            Kesatria Holding Sdn Bhd is a private limited company that has
            several subsidiaries operating for over 20 years based in Sabah,
            Malaysia. Where, the business activities carried out are
            concentrated in the Palm Oil Industry with the total turnover of the
            company exceeding 50 Million Malaysian Ringgit (MYR) in a year.
          </Typography>
          <Link href="/PDF/Kesatria_Holding_Company_Profile_min.pdf">
            <Typography
              sx={{
                color: "#E2B470",
                marginTop: "5px",
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                lineHeight: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                textDecoration: "underline",
              }}>
              Download Our Company Profile
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          background: "whitesmoke",
          padding: { xs: "10px 30px", md: "20px 60px" },
        }}>
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2rem" },
            lineHeight: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
            marginTop: { xs: "25px", md: "20px" },
            marginBottom: {xs:"5px", sm:"10px"},
          }}>
          Meet Our Subsidiaries
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            lineHeight: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
          }}>
          Kesatria Holding together with its subsidiaries will hold several more
          collaborations with higher education centers for agricultural research
          projects also government in empowering the agricultural sector,
          especially the palm oil sector, to achieve the Sabah Government's
          policy goals with initiative to make the state a global leader in the
          sustainable palm oil industry.
        </Typography>
        <Grid
          marginTop="15px"
          marginBottom="20px"
          container
          justifyContent="flex-start"
          alignItems="center"
          alignContent="center"
          spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Card
              sx={{
                maxWidth: 350,
                padding: "20px 20px 0",
                borderRadius: "10px",
              }}>
              <Link href="/yfsGroup">
                <CardMedia
                  component="img"
                  alt="YFS Group Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/Logo/YFSLogo-min.png"
                />
                <CardContent align="center">
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    color="black">
                    Learn More
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card
              sx={{
                maxWidth: 350,
                padding: "20px 20px 0",
                borderRadius: "10px",
              }}>
              <Link href="/kkp">
                <CardMedia
                  component="img"
                  alt="KKP Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/Logo/KKPLogo-min.png"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    color="black">
                    Learn More
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card
              sx={{
                maxWidth: 350,
                padding: "20px 20px 0",
                borderRadius: "10px",
              }}>
              <Link href="/bhGroup">
                <CardMedia
                  component="img"
                  alt="Baja Harapan Group Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/Logo/BHLogo-min.png"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    color="black">
                    Learn More
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card
              sx={{
                maxWidth: 350,
                padding: "20px 20px 0",
                borderRadius: "10px",
              }}>
              <Link href="/gxgm">
                <CardMedia
                  component="img"
                  alt="Guang Xi Guang Ma Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/Logo/GXGMLogo-min.png"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    color="black">
                    Learn More
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card
              sx={{
                maxWidth: 350,
                padding: "20px 20px 0",
                borderRadius: "10px",
              }}>
              <Link href="/futureHome">
                <CardMedia
                  component="img"
                  alt="Future Home Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/Logo/FutureHome-min.png"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    color="black">
                    Learn More
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card
              sx={{
                maxWidth: 350,
                padding: "20px 20px 0",
                borderRadius: "10px",
              }}>
              <Link href="/AIDA">
                <CardMedia
                  component="img"
                  alt="Future Home Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/Logo/AIDALogo-min.png"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    color="black">
                    Learn More
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card
              sx={{
                maxWidth: 350,
                padding: "20px 20px 0",
                borderRadius: "10px",
              }}>
              <Link href="/PPIP">
                <CardMedia
                  component="img"
                  alt="Future Home Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/Logo/PPIPLogo-min.png"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    color="black">
                    Learn More
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            alt="Office"
            sx={{ objectFit: "contain" }}
            image="/kesatria/1min.png"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            alt="Office"
            sx={{ objectFit: "contain" }}
            image="/kesatria/2min.png"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            alt="Office"
            sx={{ objectFit: "contain" }}
            image="/kesatria/3min.png"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            alt="Office"
            sx={{ objectFit: "contain" }}
            image="/kesatria/4min.png"
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          background: "whitesmoke",
          padding: { xs: "10px 30px", md: "20px 60px" },
        }}>
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2rem" },
            lineHeight: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
            marginTop: { xs: "25px", md: "20px" },
            marginBottom: "15px",
          }}>
          Our Partnership Companies
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "black",
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            lineHeight: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
          }}>
          Kesatria Holding is always open for any opportunity of comprehensive
          collaboration to achieve a win-win situation of environmental and
          economic value. Below is our valuable partnership companies:
        </Typography>
        <Grid
          marginTop="15px"
          marginBottom="20px"
          container
          justifyContent="flext-start"
          alignItems="center"
          alignContent="center"
          spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Card
              sx={{
                maxWidth: 350,
                padding: "20px 20px 0",
                borderRadius: "10px",
              }}>
              <Link href="https://abcltd.com.my/">
                <CardMedia
                  component="img"
                  alt="Agri Business Consultancy Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/Logo/ABCLogo.png"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    color="black">
                    Learn More
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          {/* <Grid item xs={12} sm={4} md={4}>
            <Card
              sx={{
                maxWidth: 350,
                padding: "20px 20px 0",
                borderRadius: "10px",
              }}>
               <Link href="/yfsGroup">
              <CardMedia
                component="img"
                alt="VHL Fertilizer Sdn Bhd"
                height="272px"
                sx={{ objectFit: "contain" }}
                image="/Logo/VHLlogo-min.png"
              />
               <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    color="black">
                    Learn More
                  </Typography>
                </CardContent>
               </Link> 
            </Card>
          </Grid> */}
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
                  href="https://wa.me/60138180355?text=Hi,%20I%20want%20to%20know%20more%20about%20Kesatria%20Holding%20Sdn%20Bhd!"
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
                    (window.location = "mailto:kesatriaholding@gmail.com")
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
