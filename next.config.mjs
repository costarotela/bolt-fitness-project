/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: 'https://pfebiivuiwvyozmuznbm.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZWJpaXZ1aXd2eW96bXV6bmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczMTc3NzcsImV4cCI6MjA1Mjg5Mzc3N30.ldIHqZyjglc7J30xNEGPyqoED_6znFnpmyuB02zqQrU'
  }
}

export default nextConfig
