import { Pagination } from "@mui/material";
import React from "react";

interface IPaginationProps {
    page: number;
    setPage: (page: number) => void;
    totalPageCount: () => number;
}

const PaginationItem = ({ page, setPage, totalPageCount }: IPaginationProps) =>{

    const handelChange=(e: React.ChangeEvent<unknown>, page: number)=>{
        setPage(page)
    }

    return(
        <>
            <Pagination onChange={handelChange} count={totalPageCount()} page={page} />
        </>
    )
}

export default PaginationItem;