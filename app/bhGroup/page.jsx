"use client";
import React from "react";
import { Box, CardMedia, Grid } from "@mui/material";
import SpecialBH from "../component/specialBH";
const SubData = {
  Logo: "/Logo/BJH-01.png",
  Alt: "Baja Harapan Group",
  company: "Baja Harapan Group",
  description: "WHOSALE OF FERTILIZER OF AGROCHEMICAL PRODUCT",
  vision:
    "To be a premier company with focus on positive contribution to economic development and agricultural growth of the country.",
  mission:
    "Supporting the development of agriculture through the wholesale of fertilizer and agrochemical products to support agricultural activities for crop production on a fee or contract basis.",
  pdfDownload: "/PDF/Baja_Harapan_Group_Sdn_Bhd_Business_Profile_min.pdf",
  bgHero: "/BHGroup/BHGroupHeroV1-min.png",
  image1: "/BHGroup/BHGroup1-min.png",
  image2: "/BHGroup/BHGroup2-min.png",
  image3: "/BHGroup/BHGroup3-min.png",
  image4: "/BHGroup/BHGroup4-min.png",
  image5: "/BHGroup/BHGroup5-min.png",
  address:
    "LOT 70 & 71, SIBUGA INDUSTRIAL CENTRE, JALAN LINTAS SIBUGA, 90000 SANDAKAN, SABAH",
  contact:
    "https://wa.me/60138160355?text=Hi,%20I%20want%20to%20know%20more%20about%20Baja%20Harapan%20Group!",
  email: "mailto:marketing@yunfungsang",
};

export default function BHGroup() {
  return (
    <Box>
      <SpecialBH
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
