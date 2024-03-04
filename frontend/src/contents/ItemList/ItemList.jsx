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
    // grid 테스트 할 때 필요한 grid-container
    // <div className="overflow-x-hidden grid-container ">

    // grid 없이, 이번엔 flex
    <div className="flex flex-col overflow-x-hidden bg-gray-200">
      {/* ✅ height 단위 변경 */}
      <header className="w-full bg-indigo-200 ">
        <Navigation />
      </header>

      {/* <main className="flex flex-col items-center w-full "> */}
      <main className="w-full">
        {/* 검색 hero 섹션 */}
        <section className="flex flex-col items-center px-6 py-12 bg-green-200">
          <div className=" bg-gray-200 tablet:h-[560px] tablet:max-w-[560px] flex flex-col justify-between items-center">
            <h1 className="text-6xl font-semibold tracking-tight text-center leading-[70px] font-sans4">
              Discover the world’s top designers & creatives
            </h1>

            <h2 className="text-base tablet:max-w-[565px] mx-6 my-auto text-stone-700	leading-2 text-center	">
              Dribbble is the leading destination to find & showcase creative
              work and home to the world's best design professionals.
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
          </div>
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
