import React from 'react';
import { profitData, SparklineAreaData } from '../data/core';
import { Button, SparkLine, Stacked } from '../components';

const Ecommerce = () => (
  <div className="mt-12">
    <div className="flex flex-wrap lg:flex-nowrap justify-center">
      <div className="bg-white dark:text-gray-200
      dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 bg-gradient-to-r from-yellow-300 via-grey-500 to-green-500
        m-3 bg-no-repeat bg-cover bg-center"
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-400">Earnings</p>
            <p className="text-2xl">$46,892.00</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor="blue"
            text="Download"
            borderRadius="7px"
            size="md"
          />
        </div>
      </div>
      <div className="flex m-3 flex-wrap justify-center
      gap-1 items-center bg-red-300 rounded-2xl"
      >
        {profitData.map((item) => (
          <div
            key={item.title}
            className="bg-red dark:text-gray-200
            dark:bg-secondary-dark-bg md:w-36 p-4 h-44
            pt-9 rounded-2xl"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full p-4
              hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg
              font-semibold"
              >
                {item.amount}
              </span>
              <span className={`text-sm text-${item.pcColor} ml-1`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div className="flex gap-10 flex-wrap justify-center">
      <div className="bg-green-200 dark:text-gray-200
      dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780"
      >
        <div className="mt-10 flex gap-10 flex-wrap justify-center">
          <div className="border-r-1 border-color m-4 pr-10">
            <div>
              <p>
                <span className="text-3xl font-semibold">
                  $20,000
                </span>
                <span className="p-1.5 hover:drop-shadow-xl
                cursor-pointer rounded-full text-white bg-green-400
                text-xs ml-3"
                >
                  15%
                </span>
              </p>
              <p className="text-gray-500 mt-1">Budget</p>
            </div>
            <div className="mt-8">
              <p>
                <span className="text-3xl font-semibold">
                  $51,020
                </span>
                <span className="p-1.5 hover:drop-shadow-xl
                cursor-pointer rounded-full text-white bg-green-400
                text-xs ml-3"
                >
                  25%
                </span>
              </p>
              <p className="text-gray-500 mt-1">
                Expense
              </p>
            </div>
            <div className="mt-5">
              <SparkLine
                currentColor="blue"
                type="Line"
                color="blue"
                id="line-sparkline"
                height="80px"
                width="250px"
                data={SparklineAreaData}
              />
            </div>
            <div className="mt-10">
              <Button
                color="white"
                bgColor="blue"
                text="Download Report"
                borderRadius="10px"
              />
            </div>
          </div>
          <div>
            <Stacked
              width="320px"
              height="360px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Ecommerce;
