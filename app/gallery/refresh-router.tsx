"use client"

import { useRouter } from "next/navigation";

export default function RefreshRouter() {
    
    const router = useRouter()

    setTimeout(() => {
        router.refresh()
    }, 1000)
}