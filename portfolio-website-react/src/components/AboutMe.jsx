import * as React from "react";
import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: -2,
      }}
      display="flex"
      flexDirection="column"
    >
      <Box>
        <Avatar
          alt="Me!"
          sx={{ width: 220, height: 220, margin: "auto" }}
          src="https://res.cloudinary.com/dorg7gesr/image/upload/v1713168349/iyshxeowceen6kpqvf8h.jpg"
        />
      </Box>
      <Box>
        <p class="section_text_p1"> Hello, I'm</p>
        <h1>
          <ReactRotatingText
            items={["Ryan Tang"]}
            pause={2000}
            typingInterval={150}
            deletingInterval={70}
            emptyPause={1000}
            cursor={true}
          />
        </h1>
        <div id="socials-container">
          <motion.a
            href="https://www.linkedin.com/in/ryantangmj"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ display: "inline-block" }}
          >
            <LinkedInIcon
              sx={{ fontSize: 40, color: "#112D4E", mt: 1, p: 0.5 }}
            />
          </motion.a>
          <motion.a
            href="https://github.com/ryantangmj"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ display: "inline-block" }}
          >
            <GitHubIcon
              sx={{ fontSize: 40, color: "#112D4E", mt: 1, p: 0.5 }}
            />
          </motion.a>
        </div>
      </Box>
    </Box>
  );
}

export default AboutMe;
