import { useContext } from "react"
import { DocumentContext } from "../context/DocumentContext"
import { HandleEditLanguage } from "@/app/helpers/EditLanguage"

interface CountryProps{
    userId: string
}

export const Country:React.FC<CountryProps>=({userId})=>{
    const document = useContext(DocumentContext)

    return (<select id="country" name="country" onChange={(e)=>HandleEditLanguage(userId,document?.document._id as string,e.target.value,document?.setDocument)} defaultValue={document?.document.language} style={{width:'35%',backgroundColor:'white',border:'none'}}>
        <option value="American English">American English</option>
        <option value="British English">British English</option>
        <option value="Indian English">Indian English</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Russian">Russian</option>
        <option value="Spanish">Spanish</option>
        <option value="Italian">Italian</option>
        <option value="Swedish">Swedish</option>
        <option value="Turkish">Turkish</option>
        <option value="Polish">Polish</option>
    </select>)
}
