/**
 * 날짜를 문자열 형식으로 포맷합니다.
 * @param date - 포맷할 날짜입니다.
 * @returns 포맷된 날짜 문자열입니다.
 */
export function formatDate(date: Date): string {
  return date
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\./g, '')
    .replace(/ /g, '-');
}
