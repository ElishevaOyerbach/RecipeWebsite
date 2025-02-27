import { useState } from "react";
import { useSelector } from "react-redux";


function useUpdates() {
    
    const [massege, setMassege] = useState("")
    const User = useSelector(u => u.UserSlice)


    const ShowMassege = () => {
        if(User.name=="User"){
            setMassege("oops!!! Unregistered user , details must be updated in the system")
        }
        else
            setMassege(`We will send updates to the email address ${User.email}`)
    }
    return{massege,ShowMassege};
}
export default useUpdates;
