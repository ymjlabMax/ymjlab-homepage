import { Mainpage, Summary, Content, Detail, ProjectPage1, ProjectPage2, ServiceBg, Business } from "../../section_metaverse";

export default function Page() {
    return (
        <>
            <Mainpage />
            <Summary />
            <Content />
            <ServiceBg />
            {/* <Detail /> */}
            <Business />
            <ProjectPage1 />
            <ProjectPage2 />
        </>
    );
}
