import { Mainpage, Summary, Content, Servicepage } from "../../section_kkultrip";
export default function Page() {
    return (
        <>
            <Mainpage />
            <div className="page-wrap">
                <Summary />
                <Content />
                <Servicepage />
            </div>
        </>
    );
}
