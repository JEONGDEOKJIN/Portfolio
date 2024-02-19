import React, { useState } from "react";
import Menu from "../../components/Menu";
import SearchBar from "../../components/SearchBar";
import BulletList from "../../components/BulletList";
import MessageList from "../../components/MessageList";
import Modal from "../../components/Modal";
import UserList from "../../components/UserList";
import CardList from "../../components/CardList";
import fetchAllMetaData from "../../fetch/ItemList/fetchAllMetaData";
import { isError, useQuery } from "react-query";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import HeroSection from "../../components/HeroSection";

const ItemList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [searchBarInput, setSearchBarInput] = useState("");

  return (
    <div className="overflow-x-hidden grid-container ">
      
      {/* ✅ height 단위 변경 */}
      <header className=" bg-indigo-200 h-[6rem] w-screen ">
        <Navigation />
        
      </header>

      
      <main>
        
        <section className="bg-green-200">
          <h1 className="text-6xl">
            Discover the world’s top designers & creatives
          </h1>

          <h2>
            Dribbble is the leading destination to find & showcase creative work
            and home to the world's best design professionals.
          </h2>

          <SearchBar
            className="w-screen"
            setIsSubmitClicked={setIsSubmitClicked}
            isSubmitClicked={isSubmitClicked}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            searchBarInput={searchBarInput}
            setSearchBarInput={setSearchBarInput}
          />
        </section>

        {/* 메뉴 */}
        {/* <Menu className="menuBar " /> */}

        {/* main */}
        <section className="p-3 mb-3 main ">
          <CardList
            searchTerm={searchTerm}
            setIsSubmitClicked={setIsSubmitClicked}
            isSubmitClicked={isSubmitClicked}
            searchBarInput={searchBarInput}
          />
        </section>

        {/* sidebarLeft */}
        {/* <aside className="px-5 py-3 sidebarLeft">
          <BulletList />
          <UserList />
        </aside> */}

        {/* sidebarRight */}
        {/* <aside className="px-5 py-3 sidebarRight">
          <MessageList />
        </aside> */}

        {/* 상세 페이지 */}
        {/* <Modal /> */}
      </main>
      <Footer />
    </div>
  );
};

export default ItemList;
