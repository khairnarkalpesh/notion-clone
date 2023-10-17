"use client";
import { Spinner } from "@/components/ui/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Navigations from "./_components/navigations";

const MainLayout = ({children} : {children: ReactNode}) => {
    const {isAuthenticated, isLoading} = useConvexAuth();

    if(isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        )
    }

    if(!isAuthenticated){
        return redirect("/")
    }

    return (
        <div className="h-full flex dark:bg-[#1f1f1f]">
            <Navigations />
            <main className="flex-1 h-full overflow-y-auto">
            {children}
            </main>
        </div>
    )
}

export default MainLayout