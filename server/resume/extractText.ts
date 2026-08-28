import mammoth from "mammoth";

/**
 * Extracts raw text from an uploaded resume file buffer.
 * Supports PDF and DOCX. The returned text is later passed through
 * sanitizeUntrustedText() / wrapAsData() before it reaches any LLM prompt,
 * since resume content is untrusted user-supplied text.
 */
export async function extractResumeText(buffer: Buffer, mimeType: string): Promise<string> {
  if (mimeType === "application/pdf") {
    // Lazy-required to avoid pdf-parse's debug mode running on import in some bundlers
    const pdfParse = (await import("pdf-parse")).default;
    const result = await pdfParse(buffer);
    return result.text;
  }

  if (
    mimeType ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  }

  throw new Error(`Unsupported resume file type: ${mimeType}`);
}
