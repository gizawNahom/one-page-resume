module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: ["http://localhost:3000"],
    },
    upload: {
      target: "temporary-public-storage",
    },
    assertions: {
      "categories:performance": ["error", { minScore: 0.9 }],
      "categories:accessibility": ["error", { minScore: 0.9 }],
      "categories:best-practices": ["error", { minScore: 0.9 }],
      "categories:seo": ["error", { minScore: 0.9 }],
    },
  },
};
