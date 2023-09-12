"use client";
import React from "react";
import {
  Box, CardMedia, Grid,
} from "@mui/material";
import Subsidiaries from "../component/subsidiaries";
const SubData = {
  Logo: "/Logo/YFSLogo-min.png",
  Alt: "YFS Group Sdn Bhd",
  company: "Yun Fung Sang Group Sdn Bhd",
  description: "WHOSALE OF FERTILIZER OF AGROCHEMICAL PRODUCT",
  vision:
    "To be a premier company with focus on positive contribution to economic development and agricultural growth of the country.",
  mission:
    "Supporting the development of agriculture through the wholesale of fertilizer and agrochemical products to support agricultural activities for crop production on a fee or contract basis.",
  pdfDownload: "/PDF/YFS COMPANY PROFILE-min.pdf",
  bgHero: "/YFS/yfsHero.png",
  image1: "/YFS/YFS1.png",
  image2: "/YFS/YFS2.png",
  image3: "/YFS/YFS3.png",
  address:
    "LOT 70 & 71, SIBUGA INDUSTRIAL CENTRE, JALAN LINTAS SIBUGA, 90000 SANDAKAN, SABAH",
  contact:
    "https://wa.me/60138160355?text=Hi,%20I%20want%20to%20know%20more%20about%20YFS%20Group!",
  email: "mailto:marketing@yunfungsang.com",
};

export default function YFSGroup() {
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
      </Grid>
    </Box>
  );
}
