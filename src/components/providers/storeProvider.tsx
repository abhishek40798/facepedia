"use client";
import { AppStore, persistor, store } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CustomThemeProvider from "../theme/themeProvider";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = store;
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistor}>
        <CustomThemeProvider>
        {children}
        </CustomThemeProvider>
        </PersistGate>
    </Provider>
  );
}
