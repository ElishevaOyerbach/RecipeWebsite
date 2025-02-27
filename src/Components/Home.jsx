import * as React from 'react';
import '../Css/CssLogin.css';
import useUpdates from '../Hooks/useUpdates';
//עיצוב
import Button from '@mui/material/Button';

const Home = () => {

    const { massege, ShowMassege } = useUpdates();

    React.useEffect(() => {
        if (massege) {
            alert(massege);
        }
    }, [massege]);

    return (
        <>
            <div class="home">
                <div className='ShowMassege'>
                    <Button onClick={() => {
                        ShowMassege();
                    }} style={{ textDecoration: 'none', color: "white", backgroundColor: 'rgba(71, 8, 59, 0.88)' }} variant="text">
                    To confirm receipt of updates by email
                    </Button>
                </div>
            </div>

        </>
    )

}
export default Home






