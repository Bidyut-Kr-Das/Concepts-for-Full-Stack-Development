1. Initialize the npm project

```bash
npm init
```

2. Install packages

```bash
npm install <package-name>
```

3. Development and production environments

> Development
>
> Use this environment while actively developing. Changes are frequent, so using ts-node avoids repeated compilation to JavaScript and lets you run TypeScript directly.

Add a development script to package.json:

```json
{
    "scripts": {
        "dev": "ts-node anwesha/shreemoyee.ts" //<-Add This line for now its just tsc
    }
}
```

Run the development script:

```bash
npm run dev
```

> Production
>
> Use this environment for deployment. Source TypeScript is compiled once to JavaScript and the compiled output is run directly.

Add a build script to package.json to compile TypeScript:

```json
{
    "scripts": {
        "build": "tsc" //<-Add This line for now its just tsc
    }
}
```

Run the build step:

```bash
npm run build
```

Then add a start script to run the compiled JavaScript:

```json
{
    "scripts": {
        "start": "node soumodipta/shreemoyee.js" // to run the compiled js
    }
}
```

Run the application in production mode:

```bash
npm run start
```
