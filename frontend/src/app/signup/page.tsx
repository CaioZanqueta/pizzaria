import styles from '../page.module.scss'
import logoImg from '/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Signup() {

  async function handleRegister(formData: FormData) {
    "use server"

    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    console.log(name)
    console.log(email)
    console.log(password)
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image
          src={logoImg}
          alt='Logo da pizzaria'
        />
        <section className={styles.login}>
          <h1>Criando sua conta</h1>
        <form action={handleRegister}>
          <input
            type="text"
            required
            name='name'
            placeholder='Digite seu nome...'
            className={styles.input}
          />

          <input
            type="email"
            required
            name='email'
            placeholder='Digite seu email...'
            className={styles.input}
          />

          <input
            type="password"
            required
            name='password'
            placeholder='Digite sua senha...'
            className={styles.input}
          />

          <button type="submit" className={styles.button}>
            Cadastrar
          </button>
        </form>

        <Link href="/" className={styles.text}>
          Já possui uma conta? Faça o login
        </Link>
      </section>
      </div>
    </>
  )
}