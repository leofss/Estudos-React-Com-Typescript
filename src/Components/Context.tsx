import React, {useContext} from "react";
import { AppContext } from "../App";

interface Props {

}

const Context = () => {

    const details = useContext(AppContext)
    return(
        <>
        {details &&(
            <div>
                <h2>
                    linguagem: {details.lang}
                    framework: {details.framework}
                    projects: {details.projects}
                </h2>
            </div>
        )}
        </>
    )
}

export default Context