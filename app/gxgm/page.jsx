"use client";
import React, { useState } from "react";
import {
  Box, CardMedia, Grid,
} from "@mui/material";
import Subsidiaries from "../component/subsidiaries";
const SubData = {
  Logo: "/Logo/GXGMLogo-min.png",
  Alt: "Guang Xi Guang Ma",
  company: "Guang Xi Guang Ma",
  description: "INTERNATIONAL TRADE CO. LTD",
  vision:
    "To emerge as a global leader in international trade and related services, contributing significantly to the economic development and prosperity of the regions we operate in.",
  mission:
    "To be a catalyst for global trade, promote sustainable agriculture, and deliver reliable import and export services. We aspire to be the preferred partner for businesses seeking growth and success in the global marketplace.",
  pdfDownload: "/PDF/GuangXiGuangMa International Trade Co.,Ltd._Company Profile-min.pdf",
  bgHero: "/GXGM/GXGMHero-min.png",
  image1: "/GXGM/GXGM1-min.png",
  image2: "/GXGM/GXGM2-min.png",
  image3: "/GXGM/GXGM3-min.png",
  image4: "/GXGM/GXGM4-min.png",
  image5: "/GXGM/GXGM5-min.png",
  address:
    "LOT 70 & 71, SIBUGA INDUSTRIAL CENTRE, JALAN LINTAS SIBUGA, 90000 SANDAKAN, SABAH",
  contact:
    "https://wa.me/60108818233?text=Hi,%20I%20want%20to%20know%20more%20about%20GXGM%20International%20Trade%20Co.%20Ltd!",
  email: "mailto:gmit.co.ltd@gmail.com",
};

export default function GXGM() {
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
        image1={SubData.image1}
        image2={SubData.image2}
        image3={SubData.image3}
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
