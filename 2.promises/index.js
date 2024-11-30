function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num1 === 0) {
      reject("cannot perform bro");
    } else {
      resolve(num1 / num2);
    }
  });
}


function fetchJobPostings() {
  return new Promise((resolve, reject) => {
    console.log("fetching jobs...");
    setTimeout(() => {
      const jobPostings = [
        { id: 1, title: "Frontend Developer", company: "Tech Corp" },
        { id: 2, title: "Backend Developer", company: "Code Inc" },
      ];

      if (jobPostings.length > 0) {
        reject("no jobs posted");
      } else {
        resolve(jobPostings);
      }
    }, 2000);
  });
}

fetchJobPostings().then((jobs) => { 
  console.log("Jobs ye wale hei", jobs).catch((err) => {
    console.log("error: ", err);
  });
});
