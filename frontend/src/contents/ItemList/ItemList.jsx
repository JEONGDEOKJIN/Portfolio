import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import CardList from "../../components/CardList";
import { isError, useQuery } from "react-query";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import RecommenedKeyWord from "../../components/RecommendedKeyWord";
import Header1Discover from "../../components/Header1Discover";
import Header2Desc from "../../components/Header2Desc";
import RecommendedKeyWord from "../../components/RecommendedKeyWord";

const ItemList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [searchBarInput, setSearchBarInput] = useState("");

  return (

    <div className="flex flex-col overflow-x-hidden ">

      <header className="w-full bg-indigo-200 ">
        <Navigation />
      </header>

      <main className="w-full">
        
        {/* 검색 hero 섹션 */}
        <section className="flex flex-col items-center px-6 py-10 mt-[150px]">
          
          <div className="  tablet:h-[560px] tablet:max-w-[560px] flex flex-col justify-evenly items-center">
  
            <Header1Discover />

            <Header2Desc />

            <SearchBar
              className="w-screen"
              setIsSubmitClicked={setIsSubmitClicked}
              isSubmitClicked={isSubmitClicked}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              searchBarInput={searchBarInput}
              setSearchBarInput={setSearchBarInput}
            />

            <div className="flex flex-col items-center w-screen mt-5">
              <ul className="flex flex-wrap items-center leading-[3rem] text-center justify-center">
                <li className="mr-3 text-xs text-gray-500">
                  Trending searches
                </li>
                <RecommendedKeyWord 
                  setIsSubmitClicked= {setIsSubmitClicked}
                  setSearchBarInput = {setSearchBarInput}
                  setSearchTerm = {setSearchTerm} 
                  keyword={"Next.js"} />
                <RecommendedKeyWord 
                  setIsSubmitClicked= {setIsSubmitClicked}
                  setSearchBarInput = {setSearchBarInput}
                  setSearchTerm = {setSearchTerm} 
                  keyword={"React.js"} />
                <RecommendedKeyWord 
                  setIsSubmitClicked= {setIsSubmitClicked}
                  setSearchBarInput = {setSearchBarInput}
                  setSearchTerm = {setSearchTerm} 
                  keyword={"Redux & Recoil"} />
                <RecommendedKeyWord 
                  setIsSubmitClicked= {setIsSubmitClicked}
                  setSearchBarInput = {setSearchBarInput}
                  setSearchTerm = {setSearchTerm} 
                  keyword={"반응형 웹"} />
                <RecommendedKeyWord 
                  setIsSubmitClicked= {setIsSubmitClicked}
                  setSearchBarInput = {setSearchBarInput}
                  setSearchTerm = {setSearchTerm} 
                  keyword={"figma"} />

              </ul>
            </div>
          </div>
          
        </section>

        {/* 카드 리스트 섹션 */}
        <section className="p-3 mb-3 main ">
          <CardList
            searchTerm={searchTerm}
            setIsSubmitClicked={setIsSubmitClicked}
            isSubmitClicked={isSubmitClicked}
            searchBarInput={searchBarInput}
          />
        </section>

      </main>

    
      <Footer />
    
    
    </div>
  );
};

export default ItemList;
