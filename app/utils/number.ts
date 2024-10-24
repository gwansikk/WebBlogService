export function readTime(text: string) {
  if (!text.trim()) {
    return 0;
  }

  return Math.floor(text.trim().split(/\s+/).length / 200);
}
