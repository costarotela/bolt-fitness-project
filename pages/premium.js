import Head from 'next/head'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import styles from '../styles/Home.module.css'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Premium() {
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    const checkAccess = async () => {
      const { data, error } = await supabase.from('premium_access').select('*').eq('user_id', supabase.auth.user()?.id)
      if (data && data.length > 0) {
        setHasAccess(true)
      } else {
        setHasAccess(false)
      }
    }

    checkAccess()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Premium Plans</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Premium Plans
        </h1>
        {hasAccess ? (
          <div>
            <h2>Personalized Training and Diet Plans</h2>
            <p>Enjoy exclusive access to our premium training and diet plans.</p>
          </div>
        ) : (
          <div>
            <h2>Access Denied</h2>
            <p>You do not have access to this page. Please contact support for more information.</p>
          </div>
        )}
      </main>
    </div>
  )
}
