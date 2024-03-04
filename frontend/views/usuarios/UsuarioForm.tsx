import ContactRecord from "Frontend/generated/com/example/application/services/CRMService/ContactRecord";
import UsuarioRecord from "Frontend/generated/com/example/application/services/UsuarioService/UsuarioRecord";
import {useEffect, useState} from "react";
import {Select, SelectItem} from "@hilla/react-components/Select";
import {useForm} from "@hilla/react-form";
import ContactRecordModel from "Frontend/generated/com/example/application/services/CRMService/ContactRecordModel";
import UsuarioRecordModel from "Frontend/generated/com/example/application/services/UsuarioService/UsuarioRecordModel";
import {CRMService, OrganismoService} from "Frontend/generated/endpoints";
import organismo from "Frontend/generated/com/example/application/data/Organismo";
import {TextField} from "@hilla/react-components/TextField";
import {EmailField} from "@hilla/react-components/EmailField";
import {Button} from "@hilla/react-components/Button";
import ContactForm from "Frontend/views/contacts/ContactForm";

interface UsuarioFormProps {
    usuario?: UsuarioRecord | null;
    onSubmit?: (usuario: UsuarioRecord) => Promise<void>;
}
    export default function UsuarioForm({usuario, onSubmit}: UsuarioFormProps) {
    const [organismos, setOrganismos] = useState<SelectItem[]>([]);
    //const [roles, setRoles] = useState<SelectItem[]>([]);
    const {field, model, submit, reset, read} = useForm(UsuarioRecordModel, { onSubmit } );

        useEffect(() => {
            read(usuario);
        }, [usuario]);

        useEffect(() => {
            getOrganismos();
        }, []);

        async function getOrganismos() {
            const organismos = await OrganismoService.findAllOrganismos();
            const organismoItems = organismos.map(organismo => {
                return {
                    label: organismo.nombre,
                    value: organismo.id + ""
                };
            });
            setOrganismos(organismoItems);
        }





        return (
            <div className="flex flex-col gap-s items-start">
                <table className={'table table-gray '}>
                    <thead>
                    <tr>
                        <td colSpan={5}>MODIFICAR USUARO</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><TextField label="DNI" {...field(model.dni)} /></td>
                        <td><TextField label="Username" {...field(model.username)} /></td>
                        <td><TextField label="Password" {...field(model.password)} /></td>
                        <td><TextField label="Nombre" {...field(model.nombre)} /></td>
                        <td><TextField label="Apellido" {...field(model.apellido)} /></td>

                    </tr>

                    <tr>
                        <td><TextField label="Email" {...field(model.email)} /></td>
                        <td><TextField label="Telefono" {...field(model.telefono)} /></td>
                        <td><TextField label="Domicilio" {...field(model.domicilio)} /></td>
                        <td><TextField label="Tipo" {...field(model.tipo)} /></td>
                        <td><TextField label="Rol" {...field(model.rol)} /></td>

                    </tr>
                    <tr>
                        <td><Select label="Organismo" items={organismos} {...field(model.organismo.id)} /></td>
                    </tr>
                    </tbody>
                </table>


                <div className="flex gap-m">
                    <Button onClick={submit} theme="primary">Guardar</Button>
                    <Button onClick={reset}>Resetear</Button>


                </div>
            </div>
        )

    }