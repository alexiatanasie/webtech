const arr = [
    { name: "jim", yob: 2004 },
    { name: "oscar", yob: 1994 }
  ];
  
  const filterByAge = (arr, currentYear) => {
    return arr.filter(e => {
      if (currentYear - e.yob >= 10) {
        return true;
      }
      return false;
    });
  };
  
  console.log(filterByAge(arr, 2024));
  