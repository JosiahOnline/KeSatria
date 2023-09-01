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
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
        bottom="60px"
        color="white"
        fontWeight="bold"
        padding="0 50px">
        <Typography variant="h2" gutterBottom>
          Kesatria Holding
        </Typography>
        <Typography variant="h6" sx={{ width: { sx: "100%", md: "70%" } }}>
          Kesatria Holding Sdn Bhd is a private limited company that has several
          subsidiaries operating for over 20 years based in Sabah, Malaysia.
          Where, the business activities carried out are concentrated in the
          Palm Oil Industry with the total turnover of the company exceeding 50
          Million Malaysian Ringgit (MYR) in a year.
        </Typography>
      </Box>
      <Box
        sx={{
          background: "whitesmoke",
          padding: { xs: "10px 30px", md: "20px 60px" },
        }}>
        <Typography variant="h5" gutterBottom>
          Meet Our Subsidiaries
        </Typography>
        <Typography variant="h6" sx={{ width: { sx: "100%", md: "90%" } }}>
          Kesatria Holding together with its subsidiaries will hold several more
          collaborations with higher education centers for agricultural research
          projects also government in empowering the agricultural sector,
          especially the palm oil sector, to achieve the Sabah Government's
          policy goals with initiative to make the state a global leader in the
          sustainable palm oil industry.
        </Typography>
        <Grid
          marginTop="10px"
          marginBottom="10px"
          container
          justifyContent="flex-start"
          alignItems="center"
          alignContent="center"
          spacing={2}>
          <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 300, padding: "20px 20px 0" }}>
              <Link href="/yfsGroup">
                <CardMedia
                  component="img"
                  alt="YFS Group Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/YFSLogo.png"
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    YFS Group
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 300, padding: "20px 20px 0" }}>
              <Link href="/kkp">
                <CardMedia
                  component="img"
                  alt="YFS Group Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/KKPLogo.png"
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    Kang Ke Palm Sdn Bhd
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 300, padding: "20px 20px 0" }}>
              <Link href="/bhGroup">
                <CardMedia
                  component="img"
                  alt="Baja Harapan Group Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/BHLogo.png"
                />
                <CardContent>
                  <Typography variant="h5" align="center">
                    Baja Harapan Group
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 300, padding: "20px 20px 0" }}>
              <Link href="/yfsGroup">
                <CardMedia
                  component="img"
                  alt="Guang Xi Guang Ma Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/GXMLogo.png"
                />
                <CardContent>
                  <Typography variant="h5" align="center">
                    Guang Xi Guang Ma
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 300, padding: "20px 20px 0" }}>
              <Link href="/abc">
                <CardMedia
                  component="img"
                  alt="Agri Business Consultancy Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/ABCLogo.png"
                />
                <CardContent>
                  <Typography variant="h5" align="center">
                    Future Home
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ background: "whitesmoke" }}>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          alignContent="center">
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              alt="Office"
              sx={{ objectFit: "contain" }}
              image="/ofiice1-min.png"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              alt="Office"
              sx={{ objectFit: "contain" }}
              image="/office2-min.png"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              alt="Office"
              sx={{ objectFit: "contain" }}
              image="/office3-min.png"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              alt="Office"
              sx={{ objectFit: "contain" }}
              image="/office4-min.png"
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: "whitesmoke",
          padding: { xs: "10px 30px", md: "20px 60px" },
        }}>
        <Typography variant="h5" gutterBottom>
          Our Partnership Companies
        </Typography>
        <Typography variant="h6" sx={{ width: { sx: "100%", md: "90%" } }}>
          Kesatria Holding is always open for any opportunity of comprehensive
          collaboration to achieve a win-win situation of environmental and
          economic value. Below is our valuable partnership companies:
        </Typography>
        <Grid
          marginTop="10px"
          marginBottom="10px"
          container
          justifyContent="flex-start"
          alignItems="center"
          alignContent="center"
          spacing={3}>
          <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 300, padding: "20px 20px 0" }}>
              <Link href="https://abcltd.com.my/">
                <CardMedia
                  component="img"
                  alt="Agri Business Consultancy Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/ABCLogo.png"
                />
                <CardContent>
                  <Typography variant="h5" align="center">
                    Agri Business Consultancy
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ maxWidth: 300, padding: "20px 20px 0" }}>
              <Link href="/vhl">
                <CardMedia
                  component="img"
                  alt="VHL Fertilizer Sdn Bhd"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/ABCLogo.png"
                />
                <CardContent>
                  <Typography variant="h5" align="center">
                    VHL Fertilizer Sdn Bhd
                  </Typography>
                </CardContent>
              </Link>
            </Card>
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
                src="https://maps.google.com/maps?width=500&amp;height=450&amp;hl=en&amp;q=Jalan%20Lintas%20Sibuga,%20Sibuga%20Industrial%20Centre,%20Lot%2070%20Sandakan+(Yun%20Fung%20Sang%20Group%20Sdn%20Bhd)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
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
