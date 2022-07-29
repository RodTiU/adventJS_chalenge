const countPackages = (carriers, carrierID) => {
  let sum_packages = 0;
  const workers_dict = {};
  const workers = extractData(carriers, carrierID);
  let text_info = "";
  workers.forEach((worker) => {
    workers_dict[worker[0]] = worker[1];
    text_info += `${worker[1]} de ${worker[0]}, `;
    sum_packages += worker[1];
  });
  workers_dict["sum"] = sum_packages;
  return text_info.slice(0, -2) + ` = ${workers_dict.sum}`;
};

const extractData = (carriers, carrierID, carrier_names = []) => {
  carriers.forEach((carrier) => {
    if (carrier[0] === carrierID) {
      carrier_names.push([carrier[0], carrier[1]]);
      if (carrier[2]) {
        carrier[2].forEach((subordinate) => {
          extractData(carriers, subordinate, carrier_names);
        });
      }
    }
  });
  return carrier_names;
};

const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

console.log(countPackages(carriers, "dapelu")); // 9
// // 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];

console.log(countPackages(carriers2, "camila")); // 15
// // 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
