/**
 * Print out the comment body for the Lighthouse CI PR comment to the console.
 */
const main = () => {
  const links = JSON.parse(process.env.LINKS);
  const manifest = JSON.parse(process.env.MANIFEST);

  const reportHeader = ["| URL | Report |", "| --- | ------ |"];
  const reportRows = Object.entries(links).map(([url, link]) => {
    return `| ${url} | [View](${link}) |`;
  });
  const reportTable = [...reportHeader, ...reportRows].join("\n");

  const testRunHeader = [
    "| URL | Performance | Accessibility | Best Practices | SEO | Is Representative Run |",
    "| --- | ----------- | ------------- | -------------- | --- | --------------------- |",
  ];
  const testRunRows = manifest.map((entry) => {
    const url = entry.url;
    const summary = entry.summary || {};
    const isRepresentativeRun = entry.isRepresentativeRun ? "✅" : "";
    return `| ${url} | ${summary.performance ?? ""} | ${summary.accessibility ?? ""} | ${summary["best-practices"] ?? ""} | ${summary.seo ?? ""} | ${isRepresentativeRun} |`;
  });
  const testRunTable = [...testRunHeader, ...testRunRows].join("\n");

  const report = `## Lighthouse CI

### Report
${reportTable}

### Test Runs
${testRunTable}`;

  console.log(report);
};

main();
