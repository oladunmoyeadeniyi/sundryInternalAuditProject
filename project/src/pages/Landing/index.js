import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import ButtonField from '../../components/ButtonField'

function Landing() {

    useEffect(() => {
        document.title = `Home`
        return () => {
            
        }
    }, [])
    return (
        <div>
            <ButtonField>
                <Link to="/signIn">
                    Sign In
                </Link>
            </ButtonField>

            <ButtonField>
                <Link to="/signUp">
                    Sign Up
                </Link>
            </ButtonField>

        </div>
    )
}

export default Landing
