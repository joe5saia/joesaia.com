---
name: "Town Crier"
type: "Civic records & public-interest software"
stack: ["TypeScript", "Effect", "Cloudflare", "MCP"]
website: "https://towncrierarchive.org/"
highlights:
  - "Preserve original public documents with content hashes, revision metadata, and source links, so readers can trace excerpts back to the record."
  - "Extract searchable text from PDF, HTML, and Word documents, with OCR for scanned PDFs and page-linked excerpts."
  - "Browse and search by town, public body, document type, and meeting date, with documents connected to their associated meetings."
  - "Read-only MCP tools give AI assistants bounded access to document search, source text, meetings, and archive status with citations."
portfolio:
  order: 5
  summary: "Public records. Preserved, searchable, traceable."
  engineering: "Separate preservation from indexing. New text is staged against an immutable document revision and becomes searchable only when indexing completes. The previous indexed revision stays available during processing, keeping search tied to a complete, traceable version of the source."
  layers:
    - name: "Interface"
      tools: "TypeScript · Browser DOM APIs · Vite · LinkeDOM"
    - name: "Application & agent access"
      tools: "Cloudflare Workers · Effect · TypeScript MCP SDK · Zod"
    - name: "Preservation & processing"
      tools: "D1/SQLite FTS5 · R2 · Cloudflare Workflows & Containers · unpdf · Poppler · Tesseract · antiword · Mammoth"
---

A civic records archive from [Unhistoric Acts Foundation](https://unhistoricacts.org/). Town Crier preserves public meeting records and makes them searchable, with a direct path from each excerpt to the underlying document. The independent archive covers West Orange, New Jersey, and South Portland, Maine, giving people and AI assistants access to source-backed local government information.
