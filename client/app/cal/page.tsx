"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameMonth,
  isWeekend,
} from "date-fns";
import { ja } from "date-fns/locale"; // 日本語ロケールをインポート

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const staffNames = ["スタッフA", "スタッフB", "スタッフC"];
  const [shifts, setShifts] = useState({});
  const router = useRouter(); // useRouter フックを使用してルーティング

  const handleShiftChange = (dateString, staffName) => {
    const key = `${dateString}_${staffName}`;
    setShifts((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  const goToShiftDisplay = () => {
    router.push("/shift-display"); // '/shift-display' へ遷移
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const datesInMonth = eachDayOfInterval({
    start: monthStart,
    end: monthEnd,
  });

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex justify-between items-center mb-4 w-full">
        <button
          onClick={handlePreviousMonth}
          className="p-2 border rounded text-blue-600"
        >
          前月
        </button>
        <span className="text-xl font-bold">
          {format(currentDate, "yyyy年 MM月", { locale: ja })}
        </span>
        <button
          onClick={handleNextMonth}
          className="p-2 border rounded text-blue-600"
        >
          次月
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="border-collapse border border-gray-300 min-w-max">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2"></th>
              {datesInMonth.map((date, index) => (
                <th
                  key={index}
                  className={`border border-gray-300 p-2 ${
                    date.getDay() === 0 || date.getDay() === 1
                      ? "text-red-500"
                      : date.getDay() === 6
                        ? "text-blue-500"
                        : ""
                  }`}
                >
                  {format(date, "eee", { locale: ja })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {staffNames.map((staffName) => (
              <tr key={staffName}>
                <td className="border border-gray-300 p-2 font-bold">
                  {staffName}
                </td>
                {datesInMonth.map((date, index) => {
                  const dateString = format(date, "yyyy-MM-dd");
                  const isCurrentMonth = isSameMonth(date, currentDate);
                  const isWeekendDay = isWeekend(date);
                  const shiftKey = `${dateString}_${staffName}`;
                  return (
                    <td
                      key={index}
                      className={`border border-gray-300 p-2 text-center ${
                        !isCurrentMonth
                          ? "text-gray-400"
                          : date.getDay() === 0 || date.getDay() === 1
                            ? "text-red-500"
                            : date.getDay() === 6
                              ? "text-blue-500"
                              : ""
                      }`}
                    >
                      {isCurrentMonth && (
                        <>
                          <input
                            type="checkbox"
                            checked={!!shifts[shiftKey]}
                            onChange={() =>
                              handleShiftChange(dateString, staffName)
                            }
                            className="mr-2"
                            disabled={isWeekendDay} // 土日は操作不可
                          />
                          {format(date, "d", { locale: ja })}
                        </>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={goToShiftDisplay}
        className="mt-4 p-2 border rounded text-white bg-blue-500 hover:bg-blue-700"
      >
        シフト確認
      </button>
    </div>
  );
};

export default CalendarPage;
