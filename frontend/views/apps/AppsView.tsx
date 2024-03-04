import {AutoCrud} from "@hilla/react-crud";
import {AppService} from "Frontend/generated/endpoints";
import AppModel from "Frontend/generated/com/example/application/data/AppModel";
import React, {useState} from "react";
import ContactRecord from "Frontend/generated/com/example/application/services/CRMService/ContactRecord";
import AppRecord from "Frontend/generated/com/example/application/services/AppService/AppRecord";
import AccesoDenegado from "Frontend/views/AccesoDenegado/AccesoDenegado";

export default function AppsView(){
    const [apps, setApps] = useState<AppRecord[]>([]);
    const username = localStorage.getItem('username');
    const rol = localStorage.getItem('userrol');
    return(
        <div>
            {username && (rol === 'ADMIN') ? (
                <AutoCrud service={AppService} model={AppModel} />
            ) : (
                <AccesoDenegado />
            )}
        </div>
    );
}