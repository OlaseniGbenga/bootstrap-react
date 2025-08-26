import { MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "@/App.tsx";
import { store, persistor } from "@/store/store";
import { theme, variablesResolver } from "@/utils/mantine-theme.ts";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider theme={theme} cssVariablesResolver={variablesResolver}>
          <App />
        </MantineProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
