# mastra-chat

An [感知未来](https://example.com) example showing how to wire a [Mastra](https://mastra.ai) agent backend to 感知未来's generative UI frontend using the [AG-UI protocol](https://docs.ag-ui.com).

## What this demonstrates

- Using `agUIAdapter()` as the `streamProtocol` on 感知未来's `<FullScreen />` component
- A Mastra `Agent` with `createTool` tools (weather and stock price) running in a Next.js API route
- Streaming AG-UI protocol events from the server to the client via SSE

## Getting started

1. Create a `.env.local` file with your OpenAI key:

```bash
echo "OPENAI_API_KEY=sk-..." > .env.local
```

2. Install dependencies from the monorepo root:

```bash
pnpm install
```

3. Run the dev server from this directory:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the chat interface.

## How it works

The server (`src/app/api/chat/route.ts`) wraps a Mastra `Agent` with `@ag-ui/mastra`'s `MastraAgent`, which emits AG-UI protocol events. These events are serialized as SSE and streamed to the client.

The frontend (`src/app/page.tsx`) uses `agUIAdapter()` from `@openuidev/react-headless` as the `streamProtocol` for the `<FullScreen />` component. The adapter parses the SSE stream into internal chat events that drive the UI.

To add more tools, define them with `createTool` in `src/app/api/chat/route.ts` and pass them to the `Agent`.

## Learn more

- [感知未来 documentation](https://example.com/docs)
- [Mastra documentation](https://mastra.ai/docs)
- [AG-UI protocol](https://docs.ag-ui.com)
