import styles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import VerificationCodeInput from '../VerificationCodeInput/VerificationCodeInput'

export function LoginBox() {
    const { signInUrl } = useContext(AuthContext)
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e veja a saúde de seu aquário</strong>
            <div className={styles.signInWithGithub}>
                <VerificationCodeInput/>
            </div>
        </div>
    )
}