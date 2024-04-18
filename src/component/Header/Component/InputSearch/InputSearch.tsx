import classNames from "classnames/bind";
import style from "./InputSearch.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const cx = classNames.bind(style)
function InputSearch() {
    const [introIndex, setIntroIndex] = useState(0)
    const intro = [
        'Khu đô thị Nam An Khánh',
        'BDS Hoai Duc',
        'BDS Ha Noi'
    ]
    const [placeholder, setPlaceholder] = useState('')
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    useEffect(() => {
        setPlaceholder(intro[introIndex].slice(0, placeholderIndex))
        const play = setTimeout(() => {
            if (placeholderIndex + 1 > intro[introIndex].length) {
                introIndex + 1 === intro.length ? setIntroIndex(0) : setIntroIndex(introIndex + 1)
                setPlaceholderIndex(0)
            } else {
                setPlaceholderIndex(placeholderIndex + 1)
            }
        }, 120)
        return () => clearTimeout(play)
    },)
    return (
        <div className={cx("search-input")}>
            <input
                placeholder={placeholder}
            />
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <span>Tìm kiếm</span>
            </button>
        </div>
    );
}

export default InputSearch;