import React from 'react';

const CheckMark = () => (
  <svg className="w-5 h-5 text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const CrossMark = () => (
  <svg className="w-5 h-5 text-red-400 mx-auto" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export default function ComparisonTable({ companyA = 'RepairDesk', companyB, features = [] }) {
  return (
    <section className="bg-white section-padding">
      <div className="container-main max-w-4xl">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-rd-teal text-white">
                <th className="text-left py-4 px-6 font-poppins font-semibold text-[15px] rounded-tl-xl">Feature</th>
                <th className="text-center py-4 px-6 font-poppins font-semibold text-[15px] w-40">{companyA}</th>
                <th className="text-center py-4 px-6 font-poppins font-semibold text-[15px] w-40 rounded-tr-xl">{companyB}</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3.5 px-6 text-[#2e384d] font-poppins text-sm">{row.feature}</td>
                  <td className="py-3.5 px-6 text-center">
                    {row.a ? <CheckMark /> : <CrossMark />}
                  </td>
                  <td className="py-3.5 px-6 text-center">
                    {row.b ? <CheckMark /> : <CrossMark />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
