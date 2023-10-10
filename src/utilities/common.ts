//date Formatter helper function
export const formatDateToMonthYear = (date: Date | undefined) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // padStart ensures the month is two digits
    return `${year}-${month}`;
  };

  