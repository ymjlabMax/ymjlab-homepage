"use client";
import { useEffect, useState } from "react";
import Errorpage from "./Errorpage";

function Error({ statusCode }) {
    const [code, setCode] = useState("");

    useEffect(() => {
        setCode(statusCode);
    }, [statusCode]);

    return <>{statusCode ? <Errorpage statusCode={statusCode} /> : "An error occurred on client"}</>;
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
