import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const exceptions: string[] = ["cookie", "set-cookie-parser"];

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/travel_world/",
    build: {
        rollupOptions: {
            output: {
                manualChunks(id: string) {
                    if (id.includes("node_modules")) {
                        const module: string = id
                            .split("node_modules/")[1]
                            .split("/")[0];

                        if (exceptions.includes(module)) {
                            return null;
                        }

                        return module;
                    }
                },
            },
        },
    },
});
