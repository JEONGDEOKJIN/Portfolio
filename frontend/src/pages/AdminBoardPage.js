import React from "react";
import { useQuery } from "react-query";
import fetchAllMetaData from "../fetch/ItemList/fetchAllMetaData";
import loadingMessage from "../utils/loadingMessage";
import errorMessage from "../utils/errorMessage";
import statusMessages from "../utils/statusMessages"
import AdminBoard from "../contents/admin/AdminBoard";

const AdminBoardPage = () => {

return (
    <>
        <AdminBoard />
    </>
)



};

export default AdminBoardPage;
