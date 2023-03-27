import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { UserResponse } from "../types";
import { Image } from "@mantine/core";
export default function Header() {
    const user: UserResponse = useSelector((state: any) => state.user);
    useEffect(() => {}, []);

    return (
        <>
            <div>{user.email}</div>
            <div>{user.name}</div>
            <Image src={user.photoUrl} />
        </>
    );
}
