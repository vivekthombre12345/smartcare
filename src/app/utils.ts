export function formatDateToDDMMYYYY(input: Date | string | number): string {
  // Agar input timestamp ya string ho to Date object banalo
  const date = new Date(input);

  const day = String(date.getDate()).padStart(2, '0');       // 01–31
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 01–12
  const year = date.getFullYear();                           // 2026

  return `${day}-${month}-${year}`;
}

export const BASE_URL = `http://localhost:3000`
