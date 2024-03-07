"use client"

import da from "@/lang/da.json"
import en from "@/lang/en.json"
import { useEffect, useState } from "react"

export default function useLang(lang = "en") {
    const [state, setState] = useState(lang)

    useEffect(function () {
        switch (lang) {
            case "en":
                setState(en)
                break;
            case "da":
                setState(da)
                break;
        }
    }, [lang])

    return state
}



// function changelang() {
//     var html = document.getElementById("html")
//     html.setAttribute("lang", "da")

// }
// export default changelang
