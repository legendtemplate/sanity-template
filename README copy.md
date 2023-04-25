# Folder Structure

> Folder structure for next js and sanity projects layout

    ├── ...
    ├── .next
    ├── .vscode
    ├── .sanity
    ├── app
    │   ├── studio
    │   │     ├──  [[...index]]
    │   │     │     ├──  loading.tsx
    │   │     │     ├──  page.tsx
    │   │     │     ├──  head.tsx
    │   ├── api
    │   │     ├──  preview.ts
    │   │     ├──  exit-preview.ts
    │   ├── page.tsx (Home Page)
    │   ├── layout.tsx (Layout Page)
    │   ├── loading.tsx
    ├── components
    ├── environment
    │   ├── index.ts
    ├── node_modules
    ├── public
    ├── sanity
    │   ├── schema
    │   ├── static
    │   ├── utils
    │   │     ├── sanity.cli.ts
    │   │     ├── sanity.config.ts
    │   ├── libs
    │   │     ├── sanity.client.ts
    │   │     ├── image.builder.ts
    ├── style
    │   ├── global.css
    │   ├── global.scss
    ├── types
    │   ├── index.ts
    │── .eslintrc.json
    │── .gitignore
    │── next-env.d.ts
    │── next.config.js
    │── package-lock.json
    │── package.json
    │── postcss.config.js
    │── README.md
    │── tailwind.config.js
    │── tsconfig.json

> Use npm package

~~Chakra UI~~ <br />
~~Tailwind CSS~~ <br />
React <br />
~~React Icons~~ <br />
Next <br />
Typescript <br />
Javascript <br />
Framer Motion <br />
Redux <br />
Sanity <br />

This is a [Sanity]() documentation.

# Sanity CMS

Start a New sanity studio Project.

```bash
npm create sanity@latest
```

## schemas

```bash
import {defineField, defineType} from 'sanity'
```

---

```bash
export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
    fields: []
)}
```

---

```bash
import author from './author'
export const schemaTypes = [author]
```

---

### string

```bash
  defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Make it catchy',
    }),
```

---

### text

```bash
 {
  title: 'Description',
  name: 'description',
  type: 'text'
}
```

---

### image

```bash
 defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
        fields: [
          {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
    {
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    }
        ]
    }),
```

---

### slug

```bash
{
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96,
  }
}
```

---

### date

```bash
{
  title: 'Release date',
  name: 'releaseDate',
  type: 'date',
  options: {
    dateFormat: 'YYYY-MM-DD',
    calendarTodayLabel: 'Today'
  }
}
```

---

### datetime

```bash
{
  title: 'Launch Scheduled At',
  name: 'launchAt',
  type: 'datetime',
  options: {
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'HH:mm',
    timeStep: 15,
    calendarTodayLabel: 'Today'
  }
}
```

---

### preview

```bash
   preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
```