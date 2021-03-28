import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const PiePan = styled.div`
  height: 600px;
`;

const generateFills = (chartData) => {
  const patterns = ['squares', 'dots', 'lines'];
  const numberFromId = (id) => {
    const number = id
      .split('')
      .map((char) => char.charCodeAt(0))
      .join('');
    return +number;
  };

  const fills = chartData.map(({ id }) => {
    // patterns.length + 1 to get undefined when pattern should be used
    const pattern = patterns[(numberFromId(id) % patterns.length) + 1];

    return !!pattern && { match: { id }, id: pattern };
  });

  return fills;
};

const BudgetPie = () => {
  const data = useSelector((state) => state.budget.data.filter((row) => row.value));
  const fills = generateFills(data);

  return (
    <PiePan>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-8}
        innerRadius={0.6}
        padAngle={2}
        cornerRadius={13}
        colors={{ scheme: 'dark2' }}
        borderWidth={4}
        borderColor={{ from: 'color', modifiers: [['darker', '0.6']] }}
        radialLabelsSkipAngle={9}
        radialLabelsTextXOffset={15}
        radialLabelsTextColor={{ from: 'color', modifiers: [] }}
        radialLabelsLinkDiagonalLength={20}
        radialLabelsLinkHorizontalLength={36}
        radialLabelsLinkStrokeWidth={4}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#cfcfcf"
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
          {
            id: 'squares',
            type: 'patternSquares',
            size: 3,
            padding: 8,
            stagger: false,
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
          },
        ]}
        fill={fills}
      />
    </PiePan>
  );
};

export default BudgetPie;
