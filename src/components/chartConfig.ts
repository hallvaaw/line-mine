const dataGroups = [
  { group: 'Epithelial', data: [5, 3, 8] },
  { group: 'Brain', data: [6, 1, 2] },
  { group: 'Heart', data: [3, 6, 3] },
  { group: 'Liver', data: [1, 3, 1] },
  { group: 'Bone', data: [2, 2, 5] },
];

function addJitter(value: number): number {
  const jitterFactor = 0.2;
  return value + (Math.random() - 0.5) * jitterFactor;
}

const labels = ['', 'L1MdA', 'L1MdTf', 'L1MdGf'];

export const data = {
datasets: dataGroups.map((dataGroup, index) => {
  return {
    label: dataGroup.group,
    data: dataGroup.data.map((value, idx) => ({ x: addJitter(idx), y: value })),
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(255, 205, 86, 1)',
    ],
    pointRadius: 8,
    pointHoverRadius: 10,
    showLine: false,
  };
})}

export const options = {
   responsive: true,
   scales: {
       x: {
         type: 'linear',
         position: 'bottom',
         beginAtZero: true,
         ticks: {
           maxTicksLimit: 6,
           callback: function (value, index) {
             return labels[index];
           },
           font: {
             size: 16,
           },
         },
       },
       y: {
         beginAtZero: true,
         title: {
           display: true,
           text: 'Expression level',
           font: {
             size: 20,
           },
         },
         ticks: {
           font: {
             size: 16,
           },
         },
       },
     },
     plugins: {
        legend: {
            display: false
        }
     }
}
