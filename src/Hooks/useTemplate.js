import { useEffect, useState } from "react"

/**
 * @returns {[any[], any]} 
 **/
function useTemplate(path) {
    let [template, setTemplate] = useState([])

    useEffect(() => {
        let fetchTemplate = async () => {
            let response = await fetch(`${process.env.REACT_APP_SERVER_IP}/${path}`)
            let data = await response.json()

            setTemplate(data)
        }

        fetchTemplate()
    }, [path])

    let updateTemplate = (i, newVal) => {
        let copyTemplate = JSON.parse(JSON.stringify(template))
        copyTemplate[i].value = newVal;

        setTemplate(copyTemplate)
    }

    return [template, updateTemplate];
}

export default useTemplate