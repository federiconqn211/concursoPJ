import React, {useState} from "react";
import AppRecord from "Frontend/generated/com/example/application/services/AppService/AppRecord";
import OrganismoRecord from "Frontend/generated/com/example/application/services/OrganismoService/OrganismoRecord";
import {AutoCrud} from "@hilla/react-crud";
import {OrganismoService} from "Frontend/generated/endpoints";
import OrganismoModel from "Frontend/generated/com/example/application/data/OrganismoModel";
import AccesoDenegado from "Frontend/views/AccesoDenegado/AccesoDenegado";

export default function OrganismoView(){
    const [organismos, setOrganismos] = useState<OrganismoRecord[]>([]);
    const username = localStorage.getItem('username');
    const rol = localStorage.getItem('userrol');
return(
    <div>

        {(username && (rol === 'ADMIN') )? (
            <AutoCrud service={OrganismoService} model={OrganismoModel}/>
            ):(
        <AccesoDenegado />
        )
        }
    </div>
);

}