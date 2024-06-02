import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
    return (
        <div className="relative h-screen w-full flex flex-col">
            <Navbar />
            <main className="w-full">{children}</main>
        </div>
    );
}

export default layout;
