"use client";
import React from "react";
import {
  Box, CardMedia, Grid,
} from "@mui/material";
import Subsidiaries from "../component/subsidiaries";
const SubData = {
  Logo: "/Logo/PPIPLogo-min.png",
  Alt: "CULTIVATING SUSTAINABLE PARTNERSHIPS",
  company: "Agricultural Industry Development Association",
  description: "CULTIVATING SUSTAINABLE PARTNERSHIPS",
  vision:
    "Envisions a future where agriculture is environmentally conscious, economically robust, and socially inclusive. This vision entails a global agricultural landscape where food security is ensured, and the industry thrives through responsible practices and collaborative efforts.",
  mission:
    "To advance the agricultural industry through sustainable practices, innovation, and policy advocacy. By promoting ethical conduct and knowledge exchange, AIDA aims to enhance the industry's growth and resilience.",
  pdfDownload: "/PDF/PPIP_AGRICULTURE INDUSTRY DEVELOPMENT ASSOCIATION_min.pdf",
  bgHero: "/PPIP/PPIPHero-min.png",
  image1: "/PPIP/PPIP1-min.png",
  image2: "/PPIP/PPIP2-min.png",
  image3: "/PPIP/PPIP3-min.jpg",
  image4: "/PPIP/PPIP4-min.jpg",
  image5: "/PPIP/PPIP5-min.png",
  address:
    "LOT 70 & 71, SIBUGA INDUSTRIAL CENTRE, JALAN LINTAS SIBUGA, 90000 SANDAKAN, SABAH",
  contact:
    "https://wa.me/60138180355?text=Hi,%20I%20want%20to%20know%20more%20about%20Future%20Home!",
  email: "mailto:futurehome.mm2h@gmail.com",
};

export default function PPIP() {
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
