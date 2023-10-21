"use client";
import React from "react";
import {
  Box, CardMedia, Grid,
} from "@mui/material";
import Subsidiaries from "../component/subsidiaries";
const SubData = {
  Logo: "/Logo/AIDALogo-min.png",
  Alt: "CULTIVATING SUSTAINABLE PARTNERSHIPS",
  company: "AIDA A2Z Sdn Bhd",
  description: "CULTIVATING SUSTAINABLE PARTNERSHIPS",
  vision:
    "To be the pioneering force in sustainable agriculture, promoting ethical practices and innovative solutions for a greener, more prosperous world.",
  mission:
    "To empower farmers, industries, and communities with cutting-edge technologies and expert knowledge, fostering sustainable development and environmental stewardship.",
  pdfDownload: "/PDF/AIDA A2Z SDN BHD_Company Profile_min.pdf",
  bgHero: "/AIDA/AIDAHero-min.png",
  image1: "/AIDA/AIDA1-min.png",
  image2: "/AIDA/AIDA2-min.png",
  image3: "/AIDA/AIDA3-min.png",
  image4: "/AIDA/AIDA4-min.jpg",
  image5: "/AIDA/AIDA5-min.jpg",
  address:
    "LOT 70 & 71, SIBUGA INDUSTRIAL CENTRE, JALAN LINTAS SIBUGA, 90000 SANDAKAN, SABAH",
  contact:
    "https://wa.me/60138180355?text=Hi,%20I%20want%20to%20know%20more%20about%20Future%20Home!",
  email: "mailto:futurehome.mm2h@gmail.com",
};

export default function AIDA() {
  return (
    <Box>
      <Subsidiaries
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
      <Grid container justifyContent="center" sx={{ padding: "20px" }} spacing="10px">
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
        <Grid item xs={12} md={6}>
          <CardMedia
            sx={{
              borderRadius: "5px",
              aspectRatio: "16/9",
            }}
            component="img"
            image={SubData.image4}
            alt={SubData.Alt}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardMedia
            sx={{
              borderRadius: "5px",
              aspectRatio: "16/9",
            }}
            component="img"
            image={SubData.image5}
            alt={SubData.Alt}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
