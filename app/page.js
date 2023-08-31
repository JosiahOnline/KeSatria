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
                  color: "white",
                  fontSize: "1.1rem",
                },
                textShadow:
                  "2px 3px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)",
              }}>
              KESATRIA HOLDING
            </Typography>
          </Box>
        </Link>
        <Button
          onClick={handleOpen}
          sx={{
            color: "#ffffff",
            border: "1px solid white",
            borderRadius: "5px",
            padding: "5px 10px",
            transition: "all 0.5s ease",
            "&:hover": {
              backgroundColor: "#c9a868",
              color: "white",
              borderColor: "#c9a868",
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
          Lorem Ipsum Dolor Sit Amet
        </Typography>
        <Typography variant="h6" sx={{ width: { sx: "100%", md: "70%" } }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
          volutpat ac tincidunt vitae semper quis lectus nulla. <br /> Velit
          egestas dui id ornare arcu odio ut sem nulla. Orci phasellus egestas
          tellus rutrum tellus pellentesque eu. Ultrices gravida dictum fusce
          ut. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
          At consectetur lorem donec massa sapien faucibus et molestie ac.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
          volutpat ac tincidunt vitae semper quis lectus nulla.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
          volutpat ac tincidunt vitae semper quis lectus nulla.
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
                  alt="Agri Business Consultancy Logo"
                  height="200px"
                  sx={{ objectFit: "contain" }}
                  image="/ABCLogo.png"
                />
                <CardContent>
                  <Typography variant="h5" align="center">
                    VHL
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Address
            </Typography>
            <Typography id="transition-modal-description" gutterBottom>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Box height="80%">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=500&amp;height=450&amp;hl=en&amp;q=Jalan%20Utara,%20Bandar%20Utama%20Sandakan+(Bataras%20Hypermarket%20Sandakan)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
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
              href="https://wa.me/60138180355?text=Hi,%20I%20want%20to%20know%20more%20about%20Kesatria%20Holding%20Sdn%20Bhd!"
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
                (window.location = "mailto:kesatriaholding@gmail.com")
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
