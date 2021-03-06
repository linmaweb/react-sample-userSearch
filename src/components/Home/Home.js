import React, { useContext } from "react";
import { GithubContext } from "../../context/GithubContext";
import Title from "../Title/Title";
import Search from "../Search/Search";
import User from "../Users/User";
import Nav from "../Nav/Nav";
import "./Home.css";

const Home = () => {
  const { user, error } = useContext(GithubContext);
  return (
    <section className="home">
      <Title type="User Search" />
      <Search />
      <div className="container">
        {user ? (
          <>
            <User />
            <Nav />
          </>
        ) : (
          <p className="noUser">{error}</p>
        )}
      </div>
    </section>
  );
};

export default Home;
