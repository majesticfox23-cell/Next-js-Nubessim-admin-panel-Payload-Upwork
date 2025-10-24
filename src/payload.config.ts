// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { s3Storage } from '@payloadcms/storage-s3'
import { Blog } from './collections/Blog'
import { FAQ } from './collections/FAQ'
import { Popular_FAQ } from './collections/Popular FAQ'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,

    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Blog, FAQ, Popular_FAQ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  // CORS Configuration - Allow requests from your blog page domain
  cors: [
    // Local development
    'http://localhost:3000',
    'http://localhost:3306',
    'http://127.0.0.1:3000',
    'http://localhost:5500',
    'http://127.0.0.1:5500',

    // Your blog domains (with and without trailing slashes)
    'https://nubessim-blog-page-upwork.vercel.app',
    'https://nubessim-blog-page-upwork.vercel.app/',
    'https://nubessim-blog-page-upwork.vercel.app/blog',
    'https://nubessim-blog-page-upwork.vercel.app/blog/',
    'https://nubessim-blog-page-upwork.vercel.app/blog/blog.php',

    // FAQ pages
    'https://nubessim-blog-page-upwork.vercel.app/faq',
    'https://nubessim-blog-page-upwork.vercel.app/faq/',
    'https://nubessim-blog-page-upwork.vercel.app/faq/get-set.html',

    // Your Payload CMS admin domain
    'https://next-js-nubessim-admin-panel-payloa.vercel.app',
    'https://admin.nubessim.com',

    // Generic Vercel/Netlify patterns
    'https://*.vercel.app',
    'https://*.netlify.app',
    'https://*.github.io',

    // Local file access
    'file://',

    // XAMPP/Local server
    'http://localhost',
    'http://127.0.0.1',
    'http://localhost:80',
    'http://127.0.0.1:80',
    'http://localhost/blog',
    'http://localhost/blog/',
    'http://localhost/blog/blog.php',

    'https://nubessim.com/blog/',
    'https://nubessim.com/blog',
    'https://nubessim.com/',
    'https://nubessim.com',
    'https://www.nubessim.com/blog/',
    'https://www.nubessim.com/blog',
    'https://www.nubessim.com/',
    'https://www.nubessim.com',
  ],
  csrf: [
    // Local development
    'http://localhost:3000',
    'http://localhost:3306',
    'http://127.0.0.1:3000',
    'http://localhost:5500',
    'http://127.0.0.1:5500',

    // Your blog domains
    'https://nubessim-blog-page-upwork.vercel.app',
    'https://nubessim-blog-page-upwork.vercel.app/',
    'https://nubessim-blog-page-upwork.vercel.app/blog',
    'https://nubessim-blog-page-upwork.vercel.app/blog/',
    'https://nubessim-blog-page-upwork.vercel.app/blog/blog.php',

    // FAQ pages
    'https://nubessim-blog-page-upwork.vercel.app/faq',
    'https://nubessim-blog-page-upwork.vercel.app/faq/',
    'https://nubessim-blog-page-upwork.vercel.app/faq/get-set.html',

    // Your Payload CMS admin domain
    'https://next-js-nubessim-admin-panel-payloa.vercel.app',
    'https://admin.nubessim.com',

    // Generic patterns
    'https://*.vercel.app',
    'https://*.netlify.app',
    'https://*.github.io',

    // Local file access
    'file://',

    // XAMPP/Local server
    'http://localhost',
    'http://127.0.0.1',
    'http://localhost:80',
    'http://127.0.0.1:80',
    'http://localhost/blog',
    'http://localhost/blog/',
    'http://localhost/blog/blog.php',

    'https://nubessim.com/blog/',
    'https://nubessim.com/blog',
    'https://nubessim.com/',
    'https://nubessim.com',
    'https://www.nubessim.com/blog/',
    'https://www.nubessim.com/blog',
    'https://www.nubessim.com/',
    'https://www.nubessim.com',
  ],
  plugins: [
    s3Storage({
      collections: {
        blog: {
          prefix: '',
        },
        media: {
          prefix: '',
        },
      },
      bucket: process.env.R2_BUCKET || '',
      config: {
        endpoint: process.env.R2_ENDPOINT || '',
        forcePathStyle: true,
        region: process.env.R2_REGION || 'auto',
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
        },
      },
    }),
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
