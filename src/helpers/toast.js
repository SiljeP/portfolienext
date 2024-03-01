"use client"

import { useToast } from "@/components/ui/use-toast"

export default function ToastWithTitle() {
    const { toast } = useToast()


    const generateRandomNotif = () => {
        const FACTS = [
            "John Anderson",
            "Emily Peterson",
            "Frank Daniels",
            "Laura Williams",
            "Donald Sanders",
            "Tom Smith",
            "Alexandra Black",
        ];

        const randomIndex = Math.floor(Math.random() * FACTS.length);

        const data = {
            id: Math.random(),
            text: `New notification from ${FACTS[randomIndex]}`,
        };

        return data;
    };

    return (
        <button
            variant="outline"
            onClick={() => {
                toast({
                    title: "Fun fact!",
                    description: generateRandomNotif(),
                })
            }}
        >
            Show Toast
        </button>
    )
}
