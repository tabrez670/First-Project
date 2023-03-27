import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: "light",
                fontFamily: "Roboto",
            }}
        >
            <BrowserRouter>
                <Provider store={store}>
                    <Notifications position="top-right" zIndex={2077}/>
                    <App />
                </Provider>
            </BrowserRouter>
        </MantineProvider>
    </React.StrictMode>
);
