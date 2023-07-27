import React, { useState } from "react";
import styles from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Tooltip } from "@mui/material";
const Navbar = ({ movie, setMovie }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    // console.log(search);//never console.log right after setting using useState
    value.length === 0 ? setMovie("avengers") : setMovie(value);
  };
  return (
    <>
      <div className={styles.navbarParent}>
        <div className={styles.navbarLogo}>🎥🎬</div>
        <div className={styles.navbarTitle}>THE MOVIFY PROJECT</div>
        <div className={styles.navbarSearch}>
          <SearchIcon />
          <input
            type="search"
            placeholder="Search a movie...."
            value={search}
            onChange={handleSearch}
          />
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
