(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const input = $("input"), output = $("output"), message = $("message"), status = $("status");
  const sample = { project: "JSON Toolkit", privacy: true, features: ["format", "validate", "minify"], version: 1 };
  const indentValue = () => $("indent").value === "tab" ? "\t" : Number($("indent").value);
  function parseInput() {
    try { return { value: JSON.parse(input.value), error: null }; }
    catch (error) { return { value: null, error }; }
  }
  function report(text, good) {
    message.textContent = text;
    message.className = good ? "message" : "message error";
    status.textContent = good ? "Valid JSON" : "Needs attention";
    status.className = good ? "status good" : "status bad";
  }
  function run(mode) {
    if (!input.value.trim()) { report("Add some JSON first, or load the sample.", false); output.value = ""; return; }
    const parsed = parseInput();
    if (parsed.error) {
      output.value = "";
      report("Invalid JSON: " + parsed.error.message, false);
      return;
    }
    const result = mode === "minify" ? JSON.stringify(parsed.value) : JSON.stringify(parsed.value, null, indentValue());
    output.value = result;
    report(mode === "minify" ? "JSON is valid and minified." : "JSON is valid and formatted.", true);
  }
  $("format").addEventListener("click", () => run("format"));
  $("minify").addEventListener("click", () => run("minify"));
  $("validate").addEventListener("click", () => {
    if (!input.value.trim()) { report("Add some JSON first.", false); return; }
    const parsed = parseInput();
    if (parsed.error) report("Invalid JSON: " + parsed.error.message, false);
    else report("Success — this is valid JSON.", true);
  });
  $("clear").addEventListener("click", () => { input.value = ""; output.value = ""; message.textContent = ""; status.textContent = "Waiting for JSON"; status.className = "status"; input.focus(); });
  $("sample").addEventListener("click", () => { input.value = JSON.stringify(sample, null, 2); run("format"); });
  $("copy").addEventListener("click", async () => {
    if (!output.value) { report("There is no output to copy yet.", false); return; }
    try { await navigator.clipboard.writeText(output.value); report("Output copied to clipboard.", true); }
    catch (_) { output.focus(); output.select(); report("Clipboard access unavailable. Output selected — copy it manually.", false); }
  });
})();