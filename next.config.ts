import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect old root-level blog post URLs to /blog/ prefix
      {
        source: "/how-to-fix-signal-strength-on-dstv-e48-32-error-message",
        destination: "/blog/how-to-fix-signal-strength-on-dstv-e48-32-error-message",
        permanent: true,
      },
      {
        source: "/fix-dstv-decoder-not-working-after-load-shedding",
        destination: "/blog/fix-dstv-decoder-not-working-after-load-shedding",
        permanent: true,
      },
      {
        source: "/best-position-to-mount-your-tv-on-the-wall",
        destination: "/blog/best-position-to-mount-your-tv-on-the-wall",
        permanent: true,
      },
      {
        source: "/benefits-of-a-communal-dstv-installation",
        destination: "/blog/benefits-of-a-communal-dstv-installation",
        permanent: true,
      },
      {
        source: "/dstv-installer-for-hotels",
        destination: "/blog/dstv-installer-for-hotels",
        permanent: true,
      },
      {
        source: "/moving-with-ease-a-clients-tale-of-dstvs-stellar-relocation-service",
        destination: "/blog/moving-with-ease-a-clients-tale-of-dstvs-stellar-relocation-service",
        permanent: true,
      },
      {
        source: "/the-role-of-dstv-in-modern-home-entertainment",
        destination: "/blog/the-role-of-dstv-in-modern-home-entertainment",
        permanent: true,
      },
      {
        source: "/fixed-dstv-signal-issue-in-khayelitsha",
        destination: "/blog/fixed-dstv-signal-issue-in-khayelitsha",
        permanent: true,
      },
      {
        source: "/dstv-installation-observatory",
        destination: "/blog/dstv-installation-observatory",
        permanent: true,
      },
      {
        source: "/dstv-installation-in-kenilworth",
        destination: "/blog/dstv-installation-in-kenilworth",
        permanent: true,
      },
      {
        source: "/dstv-installation-edgemead",
        destination: "/blog/dstv-installation-edgemead",
        permanent: true,
      },
      {
        source: "/dstv-installation-westlake",
        destination: "/blog/dstv-installation-westlake",
        permanent: true,
      },
      {
        source: "/professional-tv-wall-mounting-durbanville",
        destination: "/blog/professional-tv-wall-mounting-durbanville",
        permanent: true,
      },
      {
        source: "/dstv-installer-in-george",
        destination: "/blog/dstv-installer-in-george",
        permanent: true,
      },
      {
        source: "/dstv-installer-in-riversdale-stilbaai-and-mossel-bay",
        destination: "/blog/dstv-installer-in-riversdale-stilbaai-and-mossel-bay",
        permanent: true,
      },
      {
        source: "/elevate-your-entertainment-and-security-cape-direct-connects-dstv-and-cctv-solutions-in-vermont-western-cape",
        destination: "/blog/elevate-your-entertainment-and-security-cape-direct-connects-dstv-and-cctv-solutions-in-vermont-western-cape",
        permanent: true,
      },
      {
        source: "/elevate-your-riversonderend-experience-dstv-tv-mounting-and-smart-security-with-cape-direct-connect",
        destination: "/blog/elevate-your-riversonderend-experience-dstv-tv-mounting-and-smart-security-with-cape-direct-connect",
        permanent: true,
      },
      {
        source: "/swellendam-dstv-tv-mounting-cctv-solutions",
        destination: "/blog/swellendam-dstv-tv-mounting-cctv-solutions",
        permanent: true,
      },
      {
        source: "/cape-direct-connect-woodstocks-ultimate-choice-for-dstv-tv-wall-mounting-services",
        destination: "/blog/cape-direct-connect-woodstocks-ultimate-choice-for-dstv-tv-wall-mounting-services",
        permanent: true,
      },
      {
        source: "/dstv-installation-repairs-tv-installation-services-in-franschhoek",
        destination: "/blog/dstv-installation-repairs-tv-installation-services-in-franschhoek",
        permanent: true,
      },
      {
        source: "/dstv-installer-and-repairs-in-plumstead",
        destination: "/blog/dstv-installer-and-repairs-in-plumstead",
        permanent: true,
      },
      {
        source: "/dstv-installer-and-dstv-repairs-in-atlantic-seaboard-cape-town",
        destination: "/blog/dstv-installer-and-dstv-repairs-in-atlantic-seaboard-cape-town",
        permanent: true,
      },
      {
        source: "/dstv-installer-pinehurst",
        destination: "/blog/dstv-installer-pinehurst",
        permanent: true,
      },
      {
        source: "/dstv-installer-in-yzerfontein",
        destination: "/blog/dstv-installer-in-yzerfontein",
        permanent: true,
      },
      {
        source: "/dstv-installer-in-atlantis",
        destination: "/blog/dstv-installer-in-atlantis",
        permanent: true,
      },
      {
        source: "/tv-wall-mounting-and-aerial-installer-in-cape-town",
        destination: "/blog/tv-wall-mounting-and-aerial-installer-in-cape-town",
        permanent: true,
      },
      {
        source: "/dstv-installation-and-repairs-in-cape-town-during-lockdown",
        destination: "/blog/dstv-installation-and-repairs-in-cape-town-during-lockdown",
        permanent: true,
      },
      // Redirect old /news/ page to /blog
      {
        source: "/news",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
