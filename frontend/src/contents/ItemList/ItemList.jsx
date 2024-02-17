import React from "react";
import Menu from "../../components/Menu";
import SearchBar from "../../components/SearchBar";
import BulletList from "../../components/BulletList";
import MessageList from "../../components/MessageList";
import Modal from "../../components/Modal";
import UserList from "../../components/UserList";
import CardList from "../../components/CardList";
import fetchAllMetaData from "../../fetch/ItemList/fetchAllMetaData";
import { isError, useQuery } from "react-query";


const ItemList = () => {
  return (
    <div className="overflow-x-hidden grid-container ">
      {/* header */}
      <SearchBar className="w-screen " />

      {/* 메뉴 */}
      <Menu className="menuBar " />

      {/* main */}
      <section className="p-3 mb-3 main ">
        <CardList />
      </section>

      {/* sidebarLeft */}
      <aside className="px-5 py-3 sidebarLeft">
        <BulletList />
        <UserList />
      </aside>

      {/* sidebarRight */}
      <aside className="px-5 py-3 sidebarRight">
        <MessageList />
      </aside>

      {/* 모달 */}
      {/* <Modal /> */}

      {/* footer */}
      <footer className="w-full p-5 mx-auto text-center footer bg-stone-200 ">
        🎏Footer 후터 푸터 퓨터 퓨털 휘털 footer🎏
      </footer>
    </div>
  );
};

export default ItemList;
