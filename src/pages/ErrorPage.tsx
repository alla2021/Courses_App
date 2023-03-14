import { useRouteError } from "react-router-dom";

export default function ErrorPage(): JSX.Element  {
    const error:any = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, something went wrong.</p>
            <p>{error.statusText ?? error.message}</p>
        </div>
    );
}

