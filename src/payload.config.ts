import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
// --- IMPORTA TUS NUEVAS COLECCIONES Y GLOBALES AQUÍ ---
import { Banners } from './collections/Banners'
import { Projects } from './collections/Projects'
import { ProjectPage } from './collections/ProjectPage'
import { Organization } from './global/Organization'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  // 1. Agregamos las colecciones a la lista
  collections: [Users, Media, Banners, Projects, ProjectPage],

  // 2. Agregamos los globales
  globals: [Organization],

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,

  // 3. AQUÍ VA EL PUNTO 4: El endpoint personalizado
  endpoints: [
    {
      path: '/home-data',
      method: 'get',
      handler: async (req) => {
        const banners = await req.payload.find({
          collection: 'banners',
          where: { active: { equals: true } },
        })

        const projects = await req.payload.find({
          collection: 'projects',
          limit: 10,
          // Seleccionamos solo campos necesarios para optimizar ancho de banda
          select: {
            name: true,
            resumen: true,
          }
        })

        return Response.json({
          banners: banners.docs,
          projects: projects.docs,
        })
      },
    },
  ],

  plugins: [],
})