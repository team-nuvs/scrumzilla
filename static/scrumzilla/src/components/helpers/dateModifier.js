export const DateModifier = (date) => {
    const initialDate = new Date(date);
  
    const hourMinFormat = initialDate.toLocaleString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  
    const dayFormat = initialDate.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
    });
  
    if (hourMinFormat !== 'Invalid Date' || dayFormat !== `Invalid Date`)
      return dayFormat;
  
    return '-';
  };