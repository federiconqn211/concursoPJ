import AppsPortal from "Frontend/views/misApps/AppsPortal";

export default function MisAppsView() {
    return (
        <>
        <div className={'d-flex justify-content-center text-black-50'}>
                <h2>Mis Apps</h2>
        </div>
        <div>
            <AppsPortal />
        </div>
        </>
    );
}
