import React from "react";
import {UseUserLocalStorage} from "../../hooks/UseUserLocalStorage";

const RolesViewModel = () => {
    const {user} = UseUserLocalStorage();
    return{user};
}
export default {RolesViewModel}