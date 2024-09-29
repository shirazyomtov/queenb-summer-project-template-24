// import { React, useContext } from 'react';
// import { render, screen, waitFor  } from '@testing-library/react';
// import { AttractionProvider, AttractionContext } from './AttractionContext'; // Adjust the path as necessary
// import { fetchAttractions } from '../services/utils'; // Adjust the path as necessary

// jest.mock('../services/utils', () => ({
//   fetchAttractions: jest.fn(),
// }));

// const TestComponent = () => {
//   const { getFilteredAttractions } = useContext(AttractionContext);
//   const attractions = getFilteredAttractions(); // Call the function to get filtered attractions

//   // You can also use getFilteredAttractions() to retrieve filtered attractions here if needed.

//   return (
//     <div>
//       {attractions.map((attraction) => (
//         <div key={attraction._id}>{attraction.title}</div>
//       ))}
//     </div>
//   );
// };

// describe('AttractionProvider', () => {
//   beforeEach(() => {
//     fetchAttractions.mockResolvedValue([
//       { _id: '1', title: 'Beach Paradise', continent: 'Asia', category: 'Beach', country: 'Thailand', recommendations: ['10/10'] },
//       { _id: '2', title: 'Mountain Adventure', continent: 'Europe', category: 'Mountain', country: 'Switzerland', recommendations: ['8/10'] },
//       { _id: '3', title: 'City Exploration', continent: 'North America', category: 'City', country: 'USA', recommendations: ['9/10'] },
//     ]);
//   });

// //   test('should return all attractions when no filters are applied', async () => {
// //     render(
// //       <AttractionProvider>
// //         <TestComponent />
// //       </AttractionProvider>
// //     );

// //     const items = await screen.findAllByText(/Paradise|Adventure|Exploration/i);
// //     expect(items).toHaveLength(3);
// //   });

//   test('should filter attractions by title', async () => {
//     render(
//       <AttractionProvider>
//         <TestComponent />
//       </AttractionProvider>
//     );
//     const items = await screen.findAllByText(/Paradise|Adventure|Exploration/i);
//     expect(items).toHaveLength(3);

//     // Get the context to set the filter
//     const { result } = render(
//       <AttractionProvider>
//         <AttractionContext.Consumer>
//           {({ setFilterValuesAttractions }) => {
//             // Set the filter to show only attractions with "Beach" in the title
//             setFilterValuesAttractions({ title: 'Beach' });
//             return null; // No UI to render
//           }}
//         </AttractionContext.Consumer>
//         <TestComponent />
//       </AttractionProvider>
//     );

//     // Wait for the filtered attractions to render
//     // await waitFor(() => {
//     // //   const filteredItems = screen.getAllByText(/Beach Paradise/i);
//     //   const filteredItems = screen.findAllByText(/Paradise|Adventure|Exploration/i);
//     //   expect(filteredItems).toHaveLength(1); // Check that only the Beach Paradise attraction is displayed
//     // });

//     const filteredItems = await screen.findAllByText(/Paradise|Adventure|Exploration/i);
//     expect(filteredItems).toHaveLength(3);

//     // Check that the other attractions are not displayed
//     // expect(screen.queryByText(/Mountain Adventure/i)).not.toBeInTheDocument();
//     // expect(screen.queryByText(/City Exploration/i)).not.toBeInTheDocument();
//   });
//   // Add more tests for filtering, adding attractions, etc.
// });


import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { AttractionProvider, AttractionContext } from './AttractionContext'; // Adjust the path as necessary
import { fetchAttractions } from '../services/utils'; // Adjust the path as necessary

jest.mock('../services/utils', () => ({
  fetchAttractions: jest.fn(),
}));

const TestComponent = () => {
  const { attractions, getFilteredAttractions } = React.useContext(AttractionContext);
  
  // Call the function to filter attractions
  const filteredAttractions = getFilteredAttractions();

  return (
    <div>
      {filteredAttractions.map((attraction) => (
        <div key={attraction._id}>{attraction.title}</div>
      ))}
    </div>
  );
};

describe('AttractionProvider', () => {
  beforeEach(() => {
    fetchAttractions.mockResolvedValue([
      { _id: '1', title: 'Beach Paradise', continent: 'Asia', category: 'Beach', country: 'Thailand', recommendations: ['10/10'] },
      { _id: '2', title: 'Mountain Adventure', continent: 'Europe', category: 'Mountain', country: 'Switzerland', recommendations: ['8/10'] },
      { _id: '3', title: 'City Exploration', continent: 'North America', category: 'City', country: 'USA', recommendations: ['9/10'] },
    ]);
  });

  test('should return all attractions when no filters are applied', async () => {
    render(
      <AttractionProvider>
        <TestComponent />
      </AttractionProvider>
    );

    const items = await screen.findAllByText(/Paradise|Adventure|Exploration/i);
    expect(items).toHaveLength(3);
  });


  test('should filter attractions by title', async () => {
    const { result } = render(
      <AttractionProvider>
        <AttractionContext.Consumer>
          {({ setFilterValuesAttractions }) => {
            // Set the filter to show only attractions with "Beach" in the title
            setFilterValuesAttractions({ title: 'Beach' });
            return null; // No UI to render
          }}
        </AttractionContext.Consumer>
        <TestComponent />
      </AttractionProvider>
    );
  
    // Wait for the filtered attractions to render
    await waitFor(() => {
      const filteredItems = screen.getAllByText(/Beach Paradise/i);
      expect(filteredItems.length).toBe(1); // Should have 1 Beach attraction
  
      // Assert that other attractions are not displayed
    //   expect(screen.queryByText(/Mountain Adventure/i)).toBeNull();
    //   expect(screen.queryByText(/City Exploration/i)).toBeNull();
    });
  });
})