"use client"

import da from "@/lang/da.json"
import en from "@/lang/en.json"
import { useEffect, useState } from "react"

export default function useLang() {
    const [state, setState] = useState(en)

    function changeLanguage(lang) {
        switch (lang) {
            case "en":
                setState(en)
                break;
            case "da":
                setState(da)
                break;
        }
    }


    return { lang: state, changeLanguage }
}



