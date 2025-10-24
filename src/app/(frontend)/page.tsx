import { headers as getHeaders } from 'next/headers.js'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  // Check if user is authenticated
  if (user) {
    // If user is authenticated, redirect to admin dashboard
    redirect(payloadConfig.routes.admin)
  } else {
    // If user is not authenticated, redirect to admin login page
    // This will show the login form instead of creating a redirect loop
    redirect(`${payloadConfig.routes.admin}/login`)
  }
}
