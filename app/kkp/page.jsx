"use client";
import React from "react";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import SpecialKKP from "../component/specialKKP";
const SubData = {
  Logo: "/Logo/KKPLogo1-min.png",
  Alt: "Kang Ke Palm Sdn Bhd",
  company: "Kang Ke Palm Sdn Bhd",
  description: "DEALER FRUIT, PLANTATION MANAGEMENT & MANPOWER SERVICES",
  vision:
    "To be a premier company with focus on positive contribution to economic development and agricultural growth of the country.",
  mission:
    "Supporting the development of agriculture through the wholesale of fertilizer and agrochemical products to support agricultural activities for crop production on a fee or contract basis.",
  pdfDownload: "/PDF/KangKePalm_Sdn_Bhd_Profile_min.pdf",
  bgHero: "/KKP/KKPHero-min.png",
  image1: "/KKP/KKP1-min.png",
  image2: "/KKP/KKP2-min.png",
  image3: "/KKP/KKP3-min.png",
  address:
    "LOT 69, 70 & 71, SIBUGA INDUSTRIAL CENTRE, JALAN LINTAS SIBUGA, 90000 SANDAKAN, SABAH",
  contact:
    "https://wa.me/60108818233?text=Hi,%20I%20want%20to%20know%20more%20about%20Kang%20Ke%20Palm%20Sdn%20Bhd!",
  email: "mailto:financekangkepalmsdnbhd@gmail.com",
};

export default function KKP() {
  return (
    <Box>
      <SpecialKKP
        Logo={SubData.Logo}
        Alt={SubData.Alt}
        company={SubData.company}
        description={SubData.description}
        vision={SubData.vision}
        mission={SubData.mission}
        pdfDownload={SubData.pdfDownload}
        bgHero={SubData.bgHero}
        address={SubData.address}
        contact={SubData.contact}
        email={SubData.email}
      />
      <Grid
        container
        justifyContent="center"
        sx={{ padding: "20px" }}
        spacing="10px">
        <Grid item xs={12} md={4}>
          <CardMedia
            sx={{
              borderRadius: "5px",
              aspectRatio: "16/9",
            }}
            component="img"
            image={SubData.image1}
            alt={SubData.Alt}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardMedia
            sx={{
              borderRadius: "5px",
              aspectRatio: "16/9",
            }}
            component="img"
            image={SubData.image2}
            alt={SubData.Alt}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardMedia
            sx={{
              borderRadius: "5px",
              aspectRatio: "16/9",
            }}
            component="img"
            image={SubData.image3}
            alt={SubData.Alt}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ background: "#e7eaed", height: "100%" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "black",
                transition: "opacity 1s",
                padding: { xs: "20px 20px 0px" },
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
              }}>
              Our Manufacturer
            </Typography>
            <Typography
              sx={{
                color: "black",
                transition: "opacity 1s",
                padding: { xs: "20px 20px 15px" },
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: { xs: "1.2rem", md: "2rem" },
              }}>
              Erra Wangi Enterprise
              <br />
              (Timbangan Mewah Sawit) <br />
              Location:
              <br />
              Kinabatangan, Sabah, Malaysia
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              height: { xs: "250px", md: "500px" },
            }}>
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=500&amp;height=450&amp;hl=en&amp;q=%20+(Timbangan%20Mewah%20Sawit)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
