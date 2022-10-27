export const percentageOfTasks = (total, value) => {
    if(!total || isNaN(total) || isNaN(value) || total<1) return 0;
    else return Math.round((value / total) * 100);
  };