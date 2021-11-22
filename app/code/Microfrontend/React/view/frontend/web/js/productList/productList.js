import React from "react";
import ReactDOM from "react-dom";

const element = document.getElementById("mf_product_list");
const App = React.lazy(() => import("./App"));

ReactDOM.render(
    <React.Suspense
        fallback={
            <div dangerouslySetInnerHTML={{ __html: element.innerHTML }} />
        }
    >
        <App />
    </React.Suspense>,
    element
);