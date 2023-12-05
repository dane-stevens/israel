import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>The House of Israel</span>,
  project: {
    link: "https://github.com/dane-stevens/israel",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/dane-stevens/israel/tree/main",
  footer: {
    text: (
      <span style={{ fontSize: "9pt" }}>
        &copy; {new Date().getFullYear()} The House of Israel.
      </span>
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – House of Israel",
      };
    }
  },
};

export default config;
