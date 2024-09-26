import { EntryType } from "./enum";

const StatisticWidget = ({ label, value,type }) => {

    let valueColor;
  
    switch (type) {
      case EntryType.INCOME:
        valueColor = 'text-green-400'; // Зеленый для дохода
        break;
      case EntryType.SPENDING:
        valueColor = 'text-red-400'; // Красный для расходов
        break;
      case EntryType.All:
        valueColor = 'text-white'; // Белый для общего
        break;
      default:
        valueColor = 'text-gray-400'; // Серый по умолчанию
    }
  return (
    <div className="mt-6 flex justify-between items-center px-28" >
      <h2 className="text-2xl text-yellow-400 inline">
        {label}:
      </h2>
      <span className={`text-3xl ml-2 ${valueColor}`}>
        {value}
      </span>
    </div>
  );
};

export default StatisticWidget;