import React from "react";
import { render } from "react-dom";
import {
    // createInertiaApp,
    InertiaApp,
} from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 250,

    // The color of the progress bar.
    color: "#29d",

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: true,
});

// createInertiaApp({
//     resolve: (name) => require(`./Pages/${name}`),
//     setup({ el, App, props }) {
//         render(<App {...props} />, el);
//     },
// });

const app = document.getElementById("app");

render(
    <InertiaApp
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={(name) => require(`./Pages/${name}`).default}
    />,
    app
);
