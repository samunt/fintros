import React, {FC, ReactElement, useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";


type BlogProps = {
    title: string
}

const Blog: FC<BlogProps> = ({title}): ReactElement => {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    return (
        <div>

        </div>
    )
};

export default Blog
