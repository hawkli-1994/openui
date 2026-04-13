import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const gitConfig = {
  user: "example",
  repo: "example",
  branch: "main",
};

export const siteConfig = {
  githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  discordUrl: "https://discord.com/invite/Pbv5PsqUSv",
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "感知未来",
    },
  };
}
