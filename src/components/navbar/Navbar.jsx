import React from "react";
import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Tooltip } from "@mui/material";
const Navbar = () => {
  return (
    <>
      <div className={styles.navbarParent}>
        <div className={styles.navbarLogo}>🎥🎬</div>
        <div className={styles.navbarTitle}>THE MOVIFY PROJECT</div>
        <div className={styles.navbarSearch}>
          <SearchIcon />
          <input type="search" placeholder="Search a movie...." />
        </div>

        <Tooltip title="Switch to Dark Mode">
          <DarkModeIcon className={styles.themeIcons} />
        </Tooltip>
        {false && (
          <Tooltip title="Switch to Light Mode">
            <LightModeIcon className={styles.themeIcons} />
          </Tooltip>
        )}
      </div>
    </>
  );
};

export default Navbar;
