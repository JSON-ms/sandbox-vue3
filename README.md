# @jsonms/sandbox-vue3

[![npm version](https://badge.fury.io/js/@jsonms%2Fsandbox-vue3.svg)](https://www.npmjs.com/package/@jsonms/sandbox-vue3)

## Installation

1. Clone the repository
```bash
git clone https://github.com/JSON-ms/sandbox-vue3.git
cd sandbox-vue3
```

2. Install dependencies

Using NPM
```bash
npm install
```

Using Yarn:
```bash
yarn
```

Open your browser and navigate to http://localhost:3000 (or the port specified in the terminal) to see your application in action.

## Connecting to JSON.ms

1. Create a JSON.ms account: Go to [JSON.ms](https://json.ms) and create an account if you don't have one.

2. Create a new JSON project: Prepare a new YAML structure and setup your endpoint to match your local JSON.ms handler endpoint (**not the one from this project**). Check the Integration panel on [JSON.ms](https://json.ms) for more information.

3. Synchronize your project with your local `/src/jms` folder.

4. Adjust `/src/plugins/jsonms.ts` to match your needs.

## Setup Environment Variables

1. Copy `.env.example` to `.env.development` and adjust with your settings. 

## Running the Project

After installing the dependencies, you can run the development server:

Using NPM:
```bash
npm run dev
```

Using Yarn:
```bash
yarn dev
```

## Usage in Templates

Here's a complete example using content, markdown and files. 

```ts
import { marked } from "marked";
import { useJsonMs } from "@/plugins/jsonms";

const { data, locale, getFilePath } = useJsonMs();
```

The `userJsonMs()` composable returns `data`, `locale` and `getFilePath`. You can use these variables to populate your views and display media content.

Here's a stripped-down example:

```vue
<header>
  
  <!-- LOGO -->
  <img :src="getFilePath(data.default.logo)" />
  
  <!-- TITLE -->
  <h1>{{ data.default.title[locale] }}</h1>
  
  <!-- BODY (MARKDOWN FORMAT) -->
  <div v-html="marked.parse(data.default.body[locale])" />
</header>
```

A couple of things are worth noticing here:

1. Files must be loaded with `getFilePath`. Do not concatenate with a server address before since files are not always addresses, but sometimes in base64 format.
2. Multilingual data always end with the locale. 
3. Data in markdown format must be parsed using a 3rd party library. In this case, we chose `marked` which does the job perfectly.

## Project Structure

The project structure is as follows:

```
sandbox-vue3/
├── public/                    # Static assets
├── src/                       # Source files
│   ├── components/            # Vue components
│   ├── views/                 # Views for routing
│   ├── router/index.ts        # Vue Router configuration
│   ├── jms/                   # Synced files from json.ms
│   ├── plugins/jsonsms.ts     # JSON.ms configurations
│   ├── App.vue                # Main App component
│   └── main.js                # Entry point
├── .gitignore                 # Git ignore file
├── index.html                 # Main HTML file
├── package.json               # Project metadata and dependencies
└── vite.config.js             # Vite configuration
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License. See the LICENSE file for details.