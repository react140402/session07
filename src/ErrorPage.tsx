import { Result } from "antd";
import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError() as any;
    console.log(error)

    return <>
        <Result
            subTitle={error.message}
            title={error.statusText}
            status={error.status}>
        </Result>
    </>
}